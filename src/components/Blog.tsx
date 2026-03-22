import { useState, useEffect } from 'react';
import { ExternalLink, Calendar, ArrowRight } from 'lucide-react';

interface WordPressPost {
  id: number;
  title: { rendered: string };
  excerpt: { rendered: string };
  link: string;
  date: string;
  _embedded?: {
    'wp:featuredmedia'?: Array<{
      source_url: string;
      alt_text: string;
    }>;
  };
}

const API_URL =
  'https://paginawebeconomica.org/blog/wp-json/wp/v2/posts?per_page=5&_embed';

// Fallback seguro con URLs reales
const FALLBACK_POSTS: WordPressPost[] = [
  {
    id: 1,
    title: { rendered: 'Cómo atraer clientes con tu página web' },
    excerpt: {
      rendered:
        '<p>Descubre cómo una web optimizada puede traerte clientes todos los días automáticamente.</p>',
    },
    link: 'https://paginawebeconomica.org/blog/como-atraer-clientes-web',
    date: new Date().toISOString(),
  },
  {
    id: 2,
    title: { rendered: 'Estrategias de SEO local para negocios' },
    excerpt: {
      rendered:
        '<p>Aprende cómo aparecer en Google en tu ciudad y atraer más clientes a tu negocio.</p>',
    },
    link: 'https://paginawebeconomica.org/blog/estrategias-seo-local',
    date: new Date(Date.now() - 86400000).toISOString(),
  },
  {
    id: 3,
    title: { rendered: 'Elementos esenciales de una web profesional' },
    excerpt: {
      rendered:
        '<p>Todo lo que debe tener tu web para convertir visitantes en clientes.</p>',
    },
    link: 'https://paginawebeconomica.org/blog/elementos-web-profesional',
    date: new Date(Date.now() - 172800000).toISOString(),
  },
];

function formatDate(dateString: string) {
  return new Date(dateString).toLocaleDateString('es-CO', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

function sanitize(html: string) {
  return html
    .replace(/<script[\s\S]*?<\/script>/gi, '')
    .replace(/on\w+="[^"]*"/gi, '')
    .replace(/on\w+='[^']*'/gi, '');
}

function truncateExcerpt(html: string, maxLength = 120) {
  const tmp = document.createElement('div');
  tmp.innerHTML = html;
  const text = tmp.textContent || tmp.innerText || '';
  const truncated = text.length > maxLength ? text.slice(0, maxLength) + '...' : text;
  return `<p>${truncated}</p>`;
}

interface PostCardProps {
  post: WordPressPost;
}

const PostCard = ({ post }: PostCardProps) => {
  const featuredImage = post._embedded?.['wp:featuredmedia']?.[0]?.source_url;
  const imageAlt =
    post._embedded?.['wp:featuredmedia']?.[0]?.alt_text || 'Imagen del artículo';

  return (
    <article className="bg-slate-900/60 border border-emerald-500/20 rounded-2xl overflow-hidden hover:border-emerald-500/40 transition-all duration-300 flex flex-col">
      {featuredImage && (
        <div className="aspect-video overflow-hidden bg-slate-800">
          <img
            src={featuredImage}
            alt={imageAlt}
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>
      )}

      <div className="p-6 flex flex-col flex-1">
        <div className="flex items-center gap-2 text-slate-400 text-sm mb-3">
          <Calendar className="h-4 w-4" aria-hidden="true" />
          <time dateTime={post.date}>{formatDate(post.date)}</time>
        </div>

        <h3
          className="text-xl font-bold text-white mb-3"
          dangerouslySetInnerHTML={{ __html: sanitize(post.title.rendered) }}
        />

        <div
          className="text-slate-300 text-sm mb-4 flex-1"
          dangerouslySetInnerHTML={{
            __html: sanitize(truncateExcerpt(post.excerpt.rendered, 140)),
          }}
        />

        <a
          href={post.link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-emerald-400 font-semibold hover:text-emerald-300 transition-colors mt-auto focus-ring rounded-lg px-2 py-1 -ml-2"
          aria-label="Leer artículo completo - abre en nueva ventana"
        >
          Leer artículo
          <ArrowRight className="h-4 w-4" aria-hidden="true" />
        </a>
      </div>
    </article>
  );
};

const LoadingSkeleton = () => (
  <section className="py-16 md:py-24 bg-black" aria-label="Cargando artículos del blog">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <div className="h-12 w-64 bg-slate-800 rounded animate-pulse mx-auto mb-4" />
        <div className="h-6 w-96 bg-slate-800/60 rounded animate-pulse mx-auto" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {[1, 2, 3].map((i) => (
          <div key={i} className="bg-slate-900/60 rounded-2xl overflow-hidden" aria-hidden="true">
            <div className="aspect-video bg-slate-800 animate-pulse" />
            <div className="p-6 space-y-3">
              <div className="h-4 w-24 bg-slate-800 rounded animate-pulse" />
              <div className="h-6 w-full bg-slate-800 rounded animate-pulse" />
              <div className="h-4 w-full bg-slate-800/60 rounded animate-pulse" />
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const BlogSection = () => {
  const [posts, setPosts] = useState<WordPressPost[]>(FALLBACK_POSTS);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const controller = new AbortController();

    const fetchPosts = async () => {
      try {
        const response = await fetch(API_URL, {
          signal: controller.signal,
          headers: {
            'Accept': 'application/json',
          },
        });

        if (!response.ok) {
          throw new Error(`HTTP error ${response.status}`);
        }

        const contentType = response.headers.get('content-type');
        if (!contentType?.includes('application/json')) {
          throw new Error('La respuesta no es JSON');
        }

        const data: WordPressPost[] = await response.json();

        if (Array.isArray(data) && data.length > 0) {
          setPosts(data);
        }
      } catch (err) {
        if ((err as Error).name !== 'AbortError') {
          console.error('Error al cargar posts de WordPress:', err);
        }
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
    return () => controller.abort();
  }, []);

  if (loading) return <LoadingSkeleton />;

  return (
    <section className="py-16 md:py-24 bg-black" aria-labelledby="blog-heading">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 id="blog-heading" className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">
            Recursos y Guías
            <span className="block mt-2 text-emerald-400">para tu negocio</span>
          </h2>
          <p className="text-lg md:text-xl text-slate-300">
            Aprende cómo hacer crecer tu presencia digital
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {posts.map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="https://paginawebeconomica.org/blog"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-8 py-4 border border-emerald-500 text-white font-bold rounded-xl hover:bg-emerald-500/10 transition-colors focus-ring"
            aria-label="Ver todos los artículos del blog - abre en nueva ventana"
          >
            <ExternalLink className="mr-2 h-5 w-5" aria-hidden="true" />
            Ver todos los artículos
          </a>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
