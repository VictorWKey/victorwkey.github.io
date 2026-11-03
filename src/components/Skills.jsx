import { useTranslations } from '../i18n/index.js';
import { skillGroups } from '../data/skills.js';
import SkillIcon from './SkillIcon.jsx';

function SkillList({ items, muted = false }) {
  return (
    <ul className="flex flex-wrap gap-2" role="list">
      {items.map((item) => (
        <li key={item} className={`inline-flex max-w-full items-center gap-2 rounded-lg px-3 py-1.5 text-sm leading-relaxed ${muted ? 'bg-white text-gray-600 dark:bg-night-raised dark:text-night-body' : 'bg-gray-100 text-gray-700 dark:bg-night-raised dark:text-night-body'}`}>
          <SkillIcon label={item} />
          <span className="min-w-0">{item}</span>
        </li>
      ))}
    </ul>
  );
}

export default function Skills({ lang = 'en' }) {
  const t = useTranslations(lang);
  const groups = skillGroups[lang] || skillGroups.en;
  const practicalGroups = groups.filter((group) => group.id !== 'familiar');
  const familiarGroup = groups.find((group) => group.id === 'familiar');

  return (
    <section id="skills" aria-labelledby="skills-title" className="w-full py-20 px-6 scroll-mt-20 bg-white dark:bg-night-canvas">
      <div className="mx-auto w-full max-w-4xl">
        <h2 id="skills-title" className="section-heading text-center mb-3 text-gray-900 dark:text-night-heading">{t.skills.sectionTitle}</h2>
        <p className="section-subheading text-center mb-10">{t.skills.sectionSubtitle}</p>
        <div className="grid gap-4 md:grid-cols-2">
          {practicalGroups.map((group) => (
            <article key={group.id} aria-labelledby={`skill-group-${group.id}`} className={`rounded-2xl border p-5 sm:p-6 ${group.id === 'generative-ai' ? 'md:col-span-2 border-primary-200 bg-primary-50/40 dark:border-night-accent/45 dark:bg-night-surface' : 'border-gray-200 bg-white dark:border-night-line dark:bg-night-surface'}`}>
              <h3 id={`skill-group-${group.id}`} className="flex items-center gap-2.5 text-base font-semibold mb-4 text-gray-900 dark:text-night-heading">
                <span aria-hidden="true" className={`h-2 w-2 shrink-0 rounded-full ${group.id === 'generative-ai' ? 'bg-primary dark:bg-night-accent' : 'bg-gray-400 dark:bg-night-muted'}`} />
                {group.title}
              </h3>
              <SkillList items={group.items} />
            </article>
          ))}
        </div>
        <div className="mt-5 rounded-2xl bg-gray-50 dark:bg-night-surface p-5 sm:p-6" aria-labelledby="skill-group-familiar">
          <h3 id="skill-group-familiar" className="text-base font-semibold text-gray-700 dark:text-night-body mb-4">{familiarGroup.title}</h3>
          <SkillList items={familiarGroup.items} muted />
        </div>
      </div>
    </section>
  );
}
