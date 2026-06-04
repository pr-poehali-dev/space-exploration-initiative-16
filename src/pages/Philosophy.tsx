import { useNavigate } from 'react-router-dom';

const quotes = [
  {
    text: 'Архитектура — это застывшая музыка. Каждое пространство звучит по-своему.',
    author: '',
  },
  {
    text: 'Хороший дизайн невидим. Он просто делает жизнь удобнее и красивее.',
    author: '',
  },
  {
    text: 'Я верю, что каждый интерьер должен рассказывать историю человека, который в нём живёт.',
    author: '',
  },
];

export default function Philosophy() {
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

      <div className="container mx-auto max-w-2xl px-8 py-24 md:px-16 md:py-32">

        <h1 className="mb-20 text-4xl font-light tracking-wide text-stone-800 md:text-5xl">
          Философия
        </h1>

        <div className="space-y-20">
          {quotes.map((q, i) => (
            <div key={i} className="relative">
              <span className="absolute -top-4 -left-2 text-6xl font-serif text-stone-100 select-none">
                "
              </span>
              <blockquote className="relative z-10 text-xl font-light leading-relaxed text-stone-700 md:text-2xl">
                {q.text}
              </blockquote>
              {q.author && (
                <p className="mt-4 text-sm tracking-widest uppercase text-stone-400">
                  — {q.author}
                </p>
              )}
            </div>
          ))}
        </div>

        {/* Next */}
        <div className="mt-24 flex gap-8 text-xs tracking-widest uppercase text-stone-300">
          <button onClick={() => navigate('/experience')} className="transition-colors hover:text-stone-600">
            ← Опыт
          </button>
          <button onClick={() => navigate('/project/1')} className="transition-colors hover:text-stone-600">
            Проекты →
          </button>
        </div>
      </div>
    </div>
  );
}
