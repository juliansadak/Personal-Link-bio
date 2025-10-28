import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Asegúrate de tener un archivo CSS para estilos

const Navbar: React.FC = () => {
    return (
        <nav className="navbar">
            <ul>
                <li>
                    <Link to="/">Inicio</Link>
                </li>
                <li>
                    <Link to="/projects">Proyectos</Link>
                </li>
                <li>
                    <Link to="/about">Acerca de</Link>
                </li>
                <li>
                    <Link to="/contact">Contacto</Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;