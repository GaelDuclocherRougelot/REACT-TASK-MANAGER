import { Link, Route, Routes } from "react-router-dom";
import HomePage from "./components/pages/HomePage";
import Login from "./components/pages/Login";
import Tables from "./components/tables/Tables";

function App() {
  return (
    <section className="flex flex-col justify-center gap-10 w-full h-full py-10 md:py-20 px-4 md:px-10">
    <h1 className="text-6xl">Task Manager</h1>
      <nav className="flex gap-10">
        <Link to="/login" className="border py-2 px-4 h-fit">
          Login
        </Link>
        <Link to="/tasklist" className="border py-2 px-4 h-fit">
          Liste de tâches
        </Link>
      </nav>

      <Routes>
        <Route path={"/"} element={<HomePage />} />
        <Route path={"/login"} element={<Login />} />
        <Route path={"/tasklist"} element={<Tables />} />
      </Routes>
    </section>
  );
}

export default App;
