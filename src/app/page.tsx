import Link from "next/link";
import Image from "next/image";
import {
  Calendar,
  Users,
  BookOpen,
  Award,
  ArrowRight,
  Play,
  FileText,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/Card";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { styles, gradients, colors } from "@/lib/colors";

// Hero section with background image
function HeroSection() {
  return (
    <section className="relative text-white overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src="https://scontent-mia3-2.xx.fbcdn.net/v/t39.30808-6/553673035_10235936483064164_13425534255628005_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=75d36f&_nc_ohc=FlwfUzVWPPYQ7kNvwEcXD2c&_nc_oc=AdmipHgNQhFIWCGBMs-z9mAYnDOo7tn2KAZ8hFWUcsU0bjem1zVTjXqoEBgPT_L80jcyhm8_nVOaI_BKpItgeRzh&_nc_zt=23&_nc_ht=scontent-mia3-2.xx&_nc_gid=IkzLlkVgPliEimivRnBHgg&oh=00_AfmR_OSoVUox8N_bSCemO-YHNXRDVCus-PFaXBZyotThFA&oe=6938D6E2"
          alt="Friidrett"
          fill
          className="object-cover"
          priority
        />
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/80 to-slate-900/60" />
      </div>

      <div className="container relative py-20 md:py-28 lg:py-36 pb-32 md:pb-40">
        <div className="max-w-3xl">
          <span className="inline-block px-4 py-1.5 bg-orange-500/20 text-orange-300 rounded-full text-sm font-medium mb-6">
            Norges Friidrettens Trenerforening
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Utvikler{" "}
            <span className="text-orange-400">trenerkompetanse</span> i norsk
            friidrett
          </h1>
          <p className="text-lg md:text-xl text-slate-300 mb-8 leading-relaxed">
            Vi jobber for å utvikle medlemmenes kompetanse, ivareta trenernes
            interesser, utvikle fellesskap og samarbeid, og sikre trenernes
            arbeidsvilkår og rettssikkerhet.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/medlemskap"
              className="inline-flex items-center gap-2 px-6 py-3 bg-orange-500 hover:bg-orange-600 text-white font-medium rounded-lg transition-colors"
            >
              Bli medlem
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              href="/trenerseminar"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 hover:bg-white/20 text-white font-medium rounded-lg transition-colors border border-white/20"
            >
              Trenerseminar 2026
            </Link>
          </div>
        </div>
      </div>

      {/* Wave decoration */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-auto block"
          preserveAspectRatio="none"
        >
          <path
            d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
            fill="#f8fafc"
          />
        </svg>
      </div>
    </section>
  );
}

// Announcements section
function AnnouncementsSection() {
  return (
    <section className="py-12 md:py-16 bg-slate-50">
      <div className="container">
        <SectionHeader
          title="Siste nytt"
          subtitle="Hold deg oppdatert på det som skjer i foreningen"
          centered
          className="mb-12"
        />

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {/* Trenerseminar announcement */}
          <Card hover className="overflow-hidden">
            <div className="relative h-48">
              <Image
                src="https://primary.jwwb.nl/public/h/s/f/temp-ftprvysvjpxdkslapovc/friidrettstinget_2025_nof_02675-high.jpg?enable-io=true&width=1920"
                alt="Trenerseminar 2026"
                fill
                className="object-cover object-[center_30%]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <span className="absolute top-3 left-3 inline-flex items-center gap-1.5 px-3 py-1 bg-orange-500 text-white rounded-full text-xs font-medium">
                <Calendar className="w-3.5 h-3.5" />
                Kommende
              </span>
            </div>
            <CardContent className="p-6">
              <p className="text-sm text-slate-500 mb-2">November 2025</p>
              <h3 className="text-xl font-semibold mb-3" style={styles.primaryText}>
                Planlegging av Trenerseminar 2026 har startet
              </h3>
              <p className="text-slate-600 mb-4">
                Vi er i gang med planleggingen av neste års trenerseminar. Mer informasjon kommer snart!
              </p>
              <Link
                href="/trenerseminar"
                className="inline-flex items-center gap-1 text-orange-600 hover:text-orange-700 font-medium text-sm"
              >
                Les mer <ArrowRight className="w-4 h-4" />
              </Link>
            </CardContent>
          </Card>

          {/* Årets trener announcement with image */}
          <Card hover className="overflow-hidden">
            <div className="relative h-48">
              <Image
                src="https://primary.jwwb.nl/public/h/s/f/temp-ftprvysvjpxdkslapovc/unni-high-ds14d9.jpg?enable-io=true&crop=0.3625%3A1&width=816"
                alt="Unni Helland - Årets trener 2025"
                fill
                className="object-cover object-[center_35%]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <span className="absolute top-3 left-3 inline-flex items-center gap-1.5 px-3 py-1 bg-amber-500 text-white rounded-full text-xs font-medium">
                <Award className="w-3.5 h-3.5" />
                Utmerkelse
              </span>
            </div>
            <CardContent className="p-6">
              <p className="text-sm text-slate-500 mb-2">22. November 2025</p>
              <h3 className="text-xl font-semibold mb-3" style={styles.primaryText}>
                Årets trener 2025 - Unni Helland
              </h3>
              <p className="text-slate-600 mb-4">
                På høstmøtet ble Unni Helland kåret til Årets trener 2025. Gratulerer!
              </p>
              <Link
                href="/galleri"
                className="inline-flex items-center gap-1 text-orange-600 hover:text-orange-700 font-medium text-sm"
              >
                Se bilder <ArrowRight className="w-4 h-4" />
              </Link>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}

// Quick links / Features section
function FeaturesSection() {
  const features = [
    {
      icon: Calendar,
      title: "Trenerseminar",
      description:
        "Årlige seminarer med forelesninger og praktiske økter fra nasjonale og internasjonale trenere.",
      link: "/trenerseminar",
    },
    {
      icon: BookOpen,
      title: "Fagstoff",
      description:
        "Artikler, presentasjoner og ressurser innen løp, hopp og kast for trenere på alle nivåer.",
      link: "/fagstoff",
    },
    {
      icon: Play,
      title: "Videoer",
      description:
        "Opptak fra tidligere seminarer og instruksjonsvideoer fra erfarne trenere.",
      link: "/videoer",
    },
    {
      icon: FileText,
      title: "Fagnytt",
      description:
        "Vårt medlemsblad med fagartikler, nyheter og oppdateringer fra trenerforeningen.",
      link: "/fagnytt",
    },
  ];

  return (
    <section className="py-12 md:py-16 bg-slate-100">
      <div className="container">
        <SectionHeader
          title="Ressurser for trenere"
          subtitle="Alt du trenger for å utvikle deg som friidrettstrener"
          centered
          className="mb-12"
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Link key={index} href={feature.link}>
                <Card hover className="h-full">
                  <CardContent className="p-6 text-center">
                    <div className="w-14 h-14 bg-orange-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                      <Icon className="w-7 h-7 text-orange-600" />
                    </div>
                    <h3 className="text-lg font-semibold mb-2" style={styles.primaryText}>
                      {feature.title}
                    </h3>
                    <p className="text-slate-600 text-sm">{feature.description}</p>
                  </CardContent>
                </Card>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// Running icon SVG
function RunningIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M13.5 5.5c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zM9.8 8.9L7 23h2.1l1.8-8 2.1 2v6h2v-7.5l-2.1-2 .6-3C14.8 12 16.8 13 19 13v-2c-1.9 0-3.5-1-4.3-2.4l-1-1.6c-.4-.6-1-1-1.7-1-.3 0-.5.1-.8.1L6 8.3V13h2V9.6l1.8-.7" />
    </svg>
  );
}

// Jump icon SVG
function JumpIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M13 4c0-1.1-.9-2-2-2s-2 .9-2 2 .9 2 2 2 2-.9 2-2zm-2 4c-1.3 0-2.5.3-3.6.8L4.7 9.5l.7 1.9 2.3-.8.1.1c-.5.9-1 2.1-1.3 3.4L3.7 16l.7 1.9 3.4-2.2c.1.2.3.5.5.7l-2.6 5.5 1.8.9 2.4-5.3h.2l2.1 5.4 1.9-.8-2.5-5.9c.5-.4.9-.9 1.2-1.5l3.8 2.5.7-1.9-4.1-2.7c-.2-1-.6-1.9-1.2-2.7l1.2-.4 1.6 1.7 1.4-1.3-2-2.2c-.5-.6-1.2-.9-2-1l-2-.6c-.2-.1-.5-.1-.8-.1z" />
    </svg>
  );
}

// Throw icon SVG
function ThrowIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M15 5c0-1.1-.9-2-2-2s-2 .9-2 2 .9 2 2 2 2-.9 2-2zm-2.5 3.5c-.8 0-1.5.4-1.9 1L7 14l1.5 1.5 2.5-3v8.5h2v-5h1v5h2V12l2 2 1.5-1.5-4-4c-.4-.6-1.1-1-1.9-1h-1.1zM19 3l-3 6h2l3-6h-2zm-5 18h-4v2h4v-2z" />
    </svg>
  );
}

// Fagstoff categories section
function FagstoffSection() {
  const categories = [
    {
      title: "Løp",
      description: "Sprinting, mellomdistanse, langdistanse og hekkeløp",
      link: "/fagstoff/lop",
      color: "from-blue-600 to-blue-800",
      Icon: RunningIcon,
      image: "https://www.friidrett.no/contentassets/c097801a30364ee29679440a50ed2897/img_2025-08-04-183918.jpg",
    },
    {
      title: "Hopp",
      description: "Høyde, lengde, tresteg og stavsprang",
      link: "/fagstoff/hopp",
      color: "from-green-500 to-green-700",
      Icon: JumpIcon,
      image: "https://paw.princeton.edu/sites/default/files/styles/hero_teaser_style/public/images/content/Sports.ledeNew.jpg.webp?itok=8SPdgX-Y",
    },
    {
      title: "Kast",
      description: "Kule, diskos, slegge og spyd",
      link: "/fagstoff/kast",
      color: "from-orange-500 to-orange-700",
      Icon: ThrowIcon,
      image: "https://www.teamnor.no/contentassets/f3e36dc56dcb45d8b0d4e9003ef7a295/eivindhenriksen_612.jpg",
    },
  ];

  return (
    <section className="py-12 md:py-16 bg-slate-50">
      <div className="container">
        <SectionHeader
          title="Fagstoff etter kategori"
          subtitle="Utforsk vår samling av ressurser innen de ulike grenene"
          centered
          className="mb-12"
        />

        <div className="grid md:grid-cols-3 gap-6">
          {categories.map((category, index) => (
              <Link key={index} href={category.link} className="group">
                <div className="relative h-64 rounded-xl overflow-hidden">
                  {/* Background - image or gradient */}
                  {category.image ? (
                    <>
                      <Image
                        src={category.image}
                        alt={category.title}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-black/30" />
                    </>
                  ) : (
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${category.color}`}
                    />
                  )}
                  {/* Content overlay */}
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors" />
                  <div className="absolute inset-0 flex flex-col justify-end p-6 text-white">
                    <h3 className="text-2xl font-bold mb-2">{category.title}</h3>
                    <p className="text-white/80">{category.description}</p>
                    <span className="inline-flex items-center gap-1 mt-4 font-medium group-hover:gap-2 transition-all">
                      Utforsk <ArrowRight className="w-4 h-4" />
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

// Membership CTA section
function MembershipCTA() {
  return (
    <section className="py-12 md:py-16 text-white" style={styles.primaryBg}>
      <div className="container">
        <div className="max-w-3xl mx-auto text-center">
          <Users className="w-16 h-16 text-orange-400 mx-auto mb-6" />
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Bli en del av fellesskapet
          </h2>
          <p className="text-lg text-slate-300 mb-8">
            Som medlem får du tilgang til fagstoff, rabatterte priser på
            trenerseminarer, og blir en del av et nettverk av engasjerte
            friidrettstrenere.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/medlemskap"
              className="inline-flex items-center gap-2 px-6 py-3 bg-orange-500 hover:bg-orange-600 text-white font-medium rounded-lg transition-colors"
            >
              Bli medlem nå
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              href="/om-oss"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 hover:bg-white/20 text-white font-medium rounded-lg transition-colors"
            >
              Les mer om oss
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <AnnouncementsSection />
      <FeaturesSection />
      <FagstoffSection />
      <MembershipCTA />
    </>
  );
}
