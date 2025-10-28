import React from 'react';

const Header: React.FC = () => {
    return (
        <header>
            <h1>Mi Portafolio</h1>
            <nav>
                <ul>
                    <li><a href="#projects">Proyectos</a></li>
                    <li><a href="#about">Sobre mí</a></li>
                    <li><a href="#contact">Contacto</a></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;