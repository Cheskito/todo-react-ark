import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Login | TODO App",
  description: "Inicia sesión en TODO App para gestionar tus tareas",
};

export default function LoginLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}