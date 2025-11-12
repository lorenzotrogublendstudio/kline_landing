const columns = ['Pubbliche amministrazioni', 'Privati residenziali', 'Terziario'];

const items = [
  'Isolamento Termico (coperture, pavimenti, pareti perimetrali)',
  'Sostituzione Infissi',
  'Schermature Solari (tende, frangisole, veneziane mobili e fisse)',
  'Ristrutturazione profonda in nZEB',
  'Illuminazione a LED',
  'Sistemi di building automation (BACS)',
  'Pompe di Calore elettriche o a gas',
  'Generatori a Biomassa',
  'Impianti solari termici',
  'Scaldaacqua a pompa di calore',
  'Sistemi ibridi',
  'Stazioni di ricarica elettrica',
  'Impianto fotovoltaico (≤20 kW con 2A)',
  'Allaccio a teleriscaldamento efficiente',
  'Microgenerazione da fonti rinnovabili'
];

export default function Interventions() {
  return (
    <section className="interventions" id="interventi">
      <div className="container interventions__container">
        <h2 className="interventions__heading">Interventi ammessi</h2>
        <div className="interventions__intro">
         
        </div>

        <div className="interventions__table">
          <div className="interventions__table-head">
            <div>Interventi ammessi</div>
            {columns.map((col, index) => (
              <div key={col} className={index === columns.length - 1 ? 'text-highlight' : ''}>
                {col}
              </div>
            ))}
          </div>
          <div className="interventions__table-body">
            {items.map((item) => (
              <div key={item} className="interventions__row">
                <div className="interventions__item">{item}</div>
                {columns.map((col) => (
                  <div key={`${item}-${col}`} className="interventions__check">
                    <span>✓</span>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
