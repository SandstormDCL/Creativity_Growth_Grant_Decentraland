"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProcessMessageResultType = exports.CRDT_MESSAGE_HEADER_LENGTH = exports.CrdtMessageType = void 0;
/**
 * @public
 */
var CrdtMessageType;
(function (CrdtMessageType) {
    CrdtMessageType[CrdtMessageType["RESERVED"] = 0] = "RESERVED";
    // Component Operation
    CrdtMessageType[CrdtMessageType["PUT_COMPONENT"] = 1] = "PUT_COMPONENT";
    CrdtMessageType[CrdtMessageType["DELETE_COMPONENT"] = 2] = "DELETE_COMPONENT";
    CrdtMessageType[CrdtMessageType["DELETE_ENTITY"] = 3] = "DELETE_ENTITY";
    CrdtMessageType[CrdtMessageType["APPEND_VALUE"] = 4] = "APPEND_VALUE";
    // Network operations
    CrdtMessageType[CrdtMessageType["PUT_COMPONENT_NETWORK"] = 5] = "PUT_COMPONENT_NETWORK";
    CrdtMessageType[CrdtMessageType["DELETE_COMPONENT_NETWORK"] = 6] = "DELETE_COMPONENT_NETWORK";
    CrdtMessageType[CrdtMessageType["DELETE_ENTITY_NETWORK"] = 7] = "DELETE_ENTITY_NETWORK";
    CrdtMessageType[CrdtMessageType["MAX_MESSAGE_TYPE"] = 8] = "MAX_MESSAGE_TYPE";
})(CrdtMessageType = exports.CrdtMessageType || (exports.CrdtMessageType = {}));
/**
 * @public
 */
exports.CRDT_MESSAGE_HEADER_LENGTH = 8;
var ProcessMessageResultType;
(function (ProcessMessageResultType) {
    /**
     * Typical message and new state set.
     * @state CHANGE
     * @reason Incoming message has a timestamp greater
     */
    ProcessMessageResultType[ProcessMessageResultType["StateUpdatedTimestamp"] = 1] = "StateUpdatedTimestamp";
    /**
     * Typical message when it is considered old.
     * @state it does NOT CHANGE.
     * @reason incoming message has a timestamp lower.
     */
    ProcessMessageResultType[ProcessMessageResultType["StateOutdatedTimestamp"] = 2] = "StateOutdatedTimestamp";
    /**
     * Weird message, same timestamp and data.
     * @state it does NOT CHANGE.
     * @reason consistent state between peers.
     */
    ProcessMessageResultType[ProcessMessageResultType["NoChanges"] = 3] = "NoChanges";
    /**
     * Less but typical message, same timestamp, resolution by data.
     * @state it does NOT CHANGE.
     * @reason incoming message has a LOWER data.
     */
    ProcessMessageResultType[ProcessMessageResultType["StateOutdatedData"] = 4] = "StateOutdatedData";
    /**
     * Less but typical message, same timestamp, resolution by data.
     * @state CHANGE.
     * @reason incoming message has a GREATER data.
     */
    ProcessMessageResultType[ProcessMessageResultType["StateUpdatedData"] = 5] = "StateUpdatedData";
    /**
     * Entity was previously deleted.
     * @state it does NOT CHANGE.
     * @reason The message is considered old.
     */
    ProcessMessageResultType[ProcessMessageResultType["EntityWasDeleted"] = 6] = "EntityWasDeleted";
    /**
     * Entity should be deleted.
     * @state CHANGE.
     * @reason the state is storing old entities
     */
    ProcessMessageResultType[ProcessMessageResultType["EntityDeleted"] = 7] = "EntityDeleted";
})(ProcessMessageResultType = exports.ProcessMessageResultType || (exports.ProcessMessageResultType = {}));
// we receive LWW, v=6, we have v=5 => we receive with delay the deleteEntity(v=5)
//   => we should generate the deleteEntity message effects internally with deleteEntity(v=5),
//       but don't resend the deleteEntity
//          - (CRDT) addDeletedEntitySet v=5 (with crdt state cleaning) and then LWW v=6
//          - (engine) engine.deleteEntity v=5
// we receive LWW, v=7, we have v=5 => we receive with delay the deleteEntity(v=5), deleteEntity(v=6), ..., N
//   => we should generate the deleteEntity message effects internally with deleteEntity(v=5),
//       but don't resend the deleteEntity
//          - (CRDT) addDeletedEntitySet v=5 (with crdt state cleaning) and then LWW v=6
//          - (engine) engine.deleteEntity v=5
// msg delete entity: it only should be sent by deleter
//
