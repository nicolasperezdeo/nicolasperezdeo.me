import { Hero } from './sections/Hero';
import { Skills } from './sections/Skills';
import { Experience } from './sections/Experience';
import { Publications } from './sections/Publications';
import { Education } from './sections/Education';
import { Languages } from './sections/Languages';
import { Footer } from './sections/Footer';

function App() {
  return (
    <div className="relative min-h-screen overflow-hidden text-neutral-900">
      {/* Warm bright background with light gradient */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-[#F5F1E9] via-[#FBF4BD] to-white" />
      {/* Subtle moving glow */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_left,_rgba(255,255,255,0.7)_0%,_transparent_60%)] blur-3xl" />

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