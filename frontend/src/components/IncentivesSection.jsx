import shuttersIcon from '../assets/img/SVG/tapparelle- 1.svg';
import windowsIcon from '../assets/img/SVG/SVG/finestre.svg';
import money8100 from '../assets/img/SVG/8100-euro.svg';
import money14400 from '../assets/img/SVG/SVG/14,400.svg';
import payoutIcon from '../assets/img/SVG/03-.svg';

const flows = [
  {
    title: ['Schermature', 'Solari'],
    cap: '100.000€',
    exampleLabel: '60MQ',
    exampleIcon: shuttersIcon,
    amountIcon: money8100
  },
  {
    title: ['Serramenti'],
    cap: '500.000€',
    exampleLabel: '40MQ',
    exampleIcon: windowsIcon,
    amountIcon: money14400
  }
];

function Flow({ title, cap, exampleLabel, exampleIcon, amountIcon }) {
  return (
    <article className="incentive-flow">
      <header className="incentive-flow__head">
        <div className="incentive-flow__title">
          {title.map((line) => (
            <span key={line}>{line}</span>
          ))}
        </div>
        <p className="incentive-flow__cap">
          Ottieni fino a <strong>{cap}</strong> di incentivo
        </p>
      </header>

      <div className="incentive-flow__steps">
        <div className="flow-step">
          <p className="flow-step__eyebrow">Esempio:</p>
          <div className="flow-step__panel">
            <img src={exampleIcon} alt="Esempio superficie" />
            
          </div>
        </div>

        <div className="flow-arrow" aria-hidden>
          <span>›</span>
        </div>

        <div className="flow-step">
          <div className="flow-step__circle">
            <img src={amountIcon} alt="Importo incentivo" />
          </div>
        </div>

        <div className="flow-arrow" aria-hidden>
          <span>›</span>
        </div>

        <div className="flow-step">
          <div className="flow-step__circle flow-step__circle--note">
            <img src={payoutIcon} alt="Pagato dal GSE" />
          
          </div>
        </div>
      </div>
    </article>
  );
}

export default function IncentivesSection() {
  return (
    <section className="incentives-flow" id="incentivi">
      <div className="container">
        <div className="incentives-flow__intro">
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

        {flows.map((flow) => (
          <Flow key={flow.cap} {...flow} />
        ))}
      </div>
    </section>
  );
}
