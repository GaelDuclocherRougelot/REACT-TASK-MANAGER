import { useState } from "react";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const hanleSubmit = () => {

  }

  return (
    <section className="w-full flex justify-center items-center">
      <form className="flex flex-col w-full max-w-[500px] gap-10">
        <div className="flex flex-col gap-4">
          <label htmlFor="username">Identifiant</label>
          <input
            type="text"
            name="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Identifiant"
            className="p-2 bg-gray-100 border"
            required
          />
        </div>

        <div className="flex flex-col gap-4">
          <label htmlFor="password">Mot de passe</label>
          <input
            type="text"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            name="password"
            placeholder="Mot de passe"
            className="p-2 bg-gray-100 border"
            required
          />
        </div>
        <button className="bg-black text-white py-2 px-4 h-fit self-end w-full">
          Se connecter
        </button>
      </form>
    </section>
  );
}
