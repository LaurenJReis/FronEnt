"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Button from "./Button";

export default function LoginForm() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [erro, setErro] = useState(false);

  function handleLogin() {
    if (email === "admin@admin.com" && senha === "123") {
      router.push("/dashboard");
    } else {
      setErro(true);
    }
  }

  return (
    <div className="bg-white p-6 rounded-lg shadow-md w-80">
      <h1 className="text-xl font-bold mb-4 text-center">Login</h1>

      <input
        type="email"
        placeholder="Email"
        className="w-full border p-2 mb-3 rounded"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        type="password"
        placeholder="Senha"
        className="w-full border p-2 mb-3 rounded"
        value={senha}
        onChange={(e) => setSenha(e.target.value)}
      />

      {erro && (
        <p className="text-red-500 text-sm mb-2">
          Email ou senha inválidos
        </p>
      )}

      <Button texto="Entrar" onClick={handleLogin} />
    </div>
  );
}
