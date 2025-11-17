import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { LayOut } from './components';
import {
  Home,
  About,
  FNG,
  Locations,
  RolesDescriptions,
  Genesis,
  Spark,
  HogWild,
  BackBlastsData,
  BackBlasts,
  Contact,
} from './pages';
import './App.css';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LayOut />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="fng" element={<FNG />} />
          <Route path="locations" element={<Locations />} />

          <Route path="f3-roles-descriptions" element={<RolesDescriptions />} />
          <Route path="f3-nwa-the-genesis-metrics" element={<Genesis />} />
          <Route path="f3-nwa-the-spark-metrics" element={<Spark />} />
          <Route path="f3-nwa-hog-wild-metrics" element={<HogWild />} />
          <Route path="backblasts-data" element={<BackBlastsData />} />
          <Route path="backblasts" element={<BackBlasts />} />

          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
export default App;
