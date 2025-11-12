// frontend/src/components/Incentives.jsx
const incentives = [
  {
    title: 'Credito d’imposta 4.0',
    body:
      'Serramenti K•LINE compatibili con i requisiti CAM e PNRR per interventi di riqualificazione del terziario.'
  },
  {
    title: 'Bonus Barriere 75%',
    body:
      'Profilo ridotto e soglie ribassate rispettano le prescrizioni per l’abbattimento delle barriere architettoniche.'
  },
  {
    title: 'Superbonus condomini',
    body:
      'Supporto completo per asseverazioni, APE e computi metrici necessari alla pratica.'
  }
];

export default function Incentives() {
  return (
    <section id="incentivi" className="section section--band">
      <div className="container">
        <div className="section__head">
          <p className="section__eyebrow">INCENTIVI</p>
          <h2>Accelera il ROI sfruttando i bonus in vigore.</h2>
        </div>
        <div className="card-grid">
          {incentives.map((item) => (
            <article key={item.title} className="info-card">
              <h3>{item.title}</h3>
              <p>{item.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}