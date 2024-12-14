"use strict";
/* eslint-disable */
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoadingState = void 0;
const protobufPackageSarasa = "decentraland.sdk.components.common";
/**
 * @public
 */
var LoadingState;
(function (LoadingState) {
    LoadingState[LoadingState["UNKNOWN"] = 0] = "UNKNOWN";
    LoadingState[LoadingState["LOADING"] = 1] = "LOADING";
    LoadingState[LoadingState["NOT_FOUND"] = 2] = "NOT_FOUND";
    LoadingState[LoadingState["FINISHED_WITH_ERROR"] = 3] = "FINISHED_WITH_ERROR";
    LoadingState[LoadingState["FINISHED"] = 4] = "FINISHED";
})(LoadingState = exports.LoadingState || (exports.LoadingState = {}));
