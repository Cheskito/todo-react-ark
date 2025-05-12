'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from "next/link";
import { useAuth } from '@/contexts/AuthContext';
import { Steps } from '@ark-ui/react';

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
          <h1 className="text-3xl font-bold mb-6 text-gray-500">Regístrate</h1>

          <Steps.Root count={3} className='w-full'>
            <Steps.List
              className='flex w-full justify-between items-center'>
              <Steps.Item key={0} index={0}>
                <Steps.Trigger>
                  <Steps.Indicator>1</Steps.Indicator>
                </Steps.Trigger>
              </Steps.Item>
              <Steps.Item key={1} index={1}>
                <Steps.Trigger>
                  <Steps.Indicator>2</Steps.Indicator>
                </Steps.Trigger>
              </Steps.Item>
              <Steps.Item key={2} index={2}>
                <Steps.Trigger>
                  <Steps.Indicator>2</Steps.Indicator>
                </Steps.Trigger>
              </Steps.Item>
            </Steps.List>
          </Steps.Root>

          {error && (
            <div className="w-full mb-4 p-3 bg-red-100 text-red-700 rounded-md text-sm">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="flex flex-col w-full">
          </form>
        </div>
      </div>
    </main>
  );
}