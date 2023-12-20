/* eslint-disable react/prop-types */
import { useState } from "react";

export default function FormAddTable({ handleAddTable }) {
  const [newTableTitle, setNewTableTitle] = useState("");

  return (
    <form className="flex flex-col lg:flex-row gap-4 lg:items-end">
      <div className="flex flex-col gap-2">
        <label htmlFor="add" className="text-xl">Créer une table</label>
        <input
          onChange={(e) => setNewTableTitle(e.target.value)}
          value={newTableTitle}
          type="text"
          name="add"
          placeholder="Nom de votre table"
          className="border p-2"
          required
        />
      </div>

      <button
        onClick={(e) =>
          newTableTitle !== "" ? handleAddTable(e, newTableTitle, setNewTableTitle) : null
        }
        className="bg-black text-white py-2 px-4 h-fit self-end w-full"
      >
        Créer une table
      </button>
    </form>
  );
}
