import Link from "next/link";
import Image from "next/image";
import { ScrollTopButton } from "./footer-scroll-top";
import { Mail, Phone, MapPin, ArrowUpRight } from "lucide-react";
import { SiteConfig } from "@/site-config";

const NAV_COLUMNS = [
  {
    title: "Navigation",
    links: [
      { label: "Accueil",    href: "/" },
      { label: "Réalisations", href: "#" },
      { label: "Blog",         href: "/posts" },
    ],
  },
  {
    title: "Informations",
    links: [
      { label: "Contact",      href: "/contact" },
      { label: "Plan du site", href: "/plan-du-site" },
    ],
  },
  {
    title: "Performances",
    links: [
      { label: "Performance", target:"_blank", href: "https://googlechrome.github.io/lighthouse/viewer/?psiurl=https%3A%2F%2Fproject-ar-03.vercel.app%2F&strategy=desktop&category=performance&category=accessibility&category=best-practices&category=seo&utm_source=lh-chrome-ext#" },
      { label: "Co²", target:"_blank", href: "https://www.websitecarbon.com/website/project-ar-03-vercel-app/" },
    ],
  },
] as const;

const CONTACT = [
  { icon: Mail,   label: "Email",     value: "andyramaroson@gmail.com" },
  { icon: Phone,  label: "Téléphone", value: "06 30 83 28 75" },
  { icon: MapPin, label: "Adresse",   value: "Bordeaux, Gironde" },
] as const;

export function Footer() {
  return (
    <footer id="footer" className="border-t border-border bg-background">
      <div className="mx-auto max-w-7xl px-6 py-4 lg:px-8">

        {/* ── Grille principale ── */}
        <div className="mt-4 grid grid-cols-1 gap-12 lg:grid-cols-[1.4fr_2fr]">

          {/* ── Colonne gauche — brand + contact ── */}
          <div className="flex flex-col gap-6">
            <Link href="/" className="flex items-center gap-2">
              <Image
                src={SiteConfig.appIcon}
                alt="Andy ramaroson logo"
                width={24}
                height={24}
              />
              <span className="text-lg font-bold text-foreground">
                Portfolio
              </span>
            </Link>

            <p className="max-w-xs text-sm leading-relaxed
                          text-muted-foreground">
              Création site web et SEO locale. On transforme votre 
              visibilité Google en machine à générer des leads qualifiés.
            </p>

            {/* Contact */}
            <ul className="flex flex-col gap-3">
              {CONTACT.map(({ icon: Icon, label, value }) => (
                <li key={label} className="flex items-center gap-3">
                  <div className="flex size-8 shrink-0 items-center
                                  justify-center rounded-full
                                  border border-border bg-muted/30">
                    <Icon size={13} className="text-orange-500" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-xs text-muted-foreground">
                      {label}
                    </span>
                    <span className="text-sm text-foreground">
                      {value}
                    </span>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Colonnes droite — nav 4 colonnes ── */}
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
            {NAV_COLUMNS.map(({ title, links }) => (
              <div key={title} className="flex flex-col gap-4">
                <h4 className="border-l-2 border-orange-500 pl-3
                               text-sm font-semibold text-foreground">
                  {title}
                </h4>
                <nav className="flex flex-col gap-2">
                  {links.map(({ label, href }) => (
                    <Link
                      key={href}
                      href={href}
                      target="_blank"
                      className="text-sm text-muted-foreground
                                 transition-colors hover:text-foreground"
                    >
                      {label}
                    </Link>
                  ))}
                </nav>
              </div>
            ))}
          </div>
        </div>

        {/* ── Bannière Zone d'intervention ── */}
        <div className="mt-12">
          <Link
            href="/zone-intervention"
            className="flex items-center justify-between rounded-xl
                       border border-orange-500/20 bg-orange-500/5
                       px-6 py-4 transition-all
                       hover:border-orange-500/40 hover:bg-orange-500/10"
          >
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <MapPin size={14} className="text-orange-500" />
                <span className="text-xs font-bold tracking-widest
                                 text-orange-500 uppercase">
                  Zone d'intervention
                </span>
              </div>
              <div className="h-4 w-px bg-orange-500/30" />
              <div>
                <p className="text-sm font-semibold text-foreground">
                  Nouvelle-Aquitaine
                </p>
                <p className="text-xs text-muted-foreground">
                  Bordeaux, Mérignac, Pessac, ... 
                </p>
              </div>
            </div>
            <ArrowUpRight size={18} className="shrink-0 text-orange-500" />
          </Link>
        </div>

        {/* ── Bas de page ── */}
        <div className="mt-4 flex flex-col items-center justify-end
                        gap-4 border-t border-border pt-2 sm:flex-row">
          <ScrollTopButton />
        </div>

      </div>
    </footer>
  );
}