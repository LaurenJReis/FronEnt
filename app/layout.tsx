import "./globals.css";

export const metadata = {
  title: "Front Login",
  description: "Login",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className="min-h-screen bg-purple-600 flex items-center justify-center">
        {children}
      </body>
    </html>
  );
}
