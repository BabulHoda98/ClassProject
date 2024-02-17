
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import SimpleBottomNavigation from './components/MainNav';
import Trending from './pages/Trending/Trending';
import Movies from './pages/Movies/Movies';
import Series from './pages/Series/Series';
import Search from './pages/Search/Search';
import Pagenotfound from './pages/Pagenotfound/Pagenotfound';

function App() {
  return (
    <>
      <Header />
      <BrowserRouter>
        <div className="app">
          <Routes>
            <Route path="/" element={<Trending />} />
            <Route path="/movies" element={<Movies />} />
            <Route path="/series" element={<Series />} />
            <Route path="/search" element={<Search />} />
            <Route path="*" element={<Pagenotfound />} />
          </Routes>
        </div >
            <SimpleBottomNavigation />

      </BrowserRouter>
      
    </>


  );
}

export default App;
