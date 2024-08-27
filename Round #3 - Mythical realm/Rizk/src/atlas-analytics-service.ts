import {
	Vector3,
	Quaternion
} from '@dcl/sdk/math'

import { 
    engine,
	Entity,
	Transform, TransformType,
	executeTask,
	CameraType, CameraMode,
	PointerLock
} from '@dcl/sdk/ecs'

import {
	onEnterSceneObservable,
	onLeaveSceneObservable,
	onPlayerClickedObservable,
	onPlayerExpressionObservable,
	onProfileChanged,
	onRealmChangedObservable, 
	onSceneReadyObservable, 
	onVideoEvent
} from '@dcl/sdk/observables'

import {signedFetch, SignedFetchRequest, FlatFetchResponse} from '~system/SignedFetch'
import { getPlatform,GetPlatformResponse } from '~system/EnvironmentApi'
import { CurrentSceneEntityResponse, getRealm } from '~system/Runtime'
import { getUserData } from '~system/UserIdentity'
import { getSceneInformation } from '~system/Runtime'//!CF reworked the users of getParcel to use getSceneInformation
import { Observable } from '@dcl/sdk/internal/Observable'

export let atlasAnalytics:AtlasAnalyticsService|null // !CF singleton instance.

//!CF changed these names, as they are now the defaults if params are not passed from scene.

const defaultBranchName: string = "Default Branch"; // use a unique name to differentiate different deployments or instances
const defaultPollingInterval: number = 5000; // milliseconds
const defaultDebug: boolean = false; // activates/deactivates logging of debug messages to console

export function setupAtlasAnalytics (
	branchName: string = defaultBranchName,
	pollingInterval: number = defaultPollingInterval,
	debug: boolean = false
) {
	atlasAnalytics = new AtlasAnalyticsService(
		branchName,
		pollingInterval,
		debug
	)
}

//////////////// !CF Some constructs because they are not (yet?) found in @dcl imports

export type Vector3Type = {
    x: number;
    y: number;
    z: number;
};
declare const onPositionChangedObservable: Observable<{
	position: Vector3Type;
	cameraPosition: Vector3Type;
	playerHeight: number;
}>

declare const onCameraModeChangedObservable: Observable<{
	cameraMode: 0 | 1 | 2;
}>

//////////////// !CF END of: Some constructs because they are not (yet?) found in @dcl imports


// !CF using SDK7 method of custom Component creation, but be aware that the 3rd parameter is missing
const AtlasAnalyticsFlag = engine.defineComponent(
	"atlasAnalyticsFlag",
	{}
)

// !CF using an SDK7 system, rather than SDK6, which used a timeDelayEntity and a custom Interval component
function pinger(dt:number){
	if (atlasAnalytics && atlasAnalytics.pingsEnabled) {
		atlasAnalytics.pingCountdown -= dt * 1000 // ms
		if (atlasAnalytics.pingCountdown <= 0) {
			atlasAnalytics.performPing() //!CF this internally does ExecuteTask and excludes nesting
			atlasAnalytics.checkForChanges() //!CF this internally does ExecuteTask and excludes nesting
			atlasAnalytics.pingCountdown = atlasAnalytics.pingPeriod
		}
	}
}


interface EventData {
	eventName: string;
	player: string;
	guest: boolean;
	playerPosition: Vector3;
	playerRotation: Vector3;
	realm: string | undefined;
	timestamp: number;
	data?: OptionalData;
	sceneName?: string;
	sceneBranch?: string;
}

interface OptionalData {
	buttonPosition?: Vector3;
	cameraState?: number;
	expression?: string;
	clickedPlayer?: string;
	locked?: boolean;
	idle?: boolean;
	version?: number;
	videoData?: any;
	sceneInitData?: SceneInitData;
	playerName?: string | undefined;
	birthday?: Birthday;
}

interface Birthday {
	month: number;
	day: number;
	year: number;
}

interface SceneInitData {
	platform: string; //!CF SDK7 returns a platform:string, so changed this from SDK7 :Platform
	startTime: number;
	endTime: number;
	analyticsVersion: string;
	parcels: string[];
	tags: string[];
	pollingInterval: number;
}

enum AtlasEventNames {
	LOAD_TIMER = "load-timer",
	PING = "ping",
	ENTERS_SCENE = "enters-scene",
	LEAVES_SCENE = "leaves-scene",
	LOCKED_VIEW = "locked-view",
	CAMERA_CHANGE = "camera-change",
	PLAYER_ANIMATION = "player-animation",
	PLAYER_CLICK = "player-click",
	IDLE = "idle",
	PROFILE_CHANGE = "profile-change",
	VIDEO = "video"
}

export class AtlasAnalyticsService /*extends Entity*/ { //!CF removed 'extends Entity' for SDK7
	// pingPeriod: number; //!CF removed for sdk7 - made constructor param public
	pingCountdown:number = 0; //!CF added for SDK7 
	//shape?: GLTFShape; //!CF removed for SDK7
	apiURL?: string;
	timeDelayEntity!: Entity;
	startTime: Date;
	endTime!: Date;
	// debug: boolean; //!CF removed for sdk7 - made constructor param public
	analyticsVersion: string = "0.4.3"; //!CF started with this version in porting to SDK7. Needs a new version number.

	sceneName?: string;
	// sceneBranch: string; //!CF removed for sdk7 - made constructor param public
	player!: string;
	playerName!: string;
	guest!: boolean;
	platform!: string; //!CF SDK7 returns a platform:string, so changed this from SDK7 :Platform
	realm?: string;
	parcels!: string[];
	baseParcelWorldPosition?:Vector3.Mutable; //!CF added for SDK7
	tags!: string[];
	rootEntity:Entity; //!CF added for SDK7
	pingsEnabled:boolean = false //!CF added for SDK7
	alreadyPinging = false //!CF added for SDK7
	previousCameraMode:CameraType | number = -1  //!CF initializing it to another value, so we'll get an initial CAMERA_CHANGE event regardless
	previousLockedState = false
	alreadyChecking = false //!CF avoid reentrancy

	constructor(
		public sceneBranch: string,
		public pingPeriod: number = 5000,
		public debug: boolean = false
	) {
		// super(); //!CF removed for SDK7
		if (this.debug) console.log("\n*** ATLAS AtlasAnalyticsService constructor")
		this.startTime = new Date();
		atlasAnalytics = this // !CF added so that the Interval system knows an instance of this class
		this.rootEntity = engine.addEntity() //!CF added for SDK7
		// this.startTime = new Date(); //!CF removed for sdk7 - made constructor param public
		// this.pingPeriod = pingPeriod; //!CF removed for sdk7 - made constructor param public
		executeTask(async () => {
			this.initializePlayerData();
			this.sceneBranch = sceneBranch;
			this.enableSceneTimer();
			// this.addComponent(new AtlasAnalyticsFlag());
			AtlasAnalyticsFlag.create(this.rootEntity)

			// this.debug = debug; //!CF removed for sdk7 - made constructor param public

			this.apiURL = "https://analytics.atlascorp.io/";
			// this.apiURL = "http://localhost:8080/check-validity";

			// this.timeDelayEntity = engine.addEntity(); //!CF removed for SDK7
			// engine.addEntity(this.timeDelayEntity); //!CF removed for SDK7

			this.initializeAnalytics();
		})
		
	}

	private async initializePlayerData() {
		await this.updateUserData();
		await this.updateSceneMetadata();

		let response:GetPlatformResponse = await getPlatform({});
		this.platform = (await getPlatform({})).platform; //!CF SDK7 docs say that GetPlatformResponse.platform is now a string, not an SDK6 Platform		
		
		const playerRealm = await getRealm({}); //!CF changed it for SDK, from SDK6's getCurentRealm
		this.realm = (playerRealm?.realmInfo?.realmName); //!CF modified for SDK7
	}

	public updateBranchName(name: string) {
		this.sceneBranch = name;
	}

	private async updateSceneMetadata() {
		// !CF for SDK7 changed from getParcel to getSceneInformation
		let sceneInfo:CurrentSceneEntityResponse = await getSceneInformation({});
		let sceneJson = JSON.parse(sceneInfo.metadataJson)
		this.sceneName = sceneJson.display.title; // !CF sdk6 had: parcel.land.sceneJsonData.display?.title;
		this.parcels = sceneJson.scene.parcels; // !CF sdk6 had: parcel.land.sceneJsonData.scene.parcels;
		let base:string = sceneJson.scene.base
		// !CF Using a different approach for world position calculations in SDK7:
		// !CF this.baseParcelWorldPosition will be used to offset scene-base positions to world-based
		// !CF It is a position Vector3, in meters, of the sw corner of the scene's base parcel.
		this.baseParcelWorldPosition = { 
			x: parseInt(base.substring(0, base.indexOf(",")), 10)  * 16,
			y: 0,
			z: parseInt(base.substring(base.indexOf(",")+1), 10) * 16
		}
		this.tags = sceneJson.tags!;
	}

	private async updateUserData() {
		let userData = await getUserData({});
		this.player = userData.data!.userId;
		this.guest = !userData.data!.hasConnectedWeb3;
		this.playerName = userData.data!.displayName;
	}

	private initializeAnalytics() {
		if (this.pingPeriod != 0 && this.pingPeriod >= 2000) {
			this.enablePing(this.pingPeriod);
		} else if (this.debug) {
			if (this.debug) if (this.debug) console.log("Ping Disabled:", this.pingPeriod);
		}
		this.enableRealmChange();
		this.enableEntersOrLeavesScene();
		// this.enablePlayerChangesCameraMode(); // !CF hid this unsupported Observable, instead checking for changes in pinger system
		this.enablePlayerAnimation();
		this.enablePlayerClickPlayer();
		// this.enablePlayerLocked();  // !CF hid this unsupported Observable, instead checking for changes in pinger system
		// this.enableIdle();  // !CF hid this unsupported Observable, instead checking for changes in pinger system
		this.enableProfileChange();
	}

	public async submitButtonEvent(name: string, button: Entity) {
		const buttonPosition:Vector3 = this.getEntityWorldPosition(button);
		const postBody = await this.getPostBody(name, {
			buttonPosition: buttonPosition,
		});

		if (this.debug) if (this.debug) if (this.debug) console.log(postBody);
		this.submitSignedFetch(postBody);
	}

	public async submitBirthdayEvent(name: string, birthday: Birthday) { //!CF not called from within this modules, so not listed AtlasEventNames
		const postBody = await this.getPostBody(name, {
			birthday: birthday,
		});

		if (this.debug) if (this.debug) if (this.debug) console.log(postBody);
		this.submitSignedFetch(postBody);
	}

	public async submitGenericEvent(name: string) { //!CF not called from within this modules, so not listed AtlasEventNames
		const postBody = await this.getPostBody(name, {});
		if (this.debug) if (this.debug) if (this.debug) console.log(postBody);
		this.submitSignedFetch(postBody);
	}

	public async enablePing(interval: number) {
		this.pingsEnabled = true
		this.pingCountdown = this.pingPeriod
		engine.addSystem(pinger)
	}


	public checkForChanges(){
		//!CF Added for SDK7 as an alternative to 3 SDK6 Observables not yet supported in SDK7
		//!CF Because this is being called from a system, the engine.CameraEntity will have been initialized
		//!CF per https://docs.decentraland.org/creator/development-guide/sdk7/user-data/

		if (!this.alreadyChecking && Transform.has(engine.CameraEntity)) {
			//!CF Avoid reentrancy/nesting -- if it is already checking in the executeTask thread, don't reenter it, or stack may overflow
			this.alreadyChecking = true
			executeTask(async () => {
				//!CF CameraMode
				let cameraMode:CameraType = CameraMode.get(engine.CameraEntity).mode
				if (cameraMode != this.previousCameraMode) {
					//!CF fetch
					const postBody = await this.getPostBody(AtlasEventNames.CAMERA_CHANGE, {
						cameraState: cameraMode,
					});
					this.submitSignedFetch(postBody);
					this.previousCameraMode = cameraMode
				}

				// !CF PlayerLocked
				let isLocked =  PointerLock.get(engine.CameraEntity).isPointerLocked
				if (isLocked != this.previousLockedState) {
					const postBody = await this.getPostBody(AtlasEventNames.LOCKED_VIEW, {
						locked: isLocked!,
					});
					this.submitSignedFetch(postBody);
					this.previousLockedState = isLocked
				}
				this.alreadyChecking = false
			})
		}
	}

	public async enableEntersOrLeavesScene() {
		onEnterSceneObservable.add(async (player) => {
			const myPlayer = await getUserData({});

			if (myPlayer?.data?.userId === player.userId) {
				const postBody = await this.getPostBody(AtlasEventNames.ENTERS_SCENE);
				this.submitSignedFetch(postBody);
				if (this.debug) if (this.debug) if (this.debug) console.log(postBody);
			}
		});

		onLeaveSceneObservable.add(async (player) => {
			const myPlayer = await getUserData({});
			if (myPlayer?.data?.userId === player.userId) {
				const postBody = await this.getPostBody(AtlasEventNames.LEAVES_SCENE);
				this.submitSignedFetch(postBody);
				if (this.debug) if (this.debug) if (this.debug) console.log(postBody);
			}
		});
	}

	public async enablePlayerAnimation() {
		onPlayerExpressionObservable.add(async ({ expressionId }) => {
			const postBody = await this.getPostBody(AtlasEventNames.PLAYER_ANIMATION, {
				expression: expressionId,
			});
			this.submitSignedFetch(postBody);
			if (this.debug) if (this.debug) if (this.debug) console.log(postBody);
		});
	}

	public async enablePlayerClickPlayer() {
		onPlayerClickedObservable.add(async (clickEvent) => {
			const postBody = await this.getPostBody(AtlasEventNames.PLAYER_CLICK, {
				clickedPlayer: clickEvent.userId,
			});
			this.submitSignedFetch(postBody);
			if (this.debug) if (this.debug) if (this.debug) console.log(postBody);
		});
	}


	// //!CF This has been recoded to check isLocked during the pinger system function
	// public async enablePlayerLocked() {
	// 	onPointerLockedStateChange.add(async ({ locked }) => {
	// 		const postBody = await this.getPostBody(AtlasEventNames.LOCKED_VIEW, {
	// 			locked: locked!,
	// 		});
	// 		this.submitSignedFetch(postBody);
	// 		if (this.debug) if (this.debug) if (this.debug) console.log(postBody);
	// 	});
	// }

	// !CF There is no support for detecting idle state yet in SDK7
	// !CF it is in docs, but "deprecated" and not exported from @dcl/sdk/observables
	// public async enableIdle() {
	// 	onIdleStateChangedObservable.add(async ({ isIdle }) => {
	// 		const postBody = await this.getPostBody(AtlasEventNames.IDLE, { idle: isIdle });
	// 		this.submitSignedFetch(postBody);
	// 		if (this.debug) if (this.debug) if (this.debug) console.log(postBody);
	// 	});
	// }


	public async enableProfileChange() {
		onProfileChanged.add(async (profileData) => {
			await this.updateUserData();
			const postBody = await this.getPostBody(AtlasEventNames.PROFILE_CHANGE, {
				version: profileData.version,
				playerName: this.playerName,
			});
			this.submitSignedFetch(postBody);
			if (this.debug) if (this.debug) if (this.debug) console.log(postBody);
		});
	}

	public async enableSceneTimer() {
		onSceneReadyObservable.add(async () => {
			this.endTime = new Date();

			const postBody = await this.getPostBody(AtlasEventNames.LOAD_TIMER, {
				playerName: this.playerName,
				sceneInitData: {
					platform: this.platform,
					startTime: this.startTime.getTime(),
					endTime: this.endTime.getTime(),
					analyticsVersion: this.analyticsVersion,
					parcels: this.parcels,
					tags: this.tags,
					pollingInterval: this.pingPeriod,
				},
			});

			this.submitSignedFetch(postBody);

			if (this.debug) if (this.debug) if (this.debug) console.log(postBody);
		});
	}

	public async enableVideo() { //!CF yyy Docs say this is deprecated in 7.x. Future versions will allow a more data-oriented approach".  Just doesnt work in 7.3.20
		onVideoEvent.add(async (data) => {
			const postBody = await this.getPostBody(AtlasEventNames.VIDEO, {
				videoData: data,
			});
			this.submitSignedFetch(postBody);
			if (this.debug) if (this.debug) console.log(postBody);
		});
	}

	public async enableRealmChange() {
		onRealmChangedObservable.add(async (realmChange) => {
			this.realm = realmChange.displayName;
		});
	}

	private async assemblePlayerData() {
		let cameraTransform = Transform.get(engine.CameraEntity)
		const playerWorldPosition = this.getWorldPosition(cameraTransform.position) 
		//const playerRotation = Camera.instance.rotation.eulerAngles;
		const playerRotation = Quaternion.toEulerAngles(cameraTransform.rotation)

		return {
			player: this.player,
			guest: this.guest,
			playerPosition: playerWorldPosition,
			playerRotation: playerRotation,
			realm: this.realm,
			sceneName: this.sceneName,
			sceneBranch: this.sceneBranch,
			timestamp: new Date().getTime(),
		};
	}

	private async getPostBody(
		eventName: string,
		data?: OptionalData
	): Promise<EventData> {
		const result = await this.assemblePlayerData();

		return {
			...result,
			eventName: eventName,
			data,
		};
	}

	performPing() {
		if (!this.alreadyPinging) {
			this.alreadyPinging = true		
			executeTask(async () => {
				const postBody = await this.getPostBody(AtlasEventNames.PING);
				// if (this.debug) if (this.debug) console.log("yeet", postBody); // !CF removed this "yeet" logging
				if(atlasAnalytics) atlasAnalytics.submitSignedFetch(postBody);
				this.alreadyPinging = false
			})
		}

	}

	private getWorldPosition(position:Vector3):Vector3 {
		let worldPosition:Vector3.Mutable = position //!CF make a mutable copy.
		// !CF add world offset, in meters, of scene base's x,z
		worldPosition.x += (this.baseParcelWorldPosition!.x)
    	worldPosition.z += (this.baseParcelWorldPosition!.z) // baseParcelWorldPosition.y is 0
		return worldPosition
	}
		
	private getEntityWorldPosition(entity:Entity):Vector3 { //!CF I didn't find  this provided in SDK7
		let transf:TransformType = Transform.get(entity)
		let sceneRelativePosition:Vector3.Mutable = Transform.get(entity).position
		// !CF scene-relative position must also be offset by any parents in its chain.
		// !CF yyy this does NOT YET take into account any rotations of parents in chain!!!  Will require matrix multiplication of Quaternions
		while (transf.parent != null && transf.parent != 0) {
			transf = Transform.get(transf.parent)
			sceneRelativePosition.x += transf.position.x
			sceneRelativePosition.y += transf.position.y
			sceneRelativePosition.z += transf.position.z
		}
		return this.getWorldPosition(sceneRelativePosition)
	}

	private async submitSignedFetch(postBody: EventData) {
		if (!this.apiURL) {
			if (this.debug) console.log("\n*** ATLAS: submitSignedFetch called while this.apiURL is null")
		}
		else {
			// if (this.debug) console.log("\n*** ATLAS: submitSignedFetch called with body="+JSON.stringify(postBody))
			try {
				// !CF yyy DCL docs say "Using SignedFetch from a scene requires the USE_FETCH permission."
				// !CF yyy see https://docs.decentraland.org/contributor/runtime/modules/signed_fetch/
				// !CF yyy but perhaps that is only for smart wearables or portable experiences?
				// !CF yyy AtlasAnalyics signedFetch calls seem to work without it
				// !CF yyy and the compiler complains if you DO include it in a scene
				
				switch (postBody.eventName) {
					case AtlasEventNames.PING:
						// if (this.debug) console.log("ATLAS: submitSignedFetch event="+postBody.eventName)
						break
					case AtlasEventNames.LOCKED_VIEW:
						if (this.debug) console.log("ATLAS: submitSignedFetch event="+postBody.eventName+"("+postBody.data?.locked+")")
						break
					case AtlasEventNames.CAMERA_CHANGE:
						if (this.debug) console.log("ATLAS: submitSignedFetch event="+postBody.eventName+"("+postBody.data?.cameraState+")")
						break
					case AtlasEventNames.PLAYER_ANIMATION:
					default:
						if (this.debug) console.log("ATLAS: submitSignedFetch event="+postBody.eventName)
						break
				}
				let response = await signedFetch(
					{
						url: this.apiURL!,
						init: {
							method: "POST",
							headers: {
								"Content-Type": "application/json",
								"User-Agent": "AtlasCorp",
								"Cache-Control": "no-cache",
							},
							body: JSON.stringify(postBody)
						}
					}
				);
				// if (this.debug) console.log("\n*** ATLAS: signedFetch response = \n"+
				// "ok:"+response.ok+"\n"+
				// "status:"+response.status+"\n"+
				// "statusText:"+response.statusText+"\n"+
				// "body:"+JSON.stringify(JSON.parse(response.body)))

			} catch {
				if (this.debug) console.log("failed to reach analytics URL: "+this.apiURL);
			}
		}
	}
}


/************************
* 		Change Log		*
*************************

0.4.3

- Added function to change scene branch name after analtyics entity is created
- Addded AtlasAnalyticsFlag custom component to identify entity in cases of scene wiping for instancing
- Updated verison number
- Added comments to 3 branch name, polling interval, and debug  
*/

