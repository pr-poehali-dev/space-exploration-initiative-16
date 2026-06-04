import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { cn } from '@/lib/utils';

const bgImages = [
  '/modern-white-architecture.jpg',
  '/minimalist-creative-workspace-black-and-white.jpg',
  '/modern-design-studio-black-and-white-aesthetic.jpg',
  '/abstract-black-and-white-photography-creative-stud.jpg',
];

export default function HeroSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setIsLoaded(true);
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % bgImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden bg-white">
      {/* Background slideshow */}
      <div className="absolute inset-0">
        {bgImages.map((src, index) => (
          <div
            key={src}
            className={cn(
              'absolute inset-0 transition-opacity duration-1000 ease-in-out',
              currentIndex === index ? 'opacity-100' : 'opacity-0'
            )}
          >
            <img src={src} alt="" className="h-full w-full object-cover" />
          </div>
        ))}
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/70 to-white/20" />

      {/* Content */}
      <div className="relative z-10 flex h-full items-center">
        <div className="container mx-auto px-8 md:px-16">
          <div className="flex flex-col gap-10 max-w-xl">

            {/* Photo */}
            <div
              className={cn(
                'transform transition-all duration-1000 ease-out',
                isLoaded ? 'translate-y-0 opacity-100' : '-translate-y-6 opacity-0'
              )}
            >
              <div className="h-44 w-44 overflow-hidden rounded-full border-2 border-stone-200 shadow-lg md:h-56 md:w-56">
                <img
                  src="/placeholder-user.jpg"
                  alt="Архитектор-визуализатор"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>

            {/* Name & title */}
            <div
              className={cn(
                'transform transition-all duration-1000 delay-200 ease-out',
                isLoaded ? 'translate-y-0 opacity-100' : '-translate-y-6 opacity-0'
              )}
            >
              <p className="text-4xl font-light tracking-wide text-stone-800 md:text-5xl lg:text-6xl">
                Имя Фамилия
              </p>
              <p className="mt-3 text-lg font-light text-stone-500 md:text-xl">
                Архитектор-визуализатор · Дизайнер интерьеров
              </p>
              <p className="mt-1 text-sm text-stone-400 tracking-widest uppercase">
                Опыт более 5 лет · Авторский надзор · Реализованные объекты
              </p>
            </div>

            {/* Contacts */}
            <div
              className={cn(
                'transform transition-all duration-1000 delay-400 ease-out',
                isLoaded ? 'translate-y-0 opacity-100' : '-translate-y-6 opacity-0'
              )}
            >
              <div className="flex flex-wrap gap-4 text-sm text-stone-500">
                <a
                  href="tel:+7"
                  className="flex items-center gap-2 transition-colors hover:text-stone-800"
                >
                  <span>📞</span>
                  <span>+7 (___) ___-__-__</span>
                </a>
                <a
                  href="mailto:"
                  className="flex items-center gap-2 transition-colors hover:text-stone-800"
                >
                  <span>✉️</span>
                  <span>email@example.com</span>
                </a>
                <a
                  href="https://t.me/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 transition-colors hover:text-stone-800"
                >
                  <span>💬</span>
                  <span>Telegram</span>
                </a>
              </div>
            </div>

            {/* Navigation links */}
            <div
              className={cn(
                'transform transition-all duration-1000 delay-500 ease-out',
                isLoaded ? 'translate-y-0 opacity-100' : '-translate-y-6 opacity-0'
              )}
            >
              <nav className="flex flex-wrap gap-6 text-sm tracking-widest uppercase text-stone-400">
                <button
                  onClick={() => navigate('/experience')}
                  className="border-b border-transparent transition-all hover:border-stone-400 hover:text-stone-700"
                >
                  Опыт
                </button>
                <button
                  onClick={() => navigate('/philosophy')}
                  className="border-b border-transparent transition-all hover:border-stone-400 hover:text-stone-700"
                >
                  Философия
                </button>
                <button
                  onClick={() => navigate('/project/1')}
                  className="border-b border-transparent transition-all hover:border-stone-400 hover:text-stone-700"
                >
                  Проекты
                </button>
              </nav>
            </div>

          </div>
        </div>
      </div>

      {/* Slideshow dots */}
      <div className="absolute bottom-8 right-8 z-20 flex gap-2">
        {bgImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={cn(
              'h-1 transition-all duration-300',
              currentIndex === index
                ? 'w-10 bg-stone-600'
                : 'w-6 bg-stone-300 hover:bg-stone-400'
            )}
            aria-label={`Слайд ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
