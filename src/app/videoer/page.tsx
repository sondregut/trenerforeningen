import { Metadata } from "next";
import { Play, Clock, User } from "lucide-react";
import { Card, CardContent } from "@/components/ui/Card";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { styles, gradients, colors } from "@/lib/colors";

export const metadata: Metadata = {
  title: "Videoer",
  description: "Videoer fra tidligere trenerseminarer og instruksjonsvideoer fra erfarne friidrettstrenere.",
};

const videos = [
  {
    title: "Bruk hue!",
    presenter: "Pal Berntsen",
    description: "Om mental forberedelse og fokus i trening og konkurranse.",
    category: "Mental trening",
    thumbnail: "mental",
  },
  {
    title: "Treningsplanlegging for 800m jenter",
    presenter: "Erik Sakshaug",
    description: "Komplett guide til treningsplanlegging for unge 800m-løpere.",
    category: "Løp",
    thumbnail: "running",
  },
  {
    title: "400m hekk-trening",
    presenter: "Eystein Enoksen",
    description: "Metodikk og øvelser for 400m hekk.",
    category: "Løp",
    thumbnail: "hurdles",
  },
  {
    title: "Spydkast",
    presenter: "Anders Borgstrom",
    description: "Teknikk og treningsmetoder for spydkast.",
    category: "Kast",
    thumbnail: "javelin",
  },
  {
    title: "Høydehopp for ungdom",
    presenter: "Thomas Rosvold",
    description: "Innføring i høydehoppteknikk for unge utøvere.",
    category: "Hopp",
    thumbnail: "highjump",
  },
  {
    title: "Høydehopp",
    presenter: "Dietmar Moegenburd",
    description: "Avansert teknikk i høydehopp.",
    category: "Hopp",
    thumbnail: "highjump2",
  },
];

const categories = ["Alle", "Løp", "Hopp", "Kast", "Mental trening"];

// Hero section
function HeroSection() {
  return (
    <section className="text-white py-12 md:py-16" style={styles.sectionBg}>
      <div className="container">
        <div className="max-w-3xl">
          <span className="inline-block px-4 py-1.5 bg-orange-500/20 text-orange-300 rounded-full text-sm font-medium mb-6">
            Videoarkiv
          </span>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Filmer og videoer
          </h1>
          <p className="text-lg text-slate-300">
            Se opptak fra tidligere trenerseminarer og instruksjonsvideoer fra
            erfarne friidrettstrenere. Lær nye teknikker og få inspirasjon.
          </p>
        </div>
      </div>
    </section>
  );
}

// Video card component
function VideoCard({ video }: { video: typeof videos[0] }) {
  return (
    <Card hover className="overflow-hidden">
      {/* Video thumbnail */}
      <div className="relative aspect-video" style={{ background: `linear-gradient(to bottom right, ${colors.primary[700]}, ${colors.primary[900]})` }}>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:bg-orange-500/80 transition-colors cursor-pointer">
            <Play className="w-8 h-8 text-white ml-1" />
          </div>
        </div>
        <span className="absolute top-3 left-3 px-2 py-1 bg-black/50 text-white text-xs rounded">
          {video.category}
        </span>
      </div>

      <CardContent className="p-4">
        <h3 className="font-semibold mb-2" style={styles.primaryText}>{video.title}</h3>
        <div className="flex items-center gap-2 text-sm text-slate-500 mb-2">
          <User className="w-4 h-4" />
          {video.presenter}
        </div>
        <p className="text-sm text-slate-600">{video.description}</p>
      </CardContent>
    </Card>
  );
}

// Videos grid section
function VideosSection() {
  return (
    <section className="py-12 md:py-16 bg-background">
      <div className="container">
        {/* Filter buttons */}
        <div className="flex flex-wrap gap-2 mb-8">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                cat === "Alle"
                  ? "bg-slate-800 text-white"
                  : "bg-slate-100 text-slate-700 hover:bg-slate-200"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Videos grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {videos.map((video, index) => (
            <VideoCard key={index} video={video} />
          ))}
        </div>

        {/* More videos info */}
        <div className="mt-12 p-8 bg-slate-100 rounded-xl text-center">
          <p className="text-slate-600 mb-2">
            Flere videoer fra tidligere seminarer er tilgjengelige for medlemmer.
          </p>
          <p className="text-sm text-slate-500">
            Kontakt oss hvis du har videoer du vil dele med foreningen.
          </p>
        </div>
      </div>
    </section>
  );
}

export default function VideoerPage() {
  return (
    <>
      <HeroSection />
      <VideosSection />
    </>
  );
}
