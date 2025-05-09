import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects | TODO App",
  description: "Tus proyectos de TODO",
};

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}