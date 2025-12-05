import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Mail, Phone, FileText, Users, Target, Handshake } from "lucide-react";
import { Card, CardContent } from "@/components/ui/Card";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { styles, colors } from "@/lib/colors";

export const metadata: Metadata = {
  title: "Om Oss",
  description: "Lær mer om Friidrettens Trenerforening, vart formal, styret og historie.",
};

const boardMembers = [
  {
    name: "Lars Ola Sundt",
    role: "Leder",
    email: "lars.ola.sundt@idk.no",
    phone: "905 40 216",
    image: "https://primary.jwwb.nl/public/h/s/f/temp-ftprvysvjpxdkslapovc/lars-ola-high-o4rp3e.jpg?enable-io=true&width=347",
  },
  {
    name: "Hilde S. Gundersen",
    role: "Nestleder",
    email: null,
    phone: null,
    image: "https://primary.jwwb.nl/public/h/s/f/temp-ftprvysvjpxdkslapovc/gundersen_hilde_p-standard-high.jpg?enable-io=true&width=347",
  },
  {
    name: "Bjorn Johansen",
    role: "Styremedlem",
    email: null,
    phone: null,
    image: "https://primary.jwwb.nl/public/h/s/f/temp-ftprvysvjpxdkslapovc/image-standard-razse3-high.png?enable-io=true&width=347",
  },
  {
    name: "Katarina Sederholm Hoff",
    role: "Styremedlem",
    email: "katarina.hoff@ntebb.no",
    phone: "957 53 304",
    image: "https://primary.jwwb.nl/public/h/s/f/temp-ftprvysvjpxdkslapovc/image-high-fme28a-high.png?enable-io=true&width=347",
  },
  {
    name: "Bjorn Bogsti",
    role: "Styremedlem",
    email: null,
    phone: null,
    image: "https://primary.jwwb.nl/public/h/s/f/temp-ftprvysvjpxdkslapovc/bj-rn-bogsti-standard-high.jpg?enable-io=true&width=347",
  },
  {
    name: "Jostein Mjonerud",
    role: "Styremedlem",
    email: null,
    phone: null,
    image: "https://primary.jwwb.nl/public/h/s/f/temp-ftprvysvjpxdkslapovc/jostein-standard-high.jpg?enable-io=true&width=347",
  },
];

const values = [
  {
    icon: Target,
    title: "Kompetanseutvikling",
    description: "Vi jobber for a utvikle medlemmenes faglige kompetanse gjennom seminarer, fagstoff og erfaringsutveksling.",
  },
  {
    icon: Users,
    title: "Interessevaretagelse",
    description: "Vi ivaretar trenernes interesser og arbeider for gode rammevilkar for treneryrket.",
  },
  {
    icon: Handshake,
    title: "Fellesskap",
    description: "Vi bygger et fellesskap av engasjerte trenere og fremmer samarbeid pa tvers av klubber og regioner.",
  },
];

// Hero section
function HeroSection() {
  return (
    <section className="text-white py-12 md:py-16" style={styles.sectionBg}>
      <div className="container">
        <div className="max-w-3xl">
          <span className="inline-block px-4 py-1.5 bg-orange-500/20 text-orange-300 rounded-full text-sm font-medium mb-6">
            Var historie
          </span>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Om oss</h1>
          <p className="text-lg text-slate-300">
            Friidrettens Trenerforening ble stiftet for a samle og utvikle
            friidrettstrenere i Norge. Vi jobber for a heve kompetansen og
            fremme samarbeid i trenerfellesskapet.
          </p>
        </div>
      </div>
    </section>
  );
}

// About section
function AboutSection() {
  return (
    <section className="py-12 md:py-16 bg-background">
      <div className="container">
        <div className="max-w-4xl mx-auto">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Var historie</h2>
            <p className="text-slate-600 mb-6">
              Friidrettens Trenerforening ble etablert pa bakgrunn av Norges
              sterke friidrettsresultater, saerlig pa 1990-tallet. Suksessen ble
              tilskrevet trenernes kompetanse og riktig treningsprogresjon.
            </p>
            <p className="text-slate-600 mb-6">
              Foreningen har som formal a utvikle medlemmenes kompetanse, ivareta
              trenernes interesser, utvikle fellesskap og samarbeid, sikre
              trenernes arbeidsvilkar og rettssikkerhet, samt etablere kontakt med
              sentrale organisasjoner.
            </p>

            {/* Download bylaws */}
            <div className="bg-slate-100 rounded-xl p-6 not-prose mb-8">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                  <FileText className="w-6 h-6 text-orange-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900 mb-1">Vedtekter</h3>
                  <p className="text-sm text-slate-600">
                    Last ned foreningens vedtekter (PDF)
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Values section
function ValuesSection() {
  return (
    <section className="py-12 md:py-16 bg-slate-100">
      <div className="container">
        <SectionHeader
          title="Vare verdier"
          subtitle="Det vi star for og jobber mot"
          centered
          className="mb-12"
        />

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <Card key={index} className="text-center">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-orange-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-8 h-8 text-orange-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-3">
                    {value.title}
                  </h3>
                  <p className="text-slate-600">{value.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// Board section
function BoardSection() {
  return (
    <section className="py-12 md:py-16 bg-background">
      <div className="container">
        <SectionHeader
          title="Styret"
          subtitle="Styret i Friidrettens Trenerforening 2025-2027"
          centered
          className="mb-12"
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {boardMembers.map((member, index) => (
            <Card key={index}>
              <CardContent className="p-6">
                <div className="w-24 h-24 relative rounded-full mx-auto mb-4 overflow-hidden">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-lg font-semibold text-slate-900 text-center mb-1">
                  {member.name}
                </h3>
                <p className="text-orange-600 text-center text-sm mb-3">
                  {member.role}
                </p>
                {(member.email || member.phone) && (
                  <div className="space-y-1 text-sm">
                    {member.email && (
                      <a
                        href={`mailto:${member.email}`}
                        className="flex items-center justify-center gap-2 text-slate-600 hover:text-orange-600 transition-colors"
                      >
                        <Mail className="w-4 h-4" />
                        {member.email}
                      </a>
                    )}
                    {member.phone && (
                      <a
                        href={`tel:+47${member.phone.replace(/\s/g, "")}`}
                        className="flex items-center justify-center gap-2 text-slate-600 hover:text-orange-600 transition-colors"
                      >
                        <Phone className="w-4 h-4" />
                        {member.phone}
                      </a>
                    )}
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Honorary member */}
        <div className="mt-12 max-w-sm mx-auto">
          <Card className="bg-amber-50 border-amber-200">
            <CardContent className="p-6">
              <div className="w-24 h-24 relative rounded-full mx-auto mb-4 overflow-hidden">
                <Image
                  src="https://primary.jwwb.nl/public/h/s/f/temp-ftprvysvjpxdkslapovc/eystein-enoksen-standard-high.jpg?enable-io=true&width=532"
                  alt="Eystein Enoksen"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-lg font-semibold text-slate-900 text-center mb-1">
                Eystein Enoksen
              </h3>
              <p className="text-amber-600 text-center text-sm font-medium">
                Aeresmedlem
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}

export default function OmOssPage() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <ValuesSection />
      <BoardSection />
    </>
  );
}
