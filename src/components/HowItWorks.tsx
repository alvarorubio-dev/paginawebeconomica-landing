import { CreditCard, FileText, Palette, Rocket } from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    {
      icon: CreditCard,
      title: '1. Pagas el anticipo',
      description: 'Reserva tu cupo con $150.000 COP (50% del total)',
      highlight: '$150.000',
    },
    {
      icon: FileText,
      title: '2. Envías tu información',
      description: 'Logo, textos, colores y datos de contacto',
      highlight: 'Logo y texto',
    },
    {
      icon: Palette,
      title: '3. Creamos tu sitio',
      description: 'Diseñamos y desarrollamos tu página web profesional',
      highlight: '5 días',
    },
    {
      icon: Rocket,
      title: '4. Pagas y lanzamos',
      description: 'Cancelas el saldo de $150.000 y tu web queda online',
      highlight: 'Lanzamiento',
    },
  ];

  return (
    <section id="como-funciona" className="py-16 md:py-24 bg-gradient-to-b from-slate-950 to-black relative" aria-labelledby="howit-heading">
      <div className="absolute inset-0 bg-gradient-to-b from-emerald-500/5 via-transparent to-transparent" aria-hidden="true" />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-12">
          <h2 id="howit-heading" className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">
            Proceso simple de
            <span className="block mt-2 text-emerald-400">4 pasos</span>
          </h2>
        </div>

        <div className="max-w-6xl mx-auto">
          <ol className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6" aria-label="Pasos del proceso">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <li
                  key={index}
                  className="relative bg-slate-900/60 backdrop-blur-lg rounded-2xl p-8 shadow-lg shadow-emerald-500/5 hover:shadow-emerald-500/20 transition-all duration-300 border border-emerald-500/20 group"
                >
                  <div className="absolute -top-5 left-8 w-12 h-12 bg-gradient-to-br from-emerald-500 to-emerald-600 text-white rounded-xl flex items-center justify-center font-bold text-xl shadow-lg shadow-emerald-500/30" aria-hidden="true">
                    {index + 1}
                  </div>

                  <div className="mb-6 mt-4">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-emerald-500/10 border border-emerald-400/20 rounded-2xl group-hover:bg-emerald-500/20 transition-colors" aria-hidden="true">
                      <Icon className="h-8 w-8 text-emerald-400" />
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-3">
                    {step.title}
                  </h3>

                  <p className="text-slate-300 mb-4 leading-relaxed">
                    {step.description}
                  </p>

                  <div className="inline-block px-4 py-2 bg-emerald-500/10 border border-emerald-400/20 text-emerald-400 rounded-lg text-sm font-semibold">
                    {step.highlight}
                  </div>
                </li>
              );
            })}
          </ol>

          <div className="mt-12 max-w-3xl mx-auto">
            <div className="bg-slate-900/60 backdrop-blur-lg border-2 border-emerald-500/30 rounded-2xl p-8 text-center shadow-xl shadow-emerald-500/10">
              <p className="text-emerald-400 text-base font-semibold mb-2">Tiempo total:</p>
              <p className="text-3xl font-black text-white mb-4">
                5-7 días
              </p>
              <p className="text-slate-300 text-sm">
                Desde el pago del anticipo hasta tu página web online
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
