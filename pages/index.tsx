import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import { useAuthContext } from '../context/AuthContext';

const Home: NextPage = () => {
  const { user } = useAuthContext();
  const router = useRouter();
  if (!user) {
    router.push('/login');
    return <>hello</>;
  }
  return (
    <div>
      Uid: {user.uid} <br />
      Email: {user.email} <br />
      DisplayName: {user.displayName} <br />
    </div>
  );
};

export default Home;
