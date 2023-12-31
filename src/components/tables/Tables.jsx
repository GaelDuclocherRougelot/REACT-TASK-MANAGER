import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { v4 as uuid } from "uuid";
import FormAddTable from "../forms/FormAddTable";
import FormDeleteTable from "../forms/FormDeleteTable";
import Table from "./Table";

export default function Tables() {
  const [tables, setTables] = useState([]);

  const isConnected = localStorage.getItem("connected");
  const navigate = useNavigate();

  useEffect(() => {
    !isConnected ? navigate("/login") : null;
  }, [isConnected, navigate]);

  const handleAddTable = (e, title, setNewTableTitle) => {
    e.preventDefault();
    const newTable = { id: uuid(), title: title, tasks: [] };
    setTables([...tables, newTable]);
    setNewTableTitle("");
  };

  const handleDeleteTable = (e, currentTable) => {
    e.preventDefault();
    const tablesCopy = [...tables];
    const filteredTables = tablesCopy.filter((table) => table.id !== currentTable);
    setTables(filteredTables);
  };

  return (
    <div className="flex flex-col justify-center gap-10 h-full">
      <div className="flex flex-col lg:flex-row gap-10 lg:items-center">
        <FormAddTable handleAddTable={handleAddTable} />
        <FormDeleteTable handleDeleteTable={handleDeleteTable} tables={tables} />
      </div>
      <hr />
      <div className="flex flex-wrap gap-3 w-full h-full">
        {tables && tables.map((table) => <Table key={table.id} table={table} tables={tables} setTables={setTables} />)}
      </div>
    </div>
  );
}
