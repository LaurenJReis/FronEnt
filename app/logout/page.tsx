"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Logout() {
  const router = useRouter();

  useEffect(() => {
    router.push("/");
  }, [router]);

  return (
    <main className="flex min-h-screen items-center justify-center">
      <p className="text-lg">Saindo...</p>
    </main>
  );
}
