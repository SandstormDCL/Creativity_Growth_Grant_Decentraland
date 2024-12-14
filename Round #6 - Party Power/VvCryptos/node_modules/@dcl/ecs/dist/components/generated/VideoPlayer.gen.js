import { PBVideoPlayer } from './pb/decentraland/sdk/components/video_player.gen';
/**
 * @internal
 */
export const VideoPlayerSchema = {
    COMPONENT_ID: 1043,
    serialize(value, builder) {
        const writer = PBVideoPlayer.encode(value);
        const buffer = new Uint8Array(writer.finish(), 0, writer.len);
        builder.writeBuffer(buffer, false);
    },
    deserialize(reader) {
        return PBVideoPlayer.decode(reader.buffer(), reader.remainingBytes());
    },
    create() {
        // TODO: this is a hack.
        return PBVideoPlayer.decode(new Uint8Array());
    },
    jsonSchema: {
        type: "object",
        properties: {},
        serializationType: "protocol-buffer",
        protocolBuffer: "PBVideoPlayer"
    }
};
