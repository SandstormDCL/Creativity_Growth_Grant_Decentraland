"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.componentNumberFromName = exports.MAX_STATIC_COMPONENT = void 0;
const component_names_gen_1 = require("./generated/component-names.gen");
const utf8 = __importStar(require("@protobufjs/utf8"));
const crc_1 = require("../runtime/crc");
// Max possible pre-defined (static) component.
exports.MAX_STATIC_COMPONENT = 1 << 11; // 2048
/**
 * All components that are not part of the coreComponentMappings MUST yield
 * a componentNumber (componentId) greather than MAX_STATIC_COMPONENT.
 * For that reason, we simply add MAX_STATIC_COMPONENT and trim to the domain 2^32
 */
function componentNumberFromName(componentName) {
    if (component_names_gen_1.coreComponentMappings[componentName])
        return component_names_gen_1.coreComponentMappings[componentName];
    const bytes = new Uint8Array(128);
    utf8.write(componentName, bytes, 0);
    return (((0, crc_1.unsignedCRC32)(bytes) + exports.MAX_STATIC_COMPONENT) & 4294967295) >>> 0;
}
exports.componentNumberFromName = componentNumberFromName;
