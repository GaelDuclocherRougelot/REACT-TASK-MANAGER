/* eslint-disable react/prop-types */
import { useState } from "react";
import svgs from "../../assets/svgs";
export default function FormDeleteTable({ tables, handleDeleteTable }) {
  const [selectedTable, setSelectedTable] = useState(0);
  const [modalIsOpen, setModalIsOpen] = useState(false);


  return (
    <>
      <button
        className="bg-black text-white py-2 px-4 h-fit self-end"
        onClick={() => setModalIsOpen(!modalIsOpen)}
      >
        Supprimer une table
      </button>
      {modalIsOpen && (
        <div onClick={() => setModalIsOpen(false)} className="bg-black bg-opacity-50 backdrop-blur-sm fixed w-screen h-screen z-10 top-0 left-0">
      <form onClick={(e) => e.stopPropagation()} className="flex flex-col lg:flex-row gap-4 lg:items-end absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-10 z-20 shadow-lg rounded-lg">
      <button onClick={() => setModalIsOpen(false)} className="absolute right-4 top-4"><svgs.cross /></button>
        <div className="flex flex-col gap-2">
          <label htmlFor="select" className="text-xl">
            Supprimer une table
          </label>
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
      </div>)}
    </>
  );
}
