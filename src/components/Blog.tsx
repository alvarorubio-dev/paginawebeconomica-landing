import { useState, useEffect } from "react";
import { ExternalLink, Calendar, ArrowRight } from "lucide-react";

// --- Interfaces ---
interface WordPressPost {
  id: number;
  title: { rendered: string };
  excerpt: { rendered: string };
  link: string;
  date: string;
  _embedded?: {
    "wp:featuredmedia"?: Array<{
      source_url: string;
      alt_text: string;
    }>;
  };
}

// --- Configuración ---
const API_URL =
  "https://paginawebeconomica.org/blog/wp-json/wp/v2/posts?per_page=3&_embed";

const FALLBACK_POSTS: WordPressPost[] = [
  {
    id: 1,
    title: { rendered: "Cómo atraer clientes con tu página web" },
    excerpt: {
      rendered:
        "<p>Descubre cómo una web optimizada puede traerte clientes todos los días automáticamente.</p>",
    },
    link: "https://paginawebeconomica.org/blog/como-atraer-clientes-web",
    date: new Date().toISOString(),
  },
  {
    id: 2,
    title: { rendered: "Estrategias de SEO local para negocios" },
    excerpt: {
      rendered:
        "<p>Aprende cómo aparecer en Google en tu ciudad y atraer más clientes a tu negocio.</p>",
    },
    link: "https://paginawebeconomica.org/blog/estrategias-seo-local",
    date: new Date(Date.now() - 86400000).toISOString(),
  },
  {
    id: 3,
    title: { rendered: "Elementos esenciales de una web profesional" },
    excerpt: {
      rendered:
        "<p>Todo lo que debe tener tu web para convertir visitantes en clientes.</p>",
    },
    link: "https://paginawebeconomica.org/blog/elementos-web-profesional",
    date: new Date(Date.now() - 172800000).toISOString(),
  },
];

// --- Helpers ---
function formatDate(dateString: string) {
  try {
    return new Date(dateString).toLocaleDateString("es-CO", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  } catch (e) {
    return "Reciente";
  }
}

// Limpia etiquetas HTML de forma segura sin depender del DOM (SSR compatible)
function cleanHtml(html: string) {
  return html
    .replace(/<[^>]*>?/gm, "") // Elimina etiquetas HTML
    .replace(/&nbsp;/g, " ")
    .replace(/&#8211;/g, "-")
    .replace(/&#8217;/g, "'")
    .trim();
}

function truncateText(text: string, maxLength = 120) {
  return text.length > maxLength ? text.slice(0, maxLength) + "..." : text;
}

// --- Componentes Secundarios ---
const PostCard = ({ post }: { post: WordPressPost }) => {
  const featuredImage = post._embedded?.["wp:featuredmedia"]?.[0]?.source_url;
  const imageAlt =
    post._embedded?.["wp:featuredmedia"]?.[0]?.alt_text || post.title.rendered;

  return (
    <article className="bg-slate-900/60 border border-emerald-500/20 rounded-2xl overflow-hidden hover:border-emerald-500/40 transition-all duration-300 flex flex-col h-full">
      {featuredImage ? (
        <div className="aspect-video overflow-hidden bg-slate-800">
          <img
            src={featuredImage}
            alt={imageAlt}
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
            loading="lazy"
          />
        </div>
      ) : (
        <div className="aspect-video bg-gradient-to-br from-slate-800 to-slate-900 flex items-center justify-center">
          <span className="text-slate-500 text-sm">Sin imagen</span>
        </div>
      )}

      <div className="p-6 flex flex-col flex-1">
        <div className="flex items-center gap-2 text-slate-400 text-xs mb-3">
          <Calendar className="h-3.5 w-3.5" />
          <time dateTime={post.date}>{formatDate(post.date)}</time>
        </div>

        <h3
          className="text-xl font-bold text-white mb-3 line-clamp-2"
          dangerouslySetInnerHTML={{ __html: post.title.rendered }}
        />

        <p className="text-slate-300 text-sm mb-6 flex-1 line-clamp-3">
          {truncateText(cleanHtml(post.excerpt.rendered), 140)}
        </p>

        <a
          href={post.link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-emerald-400 font-semibold hover:text-emerald-300 transition-colors mt-auto text-sm group"
        >
          Leer artículo
          <ArrowRight className="h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
        </a>
      </div>
    </article>
  );
};

const LoadingSkeleton = () => (
  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
    {[1, 2, 3].map((i) => (
      <div
        key={i}
        className="bg-slate-900/60 rounded-2xl overflow-hidden border border-white/5"
      >
        <div className="aspect-video bg-slate-800 animate-pulse" />
        <div className="p-6 space-y-4">
          <div className="h-3 w-24 bg-slate-800 rounded animate-pulse" />
          <div className="h-6 w-full bg-slate-800 rounded animate-pulse" />
          <div className="h-4 w-3/4 bg-slate-800/60 rounded animate-pulse" />
        </div>
      </div>
    ))}
  </div>
);

// --- Componente Principal ---
const BlogSection = () => {
  const [posts, setPosts] = useState<WordPressPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        // Agregamos un timestamp para evitar caché y forzar datos frescos
        const response = await fetch(`${API_URL}&t=${Date.now()}`);

        if (!response.ok) throw new Error("Error al conectar con la API");

        const data = await response.json();

        if (Array.isArray(data) && data.length > 0) {
          setPosts(data);
        } else {
          setPosts(FALLBACK_POSTS);
        }
      } catch (err) {
        console.warn("API Error, usando Fallbacks:", err);
        setPosts(FALLBACK_POSTS);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Recursos y <span className="text-emerald-400">Guías</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            Consejos prácticos para mejorar tu presencia digital y vender más.
          </p>
        </div>

        {loading ? (
          <LoadingSkeleton />
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {posts.map((post) => (
              <PostCard key={post.id} post={post} />
            ))}
          </div>
        )}

        <div className="text-center mt-16">
          <a
            href="https://paginawebeconomica.org/blog"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-8 py-4 bg-transparent border-2 border-emerald-500 text-emerald-400 font-bold rounded-full hover:bg-emerald-500 hover:text-black transition-all duration-300"
          >
            <ExternalLink className="mr-2 h-5 w-5" />
            Ir al Blog Completo
          </a>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
