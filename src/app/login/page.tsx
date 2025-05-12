'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from "next/link";
import { useAuth } from '@/contexts/AuthContext';

export default function Login() {
  const router = useRouter();
  const { login } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    try {
      const result = await login(email, password);

      if (result.success) {
        router.push('/');
      } else {
        setError(result.message || 'Usuario o contraseña incorrectos');
      }

    } catch (err) {
      setError('Ocurrió un error al iniciar sesión');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <main className="h-screen w-full flex flex-col items-center justify-center bg-gradient-to-b from-gray-900 to-red-900/10">
      <div className="w-full max-w-md mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center bg-gray-800/30 backdrop-blur-xl rounded-2xl shadow-xl border border-gray-700/30 p-8">
          <h1 className="text-3xl font-bold mb-6 text-gray-500">Iniciar Sesión</h1>

          {error && (
            <div className="w-full mb-4 p-3 bg-red-100 text-red-700 rounded-md text-sm">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="flex flex-col w-full">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              className="bg-gray-800 rounded-xl border border-gray-700 text-gray-50 p-3 mb-4"
              required
            />
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              className="bg-gray-800 rounded-xl border border-gray-700 text-gray-50 p-3 mb-2"
              required
            />
            <Link
              href={"/forgot-password"}
              className="text-sm self-center text-gray-100 my-2 hover:underline">
              ¿Olvidaste tu contraseña?
            </Link>
            <button
              type="submit"
              disabled={isLoading}
              className="bg-red-800 hover:bg-red-900 text-white px-8 py-3 rounded-full text-lg font-semibold transition-colors shadow-lg hover:shadow-xl cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed">
              {isLoading ? 'Iniciando sesión...' : 'Iniciar Sesión'}
            </button>
          </form>
          <h2 className='my-3'>O</h2>
          <Link
            href={"/register"}
            className="w-full text-center bg-gray-100 hover:bg-gray-200 text-red-800 px-8 py-3 rounded-full text-lg font-semibold transition-colors shadow-lg hover:shadow-xl cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed">
            Regístrate Aquí
          </Link>
        </div>
      </div>
    </main>
  );
}