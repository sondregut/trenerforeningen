import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { styles } from "@/lib/colors";

export const metadata: Metadata = {
  title: "Fagstoff",
  description: "Fagstoff og ressurser for friidrettstrenere - artikler, presentasjoner og materiell innen løp, hopp og kast.",
};

const categories = [
  {
    title: "Løp",
    description:
      "Ressurser og fagstoff om løpsdisipliner - fra sprint til maraton, inkludert hekkeløp og stafett.",
    topics: ["Sprinting", "Mellomdistanse", "Langdistanse", "Hekkeløp", "Stafett"],
    link: "/fagstoff/lop",
    bgColor: "bg-blue-50",
    textColor: "text-blue-700",
    image: "https://www.friidrett.no/contentassets/c097801a30364ee29679440a50ed2897/img_2025-08-04-183918.jpg",
  },
  {
    title: "Hopp",
    description:
      "Materiell og teknikker for hoppøvelser - høydehopp, lengdehopp, tresteg og stavsprang.",
    topics: ["Høydehopp", "Lengdehopp", "Tresteg", "Stavsprang"],
    link: "/fagstoff/hopp",
    bgColor: "bg-green-50",
    textColor: "text-green-700",
    image: "https://paw.princeton.edu/sites/default/files/styles/hero_teaser_style/public/images/content/Sports.ledeNew.jpg.webp?itok=8SPdgX-Y",
  },
  {
    title: "Kast",
    description:
      "Fagstoff for kastøvelser - kule, diskos, slegge og spydkast med fokus på teknikk og styrke.",
    topics: ["Kulestøt", "Diskos", "Slegge", "Spydkast"],
    link: "/fagstoff/kast",
    bgColor: "bg-orange-50",
    textColor: "text-orange-700",
    image: "https://www.teamnor.no/contentassets/f3e36dc56dcb45d8b0d4e9003ef7a295/eivindhenriksen_612.jpg",
  },
];

// Hero section
function HeroSection() {
  return (
    <section className="text-white py-12 md:py-16" style={styles.sectionBg}>
      <div className="container">
        <div className="max-w-3xl">
          <span className="inline-block px-4 py-1.5 bg-orange-500/20 text-orange-300 rounded-full text-sm font-medium mb-6">
            Ressurser for trenere
          </span>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Fagstoff
          </h1>
          <p className="text-lg text-slate-300">
            Her finner du artikler, presentasjoner og annet faglig materiale for
            friidrettstrenere. Innholdet er organisert etter grenekategori.
          </p>
        </div>
      </div>
    </section>
  );
}

// Categories section
function CategoriesSection() {
  return (
    <section className="py-12 md:py-16 bg-background">
      <div className="container">
        <SectionHeader
          title="Velg kategori"
          subtitle="Utforsk vart fagstoff innen de ulike grenekategoriene"
          centered
          className="mb-12"
        />

        <div className="grid md:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <Link key={index} href={category.link} className="group">
              <div className="h-full bg-white rounded-2xl border border-slate-200 overflow-hidden hover:shadow-lg transition-shadow">
                {/* Image header */}
                <div className="relative h-40">
                  <Image
                    src={category.image}
                    alt={category.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/30" />
                </div>

                {/* Content */}
                <div className="p-6">
                  <h2 className="text-2xl font-bold mb-3" style={styles.primaryText}>
                    {category.title}
                  </h2>
                  <p className="text-slate-600 mb-4">{category.description}</p>

                  {/* Topics */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {category.topics.map((topic, tIndex) => (
                      <span
                        key={tIndex}
                        className={`px-3 py-1 ${category.bgColor} ${category.textColor} rounded-full text-xs font-medium`}
                      >
                        {topic}
                      </span>
                    ))}
                  </div>

                  <span className="inline-flex items-center gap-1 text-orange-600 font-medium group-hover:gap-2 transition-all">
                    Utforsk {category.title.toLowerCase()}
                    <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function FagstoffPage() {
  return (
    <>
      <HeroSection />
      <CategoriesSection />
    </>
  );
}
