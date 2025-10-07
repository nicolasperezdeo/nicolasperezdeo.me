import { Hero } from './sections/Hero';
import { Skills } from './sections/Skills';
import { Experience } from './sections/Experience';
import { Publications } from './sections/Publications';
import { Education } from './sections/Education';
import { Footer } from './sections/Footer';

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <Hero />
      <main>
        <Skills />
        <Experience />
        <Publications />
        <Education />
      </main>
      <Footer />
    </div>
  );
}

export default App;
