import { useState } from 'react';
import { submitLead } from '../api/apiClient.js';

const defaultState = { company: '', email: '', message: '', consent: false };

const infoCards = [
  {
    label: 'Telefono',
    value: '+39 02 1234 567',
    href: 'tel:+39021234567'
  },
  {
    label: 'Email',
    value: 'terziario@kline.it',
    href: 'mailto:terziario@kline.it'
  },
  {
    label: 'Sede operativa',
    value: 'Viale Europa 22 · Milano'
  }
];

export default function ContactForm() {
  const [form, setForm] = useState(defaultState);
  const [status, setStatus] = useState({ state: 'idle', message: '' });

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;
    setForm((prev) => ({ ...prev, [name]: type === 'checkbox' ? checked : value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setStatus({ state: 'loading', message: 'Invio in corso...' });
    try {
      await submitLead(form);
      setStatus({ state: 'success', message: 'Grazie, ti ricontatteremo a breve.' });
      setForm(defaultState);
    } catch (error) {
      setStatus({ state: 'error', message: error.message || 'Errore inatteso.' });
    }
  };

  return (
    <section className="section section--contact" id="contatti">
      <div className="container contact-wrapper">
        <div className="contact-wrapper__info">
          <p className="section__eyebrow">Supporto dedicato</p>
          <h2>Parla con il team K•LINE Terziario</h2>
          <p className="contact-wrapper__lead">
            Consulenza tecnica, mockup e capitolati pronti per gare e appalti. Rispondiamo entro 24 ore
            lavorative con un referente unico per il tuo progetto.
          </p>

          <ul className="contact-wrapper__list">
            {infoCards.map((item) => (
              <li key={item.label}>
                <span>{item.label}</span>
                {item.href ? <a href={item.href}>{item.value}</a> : <strong>{item.value}</strong>}
              </li>
            ))}
          </ul>

          <div className="contact-wrapper__tags">
            <span>24h risposta</span>
            <span>Project manager dedicato</span>
            <span>Copertura nazionale</span>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="contact-form">
          <label>
            Ragione sociale
            <input
              name="company"
              type="text"
              value={form.company}
              onChange={handleChange}
              placeholder="Studio / Impresa / Ente"
              required
            />
          </label>
          <label>
            Email
            <input
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              placeholder="nome@azienda.it"
              required
            />
          </label>
          <label>
            Messaggio
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              rows="4"
              placeholder="Inserisci contesto, tempi e obiettivi"
            />
          </label>
          <label className="checkbox">
            <input
              name="consent"
              type="checkbox"
              checked={form.consent}
              onChange={handleChange}
              required
            />
            Acconsento al trattamento dei dati secondo la privacy policy.
          </label>

          <button type="submit" className="btn btn--primary" disabled={status.state === 'loading'}>
            {status.state === 'loading' ? 'Invio...' : 'Invia richiesta'}
          </button>
          {status.state !== 'idle' && (
            <p className={`form-status form-status--${status.state}`}>{status.message}</p>
          )}
        </form>
      </div>
    </section>
  );
}
