import { LayoutGrid as Layout, Info, Layers, Image, MessageSquare, Globe, Server, Shield, Smartphone, Mail, Share2 } from 'lucide-react';

const WhatYouGet = () => {
  const sections = [
    { icon: Layout, title: 'Encabezado alto impacto', description: 'Sección Hero profesional que captura la atención' },
    { icon: Info, title: 'Quiénes Somos', description: 'Descripción clara de tu empresa o negocio' },
    { icon: Layers, title: 'Servicios', description: 'Lista completa de lo que ofreces' },
    { icon: Image, title: 'Galería visual', description: 'Imágenes de tus trabajos y productos' },
    { icon: MessageSquare, title: 'Formulario/Contacto', description: 'Formulario funcional + botón WhatsApp directo' },
    { icon: Share2, title: 'Enlaces a Redes Sociales', description: 'Botones directos a tu Facebook, Instagram, TikTok y más' },
  ];

  const additionalIncludes = [
    {
      icon: Globe,
      title: 'Infraestructura Web Completa',
      text: 'Incluye registro de Dominio propio (.com/.co) y Alojamiento (Hosting) de alta velocidad por un año, garantizando que tu sitio esté siempre en línea.'
    },
    {
      icon: Shield,
      title: 'Seguridad y Confianza (SSL)',
      text: 'Instalamos un Certificado de Seguridad SSL para encriptar los datos, mostrar el "candado verde" y mejorar la confianza de los usuarios y de Google.'
    },
    {
      icon: Smartphone,
      title: 'Diseño Web Responsive',
      text: 'Interfaz adaptable a dispositivos móviles, tablets y computadores de escritorio, asegurando una experiencia de usuario (UX) perfecta en cualquier pantalla.'
    },
    {
      icon: Mail,
      title: 'Correo Corporativo Profesional',
      text: '1 cuenta de correo electrónico corporativo gratis con tu dominio (ej: contacto@tunegocio.com) para proyectar profesionalismo.'
    },
  ];

  return (
    <section id="que-incluye" className="py-16 md:py-24 bg-black relative" aria-labelledby="whatyouget-heading">
      <div className="absolute inset-0 bg-gradient-to-b from-emerald-500/5 via-transparent to-transparent" aria-hidden="true" />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 id="whatyouget-heading" className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">
              Todo incluido en tu página web
            </h2>
            <p className="text-lg md:text-xl text-slate-300">
              Tu sitio web listo para recibir clientes
            </p>
          </div>

          <div className="mb-12">
            <h3 className="text-2xl font-bold text-emerald-400 mb-6 text-center">Página web de una sola página profesional:</h3>
            <p className="text-center text-slate-400 text-sm mb-6">Landing page rápida, moderna y diseñada para vender desde el celular.</p>
            <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" role="list">
              {sections.map((section, index) => {
                const Icon = section.icon;
                return (
                  <li
                    key={index}
                    className="bg-slate-900/60 backdrop-blur-lg border border-emerald-500/20 rounded-xl p-6 hover:bg-slate-900/80 hover:border-emerald-500/40 hover:shadow-lg hover:shadow-emerald-500/10 transition-all duration-300 group"
                  >
                    <div className="flex flex-col items-center text-center gap-3">
                      <div className="w-14 h-14 bg-emerald-500/10 rounded-xl flex items-center justify-center border border-emerald-500/20 group-hover:bg-emerald-500/20 transition-colors" aria-hidden="true">
                        <Icon className="h-7 w-7 text-emerald-400" />
                      </div>
                      <div>
                        <h4 className="text-white font-bold text-lg mb-1">{section.title}</h4>
                        <p className="text-slate-300 text-sm">{section.description}</p>
                      </div>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>

          <div className="bg-slate-900/60 backdrop-blur-lg border border-emerald-500/20 rounded-2xl p-8 md:p-10">
            <h3 className="text-2xl font-bold text-white mb-6 text-center">También incluye:</h3>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-6" role="list">
              {additionalIncludes.map((item, index) => {
                const Icon = item.icon;
                return (
                  <li key={index} className="bg-slate-800/40 border border-emerald-500/10 rounded-xl p-6 hover:border-emerald-500/30 transition-all duration-300">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-emerald-500/10 rounded-xl flex items-center justify-center border border-emerald-500/20 flex-shrink-0" aria-hidden="true">
                        <Icon className="h-6 w-6 text-emerald-400" />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-white font-bold text-base mb-2">{item.title}</h4>
                        <p className="text-slate-300 text-sm leading-relaxed">{item.text}</p>
                      </div>
                    </div>
                  </li>
                );
              })}
            </ul>

            <div className="mt-10 pt-8 border-t border-white/10 text-center space-y-3">
              <p className="text-emerald-400 text-lg font-semibold">
                Te entregamos tu página web lista para recibir clientes.
              </p>
              <p className="text-white font-bold text-base">
                Tú eres 100% dueño de tu dominio y tu página. No te amarramos.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatYouGet;
