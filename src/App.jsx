import { BrowserRouter as Router, Routes, Route, Link, Navigate } from 'react-router-dom';
import NavBar from './components/NavBar.jsx'
import Home from './pages/Home.jsx'
import Carta from './pages/Carta.jsx'
import Footer from './components/Footer.jsx';


function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-b from-sky-200 via-white to-sky-200">
        <NavBar/>
        {/* <nav className="bg-white shadow p-4 flex justify-center space-x-4">
          <Link to="/" className="text-blue-800 font-semibold hover:text-yellow-600">Inicio</Link>
          <Link to="/menu" className="text-blue-800 font-semibold hover:text-yellow-600">Menú</Link>
          <Link to="/nosotros" className="text-blue-800 font-semibold hover:text-yellow-600">Nosotros</Link>
          <Link to="/contacto" className="text-blue-800 font-semibold hover:text-yellow-600">Contacto</Link>
        </nav> */}
        <div className="h-[70px]" />

        {/* Contenido de la ruta actual */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/carta" element={<Carta />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
