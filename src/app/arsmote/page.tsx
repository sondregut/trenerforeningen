import { Metadata } from "next";
import Link from "next/link";
import { Calendar, MapPin, FileText, Clock, ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/Card";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { styles } from "@/lib/colors";

export const metadata: Metadata = {
  title: "Arsmote",
  description: "Informasjon om arsmotet i Friidrettens Trenerforening.",
};

const previousMeetings = [
  {
    year: "2025",
    date: "22. november 2025",
    highlights: [
      "Arets trener 2025 - Unni Helland",
      "Valg av nytt styre",
      "Gjennomgang av arsberetning",
    ],
  },
  {
    year: "2024",
    date: "November 2024",
    highlights: [
      "Arsberetning og regnskap",
      "Planlegging av aktiviteter",
    ],
  },
  {
    year: "2023",
    date: "November 2023",
    highlights: [
      "Valg av styre",
      "Strategiarbeid",
    ],
  },
];

// Hero section
function HeroSection() {
  return (
    <section className="text-white py-12 md:py-16" style={styles.sectionBg}>
      <div className="container">
        <div className="max-w-3xl">
          <span className="inline-block px-4 py-1.5 bg-orange-500/20 text-orange-300 rounded-full text-sm font-medium mb-6">
            Medlemsmote
          </span>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Arsmote</h1>
          <p className="text-lg text-slate-300">
            Arsmotet er foreningens hoyeste organ og avholdes arlig. Her
            behandles arsberetning, regnskap, valg og andre viktige saker.
          </p>
        </div>
      </div>
    </section>
  );
}

// Next meeting section
function NextMeetingSection() {
  return (
    <section className="py-12 md:py-16 bg-background">
      <div className="container">
        <div className="max-w-3xl mx-auto">
          <Card className="overflow-hidden">
            <div className="bg-gradient-to-r from-orange-500 to-orange-600 p-6 text-white">
              <h2 className="text-2xl font-bold mb-2">Neste arsmote</h2>
              <p className="text-orange-100">
                Informasjon om neste arsmote kommer snart.
              </p>
            </div>
            <CardContent className="p-6 md:p-8">
              <p className="text-slate-600 mb-6">
                Arsmotet avholdes vanligvis i forbindelse med hostmotet i
                november. Alle medlemmer far innkalling med sakspapirer i forkant.
              </p>

              <div className="space-y-4">
                <h3 className="font-semibold text-slate-900">
                  Typisk agenda for arsmote:
                </h3>
                <ul className="space-y-2">
                  {[
                    "Godkjenning av innkalling og dagsorden",
                    "Valg av moteleder og referent",
                    "Arsberetning fra styret",
                    "Regnskap og revisors beretning",
                    "Innkomne forslag",
                    "Fastsettelse av kontingent",
                    "Valg av styre og valgkomite",
                    "Eventuelt",
                  ].map((item, index) => (
                    <li
                      key={index}
                      className="flex items-start gap-2 text-slate-600"
                    >
                      <span className="w-5 h-5 bg-orange-100 text-orange-600 rounded-full flex items-center justify-center text-xs font-medium flex-shrink-0 mt-0.5">
                        {index + 1}
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-8 p-4 bg-slate-100 rounded-lg">
                <p className="text-sm text-slate-600">
                  <span className="font-semibold">Merk:</span> Forslag som onskes
                  behandlet pa arsmotet ma sendes til styret innen fristen som
                  oppgis i innkallingen.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}

// Previous meetings section
function PreviousMeetingsSection() {
  return (
    <section className="py-12 md:py-16 bg-slate-100">
      <div className="container">
        <SectionHeader
          title="Tidligere arsmoter"
          subtitle="Oversikt over tidligere arsmoter og vedtak"
          centered
          className="mb-12"
        />

        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {previousMeetings.map((meeting, index) => (
            <Card key={index}>
              <CardContent className="p-6">
                <div className="text-3xl font-bold text-orange-500 mb-2">
                  {meeting.year}
                </div>
                <div className="flex items-center gap-2 text-sm text-slate-500 mb-4">
                  <Calendar className="w-4 h-4" />
                  {meeting.date}
                </div>
                <ul className="space-y-2">
                  {meeting.highlights.map((highlight, hIndex) => (
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
      </div>
    </section>
  );
}

// Coach of the year section
function CoachOfYearSection() {
  return (
    <section className="py-12 md:py-16 bg-background">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-block px-4 py-1 bg-amber-400/20 text-amber-600 rounded-full text-sm font-medium mb-4">
            Tradisjon siden 1990-tallet
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Arets trener
          </h2>
          <p className="text-lg text-slate-600 mb-8">
            Hvert ar kar trenerforeningen Arets trener. Utmerkelsen gis til en
            trener som har utmerket seg gjennom aret med sitt arbeid og sine
            resultater.
          </p>

          <Card className="text-left">
            <CardContent className="p-6 md:p-8">
              <h3 className="text-xl font-semibold text-slate-900 mb-4">
                Nylige vinnere
              </h3>
              <ul className="space-y-3">
                {[
                  { year: "2025", name: "Unni Helland" },
                  { year: "2024", name: "-" },
                  { year: "2023", name: "-" },
                ].map((winner, index) => (
                  <li
                    key={index}
                    className="flex items-center justify-between py-2 border-b border-slate-100 last:border-0"
                  >
                    <span className="font-medium text-slate-900">
                      {winner.year}
                    </span>
                    <span className="text-slate-600">{winner.name}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <div className="mt-8">
            <Link
              href="/galleri"
              className="inline-flex items-center gap-2 text-orange-600 hover:text-orange-700 font-medium"
            >
              Se bilder fra prisutdelinger
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function ArsmotePage() {
  return (
    <>
      <HeroSection />
      <NextMeetingSection />
      <PreviousMeetingsSection />
      <CoachOfYearSection />
    </>
  );
}
