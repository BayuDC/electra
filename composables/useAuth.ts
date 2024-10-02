interface User {
  id: number;
  name: string;
  email: string;
  avatar: string;
  role: 'admin' | 'user';
}

export default function useAuth() {
  return useState<User | null>('auth', () => null);
}

export async function login(): Promise<boolean> {
  const auth = useAuth();
  const { data } = await useMyFetch<User | null>('/auth/me');

  if (!data.value) {
    auth.value = null;
    return false;
  }

  auth.value = data.value;
  return true;
}

export async function silentLogin() {
  onMounted(async () => {
    nextTick(async () => {
      await login();
    });
  });
}
