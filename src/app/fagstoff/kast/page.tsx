import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { FileText, Download, Presentation, ArrowLeft } from "lucide-react";
import { Card, CardContent } from "@/components/ui/Card";

export const metadata: Metadata = {
  title: "Kast - Fagstoff",
  description: "Fagstoff og ressurser for kastøvelser - kule, diskos, slegge og spydkast.",
};

const resources = [
  {
    title: "Spesifikk styrke for kastere",
    author: "Trenerforeningen",
    type: "presentation",
    format: "PowerPoint",
    description: "Presentasjon om styrketrening spesielt tilpasset kastere.",
  },
  {
    title: "Spydkast i Tyskland",
    author: "Ukjent",
    type: "pdf",
    format: "PDF",
    description: "Artikkel om spydkast-metodikk fra Tyskland.",
  },
  {
    title: "Diskoskast teknikk",
    author: "Magnus Rosholm Berntsen",
    type: "video",
    format: "Video",
    description: "Forelesning om diskoskast-teknikk fra Trenerseminar 2025.",
  },
  {
    title: "Spydkast",
    author: "Anders Borgstrom",
    type: "video",
    format: "Video",
    description: "Video om spydkast-teknikk og trening.",
  },
];

export default function KastPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative text-white py-12 md:py-16 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://www.teamnor.no/contentassets/f3e36dc56dcb45d8b0d4e9003ef7a295/eivindhenriksen_612.jpg"
            alt="Kast"
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
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Kast</h1>
          <p className="text-lg text-slate-200 max-w-2xl">
            Fagstoff for kastøvelser - kule, diskos, slegge og spydkast med fokus
            på teknikk og styrke.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-12 md:py-16 bg-background">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            {/* Categories */}
            <div className="flex flex-wrap gap-2 mb-8">
              {["Alle", "Kulestot", "Diskos", "Slegge", "Spydkast"].map((cat) => (
                <button
                  key={cat}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    cat === "Alle"
                      ? "bg-orange-600 text-white"
                      : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Resources list */}
            <div className="space-y-4">
              {resources.map((resource, index) => (
                <Card key={index} hover>
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0 bg-orange-100">
                          {resource.type === "presentation" ? (
                            <Presentation className="w-6 h-6 text-orange-600" />
                          ) : (
                            <FileText className="w-6 h-6 text-orange-600" />
                          )}
                        </div>
                        <div>
                          <div className="flex items-center gap-2 mb-1">
                            <h3 className="font-semibold text-slate-900">
                              {resource.title}
                            </h3>
                            <span className="px-2 py-0.5 bg-slate-100 text-slate-600 rounded text-xs">
                              {resource.format}
                            </span>
                          </div>
                          <p className="text-sm text-slate-500 mb-2">
                            Av {resource.author}
                          </p>
                          <p className="text-slate-600 text-sm">
                            {resource.description}
                          </p>
                        </div>
                      </div>
                      <button className="p-2 text-slate-400 hover:text-orange-600 transition-colors flex-shrink-0">
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
