import { AlertCircle, Clock } from 'lucide-react';

const Urgency = () => {
  return (
    <section className="py-12 md:py-16 bg-gradient-to-b from-slate-950 to-black relative" aria-labelledby="urgency-heading">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-3xl mx-auto">
          <div className="bg-gradient-to-br from-red-500/10 to-orange-500/10 backdrop-blur-lg border-2 border-red-500/30 rounded-2xl p-8 md:p-10 text-center shadow-2xl shadow-red-500/20">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-red-500/20 rounded-full border border-red-500/30 mb-6" aria-hidden="true">
              <AlertCircle className="h-8 w-8 text-red-400" />
            </div>

            <h2 id="urgency-heading" className="text-2xl md:text-3xl font-bold text-white mb-4">
              Cupos limitados por semana
            </h2>

            <p className="text-lg text-slate-200 mb-6">
              Para garantizar la calidad, solo aceptamos un número limitado de proyectos por semana.
            </p>

            <a
              href="https://checkout.wompi.co/l/EOVrLb"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 bg-red-500/20 border border-red-500/30 rounded-xl hover:bg-red-500/30 transition-all duration-200 focus-ring"
              aria-label="Reserva hoy mismo con anticipo de $150.000 - abre en nueva ventana"
            >
              <Clock className="h-5 w-5 text-red-400" aria-hidden="true" />
              <span className="text-red-400 font-bold text-base">Anticipo Web: $150.000</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Urgency;
