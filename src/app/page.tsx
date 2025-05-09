'use client';
import Link from "next/link";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-regular-svg-icons";
import Header from "@/components/Header/Header";



export default function Home() {
  return (
    <main className="w-full flex flex-col">
      <Header />
      <section className="h-screen w-full flex flex-col items-center justify-center bg-gradient-to-b from-white to-red-50 dark:from-gray-900 dark:to-red-900/10">
        <div className="w-full px-4 sm:px-6 lg:px-8 text-left grid grid-cols-2">
          <div className="flex flex-col">
            <div className="font-extrabold text-gray-500 dark:text-red-700 mb-6 flex flex-row items-baseline gap-3">
              <h1 className="text-9xl">TODO</h1>
              <h1 className="text-7xl">App</h1>
            </div>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">Organiza tus tareas de manera eficiente y mantén el control de tus proyectos con nuestra aplicación intuitiva.</p>
            <Link
              href="/todo"
              className="inline-flex w-fit items-center gap-2 bg-red-400 hover:bg-red-500 dark:bg-red-500 dark:hover:bg-red-600 text-white px-8 py-3 rounded-full text-lg font-semibold transition-colors shadow-lg hover:shadow-xl">
              <span>Empieza Ahora</span>
              <FontAwesomeIcon icon={faPaperPlane} className="text-lg" />
            </Link>
          </div>
          <div className="relative">
            <div className="bg-green-400 w-full h-full">

            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
