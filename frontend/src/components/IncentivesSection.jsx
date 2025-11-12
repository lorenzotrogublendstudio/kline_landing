import iconOne from '../assets/img/SVG/03-.svg';
import iconTwo from '../assets/img/SVG/8100-euro.svg';
import iconThree from '../assets/img/SVG/tapparelle- 1.svg';

const cards = [
  {
    icon: iconOne,
    title: 'Fino al 65%',
    text: 'Contributo a fondo perduto sulle spese ammissibili per interventi di riqualificazione energetica.'
  },
  {
    icon: iconTwo,
    title: '€ 8.100',
    text: 'Incentivo diretto erogato dal GSE per serramenti ad alte prestazioni e sistemi di schermatura integrati.'
  },
  {
    icon: iconThree,
    title: 'Privati e Terziario',
    text: 'Accesso per proprietari, affittuari e soggetti con disponibilità dell’immobile, previa autorizzazione.'
  }
];

export default function IncentivesSection() {
  return (
    <section className="section section--card incentives-section" id="incentivi">
      <div className="container">
        <div className="incentives-section__intro">
          <h2>Incentivi</h2>
          <p>
            Per quanto riguarda i privati (residenziale e terziario), possono accedere all’incentivo i
            proprietari dell’immobile, gli affittuari o altri soggetti che abbiano la disponibilità
            dell’immobile, previa autorizzazione da parte del proprietario.
          </p>
          <p>
            Per tali interventi incentiviabili concorrono alla determinazione delle spese ammissibili ai fini
            dell’incentivo quelle di seguito elencate, comprensive di IVA, dove essa costituisca un costo.
          </p>
        </div>
        <div className="incentives-section__grid">
          {cards.map((card) => (
            <article key={card.title} className="incentive-card">
              <img src={card.icon} alt="" aria-hidden="true" />
              <div className="incentive-card__content">
                <h3>{card.title}</h3>
                <p>{card.text}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
