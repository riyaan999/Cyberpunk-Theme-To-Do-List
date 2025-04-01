import React, { useState, useEffect } from 'react';
import { logActions } from '../utils/script';
import TaskHistory from './TaskHistory';
import './ToDoList.css';

const ToDoList = () => {
    const [tasks, setTasks] = useState([]);
    const [taskHistory, setTaskHistory] = useState([]);
    const [newTask, setNewTask] = useState('');

    const addTask = (e) => {
        e.preventDefault();
        if (newTask.trim()) {
            const task = {
                id: Date.now(),
                text: newTask.trim(),
                completed: false,
                createdAt: new Date().toLocaleString(),
                completedAt: null,
                deletedAt: null
            };
            setTasks([...tasks, task]);
            setTaskHistory([...taskHistory, task]);
            setNewTask('');
            logActions.add(task.text);
        }
    };

    const deleteTask = (taskId) => {
        const taskToDelete = tasks.find(task => task.id === taskId);
        taskToDelete.deletedAt = new Date().toLocaleString();
        setTasks(tasks.filter(task => task.id !== taskId));
        setTaskHistory(taskHistory.map(task => 
            task.id === taskId ? { ...task, deletedAt: new Date().toLocaleString() } : task
        ));
        logActions.delete(taskToDelete.text);
    };

    const toggleComplete = (taskId) => {
        setTasks(tasks.map(task => {
            if (task.id === taskId) {
                const newStatus = !task.completed;
                const completedAt = newStatus ? new Date().toLocaleString() : null;
                logActions[newStatus ? 'complete' : 'uncomplete'](task.text);
                return { ...task, completed: newStatus, completedAt };
            }
            return task;
        }));
        setTaskHistory(taskHistory.map(task => {
            if (task.id === taskId) {
                const newStatus = !task.completed;
                const completedAt = newStatus ? new Date().toLocaleString() : null;
                return { ...task, completed: newStatus, completedAt };
            }
            return task;
        }));
    };

    return (
        <div className="todo-container">
            <h1>To-Do List</h1>
            <form onSubmit={addTask} className="todo-form">
                <input
                    type="text"
                    value={newTask}
                    onChange={(e) => setNewTask(e.target.value)}
                    placeholder="Add a new task..."
                    className="todo-input"
                />
                <button type="submit" className="add-button">Add Task</button>
            </form>
            <ul className="todo-list">
                {tasks.map(task => (
                    <li key={task.id} className={`todo-item ${task.completed ? 'completed' : ''}`}>
                        <input
                            type="checkbox"
                            checked={task.completed}
                            onChange={() => toggleComplete(task.id)}
                            className="todo-checkbox"
                        />
                        <span className="todo-text">{task.text}</span>
                        <button
                            onClick={() => deleteTask(task.id)}
                            className="delete-button"
                        >
                            Delete
                        </button>
                    </li>
                ))}
            </ul>
            <TaskHistory tasks={taskHistory} />
        </div>
    );
};

export default ToDoList;