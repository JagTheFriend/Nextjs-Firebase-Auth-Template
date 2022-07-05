import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import { useAuthContext } from '../context/AuthContext';

const Home: NextPage = () => {
  const { user, logout } = useAuthContext();
  const router = useRouter();
  if (!user) {
    router.push('/login');
    return <>hello</>;
  }
  const logoutUser = async () => {
    await logout()
  }
  return (
    <div>
      Uid: {user.uid} <br />
      Email: {user.email} <br />
      DisplayName: {user.displayName} <br />
      <button onClick={logoutUser}>Logout</button>
    </div>
  );
};

export default Home;
