import './App.css';
import { Link } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';


//Pages&Components
import Home from './pages/Home';
import Newslist from './components/NewsList';
import NewsItems from './components/NewsItems';
import NewsDetails from './components/NewsDetails';
import About from './pages/About';
import Contact from './pages/Contact';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/:id' element={<NewsDetails />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
