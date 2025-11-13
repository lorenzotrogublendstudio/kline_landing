import { useRef } from 'react';
import introImage from '../assets/img/low-angle-view-modern-building-against-cloudy-sky.jpg';
import howBadge from '../assets/img/SVG/Bollo.svg';
import howImage from '../assets/img/building-pattern.jpg';
import gallery01 from '../assets/img/bella-ripresa-di-un-edificio-moderno-blu-con-vetrate-perfette-per-architetture.jpg';
import gallery02 from '../assets/img/palazzo.jpg';
import gallery03 from '../assets/img/building-with-modern-design.jpg';
import gallery04 from '../assets/img/low-angle-view-building-against-clear-blue-sky.jpg';
import gallery05 from '../assets/img/array-windows-if-old-neoclassical-style-palace-vienna.jpg';

const defaultGallery = [gallery01, gallery02, gallery03, gallery04, gallery05];

export default function Section({
  id,
  eyebrow,
  title,
  body,
  variant = 'default',
  copy,
  stats = [],
  gallery = []
}) {
  const galleryRef = useRef(null);

  const scrollGallery = (direction) => {
    const slider = galleryRef.current;
    if (!slider) return;
    const distance = slider.getBoundingClientRect().width * 0.9;
    slider.scrollBy({ left: direction * distance, behavior: 'smooth' });
  };

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
                  {item.description && <p className="intro-stat__description">{item.description}</p>}
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

if (variant === 'gallery') {
  const slides = gallery.length ? gallery : defaultGallery;
  const highlights = Array.isArray(copy) ? copy : [];

  return (
    <section id={id} className="section section--gallery">
      <div className="gallery-slider__intro container">
        <p className="section__eyebrow">{eyebrow}</p>
        <h2>{title}</h2>
        <p className="gallery-slider__lead">{body}</p>
      </div>

      <div className="gallery-slider" id={`${id}-slider`}>
        <button
          type="button"
          className="gallery-arrow gallery-arrow--prev"
          aria-label="Slide precedente"
          onClick={() =>
            document
              .getElementById(`${id}-track`)
              ?.scrollBy({ left: -window.innerWidth * 0.9, behavior: 'smooth' })
          }
        >
          ‹
        </button>

        <div className="gallery-track" id={`${id}-track`}>
          {slides.map((image, index) => (
            <figure key={`${image}-${index}`} className="gallery-slide">
              <img src={image} alt="Referenze K•LINE" loading="lazy" />
            </figure>
          ))}
        </div>

        <button
          type="button"
          className="gallery-arrow gallery-arrow--next"
          aria-label="Slide successiva"
          onClick={() =>
            document
              .getElementById(`${id}-track`)
              ?.scrollBy({ left: window.innerWidth * 0.9, behavior: 'smooth' })
          }
        >
          ›
        </button>
      </div>

      {highlights.length > 0 && (
        <div className="gallery-slider__notes container">
          <ul>
            {highlights.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      )}
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
