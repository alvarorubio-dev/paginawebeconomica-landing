import { CheckCircle, MessageCircle } from 'lucide-react';
import { useState, useEffect, FormEvent, ChangeEvent } from 'react';
import Confetti from 'react-confetti';

export default function SuccessPage() {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight
  });

  const [formData, setFormData] = useState({
    name: '',
    whatsapp: '',
    service: '',
    reference: ''
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight
      });
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const message = `Hola, soy ${formData.name}. Acabo de pagar el servicio de *${formData.service}*. Mi número es ${formData.whatsapp}. Referencia: ${formData.reference || 'N/A'}. Quedo atento para iniciar.`;

    const whatsappUrl = `https://wa.me/573054115138?text=${encodeURIComponent(message)}`;

    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50 flex items-center justify-center px-4 py-12 relative">
      <Confetti
        width={windowSize.width}
        height={windowSize.height}
        recycle={false}
        numberOfPieces={500}
        gravity={0.3}
        className="fixed inset-0 z-0"
      />
      <div className="max-w-[600px] w-full bg-white rounded-2xl shadow-xl p-8 md:p-10 relative z-10">
        <div className="flex justify-center mb-6">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center">
            <CheckCircle className="w-12 h-12 text-green-600" aria-hidden="true" />
          </div>
        </div>

        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3 text-center">
          ¡Pago Exitoso!
        </h1>

        <p className="text-lg text-gray-600 mb-8 text-center">
          Solo un paso más para activar tu servicio
        </p>

        <div className="bg-green-50 border-2 border-green-200 rounded-lg p-5 mb-8">
          <p className="text-gray-700 text-center text-sm">
            <strong>Próximo paso:</strong> Completa tus datos para que podamos iniciar con tu proyecto de inmediato.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5" noValidate>
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-semibold text-gray-700 mb-2"
            >
              Nombre Completo <span className="text-red-500" aria-label="requerido">*</span>
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              aria-required="true"
              className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-green-500 focus:ring-2 focus:ring-green-200 transition-colors outline-none text-gray-900 placeholder:text-gray-400"
              placeholder="Ej: Juan Pérez"
            />
          </div>

          <div>
            <label
              htmlFor="whatsapp"
              className="block text-sm font-semibold text-gray-700 mb-2"
            >
              Tu WhatsApp <span className="text-red-500" aria-label="requerido">*</span>
            </label>
            <input
              type="tel"
              id="whatsapp"
              name="whatsapp"
              value={formData.whatsapp}
              onChange={handleChange}
              required
              aria-required="true"
              className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-green-500 focus:ring-2 focus:ring-green-200 transition-colors outline-none text-gray-900 placeholder:text-gray-400"
              placeholder="Ej: +57 300 123 4567"
            />
          </div>

          <div>
            <label
              htmlFor="service"
              className="block text-sm font-semibold text-gray-700 mb-2"
            >
              Servicio Pagado <span className="text-red-500" aria-label="requerido">*</span>
            </label>
            <select
              id="service"
              name="service"
              value={formData.service}
              onChange={handleChange}
              required
              aria-required="true"
              className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-green-500 focus:ring-2 focus:ring-green-200 transition-colors outline-none text-gray-900 bg-white cursor-pointer"
            >
              <option value="">Selecciona un servicio</option>
              <option value="Anticipo Web ($150.000)">Anticipo Web ($150.000)</option>
              <option value="Saldo Final Entrega">Saldo Final Entrega</option>
              <option value="Catálogo Digital / Menú QR">Catálogo Digital / Menú QR</option>
              <option value="Tienda Online / Botón Pagos">Tienda Online / Botón Pagos</option>
              <option value="Diseño de Logo">Diseño de Logo</option>
              <option value="SEO Local">SEO Local</option>
              <option value="Entrega Express">Entrega Express</option>
              <option value="Email Marketing">Email Marketing</option>
              <option value="Redacción de Textos">Redacción de Textos</option>
              <option value="Revisiones Adicionales">Revisiones Adicionales</option>
              <option value="Correos Corporativos">Correos Corporativos</option>
            </select>
          </div>

          <div>
            <label
              htmlFor="reference"
              className="block text-sm font-semibold text-gray-700 mb-2"
            >
              Referencia de Pago <span className="text-gray-500 text-xs">(Opcional)</span>
            </label>
            <input
              type="text"
              id="reference"
              name="reference"
              value={formData.reference}
              onChange={handleChange}
              className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-green-500 focus:ring-2 focus:ring-green-200 transition-colors outline-none text-gray-900 placeholder:text-gray-400"
              placeholder="Ej: WP-123456789"
            />
          </div>

          <button
            type="submit"
            className="w-full inline-flex items-center justify-center gap-3 bg-green-600 text-white px-8 py-4 rounded-lg text-lg font-bold hover:bg-green-700 focus:bg-green-700 focus:ring-4 focus:ring-green-300 transition-all duration-300 shadow-lg hover:shadow-xl active:scale-[0.98]"
            aria-label="Confirmar y contactar por WhatsApp"
          >
            <MessageCircle className="w-6 h-6" aria-hidden="true" />
            Confirmar y Contactar
          </button>
        </form>

        <p className="text-sm text-gray-500 mt-8 text-center">
          ¿Tienes preguntas? Escríbenos a WhatsApp: <a href="https://wa.me/573054115138" className="text-green-600 hover:text-green-700 font-semibold underline" target="_blank" rel="noopener noreferrer">+57 305 411 5138</a>
        </p>
      </div>
    </div>
  );
}
