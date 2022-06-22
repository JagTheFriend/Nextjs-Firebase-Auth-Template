import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import { useAuthContext } from '../context/AuthContext';

const LoginPage: NextPage = () => {
  const router = useRouter();
  const { login } = useAuthContext();
  const loginWithGoogle = async () => {
    try {
      await login();
      router.push('/');
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div>
      <button onClick={loginWithGoogle}>Login with google</button>
    </div>
  );
};

export default LoginPage;
