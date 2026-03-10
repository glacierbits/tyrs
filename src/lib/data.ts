export type Discipline = 'hudba' | 'divadlo' | 'tanec';

export interface Event {
  id: string;
  title: string;
  discipline: Discipline;
  date: string;
  time: string;
  description: string;
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
  },
  {
    id: 'e2',
    title: 'Kidd Pivot — Revisor',
    discipline: 'tanec',
    date: '2025-04-25',
    time: '19:30',
    description:
      'Crystal Pite and Jonathon Young\'s electrifying fusion of dance and theatre — Gogol\'s The Government Inspector reimagined through movement, voice, and uncanny stagecraft.',
  },
  {
    id: 'e3',
    title: 'Skupina Without — Bez názvu #7',
    discipline: 'divadlo',
    date: '2025-05-03',
    time: '20:00',
    description:
      'Prague\'s most provocative devised-theatre collective returns with a new piece exploring collective memory and urban erasure. Performed in Czech with English surtitles.',
  },
  {
    id: 'e4',
    title: 'Anoushka Shankar & ensemble',
    discipline: 'hudba',
    date: '2025-05-17',
    time: '19:00',
    description:
      'A rare intimate performance from the sitar virtuoso, weaving Indian classical tradition with flamenco and electronic textures. Courtyard stage, limited capacity.',
  },
  {
    id: 'e5',
    title: 'Batsheva Dance Company — Venezuela',
    discipline: 'tanec',
    date: '2025-06-08',
    time: '20:00',
    description:
      'Ohad Naharin\'s Gaga-infused masterwork — a raw, relentless group piece that strips dance to its essentials. One of the most important dance works of the century.',
  },
  {
    id: 'e6',
    title: 'Robert Icke — Oresteia',
    discipline: 'divadlo',
    date: '2025-06-21',
    time: '18:00',
    description:
      'The Almeida Theatre production of Aeschylus\'s trilogy, compressed into a gripping three-hour modern retelling. A theatrical event not to be missed.',
  },
];

export const disciplineLabels: Record<Discipline, string> = {
  hudba: 'Music',
  divadlo: 'Theatre',
  tanec: 'Dance',
};

export const spaces = [
  {
    name: 'Hlavní sál',
    subtitle: 'Main Hall',
    capacity: '480 seated · 700 standing',
    description:
      'A former industrial turbine hall with 12-metre ceilings, exposed steel trusses, and world-class acoustics by Nagata Acoustics. Fully modular staging allows proscenium, thrust, and in-the-round configurations. The space disappears behind the work — which is exactly the point.',
  },
  {
    name: 'Černá skříňka',
    subtitle: 'Black Box',
    capacity: '120 flexible',
    description:
      'A stripped-back laboratory for risk-taking. Flat floor, full blackout, a 6×8m lighting grid, and nothing else. This is where new work is made — resident artists, open rehearsals, work-in-progress showings. No proscenium. No hierarchy. Just the work and the witness.',
  },
  {
    name: 'Nádvoří',
    subtitle: 'Courtyard',
    capacity: '200 open-air',
    description:
      'A cobblestoned courtyard framed by the original 1890s brickwork, open to the Prague sky. Summer concerts, film screenings, installations, and the occasional unplanned moment of beauty. The bar stays open late.',
  },
];
