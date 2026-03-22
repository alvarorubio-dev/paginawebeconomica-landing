import {
  Store,
  CreditCard,
  PenTool,
  MapPin,
  Zap,
  Mail,
  FileText,
  RefreshCw,
  AtSign
} from 'lucide-react';

interface Service {
  title: string;
  price: string;
  description: string;
  icon: string;
  highlighted?: boolean;
  paymentUrl: string;
}

const services: Service[] = [
  {
    title: "Catálogo Digital / Menú QR",
    price: "$150.000 COP",
    description: "Exhibe tus productos o menú. Tus clientes eligen y te envían el pedido directo a WhatsApp. Ideal para restaurantes y catálogos.",
    icon: "Store",
    highlighted: true,
    paymentUrl: "https://checkout.wompi.co/l/S0kXFq"
  },
  {
    title: "Botón de Pago Online",
    price: "Desde $120.000 COP",
    description: "Recibe pagos con tarjeta (Wompi/PayU) directamente en tu web.",
    icon: "CreditCard",
    paymentUrl: "https://checkout.wompi.co/l/bifVS6"
  },
  {
    title: "Diseño de Logo Profesional",
    price: "$80.000 COP",
    description: "Creamos la identidad visual de tu marca desde cero.",
    icon: "PenTool",
    paymentUrl: "https://checkout.wompi.co/l/fCX2Ot"
  },
  {
    title: "SEO Google Maps Local",
    price: "$70.000 COP",
    description: "Optimizamos tu ficha de negocio para aparecer en los mapas de tu ciudad.",
    icon: "MapPin",
    paymentUrl: "https://checkout.wompi.co/l/hPe5me"
  },
  {
    title: "Entrega Express 72h",
    price: "$60.000 COP",
    description: "Prioridad máxima. Tu página lista en 3 días hábiles.",
    icon: "Zap",
    paymentUrl: "https://checkout.wompi.co/l/TFLrIE"
  },
  {
    title: "Email Marketing Básico",
    price: "$60.000 COP",
    description: "Configuración de herramienta para enviar correos a tus clientes.",
    icon: "Mail",
    paymentUrl: "https://checkout.wompi.co/l/5Irtdo"
  },
  {
    title: "Redacción Profesional",
    price: "$50.000 COP",
    description: "Escribimos los textos persuasivos de tu web por ti.",
    icon: "FileText",
    paymentUrl: "https://checkout.wompi.co/l/azruBv"
  },
  {
    title: "Revisiones Adicionales",
    price: "$40.000 COP",
    description: "Ronda extra de cambios después de la entrega final.",
    icon: "RefreshCw",
    paymentUrl: "https://checkout.wompi.co/l/Qt2HuY"
  },
  {
    title: "Correos Corporativos",
    price: "$30.000 COP c/u",
    description: "Cuentas de email adicionales (ej: ventas@tuempresa.com).",
    icon: "AtSign",
    paymentUrl: "https://checkout.wompi.co/l/gw8IwJ"
  }
];

const iconMap: Record<string, React.ElementType> = {
  Store,
  CreditCard,
  PenTool,
  MapPin,
  Zap,
  Mail,
  FileText,
  RefreshCw,
  AtSign
};

const AdditionalServices = () => {
  return (
    <section
      className="py-16 md:py-24 bg-gradient-to-b from-black via-slate-950 to-black relative overflow-hidden"
      aria-labelledby="servicios-adicionales-heading"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-emerald-500/5 via-transparent to-transparent" aria-hidden="true" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2
              id="servicios-adicionales-heading"
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight"
            >
              Recursos
              <span className="block mt-2 text-emerald-400">
                Adicionales
              </span>
            </h2>
            <p className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto">
              Potenciadores opcionales para llevar tu web al siguiente nivel
            </p>
          </div>

          <div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
            role="list"
            aria-label="Lista de servicios adicionales disponibles"
          >
            {services.map((service, index) => {
              const IconComponent = iconMap[service.icon];
              const isHighlighted = service.highlighted;

              return (
                <div
                  key={index}
                  className={`bg-slate-900/60 backdrop-blur-lg rounded-2xl p-6 hover:bg-slate-900/80 transition-all duration-300 flex flex-col relative ${
                    isHighlighted
                      ? 'border-2 border-amber-500/60 hover:border-amber-500/80 shadow-xl shadow-amber-500/20 hover:shadow-amber-500/30'
                      : 'border border-emerald-500/20 hover:border-emerald-500/40 hover:shadow-lg hover:shadow-emerald-500/10'
                  }`}
                  role="listitem"
                >
                  {isHighlighted && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                      <span className="inline-flex items-center px-4 py-1 bg-gradient-to-r from-amber-500 to-amber-600 text-black text-xs font-bold rounded-full shadow-lg">
                        RECOMENDADO
                      </span>
                    </div>
                  )}

                  <div className="flex items-start gap-4 mb-4">
                    <div
                      className={`flex items-center justify-center w-12 h-12 backdrop-blur-sm rounded-xl border flex-shrink-0 ${
                        isHighlighted
                          ? 'bg-amber-500/10 border-amber-500/30'
                          : 'bg-emerald-500/10 border-emerald-500/30'
                      }`}
                      aria-hidden="true"
                    >
                      <IconComponent className={`h-6 w-6 ${isHighlighted ? 'text-amber-400' : 'text-emerald-400'}`} />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-white leading-tight mb-1">
                        {service.title}
                      </h3>
                      <p className={`text-xl font-bold ${isHighlighted ? 'text-amber-400' : 'text-emerald-400'}`}>
                        {service.price}
                      </p>
                    </div>
                  </div>

                  <p className="text-slate-300 text-sm leading-relaxed mb-4 flex-grow">
                    {service.description}
                  </p>

                  <a
                    href={service.paymentUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex items-center justify-center px-6 py-3 backdrop-blur-sm text-white text-base font-semibold rounded-xl transition-all shadow-lg transform hover:scale-105 focus-ring ${
                      isHighlighted
                        ? 'bg-amber-500/90 border border-amber-400/30 hover:bg-amber-500 shadow-amber-500/20 hover:shadow-amber-500/40'
                        : 'bg-emerald-500/90 border border-emerald-400/30 hover:bg-emerald-500 shadow-emerald-500/20 hover:shadow-emerald-500/40'
                    }`}
                    aria-label={`Contratar servicio de ${service.title} por ${service.price}`}
                  >
                    Contratar
                  </a>
                </div>
              );
            })}
          </div>

          <div className="text-center mt-12">
            <p className="text-slate-400 text-sm md:text-base max-w-2xl mx-auto mb-2">
              <strong className="text-white">Estos servicios NO son obligatorios.</strong> La página web base ($300k) ya incluye todo lo necesario para empezar.
            </p>
            <p className="text-slate-400 text-sm md:text-base max-w-2xl mx-auto">
              ¿Necesitas algo más específico? Contáctanos y creamos un paquete personalizado para tu negocio
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdditionalServices;
