/* eslint-disable react/prop-types */
import { useState } from "react";
import svgs from "../../assets/svgs";
import FormEditTask from "../forms/FormEditTask";
export default function Task({ task = {}, handleDeleteTask, handleEditTask }) {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  return (
    <>
    <FormEditTask modalIsOpen={modalIsOpen} setModalIsOpen={setModalIsOpen} handleEditTask={handleEditTask} task={task} />
      <li
        key={task.id}
        draggable="true"
        className="bg-white w-full p-2 rounded-md overflow-hidden text-ellipsis flex justify-between cursor-pointer"
        onDragStart={(e) => e.dataTransfer.setData("id_task", task.id)}
        onClick={() => setModalIsOpen(true)}
      >
        {task.content}
        <button onClick={() => handleDeleteTask(task.id)} className="mr-2">
          <svgs.cross />
        </button>
      </li>
    </>
  );
}
