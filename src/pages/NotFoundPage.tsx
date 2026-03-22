import { Link } from 'react-router-dom';
import { Home, Search, ArrowLeft } from 'lucide-react';

const NotFoundPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100 flex items-center justify-center px-4">
      <div className="max-w-2xl w-full text-center">
        <div className="mb-8 relative">
          <div className="absolute inset-0 flex items-center justify-center opacity-10">
            <Search className="w-96 h-96 text-slate-900" strokeWidth={0.5} />
          </div>
          <h1 className="text-9xl font-bold text-slate-900 relative">
            404
          </h1>
        </div>

        <div className="space-y-4 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
            Página no encontrada
          </h2>
          <p className="text-lg text-slate-600 max-w-md mx-auto">
            Lo sentimos, la página que buscas no existe o ha sido movida.
            Verifica la URL o regresa a la página principal.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link
            to="/"
            className="inline-flex items-center gap-2 bg-slate-900 text-white px-8 py-4 rounded-lg font-semibold hover:bg-slate-800 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 focus:outline-none focus:ring-4 focus:ring-slate-900/50"
            aria-label="Volver a la página principal"
          >
            <Home className="w-5 h-5" aria-hidden="true" />
            Ir al Inicio
          </Link>

          <button
            onClick={() => window.history.back()}
            className="inline-flex items-center gap-2 bg-white text-slate-900 px-8 py-4 rounded-lg font-semibold border-2 border-slate-900 hover:bg-slate-50 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 focus:outline-none focus:ring-4 focus:ring-slate-900/50"
            aria-label="Volver a la página anterior"
          >
            <ArrowLeft className="w-5 h-5" aria-hidden="true" />
            Volver Atrás
          </button>
        </div>

        <div className="mt-16 pt-8 border-t border-slate-200">
          <p className="text-sm text-slate-500">
            ¿Necesitas ayuda?{' '}
            <a
              href="https://wa.me/573054115138?text=Hola%2C%20necesito%20ayuda%20con%20la%20web"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-900 font-semibold hover:underline focus:outline-none focus:ring-2 focus:ring-slate-900 focus:ring-offset-2 rounded"
              aria-label="Contactar por WhatsApp (se abre en nueva ventana)"
            >
              Contáctanos por WhatsApp
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;
