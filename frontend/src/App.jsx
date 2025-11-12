// frontend/src/App.jsx
import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import Section from './components/Section.jsx';
import Incentives from './components/Incentives.jsx';
import ContactForm from './components/ContactForm.jsx';
import Footer from './components/Footer.jsx';

const sectionData = [
  {
    id: 'cose',
    eyebrow: "COS'E'",
    title: 'Più luce, più efficienza con i serramenti K•LINE',
    body:
      'Profilo in alluminio a taglio termico, grandi superfici vetrate e finiture sartoriali garantiscono performance energetiche e comfort visivo in ogni ambiente professionale.'
  },
  {
    id: 'funziona',
    eyebrow: 'COME FUNZIONA',
    title: 'Workflow di progettazione e posa senza attriti',
    body:
      'Sopralluogo, rilievi digitali, configurazione serramenti su misura e posa certificata: un flusso coordinato che riduce tempi e imprevisti su cantieri complessi.'
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
          <Section key={section.id} {...section} />
        ))}
        <Incentives />
        <ContactForm />
      </main>
      <Footer />
    </>
  );
}