import { useState } from 'react';
import logo from '../assets/img/logo-1.svg';

const navItems = [
  { id: 'cose', label: "Cos'è" },
  { id: 'funziona', label: 'Come funziona' },
  { id: 'incentivi', label: 'Incentivi' },
  { id: 'perche', label: 'Perché K-LINE' }
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const handleNav = (id) => {
    const target = document.getElementById(id);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setIsOpen(false);
    }
  };

  return (
    <header className="site-header">
      <div className="container">
        <div className="logo">
          <img src={logo} alt="K-LINE" />
        </div>
        <button
          className="nav-toggle"
          aria-label="Apri menu"
          onClick={() => setIsOpen((prev) => !prev)}
        >
          <span />
          <span />
          <span />
        </button>
        <nav className={isOpen ? 'open' : ''}>
          {navItems.map((item) => (
            <button key={item.id} onClick={() => handleNav(item.id)}>
              {item.label}
            </button>
          ))}
        </nav>
      </div>
    </header>
  );
}
