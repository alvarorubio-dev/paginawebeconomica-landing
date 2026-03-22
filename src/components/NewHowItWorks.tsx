import { CreditCard, Palette, CheckCircle } from 'lucide-react';

export default function NewHowItWorks() {
  const steps = [
    {
      number: '1',
      icon: CreditCard,
      title: 'Reserva',
      description: 'Pagas el 50% ($150.000) para apartar tu cupo y asegurar tu entrega.',
      color: 'from-blue-500 to-blue-600',
    },
    {
      number: '2',
      icon: Palette,
      title: 'Desarrollo',
      description: 'Diseñamos tu web profesional en 5-7 días hábiles con tu marca.',
      color: 'from-green-500 to-green-600',
    },
    {
      number: '3',
      icon: CheckCircle,
      title: 'Entrega',
      description: 'Revisas, apruebas, pagas el saldo ($150.000) y te damos las claves.',
      color: 'from-blue-600 to-blue-700',
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            ¿Cómo Funciona?
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Proceso simple, transparente y sin complicaciones
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div
                key={index}
                className="relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className={`absolute -top-6 left-1/2 -translate-x-1/2 w-16 h-16 bg-gradient-to-br ${step.color} rounded-full flex items-center justify-center text-white text-2xl font-bold shadow-xl`}>
                  {step.number}
                </div>

                <div className="mt-8 text-center">
                  <div className="flex justify-center mb-4">
                    <Icon className="w-12 h-12 text-blue-600" />
                  </div>

                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    {step.title}
                  </h3>

                  <p className="text-gray-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-blue-400 to-green-400"></div>
                )}
              </div>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <a
            href="https://checkout.wompi.co/l/EOVrLb"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Pagar anticipo de 150 mil pesos en Wompi"
            className="inline-flex items-center gap-2 bg-green-600 text-white px-8 py-4 rounded-full text-lg font-bold hover:bg-green-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
          >
            Comenzar Ahora - Pagar $150.000
          </a>
        </div>
      </div>
    </section>
  );
}
