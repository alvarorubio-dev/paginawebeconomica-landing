import { MessageCircle } from 'lucide-react';

const Portfolio = () => {
  const projects = [
    {
      title: 'Demo Restaurante',
      category: 'Restaurante',
      image: 'https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&w=600',
      description: 'Página one-page con menú, galería y WhatsApp.',
      whatsappLink: 'https://wa.me/573054115138?text=Hola,%20me%20gustó%20el%20demo%20de%20*Restaurante*.',
      ariaLabel: 'Contactar por WhatsApp sobre el diseño de Restaurante',
    },
    {
      title: 'Demo Barbería',
      category: 'Barbería',
      image: 'https://images.pexels.com/photos/1319460/pexels-photo-1319460.jpeg?auto=compress&cs=tinysrgb&w=600',
      description: 'Sitio web profesional con servicios y contacto directo.',
      whatsappLink: 'https://wa.me/573054115138?text=Hola,%20me%20interesa%20el%20estilo%20*Barbería*.',
      ariaLabel: 'Contactar por WhatsApp sobre el diseño de Barbería',
    },
    {
      title: 'Demo Negocio de Servicios',
      category: 'Servicios',
      image: 'https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=600',
      description: 'Landing page con servicios, galería y formulario.',
      whatsappLink: 'https://wa.me/573054115138?text=Hola,%20quiero%20una%20web%20tipo%20*Servicios*.',
      ariaLabel: 'Contactar por WhatsApp sobre el diseño de Servicios',
    },
  ];

  return (
    <section id="portafolio" className="py-20 md:py-28 bg-black relative" aria-labelledby="portafolio-heading">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-emerald-500/5 to-transparent" aria-hidden="true" />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-12">
          <h2 id="portafolio-heading" className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">
            Ejemplos de diseño
          </h2>
          <p className="text-lg md:text-xl text-slate-300">
            Así se verá tu página web profesional
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto" role="list" aria-label="Ejemplos de páginas web">
          {projects.map((project, index) => (
            <article
              key={index}
              role="listitem"
              className="group bg-slate-900/60 backdrop-blur-lg rounded-2xl overflow-hidden shadow-lg shadow-emerald-500/5 hover:shadow-emerald-500/20 transition-all duration-300 transform hover:-translate-y-2 border border-emerald-500/20"
            >
              <div className="relative h-56 overflow-hidden bg-slate-800">
                <img
                  src={project.image}
                  alt={`Vista previa de página web para ${project.category}`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-300" aria-hidden="true" />
              </div>

              <div className="p-6">
                <div className="inline-block px-3 py-1.5 bg-emerald-500/20 border border-emerald-400/30 text-emerald-400 text-xs font-semibold rounded-lg mb-3">
                  {project.category}
                </div>

                <h3 className="text-xl font-bold text-white mb-2">
                  {project.title}
                </h3>

                <p className="text-slate-300 mb-4 leading-relaxed">
                  {project.description}
                </p>

                <a
                  href={project.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={project.ariaLabel}
                  className="inline-flex items-center text-emerald-400 font-semibold hover:text-emerald-300 transition-colors focus-ring rounded-lg px-4 py-2 -ml-4"
                >
                  Quiero un diseño así
                  <MessageCircle className="ml-2 h-4 w-4" aria-hidden="true" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
