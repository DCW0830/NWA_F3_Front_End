import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { LayOut } from './components';
import { Home, About, Contact, Locations, FNG } from './pages';
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
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
export default App;
