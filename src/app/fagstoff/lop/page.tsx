import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { FileText, Download, Video, ArrowLeft } from "lucide-react";
import { Card, CardContent } from "@/components/ui/Card";

export const metadata: Metadata = {
  title: "Løp - Fagstoff",
  description: "Fagstoff og ressurser for løpsdisipliner - sprint, mellomdistanse, langdistanse og hekkeløp.",
};

const resources = [
  {
    title: "Treningsplanlegging for 800m jenter",
    author: "Erik Sakshaug",
    type: "presentation",
    description: "Komplett guide til treningsplanlegging for unge 800m-løpere.",
  },
  {
    title: "400m hekk-trening",
    author: "Eystein Enoksen",
    type: "presentation",
    description: "Metodikk og øvelser for 400m hekk.",
  },
  {
    title: "Bruk hue! - Mental trening",
    author: "Pal Berntsen",
    type: "video",
    description: "Om mental forberedelse og fokus i løp.",
  },
];

export default function LopPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative text-white py-12 md:py-16 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://www.friidrett.no/contentassets/c097801a30364ee29679440a50ed2897/img_2025-08-04-183918.jpg"
            alt="Løp"
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
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Løp</h1>
          <p className="text-lg text-slate-200 max-w-2xl">
            Ressurser og fagstoff for løpsdisipliner - fra sprint til maraton,
            inkludert hekkeløp og stafett.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-12 md:py-16 bg-background">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            {/* Categories */}
            <div className="flex flex-wrap gap-2 mb-8">
              {["Alle", "Sprint", "Mellomdistanse", "Langdistanse", "Hekk"].map(
                (cat) => (
                  <button
                    key={cat}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                      cat === "Alle"
                        ? "bg-blue-600 text-white"
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
                        <div
                          className={`w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0 ${
                            resource.type === "video"
                              ? "bg-red-100"
                              : "bg-blue-100"
                          }`}
                        >
                          {resource.type === "video" ? (
                            <Video className="w-6 h-6 text-red-600" />
                          ) : (
                            <FileText className="w-6 h-6 text-blue-600" />
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
                      <button className="p-2 text-slate-400 hover:text-blue-600 transition-colors flex-shrink-0">
                        <Download className="w-5 h-5" />
                      </button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Empty state info */}
            <div className="mt-12 p-8 bg-slate-100 rounded-xl text-center">
              <p className="text-slate-600 mb-4">
                Flere ressurser vil bli lagt til etter hvert. Har du materiale du
                vil dele?
              </p>
              <Link
                href="/om-oss"
                className="text-blue-600 hover:text-blue-700 font-medium"
              >
                Kontakt oss
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
