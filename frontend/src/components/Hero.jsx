import heroBg from '../assets/img/sun-reflected-windows-office-building.jpg';

export default function Hero() {
  return (
    <section
      id="hero"
      className="hero hero--banner"
      style={{ backgroundImage: `url(${heroBg})` }}
    >
      <div className="container hero__container">
        <div className="hero__content hero__content--left">
          <span className="hero__eyebrow">TERZIARIO · BONUS 2024</span>
          <h1 className="hero__headline">
            <span className="hero__headline-line">NUOVO</span>
            <span className="hero__headline-line">CONTO</span>
            <span className="hero__headline-line hero__headline-line--accent">
              TERMICO <strong>3.0</strong>
            </span>
          </h1>
          <p className="hero__subtitle">L'EFFICIENZA È SCONTATA</p>
          <p className="hero__tagline">
            RIQUALIFICA IL TUO EDIFICIO CON I NUOVI INCENTIVI
          </p>
        
          <div className="hero__cta">
            <a href="#incentivi" className="btn btn--primary">
              Scopri gli incentivi
            </a>
            <a href="#perche" className="btn btn--ghost">
              Perché K-LINE
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}


