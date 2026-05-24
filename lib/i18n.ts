export const LOCALES = ["fr", "nl", "en"] as const;
export type Locale = (typeof LOCALES)[number];
export const DEFAULT_LOCALE: Locale = "fr";
export const LOCALE_COOKIE = "mmh-locale";

export const LOCALE_LABELS: Record<Locale, string> = {
  fr: "Français",
  nl: "Nederlands",
  en: "English",
};

export const LOCALE_FLAGS: Record<Locale, string> = {
  fr: "🇫🇷",
  nl: "🇳🇱",
  en: "🇬🇧",
};

type Dict = {
  banner: string;
  bannerStrong: string;
  nav: {
    care: string;
    careers: string;
    careersBadge: string;
    mission: string;
    registration: string;
    contact: string;
    cta: string;
  };
  hero: {
    eyebrow: string;
    titleA: string;
    titleAccent: string;
    titleB: string;
    lead: string;
    ctaPrimary: string;
    ctaGhost: string;
  };
  practical: {
    title: string;
    addressLabel: string;
    addressValue: string;
    addressSub: string;
    hoursLabel: string;
    hoursValue: string;
    hoursSub: string;
    phoneLabel: string;
    phoneValue: string;
    phoneAlt: string;
  };
  stats: { langs: string; jobs: string; branches: string; conventioned: string };
  services: {
    eyebrow: string;
    titleA: string;
    titleAccent: string;
    titleB: string;
    lead: string;
    items: Array<{ title: string; desc: string }>;
  };
  mission: {
    eyebrow: string;
    titleA: string;
    titleAccent: string;
    titleB: string;
    p1: string;
    p2: string;
    values: string[];
    quote: string;
    quoteAuthor: string;
  };
  team: {
    eyebrow: string;
    titleA: string;
    titleAccent: string;
    titleB: string;
    lead: string;
    items: Array<{ title: string; desc: string }>;
  };
  testimonials: {
    eyebrow: string;
    titleA: string;
    titleAccent: string;
    items: Array<{ name: string; role: string; quote: string }>;
  };
  cta: {
    eyebrow: string;
    titleA: string;
    titleAccent: string;
    lead: string;
    leadStrong1: string;
    leadStrong2: string;
    primary: string;
    ghost: string;
    phoneCaption: string;
  };
  footer: {
    tagline: string;
    h1: string;
    h2: string;
    h3: string;
    findItems: string[];
    pages: { careers: string; care: string; mission: string; admin: string };
    contactItems: string[];
    soonWemmel: string;
    bottomLeft: string;
    bottomRight: string;
  };
  jobs: {
    eyebrow: string;
    titleA: string;
    titleAccent: string;
    lead: string;
    empty: { title: string; desc: string; cta: string };
    more: string;
  };
  jobDetail: {
    back: string;
    titlePrefix: string;
    advantages: string;
    conditions: string;
    profile: string;
    applyTitle: string;
    contactPerson: string;
  };
};

const DICTS: Record<Locale, Dict> = {
  fr: {
    banner: "Nouveauté —",
    bannerStrong: "Une nouvelle antenne ouvre prochainement à Wemmel, Avenue de Limburgstirum 116",
    nav: {
      care: "Soins",
      careers: "Carrières",
      careersBadge: "Recrute",
      mission: "Mission",
      registration: "Inscription",
      contact: "Contact",
      cta: "Rendez-vous →",
    },
    hero: {
      eyebrow: "Maison Médicale agréée · ASBL",
      titleA: "Une santé ",
      titleAccent: "globale",
      titleB: ", humaine et de proximité.",
      lead:
        "Médecins généralistes, kinésithérapeutes, infirmières et conseillère sociale — réunis sous un même toit pour vous offrir une prise en charge complète, dans un esprit d'équité et de solidarité.",
      ctaPrimary: "S'inscrire à la maison médicale",
      ctaGhost: "Découvrir nos soins",
    },
    practical: {
      title: "Informations pratiques",
      addressLabel: "Adresse",
      addressValue: "48 Avenue de la Brise",
      addressSub: "1020 Laeken · Quartier Mutsaard – De Wand",
      hoursLabel: "Horaires",
      hoursValue: "Lundi → Vendredi · 9h – 18h",
      hoursSub: "Accueil fermé de 13h à 14h",
      phoneLabel: "Rendez-vous",
      phoneValue: "02 270 37 44",
      phoneAlt: "0488 866 405",
    },
    stats: { langs: "Langues parlées", jobs: "Métiers du soin", branches: "Antennes en 2026", conventioned: "Forfait conventionné" },
    services: {
      eyebrow: "Nos soins",
      titleA: "Une équipe ",
      titleAccent: "pluridisciplinaire",
      titleB: " sous un même toit.",
      lead: "Médecine générale, kinésithérapie, soins infirmiers et accompagnement social — coordonnés pour suivre l'ensemble de votre santé.",
      items: [
        { title: "Médecine générale", desc: "Consultations, suivi des maladies chroniques, prévention et orientation vers les spécialistes." },
        { title: "Kinésithérapie", desc: "Rééducation, douleurs musculaires et articulaires, séances respiratoires sur prescription médicale." },
        { title: "Soins infirmiers", desc: "Pansements, injections, prises de sang, suivi diabète — à la maison médicale ou à domicile." },
        { title: "Conseil social", desc: "Accompagnement administratif, mutuelle, CPAS, aide aux démarches avec notre conseillère sociale." },
        { title: "Prévention & santé", desc: "Vaccinations, dépistages, conseils nutritionnels, soutien au sevrage tabagique et santé mentale." },
        { title: "Activités communautaires", desc: "Natation, futsal, tennis de table — la santé passe aussi par le mouvement et le lien social." },
      ],
    },
    mission: {
      eyebrow: "Notre engagement",
      titleA: "Vous offrir une ",
      titleAccent: "prise en charge globale",
      titleB: " de votre santé.",
      p1:
        "Depuis sa fondation, la Maison Médicale Houba défend une médecine accessible, ancrée dans le quartier Mutsaard – De Wand. Notre approche repose sur l'écoute, la coordination des soins, et le respect de l'autonomie de chaque patient.",
      p2:
        "Une bonne santé ne se résume pas à l'absence de maladie : elle se construit avec le temps, en lien avec son cadre de vie.",
      values: ["Justice sociale", "Équité", "Solidarité", "Citoyenneté", "Respect de l'autonomie", "Soins coordonnés"],
      quote:
        "La santé est un droit, pas un privilège — et chaque patient mérite d'être écouté, accompagné, respecté.",
      quoteAuthor: "Ismaïl Houba · Directeur",
    },
    team: {
      eyebrow: "L'équipe",
      titleA: "Des soignants ",
      titleAccent: "engagés",
      titleB: ", à vos côtés.",
      lead: "Une équipe stable et accessible, qui apprend à vous connaître au fil des consultations.",
      items: [
        { title: "Médecins généralistes", desc: "Consultations & suivi long terme" },
        { title: "Kinésithérapeutes", desc: "Rééducation et thérapies manuelles" },
        { title: "Infirmières", desc: "Soins à la maison médicale et à domicile" },
        { title: "Conseillère sociale", desc: "Accompagnement administratif et social" },
        { title: "Accueil", desc: "Premier contact, prise de rendez-vous" },
        { title: "Coordination", desc: "Direction Ismaïl Houba · adjoint·e de coordination" },
      ],
    },
    testimonials: {
      eyebrow: "Témoignages",
      titleA: "Ce que disent ",
      titleAccent: "nos patients",
      items: [
        { name: "Ana Bel", role: "Patiente", quote: "Accueillant, médecin, kiné et infirmier sont tous d'une grande gentillesse." },
        { name: "Jean-Pierre", role: "Patient", quote: "La meilleure maison médicale à Bruxelles. Gentillesse et professionnalisme au top." },
        { name: "Zaid", role: "Patient", quote: "Équipe médicale au top, le service est parfait. Je recommande sans hésiter." },
      ],
    },
    cta: {
      eyebrow: "Inscription",
      titleA: "Rejoignez la ",
      titleAccent: "Maison Médicale",
      lead: "Pour vous inscrire, prévoyez votre ",
      leadStrong1: "carte d'identité",
      leadStrong2: "deux vignettes de mutuelle",
      primary: "Appeler maintenant →",
      ghost: "Voir nos offres d'emploi",
      phoneCaption: "Prise de rendez-vous",
    },
    footer: {
      tagline: "Une asbl ancrée dans le quartier Mutsaard – De Wand, au service d'une médecine globale, équitable et solidaire.",
      h1: "Nous trouver",
      h2: "Pages",
      h3: "Contact",
      findItems: ["48 Avenue de la Brise", "1020 Laeken, Bruxelles"],
      pages: { careers: "Carrières", care: "Soins", mission: "Mission", admin: "Espace admin" },
      contactItems: ["02 270 37 44", "0488 866 405", "Lun – Ven · 9h – 18h"],
      soonWemmel: "Bientôt à Wemmel",
      bottomLeft: "© 2026 Maison Médicale Houba De Wand asbl",
      bottomRight: "Conçu avec ♥ à Laeken",
    },
    jobs: {
      eyebrow: "Carrières",
      titleA: "Travaillez avec ",
      titleAccent: "nous",
      lead: "Rejoignez une équipe pluridisciplinaire qui place l'humain au cœur des soins. Cadre lumineux, atmosphère solidaire, autonomie soutenue.",
      empty: { title: "Aucune offre actuellement", desc: "Revenez bientôt — ou contactez-nous spontanément à jobmmhouba@gmail.com", cta: "Candidature spontanée" },
      more: "Voir l'offre →",
    },
    jobDetail: {
      back: "← Retour aux offres",
      titlePrefix: "Offre d'emploi : ",
      advantages: "✨ Vos avantages",
      conditions: "📋 Conditions générales",
      profile: "👤 Votre profil",
      applyTitle: "Postuler à cette offre",
      contactPerson: "Personne de contact (uniquement par mail) :",
    },
  },
  nl: {
    banner: "Nieuw —",
    bannerStrong: "Een nieuwe vestiging opent binnenkort in Wemmel, Avenue de Limburgstirum 116",
    nav: {
      care: "Zorg",
      careers: "Vacatures",
      careersBadge: "We zoeken",
      mission: "Missie",
      registration: "Inschrijven",
      contact: "Contact",
      cta: "Afspraak →",
    },
    hero: {
      eyebrow: "Erkende Wijkgezondheidscentrum · VZW",
      titleA: "Een ",
      titleAccent: "globale",
      titleB: ", menselijke en lokale gezondheid.",
      lead:
        "Huisartsen, kinesisten, verpleegkundigen en een sociaal adviseur — onder één dak voor een complete zorgverlening, in een geest van solidariteit en gelijkwaardigheid.",
      ctaPrimary: "Inschrijven bij het wijkgezondheidscentrum",
      ctaGhost: "Onze zorg ontdekken",
    },
    practical: {
      title: "Praktische informatie",
      addressLabel: "Adres",
      addressValue: "Brijnstraat 48",
      addressSub: "1020 Laken · Wijk Mutsaard – De Wand",
      hoursLabel: "Uren",
      hoursValue: "Maandag → Vrijdag · 9u – 18u",
      hoursSub: "Onthaal gesloten van 13u tot 14u",
      phoneLabel: "Afspraken",
      phoneValue: "02 270 37 44",
      phoneAlt: "0488 866 405",
    },
    stats: { langs: "Talen gesproken", jobs: "Zorgberoepen", branches: "Vestigingen in 2026", conventioned: "Geconventioneerd forfait" },
    services: {
      eyebrow: "Onze zorg",
      titleA: "Een ",
      titleAccent: "multidisciplinair",
      titleB: " team onder één dak.",
      lead: "Huisartsgeneeskunde, kinesitherapie, verpleegkundige zorg en sociale begeleiding — gecoördineerd voor uw volledige gezondheid.",
      items: [
        { title: "Huisartsgeneeskunde", desc: "Consultaties, opvolging van chronische ziektes, preventie en doorverwijzing naar specialisten." },
        { title: "Kinesitherapie", desc: "Revalidatie, spier- en gewrichtspijn, ademhalingssessies op medisch voorschrift." },
        { title: "Verpleegkundige zorg", desc: "Verbanden, injecties, bloednames, diabetesopvolging — in het centrum of aan huis." },
        { title: "Sociaal advies", desc: "Administratieve begeleiding, mutualiteit, OCMW, hulp bij de stappen met onze sociaal adviseur." },
        { title: "Preventie & gezondheid", desc: "Vaccinaties, screenings, voedingsadvies, ondersteuning bij rookstop en mentale gezondheid." },
        { title: "Gemeenschapsactiviteiten", desc: "Zwemmen, futsal, tafeltennis — gezondheid is ook beweging en sociale verbinding." },
      ],
    },
    mission: {
      eyebrow: "Ons engagement",
      titleA: "U een ",
      titleAccent: "globale zorgverlening",
      titleB: " bieden.",
      p1:
        "Sinds de oprichting verdedigt Maison Médicale Houba een toegankelijke geneeskunde, verankerd in de wijk Mutsaard – De Wand. Onze aanpak is gebaseerd op luisteren, gecoördineerde zorg en respect voor de autonomie van elke patiënt.",
      p2:
        "Goede gezondheid is meer dan afwezigheid van ziekte: ze wordt opgebouwd in de tijd, in samenhang met uw leefomgeving.",
      values: ["Sociale rechtvaardigheid", "Gelijkheid", "Solidariteit", "Burgerschap", "Respect voor autonomie", "Gecoördineerde zorg"],
      quote:
        "Gezondheid is een recht, geen voorrecht — en elke patiënt verdient om gehoord, begeleid en gerespecteerd te worden.",
      quoteAuthor: "Ismaïl Houba · Directeur",
    },
    team: {
      eyebrow: "Het team",
      titleA: "Geëngageerde ",
      titleAccent: "zorgverleners",
      titleB: " aan uw zijde.",
      lead: "Een stabiel en toegankelijk team dat u leert kennen doorheen de consultaties.",
      items: [
        { title: "Huisartsen", desc: "Consultaties & langetermijnopvolging" },
        { title: "Kinesisten", desc: "Revalidatie en manuele therapie" },
        { title: "Verpleegkundigen", desc: "Zorg in het centrum en aan huis" },
        { title: "Sociaal adviseur", desc: "Administratieve en sociale begeleiding" },
        { title: "Onthaal", desc: "Eerste contact, afspraken" },
        { title: "Coördinatie", desc: "Directie Ismaïl Houba · coördinatieassistent" },
      ],
    },
    testimonials: {
      eyebrow: "Getuigenissen",
      titleA: "Wat ",
      titleAccent: "onze patiënten",
      items: [
        { name: "Ana Bel", role: "Patiënte", quote: "Onthaal, arts, kinesist en verpleegkundige zijn allen bijzonder vriendelijk." },
        { name: "Jean-Pierre", role: "Patiënt", quote: "Het beste wijkgezondheidscentrum van Brussel. Vriendelijkheid en professionaliteit op topniveau." },
        { name: "Zaid", role: "Patiënt", quote: "Topteam, perfecte dienstverlening. Ik beveel het zonder aarzelen aan." },
      ],
    },
    cta: {
      eyebrow: "Inschrijving",
      titleA: "Word lid van het ",
      titleAccent: "Wijkgezondheidscentrum",
      lead: "Om in te schrijven, breng uw ",
      leadStrong1: "identiteitskaart",
      leadStrong2: "twee mutualiteitsklevers",
      primary: "Nu bellen →",
      ghost: "Onze vacatures bekijken",
      phoneCaption: "Afspraken maken",
    },
    footer: {
      tagline: "Een vzw verankerd in de wijk Mutsaard – De Wand, ten dienste van een globale, eerlijke en solidaire geneeskunde.",
      h1: "Ons vinden",
      h2: "Pagina's",
      h3: "Contact",
      findItems: ["Brijnstraat 48", "1020 Laken, Brussel"],
      pages: { careers: "Vacatures", care: "Zorg", mission: "Missie", admin: "Admin-ruimte" },
      contactItems: ["02 270 37 44", "0488 866 405", "Ma – Vr · 9u – 18u"],
      soonWemmel: "Binnenkort in Wemmel",
      bottomLeft: "© 2026 Maison Médicale Houba De Wand vzw",
      bottomRight: "Met ♥ ontworpen in Laken",
    },
    jobs: {
      eyebrow: "Vacatures",
      titleA: "Werk met ",
      titleAccent: "ons",
      lead: "Sluit u aan bij een multidisciplinair team dat de mens centraal stelt. Lichtrijk kader, solidaire sfeer, ondersteunde autonomie.",
      empty: { title: "Momenteel geen vacatures", desc: "Kom binnenkort terug — of stuur spontaan uw kandidatuur naar jobmmhouba@gmail.com", cta: "Spontane sollicitatie" },
      more: "Bekijk de vacature →",
    },
    jobDetail: {
      back: "← Terug naar vacatures",
      titlePrefix: "Vacature: ",
      advantages: "✨ Uw voordelen",
      conditions: "📋 Algemene voorwaarden",
      profile: "👤 Uw profiel",
      applyTitle: "Solliciteren",
      contactPerson: "Contactpersoon (enkel per e-mail):",
    },
  },
  en: {
    banner: "New —",
    bannerStrong: "A new branch opens soon in Wemmel, Avenue de Limburgstirum 116",
    nav: {
      care: "Care",
      careers: "Careers",
      careersBadge: "Hiring",
      mission: "Mission",
      registration: "Register",
      contact: "Contact",
      cta: "Book a visit →",
    },
    hero: {
      eyebrow: "Accredited Community Health Centre · Non-profit",
      titleA: "Care that is ",
      titleAccent: "whole",
      titleB: ", human, and close to home.",
      lead:
        "GPs, physiotherapists, nurses and a social worker — gathered under one roof to deliver complete care, in a spirit of fairness and solidarity.",
      ctaPrimary: "Register with the clinic",
      ctaGhost: "Explore our care",
    },
    practical: {
      title: "Practical info",
      addressLabel: "Address",
      addressValue: "48 Avenue de la Brise",
      addressSub: "1020 Laeken · Mutsaard – De Wand district",
      hoursLabel: "Hours",
      hoursValue: "Mon → Fri · 9 am – 6 pm",
      hoursSub: "Reception closed 1 pm – 2 pm",
      phoneLabel: "Appointments",
      phoneValue: "+32 2 270 37 44",
      phoneAlt: "+32 488 866 405",
    },
    stats: { langs: "Languages spoken", jobs: "Care professions", branches: "Branches in 2026", conventioned: "Conventioned flat-fee" },
    services: {
      eyebrow: "Our care",
      titleA: "A ",
      titleAccent: "multi-disciplinary",
      titleB: " team under one roof.",
      lead: "General medicine, physiotherapy, nursing care and social support — coordinated to look after your whole health.",
      items: [
        { title: "General medicine", desc: "Consultations, chronic disease follow-up, prevention and specialist referrals." },
        { title: "Physiotherapy", desc: "Rehabilitation, musculoskeletal pain, respiratory sessions on medical prescription." },
        { title: "Nursing care", desc: "Dressings, injections, blood draws, diabetes follow-up — at the clinic or at home." },
        { title: "Social counsel", desc: "Administrative support, health insurance, CPAS, help with paperwork from our social worker." },
        { title: "Prevention & wellness", desc: "Vaccinations, screenings, nutrition advice, smoking cessation and mental-health support." },
        { title: "Community activities", desc: "Swimming, futsal, table tennis — health is also movement and social connection." },
      ],
    },
    mission: {
      eyebrow: "Our commitment",
      titleA: "Delivering ",
      titleAccent: "whole-person care",
      titleB: ", for your health.",
      p1:
        "Since its founding, Maison Médicale Houba has championed accessible medicine, rooted in the Mutsaard – De Wand district. Our approach rests on listening, coordinated care and respect for each patient's autonomy.",
      p2:
        "Good health is more than the absence of illness: it is built over time, in connection with your everyday life.",
      values: ["Social justice", "Equity", "Solidarity", "Citizenship", "Respect for autonomy", "Coordinated care"],
      quote:
        "Health is a right, not a privilege — and every patient deserves to be heard, supported and respected.",
      quoteAuthor: "Ismaïl Houba · Director",
    },
    team: {
      eyebrow: "The team",
      titleA: "Dedicated ",
      titleAccent: "caregivers",
      titleB: " by your side.",
      lead: "A stable and approachable team that gets to know you across visits.",
      items: [
        { title: "General practitioners", desc: "Consultations & long-term follow-up" },
        { title: "Physiotherapists", desc: "Rehabilitation and manual therapy" },
        { title: "Nurses", desc: "Care at the clinic and at home" },
        { title: "Social worker", desc: "Administrative and social support" },
        { title: "Reception", desc: "First contact, appointments" },
        { title: "Coordination", desc: "Director Ismaïl Houba · deputy coordinator" },
      ],
    },
    testimonials: {
      eyebrow: "Testimonials",
      titleA: "What ",
      titleAccent: "our patients say",
      items: [
        { name: "Ana Bel", role: "Patient", quote: "Reception, doctor, physio and nurse are all incredibly kind." },
        { name: "Jean-Pierre", role: "Patient", quote: "The best community health centre in Brussels. Kindness and professionalism at their best." },
        { name: "Zaid", role: "Patient", quote: "Top-notch medical team, perfect service. I recommend without hesitation." },
      ],
    },
    cta: {
      eyebrow: "Registration",
      titleA: "Join the ",
      titleAccent: "Health Centre",
      lead: "To register, bring your ",
      leadStrong1: "ID card",
      leadStrong2: "two health-insurance vouchers",
      primary: "Call now →",
      ghost: "See our job openings",
      phoneCaption: "Book an appointment",
    },
    footer: {
      tagline: "A non-profit rooted in the Mutsaard – De Wand district, serving holistic, equitable and solidarity-based medicine.",
      h1: "Find us",
      h2: "Pages",
      h3: "Contact",
      findItems: ["48 Avenue de la Brise", "1020 Laeken, Brussels"],
      pages: { careers: "Careers", care: "Care", mission: "Mission", admin: "Admin area" },
      contactItems: ["+32 2 270 37 44", "+32 488 866 405", "Mon – Fri · 9 am – 6 pm"],
      soonWemmel: "Coming to Wemmel",
      bottomLeft: "© 2026 Maison Médicale Houba De Wand npo",
      bottomRight: "Made with ♥ in Laeken",
    },
    jobs: {
      eyebrow: "Careers",
      titleA: "Work with ",
      titleAccent: "us",
      lead: "Join a multi-disciplinary team that puts people at the heart of care. Bright workspace, solidarity-driven culture, real autonomy.",
      empty: { title: "No openings right now", desc: "Check back soon — or reach out at jobmmhouba@gmail.com", cta: "Spontaneous application" },
      more: "View opening →",
    },
    jobDetail: {
      back: "← Back to openings",
      titlePrefix: "Job opening: ",
      advantages: "✨ Your benefits",
      conditions: "📋 General conditions",
      profile: "👤 Your profile",
      applyTitle: "Apply to this opening",
      contactPerson: "Contact (email only):",
    },
  },
};

export function dictFor(locale: Locale): Dict {
  return DICTS[locale];
}
