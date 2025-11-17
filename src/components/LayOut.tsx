import { Outlet, useLocation } from 'react-router-dom';
import { NavBar } from './NavBar';
import { TitleBar } from './TitleBar';
import { Footer } from './Footer';
import { ScrollToTop } from './ScrollToTop';
import { PageWrapper, MainContent } from './styled';

const pageTitles: Record<string, string> = {
  '/': 'Home',
  '/about': 'About',
  '/fng': 'FNG',
  '/locations': 'Locations',
  '/contact': 'Contact Us',
  '/f3-roles-descriptions': 'F3 Roles Descriptions',
  '/f3-nwa-the-genesis-metrics': 'F3 NWA The Genesis Metrics',
  '/f3-nwa-the-spark-metrics': 'F3 NWA The Spark Metrics',
  '/f3-nwa-hog-wild-metrics': 'F3 NWA Hog Wild Metrics',
  '/backblasts-data': 'Backblasts Data',
  '/backblasts': 'BackBlasts',
};

export const LayOut = () => {
  const location = useLocation();
  const title = pageTitles[location.pathname] || 'F3 NWA';

  return (
    <PageWrapper>
      <NavBar />
      <TitleBar title={title} />
      <MainContent>
        <Outlet />
      </MainContent>
      <Footer />
      <ScrollToTop />
    </PageWrapper>
  );
};
