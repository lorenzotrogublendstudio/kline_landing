// frontend/src/components/Section.jsx
export default function Section({ id, eyebrow, title, body }) {
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