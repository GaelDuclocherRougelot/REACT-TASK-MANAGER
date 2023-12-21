/* eslint-disable react/prop-types */
import { useState } from "react";
import svgs from "../../assets/svgs";

export default function FormAddTable({ handleAddTable }) {
  const [newTableTitle, setNewTableTitle] = useState("");
  const [modalIsOpen, setModalIsOpen] = useState(false);

  return (
    <>
      <button
        className="bg-black text-white py-2 px-4 h-fit self-end"
        onClick={() => setModalIsOpen(!modalIsOpen)}
      >
        Créer une table
      </button>
      {modalIsOpen && (
        <div onClick={() => setModalIsOpen(false)} className="bg-black bg-opacity-50 backdrop-blur-sm fixed w-screen h-screen z-10 top-0 left-0">
          {" "}
          <form onClick={(e) => e.stopPropagation()} className="flex flex-col lg:flex-row gap-4 lg:items-end absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-10 z-20 shadow-lg rounded-lg">
            <button onClick={() => setModalIsOpen(false)} className="absolute right-4 top-4"><svgs.cross /></button>
            <div className="flex flex-col gap-2">
              <label htmlFor="add" className="text-xl">
                Créer une table
              </label>
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
              onClick={(e) => {
                if (newTableTitle !== "") {
                  handleAddTable(e, newTableTitle, setNewTableTitle);
                  setModalIsOpen(false);
                }
              }}
              className="bg-black text-white py-2 px-4 h-fit self-end w-full"
            >
              Créer une table
            </button>
          </form>
        </div>
      )}
    </>
  );
}
