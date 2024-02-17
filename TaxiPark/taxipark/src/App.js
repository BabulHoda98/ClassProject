import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home';
import Get_Taxi from './pages/Get_Taxi';
import Services from './pages/Services';
import Our_Blog from './pages/Our_Blog';
import Gallery from './pages/Gallery';
import Shop from './pages/Shop';
import Contacts from './pages/Contacts';
import Pages from './pages/Pages';



function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/gettaxi" element={<Get_Taxi />} />
          <Route path="/services" element={<Services />} />
          <Route path="/ourblog" element={<Our_Blog />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/pages" element={<Pages />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
