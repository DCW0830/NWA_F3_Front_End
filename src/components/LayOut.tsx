import { Outlet } from 'react-router-dom';
import { NavBar } from './NavBar';
import { PageWrapper, MainContent } from './styled';

export const LayOut = () => {
  return (
    <PageWrapper>
      <NavBar />
      <MainContent>
        <Outlet />
      </MainContent>
    </PageWrapper>
  );
};
