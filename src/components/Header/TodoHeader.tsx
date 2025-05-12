
'use client';
import { useLogout } from "@/hooks/useLogout";
import { faPaperPlane } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

export default function Header() {
  const { handleLogout } = useLogout();


  return (
    <header
      className="fixed top-0 w-full flex flex-row justify-between items-center border-b border-red-500 px-10 py-2 bg-gray-900">
      <span className="text-white">IMAGEN DEL LOGO</span>
      <nav className="flex flex-row items-center gap-5 text-sm font-semibold tracking-wide">
        <Link href="/" className="text-gray-200 hover:text-red-400 transition-colors">Inicio</Link>
        <Link href="https://github.com/Cheskito/todo-react-ark" target="_blank" className="text-gray-200 hover:text-red-400 transition-colors">GitHub</Link>
        <button
          onClick={handleLogout}
          className="flex flex-row items-center gap-1 rounded-full py-1.5 px-3 bg-red-500 hover:bg-red-600 transition-colors text-white">
          <span>Cerrar Sesión</span>
        </button>
      </nav>
    </header>
  );
}