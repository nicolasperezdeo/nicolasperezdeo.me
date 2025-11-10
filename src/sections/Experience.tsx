import { experiences } from '../data/profile';
import { Section } from '../components/Section';
import { ExperienceCard } from '../components/ExperienceCard';

export function Experience() {
  return (
    <Section id="experience" title="Professional Experience" eyebrow="Career">
      <div className="grid gap-8">
        {experiences.map((experience, index) => (
          <ExperienceCard key={experience.role + experience.period} {...experience} index={index} />
        ))}
      </div>
    </Section>
  );
}
