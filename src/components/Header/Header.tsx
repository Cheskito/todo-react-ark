'use client';
import { faPaperPlane } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useAuth } from "@/contexts/AuthContext";
import Link from "next/link";
import { useLogout } from "@/hooks/useLogout";
import { Avatar, Menu } from "@ark-ui/react";

export default function Header() {
  const { user } = useAuth();
  const { handleLogout } = useLogout();

  return (
    <header
      className="fixed top-0 w-full flex flex-row justify-between items-center border-b border-red-500 px-10 py-2 bg-gray-900">
      <span className=":text-white">LOGO</span>
      <nav className="flex flex-row items-center gap-5 text-sm font-semibold tracking-wide">
        <Link href="/" className=" text-gray-200 hover:text-red-400 transition-colors">Inicio</Link>
        <Link href="https://github.com/Cheskito/todo-react-ark" target="_blank" className=" text-gray-200 hover:text-red-400 transition-colors">GitHub</Link>
        {!user ? (
          <Link
            href="/login"
            className="flex flex-row items-center gap-1 rounded-full py-1.5 px-3 bg-red-500 hover:bg-red-600 transition-colors text-white">
            <span>Iniciar Sesión</span>
          </Link>
        ) : (
          <Menu.Root>
            <Menu.Trigger>
              <Avatar.Root className="w-8 h-8 rounded-full overflow-hidden cursor-pointer hover:ring-2 hover:ring-red-500 transition-all">
                <Avatar.Fallback className="w-full h-full flex items-center justify-center bg-red-900 text-red-300 text-sm">User</Avatar.Fallback>
                <Avatar.Image className="w-full h-full object-cover" src="https://unavatar.io/twitter/midudev" alt="Avatar"></Avatar.Image>
              </Avatar.Root>
            </Menu.Trigger>
            <Menu.Positioner>
              <Menu.Content className="z-50 min-w-[200px] bg-gray-800 rounded-xl shadow-lg border border-gray-700 py-2 mt-2">
                <div className="px-4 py-2 text-sm font-medium text-white border-b border-gray-700 mb-2">
                  {user?.names} {user?.lastNames}
                </div>
                <Menu.Item className="px-4 py-2 text-sm text-gray-200 hover:bg-red-900/20 cursor-pointer transition-colors" value="profile">Mi Perfil</Menu.Item>
                <Menu.Item className="px-4 py-2 text-sm text-gray-200 hover:bg-red-900/20 cursor-pointer transition-colors" value="projects">
                  <Link href='/todo'>
                    Mis Proyectos
                  </Link>
                </Menu.Item>
                <hr className="my-2 border-gray-700" />
                <Menu.Item className="px-4 py-2 text-sm text-red-400 hover:bg-red-900/20 cursor-pointer transition-colors" value="logout" onClick={handleLogout}>Cerrar Sesión</Menu.Item>
              </Menu.Content>
            </Menu.Positioner>
          </Menu.Root>
        )}
      </nav>
    </header>
  );
}
