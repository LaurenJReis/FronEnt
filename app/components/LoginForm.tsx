"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Button from "./Button";

const Valide = {
  email: "admin@admin.com",
  senha: "admin",
};

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [erro, setErro] = useState("");

  const router = useRouter();

  function handleLogin(e: React.FormEvent) {
    e.preventDefault();
    setErro("");

    if (!email || !senha) {
      setErro("Preencha todos os campos");
      return;
    }

    if (email === Valide.email && senha === Valide.senha) {
      router.push("/dashboard");
    } else {
      setErro("Email ou senha incorretos");
    }
  }

  return (
    <div className="bg-white text-purple-900 p-8 rounded-xl shadow-lg w-full max-w-sm">
      <h1 className="text-2xl font-bold mb-6 text-center">Login</h1>

      {erro && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
          {erro}
        </div>
      )}

      <form onSubmit={handleLogin} className="space-y-4">
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-2 border border-purple-300 rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
        />

        <input
          type="password"
          placeholder="Senha"
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
          className="w-full p-2 border border-purple-300 rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
        />

        <Button texto="Entrar" />
      </form>
    </div>
  );
}
