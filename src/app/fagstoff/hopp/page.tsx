import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { FileText, Download, Presentation, ArrowLeft } from "lucide-react";
import { Card, CardContent } from "@/components/ui/Card";

export const metadata: Metadata = {
  title: "Hopp - Fagstoff",
  description: "Fagstoff og ressurser for hoppovelser - hoydehopp, lengdehopp, tresteg og stavsprang.",
};

const resources = [
  {
    title: "Utvikling av hoppstyrke",
    author: "Trenerforeningen",
    type: "presentation",
    description: "PowerPoint-presentasjon om utvikling av spesifikk hoppstyrke.",
  },
  {
    title: "Trening av juniorutovere i lengde",
    author: "Piotr Bora",
    type: "presentation",
    description: "The technical training for young long jumpers - metodikk og ovelser.",
  },
  {
    title: "Hoydehopp for ungdom",
    author: "Thomas Rosvold",
    type: "video",
    description: "Innforing i hoydehoppteknikk for unge utovere.",
  },
  {
    title: "Hoydehopp teknikk",
    author: "Dietmar Moegenburd",
    type: "video",
    description: "Avansert teknikk i hoydehopp.",
  },
];

export default function HoppPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative text-white py-12 md:py-16 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://paw.princeton.edu/sites/default/files/styles/hero_teaser_style/public/images/content/Sports.ledeNew.jpg.webp?itok=8SPdgX-Y"
            alt="Hopp"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/80 to-slate-900/60" />
        </div>
        <div className="container relative z-10">
          <Link
            href="/fagstoff"
            className="inline-flex items-center gap-2 text-slate-300 hover:text-white mb-6 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Tilbake til Fagstoff
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Hopp</h1>
          <p className="text-lg text-slate-200 max-w-2xl">
            Materiell og teknikker for hoppøvelser - høydehopp, lengdehopp,
            tresteg og stavsprang.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-12 md:py-16 bg-background">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            {/* Categories */}
            <div className="flex flex-wrap gap-2 mb-8">
              {["Alle", "Hoydehopp", "Lengdehopp", "Tresteg", "Stavsprang"].map(
                (cat) => (
                  <button
                    key={cat}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                      cat === "Alle"
                        ? "bg-green-600 text-white"
                        : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                    }`}
                  >
                    {cat}
                  </button>
                )
              )}
            </div>

            {/* Resources list */}
            <div className="space-y-4">
              {resources.map((resource, index) => (
                <Card key={index} hover>
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0 bg-green-100">
                          {resource.type === "presentation" ? (
                            <Presentation className="w-6 h-6 text-green-600" />
                          ) : (
                            <FileText className="w-6 h-6 text-green-600" />
                          )}
                        </div>
                        <div>
                          <h3 className="font-semibold text-slate-900 mb-1">
                            {resource.title}
                          </h3>
                          <p className="text-sm text-slate-500 mb-2">
                            Av {resource.author}
                          </p>
                          <p className="text-slate-600 text-sm">
                            {resource.description}
                          </p>
                        </div>
                      </div>
                      <button className="p-2 text-slate-400 hover:text-green-600 transition-colors flex-shrink-0">
                        <Download className="w-5 h-5" />
                      </button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
