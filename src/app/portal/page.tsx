import { Metadata } from "next";
import Link from "next/link";
import { Lock, Mail, ArrowRight, User } from "lucide-react";
import { Card, CardContent } from "@/components/ui/Card";
import { styles } from "@/lib/colors";

export const metadata: Metadata = {
  title: "Medlemsportal",
  description: "Logg inn pa medlemsportalen for a fa tilgang til eksklusivt innhold.",
};

export default function PortalPage() {
  return (
    <>
      {/* Hero */}
      <section className="text-white py-12 md:py-16" style={styles.sectionBg}>
        <div className="container">
          <div className="max-w-3xl">
            <span className="inline-block px-4 py-1.5 bg-orange-500/20 text-orange-300 rounded-full text-sm font-medium mb-6">
              For medlemmer
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Medlemsportal
            </h1>
            <p className="text-lg text-slate-300">
              Logg inn for a fa tilgang til eksklusivt fagstoff, videoer og
              andre ressurser for medlemmer.
            </p>
          </div>
        </div>
      </section>

      {/* Login section */}
      <section className="py-12 md:py-16 bg-background">
        <div className="container">
          <div className="max-w-md mx-auto">
            <Card>
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Lock className="w-8 h-8 text-slate-600" />
                </div>

                <h2 className="text-2xl font-bold text-slate-900 text-center mb-2">
                  Logg inn
                </h2>
                <p className="text-slate-600 text-center mb-8">
                  Bruk din e-postadresse for a logge inn pa medlemsportalen.
                </p>

                <form className="space-y-4">
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-slate-700 mb-1"
                    >
                      E-post
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                      <input
                        type="email"
                        id="email"
                        placeholder="din@epost.no"
                        className="w-full pl-10 pr-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="password"
                      className="block text-sm font-medium text-slate-700 mb-1"
                    >
                      Passord
                    </label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                      <input
                        type="password"
                        id="password"
                        placeholder="Ditt passord"
                        className="w-full pl-10 pr-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 bg-orange-500 hover:bg-orange-600 text-white font-medium rounded-lg transition-colors"
                  >
                    Logg inn
                  </button>
                </form>

                <div className="mt-6 text-center">
                  <a
                    href="#"
                    className="text-sm text-orange-600 hover:text-orange-700"
                  >
                    Glemt passord?
                  </a>
                </div>
              </CardContent>
            </Card>

            {/* Not a member */}
            <div className="mt-8 p-6 bg-slate-100 rounded-xl text-center">
              <User className="w-10 h-10 text-slate-400 mx-auto mb-3" />
              <h3 className="font-semibold text-slate-900 mb-2">
                Ikke medlem enna?
              </h3>
              <p className="text-sm text-slate-600 mb-4">
                Bli medlem i Friidrettens Trenerforening for a fa tilgang til
                medlemsportalen og alle vare ressurser.
              </p>
              <Link
                href="/medlemskap"
                className="inline-flex items-center gap-2 text-orange-600 hover:text-orange-700 font-medium text-sm"
              >
                Les mer om medlemskap
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Info box */}
            <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
              <p className="text-sm text-blue-800">
                <span className="font-semibold">Merk:</span> Medlemsportalen er
                under utvikling. Hvis du har sporsmal, kontakt oss pa{" "}
                <a
                  href="mailto:katarina.hoff@ntebb.no"
                  className="underline hover:no-underline"
                >
                  katarina.hoff@ntebb.no
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
