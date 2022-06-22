import type { NextPage } from 'next';
import { useAuthContext } from '../context/AuthContext';

const Home: NextPage = () => {
  const { user } = useAuthContext();
  return (
    <div>
      Uid: {user.uid} <br />
      Email: {user.email} <br />
      DisplayName: {user.displayName} <br />
    </div>
  );
};

export default Home;
