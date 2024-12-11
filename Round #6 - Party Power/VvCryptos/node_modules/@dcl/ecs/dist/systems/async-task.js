function getAndClean(value) {
    const messagesToProcess = Array.from(value);
    value.length = 0;
    return messagesToProcess;
}
/**
 * @internal
 */
export function createTaskSystem(engine) {
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
