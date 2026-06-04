import { useNavigate } from 'react-router-dom';

const skills = [
  { category: 'Визуализация', items: ['3ds Max', 'V-Ray / Corona', 'Lumion', 'Twinmotion'] },
  { category: 'Проектирование', items: ['AutoCAD', 'Revit', 'ArchiCAD', 'SketchUp'] },
  { category: 'Графика и подача', items: ['Adobe Photoshop', 'Adobe InDesign', 'Illustrator'] },
  { category: 'Прочее', items: ['MS Office', 'Управление проектом', 'Комплектация'] },
];

const education = [
  {
    year: '20__',
    title: 'Высшее профильное образование',
    place: 'Название учебного заведения',
    desc: 'Специальность: Архитектура / Дизайн интерьеров',
  },
];

const experience = [
  {
    period: '20__ — наст. время',
    role: 'Архитектор-визуализатор · Дизайнер интерьеров',
    place: 'Фриланс / Студия',
    desc: 'Разработка дизайн-проектов, авторский надзор, комплектация. Реализованные объекты.',
  },
];

export default function Experience() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white">
      {/* Back */}
      <button
        onClick={() => navigate('/')}
        className="fixed top-6 left-8 z-50 text-xs tracking-widest uppercase text-stone-400 transition-colors hover:text-stone-700"
      >
        ← Главная
      </button>

      <div className="container mx-auto max-w-3xl px-8 py-24 md:px-16 md:py-32">

        {/* Heading */}
        <h1 className="mb-16 text-4xl font-light tracking-wide text-stone-800 md:text-5xl">
          Опыт и навыки
        </h1>

        {/* Experience */}
        <section className="mb-16">
          <h2 className="mb-8 text-xs tracking-widest uppercase text-stone-400">Опыт работы</h2>
          <div className="space-y-10">
            {experience.map((e, i) => (
              <div key={i} className="flex flex-col gap-1 border-l-2 border-stone-100 pl-6">
                <span className="text-xs tracking-widest uppercase text-stone-400">{e.period}</span>
                <span className="text-lg font-light text-stone-800">{e.role}</span>
                <span className="text-sm text-stone-500">{e.place}</span>
                <p className="mt-1 text-sm leading-relaxed text-stone-400">{e.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Skills */}
        <section className="mb-16">
          <h2 className="mb-8 text-xs tracking-widest uppercase text-stone-400">Владение программами</h2>
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {skills.map((group) => (
              <div key={group.category}>
                <p className="mb-3 text-xs font-medium tracking-wide text-stone-600">{group.category}</p>
                <ul className="space-y-1">
                  {group.items.map((item) => (
                    <li key={item} className="text-sm text-stone-400">{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Education */}
        <section>
          <h2 className="mb-8 text-xs tracking-widest uppercase text-stone-400">Образование</h2>
          <div className="space-y-8">
            {education.map((ed, i) => (
              <div key={i} className="flex flex-col gap-1 border-l-2 border-stone-100 pl-6">
                <span className="text-xs tracking-widest uppercase text-stone-400">{ed.year}</span>
                <span className="text-lg font-light text-stone-800">{ed.title}</span>
                <span className="text-sm text-stone-500">{ed.place}</span>
                <p className="mt-1 text-sm leading-relaxed text-stone-400">{ed.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Next */}
        <div className="mt-20 flex gap-8 text-xs tracking-widest uppercase text-stone-300">
          <button onClick={() => navigate('/philosophy')} className="transition-colors hover:text-stone-600">
            Философия →
          </button>
          <button onClick={() => navigate('/project/1')} className="transition-colors hover:text-stone-600">
            Проекты →
          </button>
        </div>
      </div>
    </div>
  );
}
