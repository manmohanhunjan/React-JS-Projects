import React, {useState, useEffect} from "react";
import './App.css';

const TodoList: React.FC = () => {
    const [tasks, setTasks] = useState<string[]>([]);
    const [newTask, setNewTask] = useState('');

    useEffect(() => {
        fetch('./tasks.json')
            .then((response) => response.json())
            .then((data) => setTasks(data));
    }, []);
    const addTask = () => {
        if (newTask.trim() !== ''){
            setTasks([...tasks, newTask]);
            setNewTask('');
        }
    };
    return (
        <div className={"container mx-auto mt-8"}>
            <h1 className={"text-3xl font-semibold mb-4"}>Task Manager</h1>
            <div className={"mb-4 flex"}>
                <input
                    type={"text"}
                    value={newTask}
                    onChange={(e) => setNewTask(e.target.value)}
                    placeholder={"Enter a new task..."}
                    className={"flex-grow p-2 border rounded"}
                />
                <button
                    onClick={addTask}
                    className={"ml-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"}
                >
                    Add
                </button>
            </div>
            <ul className={"space-y-2"}>
                {tasks.map((task, index) => (
                    <li key={index} className={"flex items-center"}>
                        <span className={"flex-grow"}>{task}</span>
                        <button
                            onClick={() => setTasks(tasks.filter((_, i) => i !== index))}
                            className={"px-2 py-1 bg-red-500 text-white rounded"}
                        >
                            Delete
                        </button>
                    </li>
                ))}
            </ul>
        </div>


    );
}

export default TodoList;