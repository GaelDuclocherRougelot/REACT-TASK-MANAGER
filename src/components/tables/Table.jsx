/* eslint-disable react/prop-types */
// Table.js
import { useEffect, useState } from "react";
import { v4 as uuid } from "uuid";
import FormAddTask from "../forms/FormAddTask";
import FormEditTable from "../forms/FormEditTable";
import Task from "./Task";

export default function Table({ table, tables, setTables }) {
  const [tasks, setTasks] = useState([]);
  const [modalIsOpen, setModalIsOpen] = useState(false);

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

    setTables((prevTables) => {
      return prevTables.map((prevTable) =>
        prevTable.id === table.id
          ? { ...prevTable, tasks: [...prevTable.tasks, task] }
          : prevTable
      );
    });

    setTasks([...tasks, task]);
    setNewTask("");
  };

  const handleDeleteTask = (id) => {
    const filteredTasks = tasks.filter((task) => task.id !== id);

    setTables((prevTables) => {
      return prevTables.map((prevTable) =>
        prevTable.id === table.id ? { ...prevTable, tasks: filteredTasks } : prevTable
      );
    });

    setTasks(filteredTasks);
  };

  const handleDragStart = (e, taskId) => {
    e.dataTransfer.setData("text/plain", taskId);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const droppedTaskId = e.dataTransfer.getData("id_task");
    if (droppedTaskId) {
      setTables((prevTables) => {
        return prevTables.map((prevTable) => {
          if (prevTable.id === table.id) {
            if (prevTable.tasks.some((task) => task.id === droppedTaskId)) {
              return prevTable;
            }
            const draggedTask = tables
              .map((sourceTable) => sourceTable.tasks)
              .flat()
              .find((task) => task.id === droppedTaskId);

            if (draggedTask) {
              return { ...prevTable, tasks: [...prevTable.tasks, draggedTask] };
            }
          } else if (prevTable.tasks.some((task) => task.id === droppedTaskId)) {
            // Remove the task from the source table
            const updatedSourceTasks = prevTable.tasks.filter(
              (task) => task.id !== droppedTaskId
            );
            return { ...prevTable, tasks: updatedSourceTasks };
          }

          return prevTable;
        });
      });
    }
  };

  const handleEditTask = (e, task_id, newTaskContent) => {
    e.preventDefault();
    const task = {
      id: task_id,
      content: newTaskContent,
      table_id: table.id,
    };
    setTables((prevTables) => {
      return prevTables.map((prevTable) =>
        prevTable.id === table.id
          ? {
              ...prevTable,
              tasks: [...prevTable.tasks.filter((t) => t.id !== task_id), task],
            }
          : prevTable
      );
    });
  };

  const handleEditTable = (e, newTitle) => {
    e.preventDefault();
    setTables((prevTables) => {
      return prevTables.map((prevTable) =>
        prevTable.id === table.id ? { ...prevTable, title: newTitle } : prevTable
      );
    });
  };

  return (
    <>
      <FormEditTable
        handleEditTable={handleEditTable}
        table={table}
        modalIsOpen={modalIsOpen}
        setModalIsOpen={setModalIsOpen}
      />
      <div
        className="flex flex-col items-center w-full md:w-[450px] h-full bg-gray-100 p-4"
        onDrop={handleDrop}
        onDragOver={(e) => e.preventDefault()}
      >
        <div className="flex justify-between items-center w-full">
          <h2 onClick={() => setModalIsOpen(true)} className="text-xl cursor-pointer">
            {table.title}
          </h2>
        </div>
        <ul className="w-full flex flex-col gap-2 mt-4">
          {tasks &&
            tasks.map((task) => (
              <Task
                key={task.id}
                task={task}
                handleDeleteTask={handleDeleteTask}
                draggable
                onDragStart={(e) => handleDragStart(e, task.id)}
                handleEditTask={handleEditTask}
              />
            ))}
        </ul>
        <FormAddTask handleAddTask={handleAddTask} />
      </div>
    </>
  );
}
