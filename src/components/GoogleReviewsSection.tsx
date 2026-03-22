import { useRef, useState, useEffect } from 'react';
import { Star, CheckCircle2, ChevronLeft, ChevronRight } from 'lucide-react';

interface Review {
  name: string;
  role: string;
  time: string;
  text: string;
  rating: number;
  initials: string;
  color: string;
}

const reviews: Review[] = [
  {
    name: 'Carlos M.',
    role: 'Dueno de Barberia (Bogota)',
    time: 'Hace 1 semana',
    text: 'Al principio dude por el precio, pero cumplieron con todo. Mi barberia en Chapinero ya aparece en el mapa y me han llegado 3 clientes nuevos esta semana solo por la web. Recomendados.',
    rating: 5,
    initials: 'CM',
    color: 'bg-blue-600',
  },
  {
    name: 'Diana Sofia R.',
    role: 'Emprendedora (Medellin)',
    time: 'Hace 3 semanas',
    text: 'Necesitaba algo rapido para mi tienda de postres. En 5 dias ya tenia mi catalogo montado. Me gusto mucho que no cobran mensualidades raras. El boton de WhatsApp funciona perfecto.',
    rating: 5,
    initials: 'DS',
    color: 'bg-rose-500',
  },
  {
    name: 'Jorge E.',
    role: 'Servicios Tecnicos (Cali)',
    time: 'Hace 1 mes',
    text: 'Excelente servicio. La pagina carga muy rapido en celulares. Me explicaron como cambiar las fotos yo mismo. Muy honestos con el precio de $300k, sin sorpresas.',
    rating: 5,
    initials: 'JE',
    color: 'bg-amber-600',
  },
  {
    name: 'Mariana L.',
    role: 'Salón de Belleza (Barranquilla)',
    time: 'Hace 2 semanas',
    text: 'Increíble lo profesional que quedó mi página. Mis clientas me felicitan y dicen que se ve súper elegante. Ya he agendado 5 citas nuevas gracias a la web. Valió cada peso.',
    rating: 5,
    initials: 'ML',
    color: 'bg-purple-600',
  },
  {
    name: 'Andres P.',
    role: 'Restaurante (Cartagena)',
    time: 'Hace 1 mes',
    text: 'Necesitaba mostrar mi menú en línea urgente. En menos de una semana ya estaba lista. El diseño quedó hermoso y ahora los clientes ven las fotos de los platos antes de venir. Súper recomendado.',
    rating: 5,
    initials: 'AP',
    color: 'bg-green-600',
  },
  {
    name: 'Valentina G.',
    role: 'Studio de Yoga (Bucaramanga)',
    time: 'Hace 3 días',
    text: 'La mejor inversión para mi negocio. La página es rápida, sencilla de usar y se ve increíble en el celular. Mis alumnas nuevas me dicen que les dio mucha confianza ver la web profesional.',
    rating: 5,
    initials: 'VG',
    color: 'bg-teal-600',
  },
];

const GoogleLogo = () => (
  <svg viewBox="0 0 24 24" className="h-6 w-6" aria-hidden="true">
    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4" />
    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
  </svg>
);

const StarRating = ({ rating }: { rating: number }) => (
  <div className="flex gap-0.5" role="img" aria-label={`${rating} de 5 estrellas`}>
    {Array.from({ length: 5 }).map((_, i) => (
      <Star
        key={i}
        className={`h-4 w-4 ${i < rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`}
        aria-hidden="true"
      />
    ))}
  </div>
);

const ReviewCard = ({ review }: { review: Review }) => (
  <article className="bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300 p-6 flex flex-col h-full min-w-[300px] md:min-w-0">
    <div className="flex items-start gap-3 mb-4">
      <div className={`${review.color} w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0`} aria-hidden="true">
        <span className="text-white text-sm font-bold">{review.initials}</span>
      </div>
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-1.5">
          <span className="font-semibold text-gray-900 text-sm truncate">{review.name}</span>
          <CheckCircle2 className="h-3.5 w-3.5 text-blue-500 flex-shrink-0" aria-label="Verificado" />
        </div>
        <p className="text-xs text-gray-500 truncate">{review.role}</p>
      </div>
      <GoogleLogo />
    </div>

    <div className="flex items-center gap-2 mb-3">
      <StarRating rating={review.rating} />
      <span className="text-xs text-gray-400">{review.time}</span>
    </div>

    <p className="text-gray-700 text-sm leading-relaxed flex-1">"{review.text}"</p>
  </article>
);

const GoogleReviewsSection = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  const checkScroll = () => {
    const el = scrollRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 4);
    setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 4);
  };

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    checkScroll();
    el.addEventListener('scroll', checkScroll, { passive: true });
    window.addEventListener('resize', checkScroll);
    return () => {
      el.removeEventListener('scroll', checkScroll);
      window.removeEventListener('resize', checkScroll);
    };
  }, []);

  const scroll = (direction: 'left' | 'right') => {
    const el = scrollRef.current;
    if (!el) return;
    const amount = direction === 'left' ? -320 : 320;
    el.scrollBy({ left: amount, behavior: 'smooth' });
  };

  return (
    <section className="py-16 md:py-24 bg-black relative overflow-hidden" aria-labelledby="reviews-heading">
      <div className="absolute inset-0 bg-gradient-to-b from-emerald-500/5 via-transparent to-transparent" aria-hidden="true" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2.5 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-5 py-2.5 mb-6">
              <GoogleLogo />
              <div className="flex items-center gap-1" role="img" aria-label="4.9 de 5 estrellas">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 text-yellow-400 fill-yellow-400" aria-hidden="true" />
                ))}
              </div>
              <span className="text-white font-bold text-sm">4.9/5</span>
              <span className="text-slate-400 text-xs">Calificacion</span>
            </div>

            <h2 id="reviews-heading" className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">
              Lo que dicen
              <span className="block mt-2 text-emerald-400">nuestros clientes</span>
            </h2>
            <p className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto">
              Opiniones reales de emprendedores colombianos que confiaron en nosotros
            </p>
          </div>

          <div className="hidden md:grid md:grid-cols-3 gap-6">
            {reviews.map((review) => (
              <ReviewCard key={review.name} review={review} />
            ))}
          </div>

          <div className="md:hidden relative">
            <div
              ref={scrollRef}
              className="flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-thin -mx-4 px-4"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
              role="region"
              aria-label="Carrusel de opiniones de clientes"
              tabIndex={0}
            >
              {reviews.map((review) => (
                <div key={review.name} className="snap-start flex-shrink-0 w-[85vw] max-w-[340px]">
                  <ReviewCard review={review} />
                </div>
              ))}
            </div>

            <div className="flex justify-center gap-3 mt-4">
              <button
                onClick={() => scroll('left')}
                disabled={!canScrollLeft}
                className="w-9 h-9 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center text-white disabled:opacity-30 hover:bg-slate-700 transition-colors focus-ring"
                aria-label="Ver opinión anterior"
              >
                <ChevronLeft className="h-4 w-4" aria-hidden="true" />
              </button>
              <button
                onClick={() => scroll('right')}
                disabled={!canScrollRight}
                className="w-9 h-9 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center text-white disabled:opacity-30 hover:bg-slate-700 transition-colors focus-ring"
                aria-label="Ver siguiente opinión"
              >
                <ChevronRight className="h-4 w-4" aria-hidden="true" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GoogleReviewsSection;
