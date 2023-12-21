import { useEffect, useState } from "react";
import { v4 as uuid } from "uuid";
import FormAddTask from "../forms/FormAddTask";
import Task from "./Task";

/* eslint-disable react/prop-types */
export default function Table({ table, tables, setTables }) {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    setTasks(table.tasks || []);
  }, [table.tasks]);

  const handleAddTask = (e, setNewTask, newTask) => {
    e.preventDefault();
    const task = {
      id: uuid(),
      content: newTask,
      table_id: table.id,
    };

    // Update the state in tables
    const updatedTables = tables.map((t) => {
      if (t.id === table.id) {
        return { ...t, tasks: [...tasks, task] };
      }
      return t;
    });

    setTables(updatedTables);

    // Update the current component
    setTasks([...tasks, task]);
    setNewTask("");
  };

  const handleDeleteTask = (id) => {
    const filteredTasks = tasks.filter((task) => task.id !== id);

    // Update the state in tables
    const updatedTables = tables.map((t) => {
      if (t.id === table.id) {
        return { ...t, tasks: filteredTasks };
      }
      return t;
    });

    setTables(updatedTables);
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
