import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [loginForm, setLoginForm] = useState({
    username: "",
    password: "",
  });
  const [formError, setFormError] = useState(false);
  const navigate = useNavigate();

  const dataToMatch = {
    username: "cloudcampus",
    password: "0000",
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (loginForm.username === dataToMatch.username && loginForm.password === dataToMatch.password) {
      setFormError(false)
      localStorage.setItem('connected', true);
      navigate("/tasklist");
    } else {
      localStorage.setItem('connected', false);
      setFormError(true)
    }
  };

  return (
    <section className="w-full flex justify-center items-center">
      <form onSubmit={handleSubmit} className="flex flex-col w-full max-w-[500px] gap-10">
        <div className="flex flex-col gap-4">
          <label htmlFor="username">Identifiant</label>
          <input
            type="text"
            name="username"
            value={loginForm.username}
            onChange={(e) => setLoginForm((prev) => ({ ...prev, username: e.target.value }))}
            placeholder="Identifiant"
            className="p-2 bg-gray-100 border"
            required
          />
        </div>

        <div className="flex flex-col gap-4">
          <label htmlFor="password">Mot de passe</label>
          <input
            type="text"
            value={loginForm.password}
            onChange={(e) => setLoginForm((prev) => ({ ...prev, password: e.target.value }))}
            name="password"
            placeholder="Mot de passe"
            className="p-2 bg-gray-100 border"
            required
          />
        </div>
        <button type="submit" className="bg-black text-white py-2 px-4 h-fit self-end w-full">
          Se connecter
        </button>
        {formError && <p className="text-red-600">L&apos;identifiant ou le mot de passe n&apos;est pas correct.</p>}
      </form>
    </section>
  );
}
