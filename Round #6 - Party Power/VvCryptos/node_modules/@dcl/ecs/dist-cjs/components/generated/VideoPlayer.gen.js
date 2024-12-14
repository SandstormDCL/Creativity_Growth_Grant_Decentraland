"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VideoPlayerSchema = void 0;
const video_player_gen_1 = require("./pb/decentraland/sdk/components/video_player.gen");
/**
 * @internal
 */
exports.VideoPlayerSchema = {
    COMPONENT_ID: 1043,
    serialize(value, builder) {
        const writer = video_player_gen_1.PBVideoPlayer.encode(value);
        const buffer = new Uint8Array(writer.finish(), 0, writer.len);
        builder.writeBuffer(buffer, false);
    },
    deserialize(reader) {
        return video_player_gen_1.PBVideoPlayer.decode(reader.buffer(), reader.remainingBytes());
    },
    create() {
        // TODO: this is a hack.
        return video_player_gen_1.PBVideoPlayer.decode(new Uint8Array());
    },
    jsonSchema: {
        type: "object",
        properties: {},
        serializationType: "protocol-buffer",
        protocolBuffer: "PBVideoPlayer"
    }
};
