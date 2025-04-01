// Utility functions for logging todo actions

export const logTaskAction = (action, task) => {
    const timestamp = new Date().toLocaleString();
    console.log(`[${timestamp}] Task ${action}: ${task}`);
};

export const logActions = {
    add: (task) => logTaskAction('added', task),
    delete: (task) => logTaskAction('deleted', task),
    complete: (task) => logTaskAction('completed', task),
    uncomplete: (task) => logTaskAction('uncompleted', task)
};