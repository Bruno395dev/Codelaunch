import React from 'react';

interface NavMenuProps {
  onNavigate: (sectionId: string) => void;
}

const NavMenu: React.FC<NavMenuProps> = ({ onNavigate }) => {
  return (
    <nav className="nav">
      <div className="container nav-content">
        <div className="nav-logo">
          Mi Landing Page
        </div>
        <ul className="nav-links">
          <li>
            <button
              onClick={() => onNavigate('inicio')}
              className="nav-link"
            >
              Inicio
            </button>
          </li>
          <li>
            <button
              onClick={() => onNavigate('contacto')}
              className="nav-link"
            >
              Contacto
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavMenu;