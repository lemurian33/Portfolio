import type { StaticImageData } from "next/image";
import type { Metadata } from "next";
import { SiteConfig } from "@/site-config";

import {LandingHeader} from "@/features/landing/landing-header";
import Hero from "@/features/portfolio/hero";
import ProjectBanner from "@/features/portfolio/project-banner";
import {Footer} from "@/features/layout/footer";

import Express        from "@images/Express4.png";
import UnlcoachingImg from "@images/unlcoaching.png";
import Portfolio      from "@images/portfolio.png";
import HomeKasa       from "@images/HomeKasa.png";
import HomeWealth     from "@images/WealthHealth_1.png";
import HomeSegment    from "@images/segment-hero.webp";
import HomRenovXp    from "@images/renov-expert.jpg";
import HomeCabinet    from "@images/home-cabinet.png";
import MovieImg       from "@images/movie.png";
import HomeAgentAi   from "@images/mon-agent-ai-hero.webp";
import HomeLemurian       from "@images/lemurian-agency-hero.webp";

// ─── Types ────────────────────────────────────────────────────────────────────

type ProjectData = {
  reverse: boolean;
  subTitle: string;
  title: string;
  time: string;
  mission: string;
  developpement: string;
  image: StaticImageData;
  contentType: string;
  btn: { href: string };
  btn1: { href: string };
  description: string;
};

// ─── Data ─────────────────────────────────────────────────────────────────────

const projectsData: ProjectData[] = [
  {
    reverse: false,
    subTitle: "Site vitrine",
    title: "Renov Exp",
    time: "4 jrs",
    mission: "Client Final",
    developpement: "Full-Stack",
    image: HomRenovXp,
    contentType: "project",
    btn: { href: "projects/renovexpert" },
    btn1: { href: "https://renovexp.vercel.app/" },
    description:
      "Renov Experts est le site vitrine de Mathieu Hernandez, artisan menuisier basé à Mérignac. Fenêtres, baies vitrées, pergolas bioclimatiques et volets — plus de 200 chantiers réalisés en Gironde, avec devis gratuit sous 48h et SAV garanti dans la durée.",
  },
  {
    reverse: true,
    subTitle: "Site vitrine",
    title: "Segment-c",
    time: "120 jrs",
    mission: "Client Final",
    developpement: "Full-Stack",
    image: HomeSegment,
    contentType: "project",
    btn: { href: "projects/Segment-c" },
    btn1: { href: "https://www.segment-c.com" },
    description:
      "Segment.C est le site vitrine de Rui De Carvalho, artisan menuisier basé à St jean d'illac. Fenêtres, baies vitrées, portes, pergolas bioclimatiques et volets — plus de 200 chantiers réalisés en Gironde, avec devis gratuit sous 48h et SAV garanti dans la durée.",
  },
  {
    reverse: false,
    subTitle: "Site vitrine",
    title: "Lemurian Agency",
    time: "7 jrs",
    mission: "Client Final",
    developpement: "Full-Stack",
    image: HomeLemurian,
    contentType: "project",
    btn: { href: "projects/lemurian" },
    btn1: { href: "https://project-ar-01.vercel.app" },
    description:
      "Lemurian Agency est une agence spécialisée en création de sites web et SEO local pour les artisans et indépendants. Stratégie SEO, optimisation Google Business Profile et partenariat au lead — pour transformer la visibilité Google en machine à générer des clients qualifiés",
  },
  {
    reverse: true,
    subTitle: "Site vitrine",
    title: "Mon agent ai",
    time: "7 jrs",
    mission: "Client Final",
    developpement: "Full-Stack",
    image: HomeAgentAi,
    contentType: "project",
    btn: { href: "projects/mon-agent-ai" },
    btn1: { href: "#" },
    description:
      "Mon Agent AI accompagne les entreprises dans leur évolution numérique — Création d'agents sur mesure (Claude, Paperclip, Ollama...), formation sur claude et intégration concrète de l'IA dans vos processus métier, sans compromis sur la souveraineté de vos données.",
  },
  {
    reverse: false,
    subTitle: "Site vitrine",
    title: "Cabinet médical",
    time: "en cours",
    mission: "Side project",
    developpement: "Full-Stack",
    image: HomeCabinet,
    contentType: "",
    btn: { href: "projects/I-doctor" },
    btn1: { href: "https://www.i-doctor.fr" },
    description:
      "i-Doctor est une plateforme innovante permettant de mettre en service une prise de rendez-vous par téléphone avec un assistant I.A. Elle permet aux médecins de planifier facilement leurs consultations par téléphone, tout en optimisant efficacement la gestion de leur emploi du temps.",
  },
  {
    reverse: true,
    subTitle: "Site vitrine",
    title: "Express Plomberie",
    time: "10 jrs",
    mission: "Client Final",
    developpement: "Full-Stack",
    image: Express,
    contentType: "project",
    btn: { href: "projects/Express-plomberie" },
    btn1: { href: "https://express-depannage-plomberie.vercel.app" },
    description:
      "Express Plomberie est une vitrine dédiée aux services de plomberie d'urgence, disponible 24h/24 et 7j/7 sur Bordeaux. Les utilisateurs peuvent facilement accéder aux informations sur les interventions courantes, les tarifs et les réalisations de l'entreprise.",
  },
  {
    reverse: false,
    subTitle: "Site vitrine",
    title: "Unlcoaching",
    time: "1 mois",
    mission: "Client Final",
    developpement: "Full-Stack",
    image: UnlcoachingImg,
    contentType: "",
    btn: { href: "projects/Unlcoaching" },
    btn1: { href: "https://www.unlcoaching.com" },
    description:
      "Le site Unlcoaching est une plateforme dédiée au coaching sportif à Bordeaux, dirigée par Jérémy Prat. Il propose des programmes personnalisés combinant entraînement rigoureux et nutrition équilibrée, adaptés aux objectifs de chaque client.",
  },
  {
    reverse: true,
    subTitle: "Site vitrine",
    title: "Portfolio v2",
    time: "1 mois",
    mission: "Side Project",
    developpement: "Full-Stack",
    image: Portfolio,
    contentType: "project",
    btn: { href: "projects/Andyramaroson" },
    btn1: { href: "https://project-ar-03.vercel.app/" },
    description:
      "Portfolio personnel présentant mes réalisations clients et projets personnels. Refonte complète avec Next.js, React, Tailwind CSS, Motion et déploiement sur VPS via Coolify.",
  },
  {
    reverse: false,
    subTitle: "Site vitrine",
    title: "WealthHealth",
    time: "20 jrs",
    mission: "Side Project OCR",
    developpement: "Front-End",
    image: HomeWealth,
    contentType: "project",
    btn: { href: "projects/WealthHealth" },
    btn1: { href: "https://wealth-health-phi.vercel.app" },
    description:
      "Application web interne pour l'entreprise HRnet. Permet de lister les employés avec création via formulaire, modal de confirmation et tableau récapitulatif des données.",
  },
  {
    reverse: true,
    subTitle: "Site vitrine",
    title: "Kasa",
    time: "20 jrs",
    mission: "Side Project OCR",
    developpement: "Front-End",
    image: HomeKasa,
    contentType: "project",
    btn: { href: "projects/Kasa" },
    btn1: { href: "https://andyrama.github.io/AndyRamaroson_11_25112021/" },
    description:
      "Refonte totale du site Kasa, plateforme de location de logements entre particuliers. Migration depuis ASP.NET vers une stack JavaScript moderne avec Node.js côté back-end et React côté front-end.",
  },
];

// ─── Metadata ─────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title: `Portfolio - Andy Ramaroson — ${SiteConfig.title}`,
  description:
    "Développeur Full-Stack JS basé à Bordeaux. Découvrez mes réalisations : sites vitrines, applications web et projets personnels.",
  keywords: ["Portfolio", "Andy Ramaroson", "développeur full-stack", "Next.js", "React", "Bordeaux"],
  openGraph: {
    title: `Portfolio - Andy Ramaroson — ${SiteConfig.title}`,
    description:
      "Développeur Full-Stack JS basé à Bordeaux. Découvrez mes réalisations : sites vitrines, applications web et projets personnels.",
    url: `${SiteConfig.prodUrl}/`,
    type: "website",
  },
};

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function HomePage() {
  return (
    <>
     <LandingHeader/>
      <Hero />
      {projectsData.map((project, index) => (
        <ProjectBanner
          key={index}
          className="pt-32 lg:mb-22 xl:mb-32"
          {...project}
        />
      ))}
      <Footer/>
    </>
  );
}