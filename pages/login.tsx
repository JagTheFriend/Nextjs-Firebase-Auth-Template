import type { NextPage } from 'next';
import { GoogleAuthProvider, getAuth, signInWithPopup } from 'firebase/auth';
import { useRouter } from 'next/router';
import firebaseApp from '../firebase';

const LoginPage: NextPage = () => {
  const router = useRouter();
  const loginWithGoogle = async () => {
    const provider = new GoogleAuthProvider();
    const auth = getAuth(firebaseApp);
    try {
      const { user } = await signInWithPopup(auth, provider);
      const { refreshToken, providerData } = user;
      localStorage.setItem('user', JSON.stringify(providerData));
      localStorage.setItem('accessToken', JSON.stringify(refreshToken));
      router.push('/');
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <button onClick={loginWithGoogle}>Login with google</button>
    </div>
  );
};

export default LoginPage;
