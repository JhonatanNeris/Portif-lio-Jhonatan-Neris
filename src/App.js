import './App.css';
import Navbar from './components/Navbar';

// Import do Router
import { BrowserRouter, Routes, Route, Navigate} from "react-router-dom";

//Import de componentes
import Home from './pages/Home/Home';
import Footer from './components/Footer';
import Projects from './pages/Projects/Projects';
import Certificates from './pages/Certificates/Certificates';
import Contacts from './pages/Contacts/Contacts';
import About from './pages/About/About';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/projects' element={<Projects/>} />
          <Route path='/certificates' element={<Certificates/>} />          
          <Route path='/about' element={<About/>} /> 
          <Route path='/contacts' element={<Contacts/>} />          
        </Routes>
        <Footer />
      </BrowserRouter>
      
    </div>
  );
}

export default App;
