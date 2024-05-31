// TaskList.jsx
// Without saved data in local storage

"use client"

import React, { useState } from "react";

interface Task {
    id: number;
    content: string;
    completed: boolean;
}

const TaskList = () => {
    const [tasks, setTasks] = useState<Task[]>([]);
    const [newTask, setNewTask] = useState("");

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        setTasks([
            ...tasks,
            { id: Date.now(), content: newTask, completed: false },
        ]);
        setNewTask("");
    };

    const toggleTaskCompletion = (taskId: number) => {
        setTasks(
            tasks.map((task) =>
                task.id === taskId ? { ...task, completed: !task.completed } : task
            )
        );
    };

    const deleteTask = (taskId: number) => {
        setTasks(tasks.filter((task) => task.id !== taskId));
    };

    return (
        <>
            <h2>TaskList</h2>
            <div>
                <p><strong>Without</strong> saved data in local storage</p>
            </div>
            <div>
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        placeholder="Add new task"
                        value={newTask}
                        onChange={(event) => setNewTask(event.target.value)}
                    />
                    <button type="submit">Add</button>
                </form>
            </div>

            <div>
                <ul>
                    {tasks.map((task) => (
                        <li key={task.id}>
                            <input
                                type="checkbox"
                                checked={task.completed}
                                onChange={() => toggleTaskCompletion(task.id)}
                            />
                            <span>{task.content} : </span>
                            <button onClick={() => deleteTask(task.id)}>Delete</button>
                        </li>
                    ))}
                </ul>
            </div>
            <hr />
        </>
    );
};

export default TaskList;
