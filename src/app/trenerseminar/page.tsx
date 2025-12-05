import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Calendar, MapPin, Users, Clock, ArrowRight, CheckCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/Card";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { styles, colors } from "@/lib/colors";

export const metadata: Metadata = {
  title: "Trenerseminar",
  description: "Arlig trenerseminar med forelesninger og praktiske okter fra nasjonale og internasjonale trenere.",
};

// Hero section
function HeroSection() {
  return (
    <section className="relative text-white py-16 md:py-24 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="https://primary.jwwb.nl/public/h/s/f/temp-ftprvysvjpxdkslapovc/friidrettstinget_2025_nof_02675-high.jpg?enable-io=true&width=1920"
          alt="Trenerseminar bakgrunn"
          fill
          className="object-cover object-[center_30%]"
          priority
        />
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/80 to-slate-900/60" />
      </div>

      <div className="container relative z-10">
        <div className="max-w-3xl">
          <span className="inline-block px-4 py-1.5 bg-orange-500/30 text-orange-300 rounded-full text-sm font-medium mb-6 backdrop-blur-sm">
            Arlig arrangement
          </span>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Trenerseminar
          </h1>
          <p className="text-lg text-slate-200 mb-8">
            Vart arlige trenerseminar samler friidrettstrenere fra hele landet for
            faglig pafy, erfaringsutveksling og inspirasjon. Delta og bli en del
            av fellesskapet!
          </p>
        </div>
      </div>
    </section>
  );
}

// Upcoming seminar section
function UpcomingSeminar() {
  return (
    <section className="py-12 md:py-16 bg-background">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-block px-3 py-1 bg-orange-100 text-orange-700 rounded-full text-sm font-medium mb-4">
              Kommer i 2026
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6" style={styles.primaryText}>
              Trenerseminar 2026
            </h2>
            <p className="text-lg text-slate-600 mb-6">
              Planleggingen av Trenerseminar 2026 har startet! Vi jobber med a
              sette sammen et spennende program med dyktige forelesere og
              relevante temaer for trenere pa alle nivaer.
            </p>
            <p className="text-slate-600 mb-8">
              Mer informasjon om tidspunkt, sted og program kommer snart. Meld deg
              pa vart nyhetsbrev for a fa beskjed nar pameldingen apner.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link
                href="/medlemskap"
                className="inline-flex items-center gap-2 px-6 py-3 bg-orange-500 hover:bg-orange-600 text-white font-medium rounded-lg transition-colors"
              >
                Bli medlem for rabatt
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>

          <Card className="bg-slate-50">
            <CardContent className="p-8">
              <h3 className="text-xl font-semibold mb-6" style={styles.primaryText}>
                Seminaret inkluderer vanligvis
              </h3>
              <ul className="space-y-4">
                {[
                  "Forelesninger fra nasjonale og internasjonale trenere",
                  "Praktiske okter og demonstrasjoner",
                  "Workshops og gruppearbeid",
                  "Nettverksbygging med andre trenere",
                  "Faglige diskusjoner og erfaringsutveksling",
                  "Oppdateringer fra friidrettsforbundet",
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-700">{item}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}

// Seminar 2025 Gallery section
function Seminar2025Gallery() {
  const images = [
    {
      src: "https://primary.jwwb.nl/public/h/s/f/temp-ftprvysvjpxdkslapovc/miika-og-aatu-high.jpg?enable-io=true&width=1252",
      alt: "Miika Lahtonen og Aatu Kangasniemi",
      caption: "Miika Lahtonen og Aatu Kangasniemi holder forelesning",
    },
    {
      src: "https://primary.jwwb.nl/public/h/s/f/temp-ftprvysvjpxdkslapovc/diskos-high.jpg?enable-io=true&width=1252",
      alt: "Diskoskast demonstrasjon",
      caption: "Magnus Rosholm Berntsen demonstrerer diskoskast",
    },
  ];

  return (
    <section className="py-12 md:py-16 bg-slate-50">
      <div className="container">
        <SectionHeader
          title="Trenerseminar 2025"
          subtitle="Bilder fra arets seminar med internasjonale forelesere"
          centered
          className="mb-12"
        />

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {images.map((image, index) => (
            <div key={index} className="group">
              <div className="relative aspect-video rounded-xl overflow-hidden mb-3">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <p className="text-sm text-slate-600 text-center">{image.caption}</p>
            </div>
          ))}
        </div>

        {/* Additional smaller images */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto mt-8">
          <div className="relative aspect-square rounded-lg overflow-hidden">
            <Image
              src="https://primary.jwwb.nl/public/h/s/f/temp-ftprvysvjpxdkslapovc/image-high-mo6tne.png?enable-io=true&crop=0.7505%3A1&width=532"
              alt="Trenerseminar 2025"
              fill
              className="object-cover"
            />
          </div>
          <div className="relative aspect-square rounded-lg overflow-hidden">
            <Image
              src="https://primary.jwwb.nl/public/h/s/f/temp-ftprvysvjpxdkslapovc/image-high-j4o3n9.png?enable-io=true&crop=0.7505%3A1&width=532"
              alt="Trenerseminar 2025"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

// Previous seminars section
function PreviousSeminars() {
  const seminars = [
    {
      year: "2024",
      highlights: [
        "Fokus pa ungdomstrening",
        "Internasjonale forelesere",
      ],
    },
    {
      year: "2023",
      highlights: [
        "Styrketrening for friidrettsutovere",
        "Periodisering og planlegging",
      ],
    },
    {
      year: "2022",
      highlights: [
        "Teknikk i kastovelser",
        "Treningsplanlegging",
      ],
    },
  ];

  return (
    <section className="py-12 md:py-16 bg-slate-100">
      <div className="container">
        <SectionHeader
          title="Tidligere seminarer"
          subtitle="Se tilbake pa noen av vare tidligere arrangementer"
          centered
          className="mb-12"
        />

        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {seminars.map((seminar, index) => (
            <Card key={index} hover>
              <CardContent className="p-6">
                <div className="text-3xl font-bold text-orange-500 mb-4">
                  {seminar.year}
                </div>
                <ul className="space-y-2">
                  {seminar.highlights.map((highlight, hIndex) => (
                    <li
                      key={hIndex}
                      className="text-sm text-slate-600 flex items-start gap-2"
                    >
                      <span className="w-1.5 h-1.5 bg-slate-400 rounded-full mt-2 flex-shrink-0" />
                      {highlight}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-8">
          <Link
            href="/videoer"
            className="inline-flex items-center gap-2 text-orange-600 hover:text-orange-700 font-medium"
          >
            Se videoer fra tidligere seminarer
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

export default function TrenerseminarPage() {
  return (
    <>
      <HeroSection />
      <UpcomingSeminar />
      <Seminar2025Gallery />
      <PreviousSeminars />
    </>
  );
}
