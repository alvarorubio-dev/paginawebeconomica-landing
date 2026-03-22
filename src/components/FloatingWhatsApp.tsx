import { MessageCircle } from 'lucide-react';

const FloatingWhatsApp = () => {
  return (
    <a
      href="https://wa.me/573054115138?text=Hola,%20estoy%20interesado%20en%20una%20página%20web,%20quisiera%20más%20información."
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 text-white rounded-full shadow-2xl shadow-green-500/40 hover:shadow-green-500/60 hover:scale-110 transform transition-all duration-300 group focus-ring"
      aria-label="Abrir chat de WhatsApp para solicitar información sobre páginas web"
      role="button"
    >
      <MessageCircle className="h-8 w-8 group-hover:scale-110 transition-transform" aria-hidden="true" />
      <span className="absolute -top-1 -right-1 flex h-4 w-4" aria-hidden="true">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
        <span className="relative inline-flex rounded-full h-4 w-4 bg-green-500" />
      </span>
    </a>
  );
};

export default FloatingWhatsApp;
