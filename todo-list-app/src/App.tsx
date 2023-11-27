import React, { useState } from "react";
import "./App.css";

interface Task {
  id: number;
  text: string;
  completed: boolean;
}

const TodoList: React.FC = () => {
  const [tasks, setTask] = useState<Task[]>([]);
  const [newTask, setNewTask] = useState<string>("");

  const addTask = () => {
    if (newTask) {
      const newTaskObj: Task = { id: Date.now(), text: newTask, completed: false };
      setTask([...tasks, newTaskObj]);
      setNewTask("");
    }
  };

  const toggleComplete = (taskId: number) => {
    const updatedTasks = tasks.map((task) =>
      task.id === taskId ? { ...task, completed: !task.completed } : task
    );
    setTask(updatedTasks);
  };


  return (
    <div className="todo-list">
      <h1>Todo List App</h1>
      <div className="input-container">
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="Add a new task..."
        />
        <button onClick={addTask}>Add Task</button>
      </div>
      <ul>
        {tasks.map((task) => (
          <li 
          key={task.id}
          className={task.completed ? 'completed' : ''}
          onClick={() => toggleComplete(task.id)}
          >{task.text}</li>
        ))}
      </ul>
    </div>
  );
};

const App: React.FC = () => {
  return (
    <div className="App">
      <TodoList />
    </div>
  );
};

export default App;
