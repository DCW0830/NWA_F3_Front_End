import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { LayOut } from './components';
import { Home, About, Contact } from './pages';
import './App.css';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LayOut />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
export default App;
