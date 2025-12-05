import { Metadata } from "next";
import Link from "next/link";
import { FileText, Download, Calendar, Search } from "lucide-react";
import { Card, CardContent } from "@/components/ui/Card";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { styles } from "@/lib/colors";

export const metadata: Metadata = {
  title: "Fagnytt",
  description: "Fagnytt - vart medlemsblad med fagartikler, nyheter og oppdateringer fra Friidrettens Trenerforening.",
};

// Sample data for Fagnytt issues
const fagnyttIssues = [
  { year: 2024, issues: ["Fagnytt 1/2024"] },
  { year: 2023, issues: ["Fagnytt 1/2023"] },
  { year: 2022, issues: ["Fagnytt 1/2022"] },
  { year: 2021, issues: ["Fagnytt 1/2021", "Fagnytt 2/2021"] },
  { year: 2020, issues: ["Fagnytt 1/2020"] },
  { year: 2019, issues: ["Fagnytt 1/2019", "Fagnytt 2/2019"] },
  { year: 2018, issues: ["Fagnytt 1/2018", "Fagnytt 2/2018"] },
  { year: 2017, issues: ["Fagnytt 1/2017", "Fagnytt 2/2017"] },
  { year: 2016, issues: ["Fagnytt 1/2016", "Fagnytt 2/2016"] },
  { year: 2015, issues: ["Fagnytt 1/2015", "Fagnytt 2/2015"] },
];

// Hero section
function HeroSection() {
  return (
    <section className="text-white py-12 md:py-16" style={styles.sectionBg}>
      <div className="container">
        <div className="max-w-3xl">
          <span className="inline-block px-4 py-1.5 bg-orange-500/20 text-orange-300 rounded-full text-sm font-medium mb-6">
            Medlemsblad
          </span>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Fagnytt
          </h1>
          <p className="text-lg text-slate-300 mb-8">
            Fagnytt er vart medlemsblad med fagartikler, nyheter og oppdateringer
            fra trenerforeningen. Her finner du et arkiv over alle utgaver tilbake
            til 2004.
          </p>
        </div>
      </div>
    </section>
  );
}

// Archive section
function ArchiveSection() {
  return (
    <section className="py-12 md:py-16 bg-background">
      <div className="container">
        <div className="max-w-4xl mx-auto">
          {/* Search/filter placeholder */}
          <div className="mb-12">
            <div className="relative max-w-md">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
              <input
                type="search"
                placeholder="Sok i arkivet..."
                className="w-full pl-12 pr-4 py-3 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
              />
            </div>
          </div>

          {/* Archive by year */}
          <div className="space-y-8">
            {fagnyttIssues.map((yearGroup) => (
              <div key={yearGroup.year}>
                <h2 className="text-2xl font-bold mb-4 flex items-center gap-3" style={styles.primaryText}>
                  <Calendar className="w-6 h-6 text-orange-500" />
                  {yearGroup.year}
                </h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  {yearGroup.issues.map((issue, index) => (
                    <Card key={index} hover>
                      <CardContent className="p-4 flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center">
                            <FileText className="w-5 h-5 text-orange-600" />
                          </div>
                          <span className="font-medium" style={styles.primaryText}>{issue}</span>
                        </div>
                        <button className="p-2 text-slate-500 hover:text-orange-600 transition-colors">
                          <Download className="w-5 h-5" />
                        </button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Legacy archive link */}
          <div className="mt-12 p-6 bg-slate-100 rounded-xl text-center">
            <p className="text-slate-600 mb-4">
              Eldre utgaver av Fagnytt (2004-2014) finner du i vart historiske arkiv.
            </p>
            <a
              href="https://trenerforeningen.org"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-orange-600 hover:text-orange-700 font-medium"
            >
              Ga til historisk arkiv
              <FileText className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function FagnyttPage() {
  return (
    <>
      <HeroSection />
      <ArchiveSection />
    </>
  );
}
