import { useState } from "react";
import { v4 as uuid } from "uuid";
import Task from "./Task";
import FormAddTask from "../forms/FormAddTask";

/* eslint-disable react/prop-types */
export default function Table({ table }) {
  const [tasks, setTasks] = useState([]);

  const handleAddTask = (e, setNewTask, newTask) => {
    e.preventDefault();
    const task = {
      id: uuid(),
      title: newTask,
      table_id: table.id
    };
    setTasks([...tasks, task]);
    setNewTask("");
  };

  const handleDeleteTask = (id) => {
    const tasksCopy = [...tasks];
    const filteredTasks = tasksCopy.filter((task) => task.id !== id);
    setTasks(filteredTasks);
  };

  return (
    <div className="flex flex-col items-center w-full md:w-[450px] h-full bg-gray-100 p-4">
      <div className="flex justify-between items-center w-full">
        <h2 className="text-xl">{table.title}</h2>
      </div>
      <ul className="w-full flex flex-col gap-2 mt-4">
        {tasks &&
          tasks.map((task) => (
            <Task key={task.id} task={task} handleDeleteTask={handleDeleteTask} />
          ))}
      </ul>
      <FormAddTask handleAddTask={handleAddTask} />
    </div>
  );
}
