export const COMPANY = {
  name: 'FluidAlp',
  fullName: 'FluidAlp',
  address: {
    line1: 'Immeuble "La Brava"',
    line2: '5 Allée François Cochat',
    city: '74230 Thônes',
    country: 'France',
  },
  phone: '04 50 10 47 35', // A confirmer avec le client
  email: 'fluidalp@fluidalp.fr', // A confirmer avec le client
  coordinates: {
    lat: 45.8803,
    lng: 6.3256,
  },
  founder: 'Eric Casalé',
  foundedYear: 2005,
  url: 'https://www.fluidalp.fr',
} as const;

export const NAV_ITEMS = [
  {
    key: 'about',
    href: '/a-propos',
  },
  {
    key: 'expertise',
    href: '/expertises',
    children: [
      { key: 'ventilation', href: '/expertises/ventilation' },
      { key: 'fireSafety', href: '/expertises/securite-incendie' },
      { key: 'pollutionThermal', href: '/expertises/pollution-thermique' },
    ],
  },
  {
    key: 'tools',
    href: '/outils',
    children: [
      { key: 'numericalSimulation', href: '/outils/simulation-numerique' },
      { key: 'measurements', href: '/outils/mesures' },
    ],
  },
  {
    key: 'projects',
    href: '/references',
  },
  {
    key: 'contact',
    href: '/contact',
  },
] as const;
