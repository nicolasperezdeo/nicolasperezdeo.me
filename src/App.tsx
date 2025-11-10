import { Hero } from './sections/Hero';
import { Skills } from './sections/Skills';
import { Experience } from './sections/Experience';
import { Publications } from './sections/Publications';
import { Education } from './sections/Education';
import { Footer } from './sections/Footer';
import { Languages } from './sections/Languages';


function App() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-slate-950 text-slate-100">
      {/* Background gradient + glass glow */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-slate-900 via-slate-950 to-black" />
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-cyan-500/10 via-indigo-500/5 to-transparent blur-3xl" />

      <div className="relative z-10 backdrop-blur-[2px]">
        <Hero />
        <main className="relative z-10">
          <Skills />
          <Experience />
          <Publications />
          <Education />
          <Languages />
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;
