import {
  QrCode,
  CreditCard,
  PenTool,
  MapPin,
  Zap,
  Mail,
  FileText,
  CheckCircle,
  AtSign,
  ExternalLink,
} from 'lucide-react';

export default function ServicesGrid() {
  const services = [
    {
      name: 'Catálogo Digital / Menú QR',
      price: '$150.000 COP',
      icon: QrCode,
      link: 'https://checkout.wompi.co/l/S0kXFq',
      description: 'Muestra tus productos con precios, fotos y pedidos directos a WhatsApp',
      highlight: true,
    },
    {
      name: 'Tienda Online / Botón de Pagos',
      price: '$120.000 COP',
      icon: CreditCard,
      link: 'https://checkout.wompi.co/l/bifVS6',
      description: 'Acepta pagos en línea con tarjeta, PSE o Nequi integrado',
      highlight: true,
    },
    {
      name: 'Diseño de Logo Profesional',
      price: '$80.000 COP',
      icon: PenTool,
      link: 'https://checkout.wompi.co/l/fCX2Ot',
      description: 'Logo original vectorial con variaciones en diferentes formatos',
      highlight: false,
    },
    {
      name: 'SEO Local (Google Maps)',
      price: '$70.000 COP',
      icon: MapPin,
      link: 'https://checkout.wompi.co/l/hPe5me',
      description: 'Aparece en Google Maps cuando busquen tu negocio en tu ciudad',
      highlight: false,
    },
    {
      name: 'Entrega Express 72h',
      price: '$60.000 COP',
      icon: Zap,
      link: 'https://checkout.wompi.co/l/TFLrIE',
      description: 'Tu web lista en 3 días hábiles con prioridad máxima',
      highlight: false,
    },
    {
      name: 'Email Marketing Básico',
      price: '$60.000 COP',
      icon: Mail,
      link: 'https://checkout.wompi.co/l/5Irtdo',
      description: 'Formulario de captura de emails con integración a tu herramienta',
      highlight: false,
    },
    {
      name: 'Redacción de Textos',
      price: '$50.000 COP',
      icon: FileText,
      link: 'https://checkout.wompi.co/l/azruBv',
      description: 'Escribimos todos los textos persuasivos de tu página web',
      highlight: false,
    },
    {
      name: 'Revisiones Adicionales',
      price: '$40.000 COP',
      icon: CheckCircle,
      link: 'https://checkout.wompi.co/l/Qt2HuY',
      description: 'Rondas extra de cambios después de la primera revisión',
      highlight: false,
    },
    {
      name: 'Correos Corporativos Extra',
      price: '$30.000 COP c/u',
      icon: AtSign,
      link: 'https://checkout.wompi.co/l/gw8IwJ',
      description: 'Emails profesionales adicionales con tu dominio (@tunegocio.com)',
      highlight: false,
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Servicios Adicionales
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Potencia tu página web con estas mejoras profesionales
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className={`relative bg-white rounded-xl p-6 shadow-md hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 border-2 ${
                  service.highlight
                    ? 'border-green-500 bg-gradient-to-br from-green-50 to-white'
                    : 'border-gray-200 hover:border-blue-400'
                }`}
              >
                {service.highlight && (
                  <div className="absolute -top-3 right-4 bg-green-600 text-white px-3 py-1 rounded-full text-xs font-bold">
                    Popular
                  </div>
                )}

                <div className="flex items-start gap-4 mb-4">
                  <div className={`p-3 rounded-lg ${service.highlight ? 'bg-green-100' : 'bg-blue-100'}`}>
                    <Icon className={`w-6 h-6 ${service.highlight ? 'text-green-600' : 'text-blue-600'}`} />
                  </div>

                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-gray-900 mb-1">
                      {service.name}
                    </h3>
                    <p className="text-2xl font-bold text-blue-600">
                      {service.price}
                    </p>
                  </div>
                </div>

                <p className="text-gray-600 text-sm mb-6 min-h-[3rem]">
                  {service.description}
                </p>

                <a
                  href={service.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Pagar servicio de ${service.name} por ${service.price}`}
                  className={`flex items-center justify-center gap-2 w-full py-3 rounded-lg font-semibold transition-all duration-300 ${
                    service.highlight
                      ? 'bg-green-600 text-white hover:bg-green-700 shadow-md hover:shadow-lg'
                      : 'bg-blue-600 text-white hover:bg-blue-700 shadow-md hover:shadow-lg'
                  }`}
                >
                  Agregar al Pedido
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-12 bg-blue-50 rounded-xl p-8 border-2 border-blue-200">
          <p className="text-lg text-gray-700 mb-4">
            <strong>¿Necesitas algo personalizado?</strong> Contáctanos y armamos un paquete a tu medida.
          </p>
          <a
            href="https://wa.me/573054115138"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Contactar por WhatsApp para servicios personalizados"
            className="inline-flex items-center gap-2 bg-green-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-green-700 transition-all duration-300"
          >
            Hablar con un Asesor
          </a>
        </div>
      </div>
    </section>
  );
}
