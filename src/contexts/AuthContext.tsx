'use client';

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { supabase } from '@/lib/supabase/client';

interface User {
  email: string;
  names: string;
  lastNames: string;
  accessLevel: number;
  createdAt: string;
}

interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => Promise<{ success: boolean; message?: string }>;
  logout: () => void;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth debe ser usado dentro de un AuthProvider');
  }
  return context;
}

interface AuthProviderProps {
  children: ReactNode;
}

export function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    // Intenta recuperar el usuario desde sessionStorage al cargar
    const storedUser = sessionStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const login = async (email: string, password: string) => {
    try {
      const { data: authData, error: authError } = await supabase.auth.signInWithPassword({
        email,
        password
      });

      if (authError) throw authError;
      if (!authData.user) throw new Error('No se pudo autenticar el usuario');

      const { data: profile, error: profileError } = await supabase
        .from('Users')
        .select('names, last_names, access_level')
        .eq('id_auth', authData.user.id)
        .single();

      if (profileError || !profile) {
        throw new Error('No se encontró el perfil del usuario');
      }

      const user = {
        email: authData.user.email || '',
        names: profile.names,
        lastNames: profile.last_names,
        accessLevel: profile.access_level,
        createdAt: authData.user.created_at
      };

      setUser(user);
      sessionStorage.setItem('user', JSON.stringify(user));
      return { success: true };
    } catch (error) {
      return {
        success: false,
        message: 'Usuario o contraseña incorrectos'
      };
    }
  };

  const logout = () => {
    setUser(null);
    sessionStorage.removeItem('user');
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}