import { AlertCircle, Search, TrendingDown } from 'lucide-react';

const Problem = () => {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-slate-950 to-black relative" aria-labelledby="problem-heading">
      <div className="absolute inset-0 bg-gradient-to-b from-red-500/5 via-transparent to-transparent" aria-hidden="true" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-500/10 border border-red-500/20 rounded-full mb-6">
              <AlertCircle className="h-5 w-5 text-red-400" aria-hidden="true" />
              <span className="text-red-400 text-sm font-semibold">La realidad de tu negocio</span>
            </div>

            <h2 id="problem-heading" className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
              Tu Negocio Sin Página Web
              <span className="block mt-2 text-red-400">Está Perdiendo Clientes Todos los Días en Colombia</span>
            </h2>

            <p className="text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto">
              <strong className="text-white">9 de cada 10 personas en Colombia</strong> buscan en Google antes de comprar
            </p>
          </div>

          <div className="bg-slate-900/60 backdrop-blur-lg border border-red-500/20 rounded-2xl p-8 md:p-10 space-y-8">
            <h3 className="text-2xl font-bold text-white mb-4">La Realidad Que No Te Cuentan</h3>

            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-red-500/10 rounded-xl flex items-center justify-center border border-red-500/20" aria-hidden="true">
                <Search className="h-6 w-6 text-red-400" />
              </div>
              <div>
                <p className="text-lg md:text-xl text-slate-200 leading-relaxed mb-3">
                  Cuando alguien busca <strong className="text-white">"barbería en Chapinero"</strong> o <strong className="text-white">"restaurante en El Poblado"</strong>, ¿aparece tu negocio?
                </p>
                <p className="text-lg text-slate-300">
                  Si solo tienes Instagram o WhatsApp, la respuesta es <strong className="text-red-400">NO</strong>.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-red-500/10 rounded-xl flex items-center justify-center border border-red-500/20" aria-hidden="true">
                <TrendingDown className="h-6 w-6 text-red-400" />
              </div>
              <div>
                <p className="text-lg md:text-xl text-slate-200 leading-relaxed">
                  <strong className="text-white">Sin presencia en Google, tu negocio no existe para nuevos clientes.</strong> Mientras tu competencia recibe clientes desde búsquedas, tú pierdes oportunidades cada día.
                </p>
              </div>
            </div>

            <div className="pt-6 border-t border-white/10">
              <p className="text-center text-emerald-400 text-xl font-semibold">
                Una página web profesional genera confianza y trabaja por ti 24/7.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Problem;
