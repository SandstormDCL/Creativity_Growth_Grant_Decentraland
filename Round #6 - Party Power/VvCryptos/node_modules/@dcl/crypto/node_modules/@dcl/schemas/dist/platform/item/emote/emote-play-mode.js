"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmotePlayMode = void 0;
const validation_1 = require("../../../validation");
var EmotePlayMode;
(function (EmotePlayMode) {
    EmotePlayMode["SIMPLE"] = "simple";
    EmotePlayMode["LOOP"] = "loop";
})(EmotePlayMode = exports.EmotePlayMode || (exports.EmotePlayMode = {}));
(function (EmotePlayMode) {
    EmotePlayMode.schema = {
        type: 'string',
        enum: Object.values(EmotePlayMode)
    };
    EmotePlayMode.validate = (0, validation_1.generateLazyValidator)(EmotePlayMode.schema);
})(EmotePlayMode = exports.EmotePlayMode || (exports.EmotePlayMode = {}));
//# sourceMappingURL=emote-play-mode.js.map