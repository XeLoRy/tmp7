export type ProjectCategory = 'tunnels' | 'erp' | 'industrial';

export interface Project {
  slug: string;
  image: string;
  category: ProjectCategory;
  year: string;
  client: string;
  tags: string[];
}

export const PROJECTS: Project[] = [
  // === ERP (3 projects) ===
  {
    slug: 'gfc-stade-velodrome',
    image: '/images/projects/erp-project.webp',
    category: 'erp',
    year: '2012',
    client: 'GFC Construction',
    tags: ['ingenierie', 'desenfumage'],
  },
  {
    slug: 'bouygues-pitie-salpetriere',
    image: '/images/projects/project-41.webp',
    category: 'erp',
    year: '2012',
    client: 'Bouygues',
    tags: ['aeraulique', 'polluants'],
  },
  {
    slug: 'artelia-musee-marseille',
    image: '/images/projects/project-42.webp',
    category: 'erp',
    year: '2012',
    client: 'Artelia',
    tags: ['desenfumage'],
  },

  // === TUNNELS (12 projects) ===
  {
    slug: 'tunnel-prado-carenage-ventilation',
    image: '/images/projects/twin-tunnel-portals.webp',
    category: 'tunnels',
    year: '2011–2012',
    client: 'Société Marseillaise du Tunnel Prado Carénage',
    tags: ['ingenierie', 'ventilation'],
  },
  {
    slug: 'tunnel-prado-carenage-incendie',
    image: '/images/projects/recent-fire-test-1.webp',
    category: 'tunnels',
    year: '2008',
    client: 'Société Marseillaise du Tunnel Prado Carénage',
    tags: ['ingenierie', 'incendie'],
  },
  {
    slug: 'tunnels-grand-lyon',
    image: '/images/projects/tunnel-smoke-extraction.webp',
    category: 'tunnels',
    year: '2009–2014',
    client: 'Communauté urbaine de Lyon',
    tags: ['ingenierie', 'ventilation'],
  },
  {
    slug: 'rtm-metro-marseille',
    image: '/images/projects/fire-test-crew.webp',
    category: 'tunnels',
    year: '2013–2014',
    client: 'Régie des Transports Marseillais',
    tags: ['ventilation'],
  },
  {
    slug: 'yvroud-ratp',
    image: '/images/projects/jet-fan-ventilation.webp',
    category: 'tunnels',
    year: '2012–2014',
    client: 'Yvroud',
    tags: ['ventilation'],
  },
  {
    slug: 'xelis-ligne-12',
    image: '/images/projects/project-35.webp',
    category: 'tunnels',
    year: '2012–2013',
    client: 'Xelis',
    tags: ['desenfumage'],
  },
  {
    slug: 'artelia-metro-marseille',
    image: '/images/projects/project-36.webp',
    category: 'tunnels',
    year: '2012',
    client: 'Artelia',
    tags: ['desenfumage'],
  },
  {
    slug: 'egis-wukun-expressway',
    image: '/images/projects/project-overview.webp',
    category: 'tunnels',
    year: '2013',
    client: 'Egis International',
    tags: ['international'],
  },
  {
    slug: 'egis-rail-prado-sud',
    image: '/images/projects/project-37.webp',
    category: 'tunnels',
    year: '2013',
    client: 'Egis Rail',
    tags: ['ventilation'],
  },
  {
    slug: 'colas-rail-tunnels-ferroviaires',
    image: '/images/projects/project-38.webp',
    category: 'tunnels',
    year: '2012–2014',
    client: 'Colas Rail',
    tags: ['ventilation'],
  },
  {
    slug: 'sempariseine-halles',
    image: '/images/projects/project-39.webp',
    category: 'tunnels',
    year: '2013–2014',
    client: 'SemPariSeine',
    tags: ['desenfumage', 'ventilation'],
  },
  {
    slug: 'efectis-bure-montaigre',
    image: '/images/projects/recent-smoke-test.webp',
    category: 'tunnels',
    year: '2014',
    client: 'Efectis Outlabs Ventilation',
    tags: ['essais-aerauliques'],
  },

  // === INDUSTRIAL (2 projects) ===
  {
    slug: 'edf-centrale-hydroelectrique',
    image: '/images/projects/project-43.webp',
    category: 'industrial',
    year: '2012',
    client: 'EDF',
    tags: ['ventilation', 'desenfumage'],
  },
  {
    slug: 'stucky-veytaux',
    image: '/images/projects/underground-shaft.webp',
    category: 'industrial',
    year: '2010–2014',
    client: 'Stucky SA',
    tags: ['ventilation', 'desenfumage'],
  },
];
