// frontend/src/components/ContactForm.jsx
import { useState } from 'react';
import { submitLead } from '../api/apiClient.js';

const defaultState = { company: '', email: '', message: '', consent: false };

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
    <section className="section section--contact">
      <div className="container">
        <p className="section__eyebrow">RICHIEDI UNA CONSULENZA</p>
        <h2>Parliamo del tuo progetto</h2>
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