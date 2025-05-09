import { useAuth } from "@/contexts/AuthContext";
import { useRouter } from "next/navigation";

// hooks/useLogout.ts
export const useLogout = () => {
  const { logout } = useAuth();
  const router = useRouter();

  const handleLogout = async () => {
    try {
      await logout();
      router.push('/login');
    } catch (error) {
      console.error("Error al cerrar sesión:", error);
    }
  };

  return { handleLogout };
};