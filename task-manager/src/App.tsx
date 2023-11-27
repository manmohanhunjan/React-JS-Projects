import React,{useState} from 'react';
import './App.css';
import TodoList from "./comp1";

const TaskManager: React.FC = () => {
  const [tasks, setTasks] = useState<string[]>([]);
  const [newTask, setNewTask] = useState('');

  const addTask = () => {
    if (newTask.trim() !== ''){     //trim() removes whitespace from both ends of a string
      setTasks([...tasks, newTask]);
      setNewTask('');
    }
  };

  const deleteTask = (index: number) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);  //_, i here _ means we don't care about the value
    setTasks(updatedTasks);
  }

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
                      onClick={() => deleteTask(index)}
                      className={"px-2 py-1 bg-red-500 text-white rounded"}
                      >
                            Delete
                      </button>
                    </li>
              ))}
          </ul>

        <div >
            <TodoList/>
        </div>
      </div>

  );
}


export default TaskManager;
