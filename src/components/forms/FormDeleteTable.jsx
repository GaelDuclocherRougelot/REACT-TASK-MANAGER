/* eslint-disable react/prop-types */
import { useState } from "react";

export default function FormDeleteTable({ tables, handleDeleteTable }) {
  const [selectedTable, setSelectedTable] = useState(0);

  return (
    <form className="flex flex-col lg:flex-row gap-4 lg:items-end">
      <div className="flex flex-col gap-2">
        <label htmlFor="select" className="text-xl">Supprimer une table</label>
        <select
          onChange={(e) => setSelectedTable(e.target.value)}
          value={selectedTable}
          type="text"
          name="select"
          placeholder="Nom de votre table"
          className="border h-fit py-[10px] px-4"
          required
        >
          <option value="-">Choisir une table à supprimer</option>
          {tables.map((table) => (
            <option key={table.id} value={table.id}>
              {table.title}
            </option>
          ))}
        </select>
      </div>

      <button
        onClick={(e) => {
          e.preventDefault();
          selectedTable !== 0 ? handleDeleteTable(e, selectedTable) : null;
        }}
        className="bg-black text-white py-2 px-4 h-fit self-end w-full"
      >
        Supprimer la table
      </button>
    </form>
  );
}
