import introImage from '../assets/img/low-angle-view-modern-building-against-cloudy-sky.jpg';
import howBadge from '../assets/img/SVG/Bollo.svg';
import howImage from '../assets/img/building-pattern.jpg';

export default function Section({
  id,
  eyebrow,
  title,
  body,
  variant = 'default',
  copy,
  stats = []
}) {
  if (variant === 'intro') {
    return (
      <section id={id} className="section section--card section--intro">
        <div className="container intro__container">
          <div className="intro__grid">
            <div className="intro__content">
              <h1 className="intro__heading">{eyebrow}</h1>
              <h2>{title}</h2>
              <p>{body}</p>
              {copy && <p className="intro__copy">{copy}</p>}
            </div>
            <div className="intro__media">
              <img
                src={introImage}
                alt="Serramenti K-LINE installati in edificio moderno"
                loading="lazy"
              />
            </div>
          </div>
          {stats.length > 0 && (
            <div className="intro__stats">
              {stats.map((item, index) => (
                <article
                  key={`${item.title}-${index}`}
                  className={`intro-stat intro-stat--${item.variant ?? 'default'}`}
                >
                  {item.title && <p className="intro-stat__eyebrow">{item.title}</p>}
                  {item.subtitle && <p className="intro-stat__value">{item.subtitle}</p>}
                  {item.description && (
                    <p className="intro-stat__description">{item.description}</p>
                  )}
                </article>
              ))}
            </div>
          )}
        </div>
      </section>
    );
  }

  if (variant === 'how') {
    return (
      <section id={id} className="section section--card section--how">
        <div className="container how__container">
          <div className="how__title">
            <img src={howBadge} alt="Come funziona" loading="lazy" />
            <div className="how__text">
              <p className="section__eyebrow">{eyebrow}</p>
              <h2>{title}</h2>
            </div>
          </div>
          <p className="how__body">{body}</p>
          {copy && <p className="how__copy">{copy}</p>}
          <div className="how__media">
            <img src={howImage} alt="Iter Conto Termico 3.0" loading="lazy" />
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id={id} className="section section--card">
      <div className="container">
        <p className="section__eyebrow">{eyebrow}</p>
        <h2>{title}</h2>
        <p>{body}</p>
      </div>
    </section>
  );
}
