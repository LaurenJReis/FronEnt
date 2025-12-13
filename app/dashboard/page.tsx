"use client";

import { useRouter } from "next/navigation";
import Button from "../components/Button";

export default function Dashboard() {
  const router = useRouter();

  function logout() {
    router.push("/logout");
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
      <Button texto="Logout" onClick={logout} />
    </main>
  );
}
