/* eslint-disable react/prop-types */
import { useState } from "react";

export default function FormAddTask({ handleAddTask }) {
  const [newTask, setNewTask] = useState("");

  return (
    <form className="flex gap-3 w-full mt-10">
      <input
        onChange={(e) => setNewTask(e.target.value)}
        value={newTask}
        type="text"
        placeholder="Ajouter une carte"
        className="p-2 bg-gray-100 border"
        required
      />
      <button
        onClick={(e) => (newTask !== "" ? handleAddTask(e, setNewTask, newTask) : null)}
        className="bg-black text-white py-2 px-4 h-fit self-end w-full"
      >
        Créer une tache
      </button>
    </form>
  );
}
