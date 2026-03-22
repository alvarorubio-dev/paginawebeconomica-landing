import { CheckCircle2, ArrowRight } from 'lucide-react';

const Pricing = () => {
  const includes = [
    'Diseño completo profesional',
    'SEO básico para Google',
    'Integración con WhatsApp',
    'Dominio + hosting 1 año',
    'Certificado SSL seguridad',
    '1 correo corporativo gratis',
    'Página web adaptable a celular',
    'Entrega en 5–7 días',
  ];

  return (
    <section id="precio" className="py-16 md:py-24 bg-gradient-to-b from-slate-950 via-black to-slate-950 relative" aria-labelledby="precio-heading" tabIndex={-1}>
      <div className="absolute inset-0 bg-gradient-to-b from-emerald-500/5 via-transparent to-emerald-500/5" aria-hidden="true" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 id="precio-heading" className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">
              Precio claro.
              <span className="block mt-2 text-emerald-400">Sin sorpresas.</span>
            </h2>
          </div>

          <div className="bg-gradient-to-br from-slate-900/80 to-slate-900/60 backdrop-blur-lg border-2 border-emerald-500/30 rounded-3xl p-8 md:p-12 shadow-2xl shadow-emerald-500/20" role="region" aria-label="Plan de precios: Página Web Profesional de Una Sola Página">
            <div className="text-center mb-10">
              <div className="inline-block bg-gradient-to-br from-emerald-500/20 to-emerald-600/10 border border-emerald-500/30 rounded-2xl px-6 py-8 mb-6">
                <p className="text-slate-300 text-sm font-semibold mb-2 uppercase tracking-wider">
                  Página Web de Una Sola Página Profesional en Colombia
                </p>
                <div className="flex items-baseline justify-center gap-2">
                  <span className="text-5xl md:text-6xl font-black text-white">$300.000</span>
                  <span className="text-2xl text-emerald-400 font-bold">COP</span>
                </div>
              </div>
            </div>

            <div className="mb-10">
              <h3 className="text-xl font-bold text-white mb-6 text-center">Incluye:</h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4" role="list">
                {includes.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-6 h-6 bg-emerald-500/10 rounded-full flex items-center justify-center border border-emerald-500/30 mt-0.5">
                      <CheckCircle2 className="h-4 w-4 text-emerald-400" aria-hidden="true" />
                    </div>
                    <span className="text-slate-200 text-base">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-slate-950/50 border border-emerald-500/20 rounded-2xl p-6 mb-8">
              <h3 className="text-lg font-bold text-white mb-4 text-center">Modelo de pago:</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="text-center">
                  <div className="text-3xl font-black text-emerald-400 mb-1">50%</div>
                  <div className="text-slate-300 text-sm font-medium">Anticipo para empezar</div>
                  <div className="text-white text-lg font-bold mt-1">$150.000</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-black text-emerald-400 mb-1">50%</div>
                  <div className="text-slate-300 text-sm font-medium">Solo cuando veas tu página funcionando y estés feliz</div>
                  <div className="text-white text-lg font-bold mt-1">$150.000</div>
                </div>
              </div>
            </div>

            <div className="bg-emerald-500/10 border border-emerald-500/30 rounded-2xl p-6 mb-10">
              <p className="text-slate-300 text-sm leading-relaxed text-center">
                <strong className="text-white">Garantía de libertad:</strong> Te regalamos el primer año de hosting y dominio. A partir del segundo año, tú tienes el control: puedes seguir con nosotros o llevarte tu web a otro proveedor. Si decides cambiarte, nosotros mismos te ayudamos a migrar gratis. Sin amarres.
              </p>
            </div>

            <div className="text-center">
              <a
                href="https://checkout.wompi.co/l/EOVrLb"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-10 py-5 bg-gradient-to-r from-emerald-500 to-emerald-600 text-white text-xl font-bold rounded-xl shadow-2xl shadow-emerald-500/30 hover:shadow-emerald-500/50 hover:from-emerald-600 hover:to-emerald-700 transform hover:scale-105 transition-all duration-300 focus-ring"
                aria-label="Reserva mi página web - pago de $150.000 COP como anticipo"
              >
                Reserva mi página web con $150.000
                <ArrowRight className="ml-3 h-6 w-6" aria-hidden="true" />
              </a>
              <p className="text-slate-200 text-base font-semibold mt-6 flex items-center justify-center gap-2">
                <svg className="h-5 w-5 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
                Pago seguro con Wompi, Nequi o transferencia Bancolombia
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
