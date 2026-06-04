import { useNavigate, useParams } from 'react-router-dom';
import { useState } from 'react';

const projects = [
  {
    id: '1',
    title: 'Проект 1',
    description: 'Короткое описание проекта — концепция, стиль, площадь и общий характер пространства.',
    tasks: [
      'Разработка концепции и дизайн-проекта',
      'Авторский надзор на всех этапах',
      'Комплектация и подбор материалов',
    ],
    images: ['/placeholder.jpg', '/placeholder.jpg', '/placeholder.jpg'],
  },
  {
    id: '2',
    title: 'Проект 2',
    description: 'Короткое описание проекта — концепция, стиль, площадь и общий характер пространства.',
    tasks: [
      'Разработка архитектурной визуализации',
      'Планировочные решения',
      'Подбор отделочных материалов',
    ],
    images: ['/placeholder.jpg', '/placeholder.jpg', '/placeholder.jpg'],
  },
  {
    id: '3',
    title: 'Проект 3',
    description: 'Короткое описание проекта — концепция, стиль, площадь и общий характер пространства.',
    tasks: [
      'Дизайн-проект интерьера',
      'Расстановка мебели и свет',
      'Авторский надзор',
    ],
    images: ['/placeholder.jpg', '/placeholder.jpg', '/placeholder.jpg'],
  },
  {
    id: '4',
    title: 'Проект 4',
    description: 'Короткое описание проекта — концепция, стиль, площадь и общий характер пространства.',
    tasks: [
      'Разработка дизайн-проекта',
      'Авторский надзор',
      'Подбор мебели и материалов',
    ],
    images: ['/placeholder.jpg', '/placeholder.jpg', '/placeholder.jpg'],
  },
  {
    id: '5',
    title: 'Проект 5',
    description: 'Короткое описание проекта — концепция, стиль, площадь и общий характер пространства.',
    tasks: [
      'Архитектурная визуализация',
      'Планировочные решения',
      'Комплектация объекта',
    ],
    images: ['/placeholder.jpg', '/placeholder.jpg', '/placeholder.jpg'],
  },
];

export default function Project() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [currentSlide, setCurrentSlide] = useState(0);

  const project = projects.find((p) => p.id === id) ?? projects[0];
  const currentProjectIndex = projects.findIndex((p) => p.id === project.id);
  const prevProject = projects[currentProjectIndex - 1];
  const nextProject = projects[currentProjectIndex + 1];

  return (
    <div className="min-h-screen bg-white">
      {/* Back */}
      <button
        onClick={() => navigate('/')}
        className="fixed top-6 left-8 z-50 text-xs tracking-widest uppercase text-stone-400 transition-colors hover:text-stone-700"
      >
        ← Главная
      </button>

      {/* Full-screen visualization */}
      <div className="relative h-screen w-full overflow-hidden bg-stone-100">
        <img
          src={project.images[currentSlide]}
          alt={`${project.title} — визуализация ${currentSlide + 1}`}
          className="h-full w-full object-cover"
        />

        {/* Slide counter */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-3">
          {project.images.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentSlide(i)}
              className={`h-1 transition-all duration-300 ${
                currentSlide === i ? 'w-10 bg-white' : 'w-6 bg-white/40 hover:bg-white/70'
              }`}
              aria-label={`Лист ${i + 1}`}
            />
          ))}
        </div>

        {/* Arrow prev */}
        {currentSlide > 0 && (
          <button
            onClick={() => setCurrentSlide((s) => s - 1)}
            className="absolute left-6 top-1/2 -translate-y-1/2 z-20 text-white/60 text-4xl transition-colors hover:text-white"
          >
            ‹
          </button>
        )}

        {/* Arrow next */}
        {currentSlide < project.images.length - 1 && (
          <button
            onClick={() => setCurrentSlide((s) => s + 1)}
            className="absolute right-6 top-1/2 -translate-y-1/2 z-20 text-white/60 text-4xl transition-colors hover:text-white"
          >
            ›
          </button>
        )}
      </div>

      {/* Description */}
      <div className="container mx-auto max-w-3xl px-8 py-16 md:px-16">
        <h1 className="mb-6 text-4xl font-light tracking-wide text-stone-800">{project.title}</h1>
        <p className="mb-10 text-lg font-light leading-relaxed text-stone-500">{project.description}</p>

        <div>
          <h2 className="mb-5 text-xs tracking-widest uppercase text-stone-400">Задачи проекта</h2>
          <ul className="space-y-3">
            {project.tasks.map((task, i) => (
              <li key={i} className="flex items-start gap-3 text-stone-600">
                <span className="mt-1 h-px w-4 flex-shrink-0 bg-stone-300" />
                {task}
              </li>
            ))}
          </ul>
        </div>

        {/* Project navigation */}
        <div className="mt-16 flex justify-between text-xs tracking-widest uppercase text-stone-300">
          <div>
            {prevProject && (
              <button
                onClick={() => { setCurrentSlide(0); navigate(`/project/${prevProject.id}`); }}
                className="transition-colors hover:text-stone-600"
              >
                ← {prevProject.title}
              </button>
            )}
          </div>
          <div>
            {nextProject && (
              <button
                onClick={() => { setCurrentSlide(0); navigate(`/project/${nextProject.id}`); }}
                className="transition-colors hover:text-stone-600"
              >
                {nextProject.title} →
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}