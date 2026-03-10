export type Discipline = 'hudba' | 'divadlo' | 'tanec';

export interface Event {
  id: string;
  title: string;
  discipline: Discipline;
  date: string;
  time: string;
  description: string;
  image: string;
}

export interface Space {
  name: string;
  subtitle: string;
  capacity: string;
  description: string;
  image: string;
}

export const events: Event[] = [
  {
    id: 'e1',
    title: 'Nils Frahm — All Melody Live',
    discipline: 'hudba',
    date: '2025-04-12',
    time: '20:00',
    description:
      'The German composer and pianist returns with a sweeping live arrangement of his landmark album. Expect reconfigured grands, pipe organs, and analog synthesizers filling the main hall.',
    image: 'https://images.unsplash.com/photo-1520523839897-bd0b52f945a0?w=800&q=80',
  },
  {
    id: 'e2',
    title: 'Kidd Pivot — Revisor',
    discipline: 'tanec',
    date: '2025-04-25',
    time: '19:30',
    description:
      'Crystal Pite and Jonathon Young\'s electrifying fusion of dance and theatre — Gogol\'s The Government Inspector reimagined through movement, voice, and uncanny stagecraft.',
    image: 'https://images.unsplash.com/photo-1508807526345-15e9b5f4eaff?w=800&q=80',
  },
  {
    id: 'e3',
    title: 'Skupina Without — Bez názvu #7',
    discipline: 'divadlo',
    date: '2025-05-03',
    time: '20:00',
    description:
      'Prague\'s most provocative devised-theatre collective returns with a new piece exploring collective memory and urban erasure. Performed in Czech with English surtitles.',
    image: 'https://images.unsplash.com/photo-1503095396549-807759245b35?w=800&q=80',
  },
  {
    id: 'e4',
    title: 'Anoushka Shankar & ensemble',
    discipline: 'hudba',
    date: '2025-05-17',
    time: '19:00',
    description:
      'A rare intimate performance from the sitar virtuoso, weaving Indian classical tradition with flamenco and electronic textures. Courtyard stage, limited capacity.',
    image: 'https://images.unsplash.com/photo-1511192336575-5a79af67a629?w=800&q=80',
  },
  {
    id: 'e5',
    title: 'Batsheva Dance Company — Venezuela',
    discipline: 'tanec',
    date: '2025-06-08',
    time: '20:00',
    description:
      'Ohad Naharin\'s Gaga-infused masterwork — a raw, relentless group piece that strips dance to its essentials. One of the most important dance works of the century.',
    image: 'https://images.unsplash.com/photo-1547153760-18fc86c3d46e?w=800&q=80',
  },
  {
    id: 'e6',
    title: 'Robert Icke — Oresteia',
    discipline: 'divadlo',
    date: '2025-06-21',
    time: '18:00',
    description:
      'The Almeida Theatre production of Aeschylus\'s trilogy, compressed into a gripping three-hour modern retelling. A theatrical event not to be missed.',
    image: 'https://images.unsplash.com/photo-1507676184212-d03ab07a01bf?w=800&q=80',
  },
];

export const disciplineLabels: Record<Discipline, string> = {
  hudba: 'Music',
  divadlo: 'Theatre',
  tanec: 'Dance',
};

export const spaces: Space[] = [
  {
    name: 'Hlavní sál',
    subtitle: 'Main Hall',
    capacity: '480 seated · 700 standing',
    description:
      'A former industrial turbine hall with 12-metre ceilings, exposed steel trusses, and world-class acoustics by Nagata Acoustics. Fully modular staging allows proscenium, thrust, and in-the-round configurations. The space disappears behind the work — which is exactly the point.',
    image: 'https://images.unsplash.com/photo-1519682337058-a94d519337bc?w=800&q=80',
  },
  {
    name: 'Černá skříňka',
    subtitle: 'Black Box',
    capacity: '120 flexible',
    description:
      'A stripped-back laboratory for risk-taking. Flat floor, full blackout, a 6×8m lighting grid, and nothing else. This is where new work is made — resident artists, open rehearsals, work-in-progress showings. No proscenium. No hierarchy. Just the work and the witness.',
    image: 'https://images.unsplash.com/photo-1594909122845-11baa439b7bf?w=800&q=80',
  },
  {
    name: 'Nádvoří',
    subtitle: 'Courtyard',
    capacity: '200 open-air',
    description:
      'A cobblestoned courtyard framed by the original 1890s brickwork, open to the Prague sky. Summer concerts, film screenings, installations, and the occasional unplanned moment of beauty. The bar stays open late.',
    image: 'https://images.unsplash.com/photo-1555685812-4b943f1cb0eb?w=800&q=80',
  },
];
