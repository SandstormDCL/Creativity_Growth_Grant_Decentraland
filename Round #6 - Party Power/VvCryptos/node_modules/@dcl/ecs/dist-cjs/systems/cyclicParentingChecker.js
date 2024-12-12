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
exports.cyclicParentingChecker = void 0;
const components = __importStar(require("../components"));
/**
 * Transform parenting: cyclic dependency checker
 * It checks only in modified Transforms
 *
 * Add this system with:
 * ```ts
 *  engine.addSystem(cyclicParentingChecker(engine))
 * ````
 * And then it will check every tick the parenting.
 *
 * @public
 *
 * @params engine
 * @returns a system
 */
function cyclicParentingChecker(engine) {
    const Transform = components.Transform(engine);
    return () => {
        for (const entity of Transform.dirtyIterator()) {
            let transform = Transform.getOrNull(entity);
            while (transform && transform.parent) {
                if (transform.parent === entity) {
                    console.error(`There is a cyclic parent with entity ${entity}`);
                    break;
                }
                else {
                    transform = Transform.getOrNull(transform.parent);
                }
            }
        }
    };
}
exports.cyclicParentingChecker = cyclicParentingChecker;
