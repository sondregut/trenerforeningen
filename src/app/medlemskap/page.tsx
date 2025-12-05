"use client";

import { useState } from "react";
import Link from "next/link";
import {
  CheckCircle,
  Users,
  BookOpen,
  Calendar,
  Mail,
  ArrowRight,
  Send,
  Loader2,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/Card";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { styles } from "@/lib/colors";

const benefits = [
  {
    icon: BookOpen,
    title: "Tilgang til fagstoff",
    description: "Fa tilgang til artikler, presentasjoner og annet faglig materiale.",
  },
  {
    icon: Calendar,
    title: "Rabatt pa seminarer",
    description: "Medlemmer far redusert pris pa alle vare trenerseminarer.",
  },
  {
    icon: Users,
    title: "Nettverk",
    description: "Bli en del av et nettverk av engasjerte friidrettstrenere.",
  },
  {
    icon: Mail,
    title: "Fagnytt",
    description: "Motta vart medlemsblad med fagartikler og oppdateringer.",
  },
];

// Hero section
function HeroSection() {
  return (
    <section className="text-white py-12 md:py-16" style={styles.sectionBg}>
      <div className="container">
        <div className="max-w-3xl">
          <span className="inline-block px-4 py-1.5 bg-orange-500/20 text-orange-300 rounded-full text-sm font-medium mb-6">
            Bli med i fellesskapet
          </span>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Medlemskap
          </h1>
          <p className="text-lg text-slate-300">
            Som medlem i Friidrettens Trenerforening far du tilgang til et
            fellesskap av engasjerte trenere, faglige ressurser og rabatterte
            priser pa seminarer.
          </p>
        </div>
      </div>
    </section>
  );
}

// Benefits section
function BenefitsSection() {
  return (
    <section className="py-12 md:py-16 bg-background">
      <div className="container">
        <SectionHeader
          title="Fordeler som medlem"
          subtitle="Se hva du far som medlem av trenerforeningen"
          centered
          className="mb-12"
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <Card key={index} className="text-center">
                <CardContent className="p-6">
                  <div className="w-14 h-14 bg-orange-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-7 h-7 text-orange-600" />
                  </div>
                  <h3 className="font-semibold mb-2" style={styles.primaryText}>
                    {benefit.title}
                  </h3>
                  <p className="text-sm text-slate-600">{benefit.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// Membership form component
function MembershipForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: "",
    postalCode: "",
    city: "",
    club: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");

    try {
      // For now, we'll create a mailto link with the form data
      const subject = encodeURIComponent("Ny medlemskapssoknad - " + formData.name);
      const body = encodeURIComponent(
        `Ny medlemskapssoknad:\n\n` +
        `Navn: ${formData.name}\n` +
        `E-post: ${formData.email}\n` +
        `Adresse: ${formData.address}\n` +
        `Postnummer: ${formData.postalCode}\n` +
        `Poststed: ${formData.city}\n` +
        `Klubbtilhorighet: ${formData.club || "Ikke oppgitt"}\n\n` +
        `Melding:\n${formData.message || "Ingen melding"}`
      );

      // Open mailto link
      window.location.href = `mailto:lars.ola.sundt@idk.no?subject=${subject}&body=${body}`;

      // Simulate success
      await new Promise(resolve => setTimeout(resolve, 500));
      setIsSubmitted(true);
    } catch {
      setError("Noe gikk galt. Vennligst prov igjen.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="text-center py-8">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <CheckCircle className="w-8 h-8 text-green-600" />
        </div>
        <h3 className="text-xl font-semibold mb-2" style={styles.primaryText}>
          Takk for din interesse!
        </h3>
        <p className="text-slate-600 mb-4">
          Din e-postklient har apnet med soknaden ferdig utfylt. Send e-posten for a fullføre søknaden.
        </p>
        <button
          onClick={() => {
            setIsSubmitted(false);
            setFormData({
              name: "",
              email: "",
              address: "",
              postalCode: "",
              city: "",
              club: "",
              message: "",
            });
          }}
          className="text-orange-600 hover:text-orange-700 font-medium"
        >
          Send en ny søknad
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {error && (
        <div className="bg-red-50 text-red-700 px-4 py-3 rounded-lg text-sm">
          {error}
        </div>
      )}

      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">
            Fullt navn *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition-colors"
            placeholder="Ola Nordmann"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">
            E-postadresse *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition-colors"
            placeholder="ola@eksempel.no"
          />
        </div>
      </div>

      <div>
        <label htmlFor="address" className="block text-sm font-medium text-slate-700 mb-2">
          Gateadresse *
        </label>
        <input
          type="text"
          id="address"
          name="address"
          required
          value={formData.address}
          onChange={handleChange}
          className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition-colors"
          placeholder="Storgata 1"
        />
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="postalCode" className="block text-sm font-medium text-slate-700 mb-2">
            Postnummer *
          </label>
          <input
            type="text"
            id="postalCode"
            name="postalCode"
            required
            value={formData.postalCode}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition-colors"
            placeholder="0123"
          />
        </div>

        <div>
          <label htmlFor="city" className="block text-sm font-medium text-slate-700 mb-2">
            Poststed *
          </label>
          <input
            type="text"
            id="city"
            name="city"
            required
            value={formData.city}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition-colors"
            placeholder="Oslo"
          />
        </div>
      </div>

      <div>
        <label htmlFor="club" className="block text-sm font-medium text-slate-700 mb-2">
          Klubbtilhørighet (valgfritt)
        </label>
        <input
          type="text"
          id="club"
          name="club"
          value={formData.club}
          onChange={handleChange}
          className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition-colors"
          placeholder="F.eks. Oslo Friidrettsklubb"
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">
          Melding (valgfritt)
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          value={formData.message}
          onChange={handleChange}
          className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition-colors resize-none"
          placeholder="Har du noen sporsmal eller kommentarer?"
        />
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-orange-500 hover:bg-orange-600 disabled:bg-orange-300 text-white font-medium rounded-lg transition-colors"
      >
        {isSubmitting ? (
          <>
            <Loader2 className="w-5 h-5 animate-spin" />
            Sender...
          </>
        ) : (
          <>
            <Send className="w-5 h-5" />
            Send søknad
          </>
        )}
      </button>

      <p className="text-xs text-slate-500 text-center">
        Ved a sende inn dette skjemaet godtar du at vi lagrer dine opplysninger for a behandle medlemsskapet ditt.
      </p>
    </form>
  );
}

// Sign up section
function SignUpSection() {
  return (
    <section className="py-12 md:py-16 bg-slate-100">
      <div className="container">
        <div className="max-w-2xl mx-auto">
          <Card>
            <CardContent className="p-8 md:p-12">
              <h2 className="text-2xl md:text-3xl font-bold mb-2 text-center" style={styles.primaryText}>
                Meld deg inn
              </h2>
              <p className="text-slate-600 text-center mb-8">
                Fyll ut skjemaet under for a søke om medlemskap i Friidrettens Trenerforening.
              </p>

              <MembershipForm />
            </CardContent>
          </Card>

          {/* Alternative contact */}
          <div className="mt-8 text-center">
            <p className="text-slate-600 mb-2">Har du sporsmal om medlemskap?</p>
            <Link
              href="/om-oss"
              className="inline-flex items-center gap-1 text-orange-600 hover:text-orange-700 font-medium"
            >
              Kontakt styret
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function MedlemskapPage() {
  return (
    <>
      <HeroSection />
      <BenefitsSection />
      <SignUpSection />
    </>
  );
}
