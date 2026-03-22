import { Sparkles, Shield, Clock } from 'lucide-react';

export default function NewHero() {
  const anticipoLink = "https://checkout.wompi.co/l/EOVrLb";

  return (
    <section className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjEpIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-20"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
        <div className="text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium mb-6 border border-white/20">
            <Sparkles className="w-4 h-4 text-green-300" />
            <span>Agencia Web #1 en Colombia</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            Tu Negocio en Google: Página Web Profesional que Atrae Clientes{' '}
            <span className="text-green-300">en Colombia</span>
          </h1>

          <p className="text-xl md:text-2xl text-blue-100 mb-8 leading-relaxed">
            Tus clientes te buscan en Google. ¿Te encuentran a ti o a tu competencia?
            <br />
            <strong className="text-white">Precio claro: $300.000 COP</strong> — Sin cotizaciones. Sin sorpresas. Sin mensualidades obligatorias.
            <br />
            Paga $150.000 para empezar y $150.000 al entregar.
            <br />
            <strong className="text-white">Pago único. No es un alquiler: la web es 100% de tu propiedad.</strong>
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <a
              href={anticipoLink}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Pagar anticipo de 150 mil pesos en Wompi"
              className="group inline-flex items-center gap-2 bg-green-600 text-white px-8 py-4 rounded-full text-lg font-bold hover:bg-green-700 transition-all duration-300 shadow-2xl hover:shadow-green-500/50 transform hover:scale-105"
            >
              <Shield className="w-6 h-6" />
              Reservar Cupo - Pagar Anticipo ($150.000)
            </a>

            <a
              href="https://wa.me/573054115138"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Contactar por WhatsApp"
              className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white/20 transition-all duration-300 border-2 border-white/30"
            >
              Hablar con un Asesor
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
              <Shield className="w-8 h-8 text-green-300 flex-shrink-0" />
              <div className="text-left">
                <p className="font-semibold">Pago Seguro</p>
                <p className="text-sm text-blue-100 font-bold">Wompi, Nequi, Bancolombia</p>
              </div>
            </div>

            <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
              <Clock className="w-8 h-8 text-green-300 flex-shrink-0" />
              <div className="text-left">
                <p className="font-semibold">Entrega Rápida</p>
                <p className="text-sm text-blue-100">5-7 días</p>
              </div>
            </div>

            <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
              <Sparkles className="w-8 h-8 text-green-300 flex-shrink-0" />
              <div className="text-left">
                <p className="font-semibold">Sin Sorpresas</p>
                <p className="text-sm text-blue-100">Precio fijo</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
