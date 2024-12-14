"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createTaskSystem = void 0;
function getAndClean(value) {
    const messagesToProcess = Array.from(value);
    value.length = 0;
    return messagesToProcess;
}
/**
 * @internal
 */
function createTaskSystem(engine) {
    const tasks = [];
    async function runTask(task) {
        try {
            const resp = await task();
            return resp;
        }
        catch (e) {
            console.error(e);
        }
    }
    function executeTasks() {
        for (const task of getAndClean(tasks)) {
            runTask(task).catch(console.error);
        }
    }
    engine.addSystem(executeTasks);
    return function (task) {
        tasks.push(task);
    };
}
exports.createTaskSystem = createTaskSystem;
