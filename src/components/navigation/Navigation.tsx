"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown } from "lucide-react";
import clsx from "clsx";
import { styles, colors } from "@/lib/colors";

const navItems = [
  { name: "Hjem", href: "/" },
  { name: "Trenerseminar", href: "/trenerseminar" },
  { name: "Fagnytt", href: "/fagnytt" },
  {
    name: "Fagstoff",
    href: "/fagstoff",
    children: [
      { name: "Løp", href: "/fagstoff/lop" },
      { name: "Hopp", href: "/fagstoff/hopp" },
      { name: "Kast", href: "/fagstoff/kast" },
    ],
  },
  { name: "Videoer", href: "/videoer" },
  { name: "Medlemskap", href: "/medlemskap" },
  { name: "Galleri", href: "/galleri" },
  { name: "Om Oss", href: "/om-oss" },
  { name: "Årsmøte", href: "/arsmote" },
];

export function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-slate-200 shadow-sm">
      <nav className="container">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <div className="w-10 h-10 lg:w-12 lg:h-12 rounded-full flex items-center justify-center" style={styles.primaryBg}>
              <span className="text-white font-bold text-lg lg:text-xl">FT</span>
            </div>
            <div className="hidden sm:block">
              <p className="font-bold text-sm lg:text-base" style={styles.primaryText}>
                Friidrettens
              </p>
              <p className="font-bold text-sm lg:text-base -mt-1" style={styles.primaryText}>
                Trenerforening
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <div key={item.name} className="relative group">
                {item.children ? (
                  <>
                    <button
                      className={clsx(
                        "flex items-center gap-1 px-3 py-2 text-sm font-medium rounded-lg transition-colors",
                        isActive(item.href)
                          ? "text-orange-600 bg-orange-50"
                          : "text-slate-700 hover:text-slate-900 hover:bg-slate-100"
                      )}
                      onMouseEnter={() => setDropdownOpen(true)}
                      onMouseLeave={() => setDropdownOpen(false)}
                    >
                      {item.name}
                      <ChevronDown className="w-4 h-4" />
                    </button>
                    <div
                      className="absolute top-full left-0 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200"
                      onMouseEnter={() => setDropdownOpen(true)}
                      onMouseLeave={() => setDropdownOpen(false)}
                    >
                      <div className="bg-white rounded-lg shadow-lg border border-slate-200 py-2 min-w-[160px]">
                        <Link
                          href={item.href}
                          className="block px-4 py-2 text-sm text-slate-700 hover:bg-slate-100 hover:text-slate-900"
                        >
                          Alle {item.name}
                        </Link>
                        {item.children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            className={clsx(
                              "block px-4 py-2 text-sm transition-colors",
                              isActive(child.href)
                                ? "text-orange-600 bg-orange-50"
                                : "text-slate-700 hover:bg-slate-100 hover:text-slate-900"
                            )}
                          >
                            {child.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </>
                ) : (
                  <Link
                    href={item.href}
                    className={clsx(
                      "px-3 py-2 text-sm font-medium rounded-lg transition-colors",
                      isActive(item.href)
                        ? "text-orange-600 bg-orange-50"
                        : "text-slate-700 hover:text-slate-900 hover:bg-slate-100"
                    )}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </div>

          {/* CTA Button - Desktop */}
          <div className="hidden lg:flex items-center gap-3">
            <Link
              href="/portal"
              className="px-4 py-2 text-sm font-medium hover:text-orange-600 transition-colors"
              style={styles.primaryText}
            >
              Logg inn
            </Link>
            <Link
              href="/medlemskap"
              className="px-4 py-2 text-sm font-medium text-white bg-orange-500 hover:bg-orange-600 rounded-lg transition-colors"
            >
              Bli medlem
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            className="lg:hidden p-2 text-slate-700 hover:text-slate-900"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <span className="sr-only">Åpne meny</span>
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-slate-200 animate-fade-in">
            <div className="flex flex-col gap-1">
              {navItems.map((item) => (
                <div key={item.name}>
                  {item.children ? (
                    <div>
                      <button
                        className={clsx(
                          "flex items-center justify-between w-full px-3 py-2 text-base font-medium rounded-lg transition-colors",
                          isActive(item.href)
                            ? "text-orange-600 bg-orange-50"
                            : "text-slate-700 hover:text-slate-900 hover:bg-slate-100"
                        )}
                        onClick={() => setDropdownOpen(!dropdownOpen)}
                      >
                        {item.name}
                        <ChevronDown
                          className={clsx(
                            "w-5 h-5 transition-transform",
                            dropdownOpen && "rotate-180"
                          )}
                        />
                      </button>
                      {dropdownOpen && (
                        <div className="ml-4 mt-1 flex flex-col gap-1">
                          <Link
                            href={item.href}
                            className="px-3 py-2 text-sm text-slate-600 hover:text-slate-900 hover:bg-slate-100 rounded-lg"
                            onClick={() => setMobileMenuOpen(false)}
                          >
                            Alle {item.name}
                          </Link>
                          {item.children.map((child) => (
                            <Link
                              key={child.href}
                              href={child.href}
                              className={clsx(
                                "px-3 py-2 text-sm rounded-lg transition-colors",
                                isActive(child.href)
                                  ? "text-orange-600 bg-orange-50"
                                  : "text-slate-600 hover:text-slate-900 hover:bg-slate-100"
                              )}
                              onClick={() => setMobileMenuOpen(false)}
                            >
                              {child.name}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link
                      href={item.href}
                      className={clsx(
                        "block px-3 py-2 text-base font-medium rounded-lg transition-colors",
                        isActive(item.href)
                          ? "text-orange-600 bg-orange-50"
                          : "text-slate-700 hover:text-slate-900 hover:bg-slate-100"
                      )}
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
              <div className="mt-4 pt-4 border-t border-slate-200 flex flex-col gap-2">
                <Link
                  href="/portal"
                  className="px-3 py-2 text-base font-medium hover:text-orange-600 transition-colors"
                  style={styles.primaryText}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Logg inn
                </Link>
                <Link
                  href="/medlemskap"
                  className="px-4 py-3 text-base font-medium text-white text-center bg-orange-500 hover:bg-orange-600 rounded-lg transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Bli medlem
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
