import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Welcome from './components/Welcome'; // Página de inicio
import Plans from './components/Plans'; // Página de Planes
import TrainingTypes from './components/TrainingTypes'; // Página de Entrenamientos
import Contact from './components/Contact'; // Página de Contacto
import Blog from './components/Blog'; // Página Mi Blog
import Blog1 from './components/Blog1'; // Página específica Blog1
import Blog2 from './components/Blog2';
import Blog3 from './components/Blog3';
import Footer from './components/Footer';
import WhatsAppButton from "./components/WhatsAppButton";

function App() {
  return (
    <Router>
      <Navbar /> {/* Barra de navegación visible en todas las páginas */}
      <Routes>
        <Route path="/" element={<Welcome />} /> {/* Página de Inicio */}
        <Route path="/Plans" element={<Plans />} /> {/* Página de Planes */}
        <Route path="/TrainingTypes" element={<TrainingTypes />} /> {/* Página de Entrenamientos */}
        <Route path="/Contact" element={<Contact />} /> {/* Página de Contacto */}
        <Route path="/Blog" element={<Blog />} /> {/* Página principal del Blog */}
        <Route path="/blog1" element={<Blog1 />} /> {/* Página específica Blog1 */}
        <Route path="/blog2" element={<Blog2 />} />
        <Route path="/blog3" element={<Blog3 />} />
      </Routes>
      <Footer /> {/* Pie de página visible en todas las páginas */}
      <WhatsAppButton /> {/* Agrega el botón flotante */}
    </Router>
  );
}

export default App;
