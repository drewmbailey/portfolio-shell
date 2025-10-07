import { content } from '../constants/content';

export default function ResumePage() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-16">
      <h1 className="text-3xl font-semibold mb-6">{content.resume.title}</h1>
      
      {/* Work Experience Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-8">{content.resume.workExperience.title}</h2>
        <div className="space-y-8">
          {content.resume.workExperience.positions.map((position, index) => (
            <div key={index} className="border-l-4 border-[var(--accent)] pl-6">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                <h3 className="text-xl font-semibold text-[var(--fg)]">{position.title}</h3>
                <span className="text-sm text-[var(--muted-fg)]">{position.duration}</span>
              </div>
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3">
                <h4 className="text-lg font-medium text-[var(--accent)]">{position.company}</h4>
                <span className="text-sm text-[var(--muted-fg)]">{position.location}</span>
              </div>
              <p className="text-[var(--muted-fg)] mb-4">{position.description}</p>
              <ul className="mt-2 flex flex-wrap" aria-label="Technologies used">
                {position.skills.map((skill, skillIndex) => (
                  <li key={skillIndex} className="mr-1.5 mt-2">
                    <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">
                      {skill}
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <a href="/DrewBailey_Resume.pdf" target="_blank" rel="noopener noreferrer" className="inline-block rounded-xl px-5 py-3 border text-[var(--fg)] hover:text-[var(--fg)] shadow neon mt-8">{content.resume.downloadResume}</a>
    </main>
  );
}