import { Fragment } from 'react';
import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import Section from './components/Section.jsx';
import Interventions from './components/Interventions.jsx';
import IncentivesSection from './components/IncentivesSection.jsx';
import ContactForm from './components/ContactForm.jsx';
import Footer from './components/Footer.jsx';

const sectionData = [
  {
    id: 'cose',
    eyebrow: "COS'È",
    title: 'Il Conto Termico 3.0',
    body:
      'Il contributo in conto capitale che incentiva gli interventi di efficienza energetica per edifici pubblici e privati, con tempistiche di erogazione rapide e copertura fino al 65% dei costi.',
    copy: (
      <>
        Una delle principali novità presenti nel nuovo <strong>Conto Termico 3.0</strong> è
        l’ampliamento della platea dei beneficiari. In sostanza, non solo le{' '}
        <strong>pubbliche amministrazioni</strong>, ma su alcuni prodotti anche i{' '}
        <strong>privati</strong> ed il <strong>terziario</strong> possono accedere agli incentivi per
        interventi di efficientamento energetico.
      </>
    ),
    stats: [
      {
        variant: 'accent',
        title: 'NUOVI INCENTIVI',
        subtitle: '2026'
      },
      {
        variant: 'dark',
        title: '€900',
        subtitle: 'MILIONI',
        description: 'FONDO ANNUO'
      },
      {
        variant: 'dark',
        title: '€400',
        subtitle: 'MILIONI',
        description: 'PER LE PUBBLICHE AMMINISTRAZIONI'
      },
      {
        variant: 'dark',
        title: '€500',
        subtitle: 'MILIONI',
        description: 'PER PRIVATI, IMPRESE E TERZO SETTORE'
      }
    ],
    variant: 'intro'
  },
  {
    id: 'funziona',
    eyebrow: 'COME FUNZIONA',
    title: 'Tempi di rimborso semplificati',
    body: (
      <>
        Per incentivi fino a <strong>15.000€</strong>, il rimborso avviene in un'unica rata entro{' '}
        <strong>2 mesi</strong> dalla richiesta. Per importi superiori, il rimborso è in soli{' '}
        <strong>5 anni</strong> (per serramenti e schermature).
      </>
    ),
    copy: (
      <>
        <strong>Incentivo pagato direttamente sul tuo conto corrente dal GSE.</strong>
      </>
    ),
    variant: 'how'
  },
  {
    id: 'perche',
    eyebrow: "PERCHE' KLINE",
    title: 'Un partner unico per studi, imprese e PA',
    body:
      'Assistenza progettuale, capitolati personalizzati e supporto alla pratica incentivi completano un’offerta verticale sul segmento terziario.'
  }
];

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        {sectionData.map((section) => (
          <Fragment key={section.id}>
            <Section {...section} />
            {section.id === 'funziona' && (
              <>
                <Interventions />
                <IncentivesSection />
              </>
            )}
          </Fragment>
        ))}
        <ContactForm />
      </main>
      <Footer />
    </>
  );
}
