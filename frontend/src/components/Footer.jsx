// frontend/src/components/Footer.jsx
export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <p>© {new Date().getFullYear()} K•LINE Italia · Divisione Terziario</p>
        <a href="#hero">Torna su</a>
      </div>
    </footer>
  );
}