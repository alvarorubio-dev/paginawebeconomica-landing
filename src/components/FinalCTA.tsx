import { MessageCircle, ArrowRight } from 'lucide-react';

const FinalCTA = () => {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-slate-950 to-black relative overflow-hidden" aria-labelledby="cta-heading">
      <div className="absolute inset-0 bg-gradient-to-b from-emerald-500/10 via-transparent to-transparent" aria-hidden="true" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-slate-900/80 to-slate-900/60 backdrop-blur-lg border-2 border-emerald-500/30 rounded-3xl p-8 md:p-12 text-center shadow-2xl shadow-emerald-500/20">
            <h2 id="cta-heading" className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
              Tus competidores ya están en Google.
              <span className="block mt-3 text-emerald-400">Tú también deberías estarlo.</span>
            </h2>

            <p className="text-lg md:text-xl text-slate-300 mb-10 max-w-2xl mx-auto leading-relaxed">
              No pierdas más clientes. Empieza a recibir contactos por WhatsApp desde tu propia página web profesional.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="https://wa.me/573054115138?text=Hola,%20estoy%20interesado%20en%20una%20página%20web,%20quisiera%20más%20información."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-emerald-500 to-emerald-600 text-white text-lg md:text-xl font-bold rounded-xl shadow-2xl shadow-emerald-500/30 hover:shadow-emerald-500/50 hover:from-emerald-600 hover:to-emerald-700 transform hover:scale-105 transition-all duration-300 focus-ring"
                aria-label="Chatea por WhatsApp para solicitar tu página web - abre en nueva ventana"
              >
                <MessageCircle className="mr-2 h-6 w-6" aria-hidden="true" />
                Chatea por WhatsApp
              </a>
              <a
                href="https://checkout.wompi.co/l/EOVrLb"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 bg-slate-900/60 backdrop-blur-lg border-2 border-emerald-500/30 text-white text-lg md:text-xl font-bold rounded-xl hover:bg-slate-900/80 hover:border-emerald-500/60 transform hover:scale-105 transition-all duration-300 focus-ring"
                aria-label="Reserva mi página web con pago seguro - abre en nueva ventana"
              >
                Reserva mi página web
                <ArrowRight className="ml-2 h-6 w-6" aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
