import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Register | TODO App",
  description: "Regístrate en TODO App para gestionar tus tareas",
};

export default function RegisterLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}