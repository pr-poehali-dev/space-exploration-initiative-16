import { useNavigate } from 'react-router-dom';

const projects = [
  { id: '1', title: 'Проект 1', cover: '/placeholder.jpg' },
  { id: '2', title: 'Проект 2', cover: '/placeholder.jpg' },
  { id: '3', title: 'Проект 3', cover: '/placeholder.jpg' },
  { id: '4', title: 'Проект 4', cover: '/placeholder.jpg' },
  { id: '5', title: 'Проект 5', cover: '/placeholder.jpg' },
];

export default function ProjectsGrid() {
  const navigate = useNavigate();

  return (
    <section className="bg-white px-8 py-20 md:px-16 md:py-28">
      <div className="container mx-auto max-w-5xl">
        <h2 className="mb-12 text-xs tracking-widest uppercase text-stone-400">Проекты</h2>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <button
              key={p.id}
              onClick={() => navigate(`/project/${p.id}`)}
              className="group relative aspect-[4/3] overflow-hidden bg-stone-100 text-left"
            >
              <img
                src={p.cover}
                alt={p.title}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/0 transition-colors duration-300 group-hover:bg-black/30" />
              <div className="absolute bottom-0 left-0 right-0 translate-y-full p-5 transition-transform duration-300 group-hover:translate-y-0">
                <p className="text-sm tracking-widest uppercase text-white">{p.title}</p>
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
