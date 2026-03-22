import { useState, useCallback, useRef, useId } from 'react';
import { ChevronDown } from 'lucide-react';

interface FAQItemProps {
  question: string;
  answer: string | React.ReactNode;
  isOpen: boolean;
  onToggle: () => void;
  index: number;
  onKeyNavigation: (index: number, direction: 'up' | 'down' | 'home' | 'end') => void;
}

const FAQItem = ({ question, answer, isOpen, onToggle, index, onKeyNavigation }: FAQItemProps) => {
  const uniqueId = useId();
  const buttonId = `faq-btn-${uniqueId}`;
  const panelId = `faq-panel-${uniqueId}`;

  const handleKeyDown = (e: React.KeyboardEvent) => {
    switch (e.key) {
      case 'ArrowDown':
        e.preventDefault();
        onKeyNavigation(index, 'down');
        break;
      case 'ArrowUp':
        e.preventDefault();
        onKeyNavigation(index, 'up');
        break;
      case 'Home':
        e.preventDefault();
        onKeyNavigation(index, 'home');
        break;
      case 'End':
        e.preventDefault();
        onKeyNavigation(index, 'end');
        break;
    }
  };

  return (
    <div className="bg-slate-900/60 backdrop-blur-lg border rounded-xl hover:shadow-lg transition-all" style={{ borderColor: 'rgb(245 158 11 / 20%)', boxShadow: isOpen ? '0 10px 30px rgb(245 158 11 / 20%)' : undefined }}>
      <h3>
        <button
          id={buttonId}
          aria-expanded={isOpen}
          aria-controls={panelId}
          className="flex justify-between items-start w-full text-left p-6 focus-ring rounded-xl group"
          onClick={onToggle}
          onKeyDown={handleKeyDown}
          data-faq-trigger
        >
          <span className="text-lg font-bold text-white pr-4 transition-colors duration-200" style={{ color: isOpen ? 'rgb(245 158 11 / 90%)' : undefined }}>
            {question}
          </span>
          <span className="flex-shrink-0 ml-2" aria-hidden="true">
            <ChevronDown
              className={`h-6 w-6 transition-transform duration-200 ${
                isOpen ? 'rotate-180' : 'text-slate-400'
              }`}
              style={{ color: isOpen ? 'rgb(245 158 11 / 90%)' : undefined }}
            />
          </span>
        </button>
      </h3>

      <div
        id={panelId}
        role="region"
        aria-labelledby={buttonId}
        hidden={!isOpen}
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-[600px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-6 pb-6 pr-14">
          <div className="text-slate-300 leading-relaxed">{answer}</div>
        </div>
      </div>
    </div>
  );
};

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const faqs = [
    {
      question: '¿Debo pagar mensualidades por el mantenimiento web o la página es de mi propiedad?',
      answer: (
        <>
          <strong>No.</strong> Nuestro modelo de desarrollo web es de pago único. Al contratar, obtienes el 100% de la <strong>propiedad digital</strong> sobre los archivos y el código de tu sitio. Además, te bonificamos el primer año de <strong>Alojamiento Web (Hosting)</strong> y registro de <strong>Dominio</strong>. A partir del segundo año, tienes total libertad: puedes renovar estos servicios de infraestructura con nosotros o solicitar una <strong>migración web gratuita</strong> a otro proveedor. Cero cláusulas de permanencia.
        </>
      ),
    },
    {
      question: '¿Esta página web funciona como Tienda Virtual (E-commerce) para recibir pedidos?',
      answer: (
        <>
          La plataforma base ($300.000 COP) está diseñada como una <strong>Landing Page (Página de Aterrizaje)</strong> informativa y de captación de clientes. Si necesitas funciones de <strong>Comercio Electrónico</strong>, puedes agregar nuestro módulo de <strong>Catálogo Digital / Menú QR</strong> (+$150.000 COP). Esto incluye la integración de un sistema de pedidos directo a WhatsApp y la carga inicial de tu inventario. Te capacitamos mediante tutoriales para que autogestiones tu catálogo a través de un <strong>Gestor de Contenidos (CMS)</strong> sin límite de productos.
        </>
      ),
    },
    {
      question: '¿Qué hago si no tengo Identidad Corporativa (logo) ni fotografías profesionales?',
      answer: (
        <>
          ¡No dejes que eso frene tu digitalización! Para el diseño visual de tu sitio, utilizamos recursos de bancos de imágenes en alta resolución (<strong>Stock Photos</strong>) con licencia comercial, adaptados a tu sector (gastronomía, salud, belleza, etc.) sin costo adicional. En cuanto al <strong>Branding</strong>, si no tienes logotipo, diseñaremos un encabezado tipográfico elegante con el nombre de tu empresa, o puedes añadir nuestro servicio de creación de <strong>Identidad Visual (Diseño de Logo)</strong> por solo $80.000 COP.
        </>
      ),
    },
    {
      question: '¿El proceso de diseño web incluye rondas de revisión y control de calidad?',
      answer: (
        <>
          Absolutamente. Nuestro protocolo de <strong>Control de Calidad (QA)</strong> garantiza que te sientas orgulloso de tu web. Antes del despliegue en el servidor (lanzamiento), incluimos una ronda de revisiones de <strong>Diseño UI/UX</strong> para ajustar paletas de colores, tipografías o contenido multimedia. Una vez la página está indexada y aprobada, cualquier servicio de mantenimiento web o actualización de contenido en el futuro tiene una tarifa plana mínima de $40.000 COP por sesión técnica.
        </>
      ),
    },
    {
      question: '¿Cuánto tarda el posicionamiento SEO en generar tráfico orgánico desde Google?',
      answer: (
        <>
          Al publicar tu sitio, los algoritmos de búsqueda inician el proceso de <strong>rastreo e indexación</strong>. Aparecer en los primeros resultados orgánicos (<strong>SERPs</strong>) mediante <strong>Tráfico Orgánico SEO</strong> suele tomar entre 2 y 4 semanas, ya que tu página genera autoridad gradualmente. Sin embargo, desde el minuto cero, tu URL está optimizada y lista para recibir tráfico inmediato a través de campañas de <strong>Publicidad Digital (Google Ads o Meta Ads)</strong> o enlaces directos desde tus redes sociales.
        </>
      ),
    },
    {
      question: '¿La arquitectura de la página web es Responsive y Mobile-First?',
      answer: (
        <>
          Sí, desarrollamos bajo la arquitectura <strong>Mobile-First (Prioridad para móviles)</strong> y <strong>Diseño Web Responsive</strong>. Esto significa que la interfaz gráfica y la velocidad de carga (<strong>PageSpeed</strong>) están optimizadas para ofrecer la mejor <strong>Experiencia de Usuario (UX)</strong> en smartphones (Android/iPhone), tablets y computadores. Teniendo en cuenta que el 70% del comercio digital en Colombia ocurre en dispositivos móviles, garantizamos un rendimiento técnico impecable.
        </>
      ),
    },
    {
      question: '¿Cuáles son los requisitos técnicos para iniciar el desarrollo de mi página web?',
      answer: (
        <>
          El proceso de <strong>Onboarding (inicio de proyecto)</strong> es muy ágil. Tras reservar tu cupo, solo debes enviarnos por WhatsApp tus activos digitales básicos:
          <br />
          <br />
          • Información de contacto y geolocalización local.
          <br />
          • Portafolio de servicios principales.
          <br />
          • Manual de marca o Logo (si cuentas con uno).
          <br />
          <br />
          Nuestro equipo asume el trabajo complejo: realizamos el <strong>Copywriting (redacción persuasiva)</strong>, la curaduría visual y todo el desarrollo Frontend para estructurar tu presencia online en 5-7 días.
        </>
      ),
    },
    {
      question: '¿Las pasarelas de pago para contratar el servicio son seguras?',
      answer: (
        <>
          Operamos con plataformas financieras que garantizan transacciones 100% encriptadas. Nuestro modelo comercial es <strong>50/50</strong>: realizas un anticipo de $150.000 COP y el saldo final solo al verificar el funcionamiento exitoso de tu web. Aceptamos transferencias a través del sistema bancario colombiano (<strong>Bancolombia</strong>), billeteras digitales (<strong>Nequi</strong>), y procesadores de pago seguros como <strong>Wompi</strong> para tarjetas de crédito o PSE.
        </>
      ),
    },
    {
      question: '¿Ofrecen servicios de agencia digital para cualquier ciudad de Colombia?',
      answer: (
        <>
          Sí, operamos como una <strong>Agencia Digital Remota</strong>, lo que nos permite impulsar la transformación digital de empresas sin importar su ubicación geográfica. Hemos implementado soluciones tecnológicas para clientes en los principales centros económicos (<strong>Bogotá, Medellín, Cali, Barranquilla, Bucaramanga</strong>) y en municipios emergentes. Nuestra metodología en la nube garantiza el mismo estándar de calidad SEO en toda Colombia.
        </>
      ),
    },
  ];

  const handleToggle = useCallback(
    (index: number) => {
      setOpenIndex(openIndex === index ? null : index);
    },
    [openIndex]
  );

  const handleKeyNavigation = useCallback(
    (currentIndex: number, direction: 'up' | 'down' | 'home' | 'end') => {
      const triggers = containerRef.current?.querySelectorAll<HTMLButtonElement>('[data-faq-trigger]');
      if (!triggers) return;

      let targetIndex: number;
      switch (direction) {
        case 'up':
          targetIndex = currentIndex === 0 ? triggers.length - 1 : currentIndex - 1;
          break;
        case 'down':
          targetIndex = currentIndex === triggers.length - 1 ? 0 : currentIndex + 1;
          break;
        case 'home':
          targetIndex = 0;
          break;
        case 'end':
          targetIndex = triggers.length - 1;
          break;
      }
      triggers[targetIndex]?.focus();
    },
    []
  );

  return (
    <section id="faq" className="py-16 md:py-24 bg-black relative" aria-labelledby="faq-heading">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-transparent" style={{ backgroundImage: 'linear-gradient(to bottom, transparent, rgb(245 158 11 / 5%), transparent)' }} aria-hidden="true" />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-12">
          <h2 id="faq-heading" className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">
            Preguntas frecuentes
          </h2>
          <h3 className="text-xl md:text-2xl text-slate-300 max-w-4xl mx-auto leading-relaxed">
            Resuelve tus dudas antes de lanzar tu Negocio a Internet: Todo sobre Diseño Web y SEO Local en Colombia
          </h3>
        </div>

        <div ref={containerRef} className="max-w-3xl mx-auto">
          <div className="space-y-4" role="list">
            {faqs.map((faq, index) => (
              <div role="listitem" key={index}>
                <FAQItem
                  question={faq.question}
                  answer={faq.answer}
                  isOpen={openIndex === index}
                  onToggle={() => handleToggle(index)}
                  index={index}
                  onKeyNavigation={handleKeyNavigation}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
