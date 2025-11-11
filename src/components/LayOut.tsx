import { Outlet } from 'react-router-dom';
import { NavBar } from './NavBar';

export const LayOut = () => {
  return (
    <>
      <NavBar />
      <main style={{ padding: '1rem' }}>
        <Outlet />
      </main>
    </>
  );
};
