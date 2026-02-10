export type Track = {
  id: string;
  title: string;
  plays: string;
  duration: string;
};

export type Album = {
  id: string;
  title: string;
  year: string;
  type: "Album" | "EP" | "Single";
  cover: string;
};

export type Artist = {
  slug: string;
  name: string;
  country: string;
  genre: string;
  bio: string;
  monthlyListeners: string;
  image: string; // avatar
  cover: string; // hero cover
  verified?: boolean;
  topTracks: Track[];
  albums: Album[];
  similarSlugs: string[];
};

export const artists: Artist[] = [
  // ===== CÔTE D’IVOIRE =====
  {
    slug: "magic-system",
    name: "Magic System",
    country: "Côte d’Ivoire",
    genre: "Zouglou / Pop",
    monthlyListeners: "2.1M",
    bio: "Groupe ivoirien incontournable, connu pour ses hymnes festifs et fédérateurs, entre zouglou et pop.",
    image: "/brand/logo.png",
    cover: "/brand/logo.png",
    verified: true,
    topTracks: [
      { id: "ms1", title: "Premier Gaou", plays: "120M", duration: "3:55" },
      { id: "ms2", title: "Magic in the Air", plays: "210M", duration: "3:10" },
      { id: "ms3", title: "Bouger Bouger", plays: "55M", duration: "3:28" },
      { id: "ms4", title: "Chérie Coco", plays: "48M", duration: "3:34" },
      { id: "ms5", title: "Un gaou à Oran", plays: "22M", duration: "3:22" },
    ],
    albums: [
      { id: "msa1", title: "Cessa Kié La Vérité", year: "2005", type: "Album", cover: "/brand/logo.png" },
      { id: "msa2", title: "Touté Kalé", year: "2007", type: "Album", cover: "/brand/logo.png" },
      { id: "msa3", title: "Africainement Vôtre", year: "2014", type: "Album", cover: "/brand/logo.png" },
    ],
    similarSlugs: ["toofan", "angelique-kidjo"],
  },
  {
    slug: "tiken-jah-fakoly",
    name: "Tiken Jah Fakoly",
    country: "Côte d’Ivoire",
    genre: "Reggae",
    monthlyListeners: "1.4M",
    bio: "Voix majeure du reggae africain, engagé et respecté, avec une discographie solide et un impact panafricain.",
    image: "/brand/logo.png",
    cover: "/brand/logo.png",
    verified: true,
    topTracks: [
      { id: "tj1", title: "Plus rien ne m'étonne", plays: "35M", duration: "4:02" },
      { id: "tj2", title: "Françafrique", plays: "28M", duration: "4:40" },
      { id: "tj3", title: "Ouvrez les frontières", plays: "24M", duration: "4:06" },
      { id: "tj4", title: "Question de peau", plays: "18M", duration: "4:12" },
      { id: "tj5", title: "Le pays va mal", plays: "16M", duration: "4:20" },
    ],
    albums: [
      { id: "tja1", title: "Françafrique", year: "2002", type: "Album", cover: "/brand/logo.png" },
      { id: "tja2", title: "Coup de Gueule", year: "2004", type: "Album", cover: "/brand/logo.png" },
      { id: "tja3", title: "L'Africain", year: "2007", type: "Album", cover: "/brand/logo.png" },
    ],
    similarSlugs: ["alpha-blondy", "angelique-kidjo"],
  },
  {
    slug: "alpha-blondy",
    name: "Alpha Blondy",
    country: "Côte d’Ivoire",
    genre: "Reggae",
    monthlyListeners: "1.8M",
    bio: "Légende du reggae ivoirien, pionnier d’un reggae africain à rayonnement international.",
    image: "/brand/logo.png",
    cover: "/brand/logo.png",
    verified: true,
    topTracks: [
      { id: "ab1", title: "Jerusalem", plays: "60M", duration: "4:10" },
      { id: "ab2", title: "Cocody Rock", plays: "40M", duration: "4:18" },
      { id: "ab3", title: "Brigadier Sabari", plays: "52M", duration: "4:25" },
      { id: "ab4", title: "Sweet Fanta Diallo", plays: "25M", duration: "4:06" },
      { id: "ab5", title: "Apartheid Is Nazism", plays: "14M", duration: "4:44" },
    ],
    albums: [
      { id: "aba1", title: "Jerusalem", year: "1986", type: "Album", cover: "/brand/logo.png" },
      { id: "aba2", title: "Cocody Rock!!!", year: "1992", type: "Album", cover: "/brand/logo.png" },
      { id: "aba3", title: "Masada", year: "1992", type: "Album", cover: "/brand/logo.png" },
    ],
    similarSlugs: ["tiken-jah-fakoly", "magic-system"],
  },
  {
    slug: "kerozen",
    name: "Kerozen",
    country: "Côte d’Ivoire",
    genre: "Coupé-décalé / Urbain",
    monthlyListeners: "860K",
    bio: "Artiste ivoirien populaire, entre motivation, émotions et sonorités urbaines accessibles.",
    image: "/brand/logo.png",
    cover: "/brand/logo.png",
    verified: true,
    topTracks: [
      { id: "kz1", title: "La Victoire", plays: "45M", duration: "3:28" },
      { id: "kz2", title: "Mon Heure a Sonné", plays: "38M", duration: "3:16" },
      { id: "kz3", title: "Champions", plays: "22M", duration: "3:20" },
    ],
    albums: [
      { id: "kza1", title: "La Victoire", year: "2018", type: "Album", cover: "/brand/logo.png" },
      { id: "kza2", title: "Motivation", year: "2020", type: "EP", cover: "/brand/logo.png" },
    ],
    similarSlugs: ["dj-arafat", "toofan"],
  },
  {
    slug: "dj-arafat",
    name: "DJ Arafat",
    country: "Côte d’Ivoire",
    genre: "Coupé-décalé",
    monthlyListeners: "1.6M",
    bio: "Icône du coupé-décalé, énorme influence populaire, énergie brute et titres marquants.",
    image: "/brand/logo.png",
    cover: "/brand/logo.png",
    verified: true,
    topTracks: [
      { id: "da1", title: "Moto Moto", plays: "65M", duration: "3:33" },
      { id: "da2", title: "Dosabado", plays: "42M", duration: "3:12" },
      { id: "da3", title: "Jonathan", plays: "28M", duration: "3:20" },
    ],
    albums: [
      { id: "daa1", title: "Renaissance", year: "2018", type: "Album", cover: "/brand/logo.png" },
      { id: "daa2", title: "Zeus d'Afrique", year: "2016", type: "Album", cover: "/brand/logo.png" },
    ],
    similarSlugs: ["kerozen", "magic-system"],
  },

  // ===== TOGO =====
  {
    slug: "toofan",
    name: "Toofan",
    country: "Togo",
    genre: "Afropop",
    monthlyListeners: "980K",
    bio: "Duo togolais emblématique, vibes festives, hits panafricains et une présence scénique impressionnante.",
    image: "/brand/logo.png",
    cover: "/brand/logo.png",
    verified: true,
    topTracks: [
      { id: "tf1", title: "Eledji", plays: "18M", duration: "3:14" },
      { id: "tf2", title: "Téré Téré", plays: "14M", duration: "3:08" },
      { id: "tf3", title: "Affairage", plays: "10M", duration: "3:10" },
    ],
    albums: [
      { id: "tfa1", title: "Made in Togo", year: "2014", type: "Album", cover: "/brand/logo.png" },
      { id: "tfa2", title: "Overdose", year: "2016", type: "Album", cover: "/brand/logo.png" },
    ],
    similarSlugs: ["magic-system", "king-mensah"],
  },
  {
    slug: "king-mensah",
    name: "King Mensah",
    country: "Togo",
    genre: "Afro / Traditionnel",
    monthlyListeners: "420K",
    bio: "Figure togolaise majeure, mélange de rythmes traditionnels et de sons modernes, très populaire en Afrique de l’Ouest.",
    image: "/brand/logo.png",
    cover: "/brand/logo.png",
    verified: true,
    topTracks: [
      { id: "km1", title: "Denyigban", plays: "7.5M", duration: "3:44" },
      { id: "km2", title: "Ami O", plays: "5.2M", duration: "3:30" },
      { id: "km3", title: "Efoé", plays: "3.8M", duration: "3:26" },
    ],
    albums: [
      { id: "kma1", title: "Racines", year: "2011", type: "Album", cover: "/brand/logo.png" },
      { id: "kma2", title: "Classiques", year: "2015", type: "Album", cover: "/brand/logo.png" },
    ],
    similarSlugs: ["toofan", "angelique-kidjo"],
  },
  {
    slug: "santrinos-raphael",
    name: "Santrinos Raphaël",
    country: "Togo",
    genre: "Afropop",
    monthlyListeners: "310K",
    bio: "Afropop togolais mélodique, titres love et vibe premium, très apprécié sur la scène locale.",
    image: "/brand/logo.png",
    cover: "/brand/logo.png",
    verified: true,
    topTracks: [
      { id: "sr1", title: "Mon Étoile", plays: "4.2M", duration: "3:11" },
      { id: "sr2", title: "Ma Lovée", plays: "3.1M", duration: "3:08" },
      { id: "sr3", title: "C’est toi", plays: "2.2M", duration: "3:14" },
    ],
    albums: [
      { id: "sra1", title: "Afropop Love", year: "2022", type: "EP", cover: "/brand/logo.png" },
      { id: "sra2", title: "Chapters", year: "2024", type: "Album", cover: "/brand/logo.png" },
    ],
    similarSlugs: ["toofan", "kerozen"],
  },

  // ===== BÉNIN =====
  {
    slug: "angelique-kidjo",
    name: "Angélique Kidjo",
    country: "Bénin",
    genre: "World / Afro",
    monthlyListeners: "2.0M",
    bio: "Légende béninoise à rayonnement mondial, fusion afro, jazz, funk et world music.",
    image: "/brand/logo.png",
    cover: "/brand/logo.png",
    verified: true,
    topTracks: [
      { id: "ak1", title: "Agolo", plays: "35M", duration: "4:09" },
      { id: "ak2", title: "Wombo Lombo", plays: "22M", duration: "3:58" },
      { id: "ak3", title: "Afirika", plays: "12M", duration: "4:12" },
    ],
    albums: [
      { id: "aka1", title: "Oremi", year: "1998", type: "Album", cover: "/brand/logo.png" },
      { id: "aka2", title: "Black Ivory Soul", year: "2002", type: "Album", cover: "/brand/logo.png" },
      { id: "aka3", title: "Mother Nature", year: "2021", type: "Album", cover: "/brand/logo.png" },
    ],
    similarSlugs: ["magic-system", "king-mensah"],
  },
  {
    slug: "zeynab",
    name: "Zeynab",
    country: "Bénin",
    genre: "Afro / Urbain",
    monthlyListeners: "240K",
    bio: "Artiste béninoise populaire, entre afro-urbain, mélodies fortes et identité locale assumée.",
    image: "/brand/logo.png",
    cover: "/brand/logo.png",
    verified: true,
    topTracks: [
      { id: "zy1", title: "Vibe Bénin 1", plays: "2.8M", duration: "3:09" },
      { id: "zy2", title: "Vibe Bénin 2", plays: "1.9M", duration: "3:02" },
      { id: "zy3", title: "Vibe Bénin 3", plays: "1.2M", duration: "2:56" },
    ],
    albums: [
      { id: "zya1", title: "Bénin Vibes", year: "2023", type: "EP", cover: "/brand/logo.png" },
      { id: "zya2", title: "Afro Queen", year: "2024", type: "Album", cover: "/brand/logo.png" },
    ],
    similarSlugs: ["angelique-kidjo", "santrinos-raphael"],
  },

  // ===== Bonus RDC (pour tes tests existants) =====
  {
    slug: "fally-ipupa",
    name: "Fally Ipupa",
    country: "RDC",
    genre: "Rumba / Afropop",
    monthlyListeners: "2.4M",
    bio: "Figure majeure de la rumba congolaise moderne, entre tradition et modernité avec une portée internationale.",
    image: "/brand/logo.png",
    cover: "/brand/logo.png",
    verified: true,
    topTracks: [
      { id: "fi1", title: "Placeholder Hit 1", plays: "18M", duration: "3:12" },
      { id: "fi2", title: "Placeholder Hit 2", plays: "12M", duration: "2:58" },
      { id: "fi3", title: "Placeholder Hit 3", plays: "9.4M", duration: "3:34" },
    ],
    albums: [
      { id: "fia1", title: "Placeholder Album", year: "2023", type: "Album", cover: "/brand/logo.png" },
      { id: "fia2", title: "Placeholder EP", year: "2022", type: "EP", cover: "/brand/logo.png" },
    ],
    similarSlugs: ["magic-system", "toofan"],
  },
];

export function getArtist(slug: string) {
  return artists.find((a) => a.slug === slug);
}
