
'use client';
import { useLogout } from "@/hooks/useLogout";
import { faPaperPlane } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

export default function Header() {
  const { handleLogout } = useLogout();


  return (
    <header
      className="fixed top-0 w-full flex flex-row justify-between items-center border-b border-red-400 dark:border-red-500 px-10 py-2 bg-white dark:bg-gray-900">
      <span className="dark:text-white">IMAGEN DEL LOGO</span>
      <nav className="flex flex-row items-center gap-5 text-sm font-semibold tracking-wide">
        <Link href="/" className="hover:text-red-400 dark:text-gray-200 dark:hover:text-red-400 transition-colors">Inicio</Link>
        <Link href="https://github.com/Cheskito/todo-react-ark" target="_blank" className="hover:text-red-400 dark:text-gray-200 dark:hover:text-red-400 transition-colors">GitHub</Link>
        <button
          onClick={handleLogout}
          className="flex flex-row items-center gap-1 rounded-full py-1.5 px-3 bg-red-400 hover:bg-red-500 dark:bg-red-500 dark:hover:bg-red-600 transition-colors text-white">
          <span>Cerrar Sesión</span>
        </button>
      </nav>
    </header>
  );
}