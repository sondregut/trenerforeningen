import Link from "next/link";
import { Mail, Phone, Facebook, MapPin } from "lucide-react";
import { styles, colors } from "@/lib/colors";

const quickLinks = [
  { name: "Hjem", href: "/" },
  { name: "Trenerseminar", href: "/trenerseminar" },
  { name: "Fagnytt", href: "/fagnytt" },
  { name: "Medlemskap", href: "/medlemskap" },
  { name: "Om Oss", href: "/om-oss" },
];

const resourceLinks = [
  { name: "Løp", href: "/fagstoff/lop" },
  { name: "Hopp", href: "/fagstoff/hopp" },
  { name: "Kast", href: "/fagstoff/kast" },
  { name: "Videoer", href: "/videoer" },
  { name: "Galleri", href: "/galleri" },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="text-white" style={styles.darkBg}>
      {/* Newsletter Section */}
      <div style={{ borderBottom: `1px solid ${colors.primary[800]}` }}>
        <div className="container py-12">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-2xl font-bold mb-2">Hold deg oppdatert</h3>
            <p className="text-slate-300 mb-6">
              Meld deg på vårt nyhetsbrev for å få siste nytt om trenerseminarer,
              fagstoff og arrangementer.
            </p>
            <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Din e-postadresse"
                className="flex-1 px-4 py-3 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                style={styles.inputBg}
              />
              <button
                type="submit"
                className="px-6 py-3 bg-orange-500 hover:bg-orange-600 text-white font-medium rounded-lg transition-colors whitespace-nowrap"
              >
                Abonner
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* About */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-lg">FT</span>
              </div>
              <div>
                <p className="font-bold text-sm">Friidrettens</p>
                <p className="font-bold text-sm -mt-1">Trenerforening</p>
              </div>
            </div>
            <p className="text-slate-300 text-sm leading-relaxed">
              Vi jobber for å utvikle medlemmenes kompetanse, ivareta trenernes
              interesser og fremme samarbeid i norsk friidrett.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Snarveier</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-slate-300 hover:text-orange-400 transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Fagstoff</h4>
            <ul className="space-y-2">
              {resourceLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-slate-300 hover:text-orange-400 transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Kontakt</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="mailto:katarina.hoff@ntebb.no"
                  className="flex items-center gap-2 text-slate-300 hover:text-orange-400 transition-colors text-sm"
                >
                  <Mail className="w-4 h-4" />
                  katarina.hoff@ntebb.no
                </a>
              </li>
              <li>
                <a
                  href="tel:+4795753304"
                  className="flex items-center gap-2 text-slate-300 hover:text-orange-400 transition-colors text-sm"
                >
                  <Phone className="w-4 h-4" />
                  957 53 304
                </a>
              </li>
              <li>
                <a
                  href="https://www.facebook.com/groups/927962383916308"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-slate-300 hover:text-orange-400 transition-colors text-sm"
                >
                  <Facebook className="w-4 h-4" />
                  Facebook-gruppe
                </a>
              </li>
              <li className="flex items-start gap-2 text-slate-300 text-sm">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>Norge</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div style={{ borderTop: `1px solid ${colors.primary[800]}` }}>
        <div className="container py-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-slate-400">
            <p>&copy; {currentYear} Friidrettens Trenerforening. Alle rettigheter reservert.</p>
            <div className="flex items-center gap-6">
              <Link href="/personvern" className="hover:text-orange-400 transition-colors">
                Personvern
              </Link>
              <Link href="/vilkar" className="hover:text-orange-400 transition-colors">
                Vilkår
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
