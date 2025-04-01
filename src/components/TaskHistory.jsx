import React from 'react';
import './TaskHistory.css';

const TaskHistory = ({ tasks }) => {
    const getTaskStatus = (task) => {
        if (task.deletedAt) return 'Deleted';
        if (task.completed) return 'Completed';
        return 'Active';
    };

    return (
        <div className="history-container">
            <h2>Task History</h2>
            <div className="history-list">
                {tasks.map(task => (
                    <div key={task.id} className={`history-item ${getTaskStatus(task).toLowerCase()}`}>
                        <div className="task-info">
                            <span className="task-text">{task.text}</span>
                            <span className="task-status">{getTaskStatus(task)}</span>
                        </div>
                        <div className="timestamps">
                            <div>Created: {task.createdAt}</div>
                            {task.completedAt && <div>Completed: {task.completedAt}</div>}
                            {task.deletedAt && <div>Deleted: {task.deletedAt}</div>}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TaskHistory;