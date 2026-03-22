import { Scissors, UtensilsCrossed, Sparkles, Stethoscope, Wrench, Briefcase } from 'lucide-react';

const WhoIsThisFor = () => {
  const businesses = [
    {
      icon: UtensilsCrossed,
      name: 'Gastronomía (Restaurantes y Cafés)',
      description: 'Menús digitales e integración de reservas',
      cities: 'Bogotá, Medellín y Cali'
    },
    {
      icon: Scissors,
      name: 'Belleza y Cuidado Personal (Barberías, Salones)',
      description: 'Galerías de portafolio y botones de agendamiento directo por WhatsApp',
      cities: 'Barranquilla y Cartagena'
    },
    {
      icon: Stethoscope,
      name: 'Salud y Bienestar (Consultorios y Clínicas)',
      description: 'Sitios web corporativos que transmiten profesionalismo y confianza a los pacientes',
      cities: 'Todo el país'
    },
    {
      icon: Sparkles,
      name: 'Salones de Belleza y Spa',
      description: 'Catálogos visuales de servicios y sistema de citas online',
      cities: 'Bogotá, Cali, Bucaramanga'
    },
    {
      icon: Wrench,
      name: 'Servicios Profesionales Locales',
      description: 'Presencia digital con formularios de contacto y testimonios de clientes',
      cities: 'Todas las ciudades'
    },
    {
      icon: Briefcase,
      name: 'Tiendas y Emprendimientos',
      description: 'Escaparate digital de productos con integración a redes sociales',
      cities: 'Toda Colombia'
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-slate-950 to-black relative" aria-labelledby="whoisfor-heading">
      <div className="absolute inset-0 bg-gradient-to-b from-amber-500/5 via-transparent to-transparent" aria-hidden="true" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 id="whoisfor-heading" className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">
              Página Web de Una Sola Página Profesional
              <span className="block mt-2 text-amber-400">Todo Incluido por $300.000 COP</span>
            </h2>
            <p className="text-xl md:text-2xl text-slate-300 mt-6 font-semibold">
              Soluciones de Diseño Web Especializadas por Sector Comercial en Colombia
            </p>
            <p className="text-lg text-slate-400 mt-4 max-w-4xl mx-auto">
              Desarrollamos plataformas digitales adaptadas a las necesidades específicas de cada industria:
            </p>
          </div>

          <ul className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12" role="list" aria-label="Tipos de negocios atendidos">
            {businesses.map((business, index) => {
              const Icon = business.icon;
              return (
                <li
                  key={index}
                  className="bg-slate-900/60 backdrop-blur-lg border border-amber-500/20 rounded-xl p-6 hover:bg-slate-900/80 hover:border-amber-500/40 hover:shadow-lg hover:shadow-amber-500/10 transition-all duration-300 group"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-14 h-14 bg-amber-500/10 rounded-xl flex items-center justify-center border border-amber-500/20 group-hover:bg-amber-500/20 transition-colors flex-shrink-0" aria-hidden="true">
                      <Icon className="h-7 w-7 text-amber-400" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-white text-base font-bold mb-2">{business.name}</h3>
                      <p className="text-slate-300 text-sm mb-3 leading-relaxed">{business.description}</p>
                      <p className="text-amber-400 text-xs font-semibold flex items-center gap-1">
                        <span className="inline-block w-1.5 h-1.5 bg-amber-400 rounded-full" aria-hidden="true"></span>
                        {business.cities}
                      </p>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>

          <div className="text-center">
            <div className="bg-slate-900/60 backdrop-blur-lg border border-amber-500/20 rounded-2xl p-8 md:p-10 inline-block">
              <p className="text-lg md:text-xl text-slate-200 leading-relaxed max-w-3xl">
                Si quieres que <strong className="text-white">clientes te encuentren en Google</strong> y te escriban todos los días, esto es para ti.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoIsThisFor;
