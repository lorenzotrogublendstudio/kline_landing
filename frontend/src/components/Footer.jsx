import logo from '../assets/img/logo-1.svg';
const navLinks = [
  { label: "Cos'è", href: '#cose' },
  { label: 'Come funziona', href: '#funziona' },
  { label: 'Incentivi', href: '#incentivi' },
  { label: 'Perché K•LINE', href: '#perche' }
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="container footer__grid">
        <div className="footer__brand">
          <img src={logo} alt="K-LINE" />
          <p className="footer__baseline">La finestra luminosa</p>
        </div>

        <nav className="footer__links">
          {navLinks.map((item) => (
            <a key={item.label} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>

        <div className="footer__contact">
         <p>© {year} K•LINE Italia <br /> Divisione Terziario</p>
          <p>Viale Europa 22 · Milano</p>
        </div>
      </div>

     
    </footer>
  );
}