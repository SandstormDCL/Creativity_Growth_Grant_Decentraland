import _m0 from "protobufjs/minimal";
import { InputAction, PointerEventType } from "./common/input_action.gen";
import { RaycastHit } from "./common/raycast_hit.gen";
/** renderer append a new object of this in each command, there can be many commands per frames */
/**
 * @public
 */
export interface PBPointerEventsResult {
    /** identifier of the input */
    button: InputAction;
    hit: RaycastHit | undefined;
    state: PointerEventType;
    /** monotonic counter */
    timestamp: number;
    /** if the input is analog then we store it here */
    analog?: number | undefined;
    /** number of tick in which the event was produced, equals to EngineInfo.tick_number */
    tickNumber: number;
}
/**
 * @public
 */
export declare namespace PBPointerEventsResult {
    function encode(message: PBPointerEventsResult, writer?: _m0.Writer): _m0.Writer;
    function decode(input: _m0.Reader | Uint8Array, length?: number): PBPointerEventsResult;
}
