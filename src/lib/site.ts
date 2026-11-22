export const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL || '').replace(/\/+$/, '')
export const NARTSTUDIO_URL = 'https://nartstudio.vercel.app'
export const PYLOTHOUSE_URL = 'https://pylothouse.vercel.app'

export const services = [
  {
    number: '01',
    name: '2D animation',
    detail: 'Frame-by-frame and cut-out animation, character acting and effects.',
    mark: '2D',
  },
  {
    number: '02',
    name: '3D animation',
    detail: 'Modeling, rigging, animation, lighting and rendering for story-led work.',
    mark: '3D',
  },
  {
    number: '03',
    name: 'Character animation',
    detail: 'Turnarounds, expression sheets, motion tests and performance-ready rigs.',
    mark: 'CHARACTER',
  },
  {
    number: '04',
    name: 'Storyboards & animatics',
    detail: 'Find the camera, timing and rhythm before a production goes into motion.',
    mark: 'BOARD',
  },
  {
    number: '05',
    name: 'Motion graphics & FX',
    detail: 'Titles, overlays, interface moments and visual effects for the frame.',
    mark: 'MOTION',
  },
  {
    number: '06',
    name: 'Full production',
    detail: 'A joined-up path from creative brief through final delivery.',
    mark: 'FULL',
  },
]

export const worlds = [
  {
    name: 'M.O.D',
    genre: 'Cyberpunk · science fiction',
    summary: 'A machine-shaped future, a human rebellion and the fight for agency.',
    image: '/assets/worlds/mod.webp',
    width: 907,
    height: 1280,
    href: `${NARTSTUDIO_URL}/universes/mod`,
    index: '01',
  },
  {
    name: 'Holo Host',
    genre: 'Kaiju · science fiction',
    summary: 'A world of colossal threats, unlikely heroes and survival at scale.',
    image: '/assets/worlds/holo-host.webp',
    width: 1280,
    height: 1920,
    href: `${NARTSTUDIO_URL}/universes/holo-host`,
    index: '02',
  },
  {
    name: 'Lord’s Lounge',
    genre: 'Celestial comedy',
    summary: 'A divine court where impossible power meets very human dysfunction.',
    image: '/assets/worlds/lords-lounge.webp',
    width: 1280,
    height: 1920,
    href: `${NARTSTUDIO_URL}/universes/lords-lounge`,
    index: '03',
  },
  {
    name: 'The Unliving Sage',
    genre: 'Dark fantasy',
    summary: 'Forbidden necromantic arts reshape the meaning of death in this dark-fantasy world.',
    image: '/assets/worlds/the-unliving-sage.webp',
    width: 1280,
    height: 1920,
    href: `${NARTSTUDIO_URL}/universes/the-unliving-sage`,
    index: '04',
  },
]

export const processSteps = [
  {
    number: '01',
    title: 'Brief & scope',
    detail: 'Align on the goal, audience, format, schedule and what success looks like.',
  },
  {
    number: '02',
    title: 'Look development',
    detail: 'Explore visual direction, colour, characters and environments before production.',
  },
  {
    number: '03',
    title: 'Make it move',
    detail: 'Build the approved boards and animatic into considered 2D or 3D animation.',
  },
  {
    number: '04',
    title: 'Finish & deliver',
    detail: 'Review, polish and prepare the final files for the formats you need.',
  },
]

export const familyLinks = [
  { name: 'Nartstudio', href: NARTSTUDIO_URL },
  { name: 'NCU', href: `${NARTSTUDIO_URL}/brands/ncu` },
  { name: 'Pylothouse', href: PYLOTHOUSE_URL },
]

export const socialLinks = [
  { name: 'X', href: 'https://x.com/Nart_studio' },
  { name: 'Instagram', href: 'https://www.instagram.com/nart_studio_official/' },
  { name: 'TikTok', href: 'https://vm.tiktok.com/ZS9PkHuoNtq1D-Zmv8C/' },
]
