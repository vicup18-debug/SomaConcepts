// Live products we have built. Screens are real screenshots of each live site or app.
// To add a project: save a screenshot in src/assets/work/, import it here and add an entry.
import type { ImageMetadata } from 'astro';
import airgoPhone from '../assets/work/airgo-phone.jpg';
import crixux from '../assets/work/crixux.jpg';
import crixuxPhone from '../assets/work/crixux-phone.jpg';
import nonimedia from '../assets/work/nonimedia.jpg';
import nonimediaPhone from '../assets/work/nonimedia-phone.jpg';
import soluxe from '../assets/work/soluxe.jpg';
import soluxePhone from '../assets/work/soluxe-phone.jpg';
import megavolt from '../assets/work/megavolt.jpg';
import whiteplanet from '../assets/work/whiteplanet.jpg';
import inspiringteens from '../assets/work/inspiringteens.jpg';
import faithnow from '../assets/work/faithnow.jpg';
import faithnowPhone from '../assets/work/faithnow-phone.jpg';
import techtalk from '../assets/work/techtalk.jpg';

export interface Project {
  id: string;
  name: string;
  kind: 'Client' | 'Our product';
  type: string;
  blurb: string;
  url?: string;
  link?: string; // our own page about it, e.g. a case study
  screen?: ImageMetadata; // desktop screenshot
  phone?: ImageMetadata; // phone screenshot
}

export const projects: Project[] = [
  {
    id: 'airgo',
    name: 'Airgo',
    kind: 'Client',
    type: 'Apps, website and admin system',
    blurb: 'Hotels, rides, deliveries and car hire in one platform, with escrow payments.',
    url: 'https://airgo.ng',
    link: '/work/#airgo',
    phone: airgoPhone,
  },
  {
    id: 'crixux',
    name: 'CRIXUX INTERBIZ',
    kind: 'Client',
    type: 'Fintech app prototype',
    blurb: 'A money and investing app in English, Yorùbá, Hausa and Igbo.',
    url: 'https://crixux.vercel.app',
    screen: crixux,
    phone: crixuxPhone,
  },
  {
    id: 'nonimedia',
    name: 'Nonimedia Production Concept',
    kind: 'Client',
    type: 'Website',
    blurb: 'A portfolio and booking site for a wedding and event photography studio.',
    url: 'https://nonimedia-omega.vercel.app',
    screen: nonimedia,
    phone: nonimediaPhone,
  },
  {
    id: 'soluxe',
    name: 'Soluxe Homes',
    kind: 'Client',
    type: 'Website',
    blurb: 'Verified land and homes in Abuja and Lagos, with listings and inspection booking.',
    url: 'https://soluxehomes.com.ng',
    screen: soluxe,
    phone: soluxePhone,
  },
  {
    id: 'megavolt',
    name: 'Megavolt Energy',
    kind: 'Client',
    type: 'Website',
    blurb: 'Solar and power backup for homes and businesses, with quote requests on WhatsApp.',
    url: 'https://megavoltt.vercel.app',
    screen: megavolt,
  },
  {
    id: 'whiteplanet',
    name: 'White Planet Trading',
    kind: 'Client',
    type: 'Website',
    blurb: 'A showcase for a manufacturer and wholesaler of premium Indian fabric.',
    url: 'https://whiteplanet.vercel.app',
    screen: whiteplanet,
  },
  {
    id: 'inspiringteens',
    name: 'Inspiring Teens',
    kind: 'Client',
    type: 'Website',
    blurb: 'The website for a foundation that mentors and supports teenagers.',
    url: 'https://inspiringteens.com.ng',
    screen: inspiringteens,
  },
  {
    id: 'faithnow',
    name: 'FaithNow',
    kind: 'Our product',
    type: 'Learning platform',
    blurb: 'Structured faith learning, a community and a resource library, built and run in-house.',
    url: 'https://faith-now-piqu.vercel.app',
    screen: faithnow,
    phone: faithnowPhone,
  },
  {
    id: 'techtalk',
    name: 'Tech Talk Academy',
    kind: 'Our product',
    type: 'Academy sign-up portal',
    blurb: 'Cohort sign-ups for our academy, which trains the engineers who build for clients.',
    url: 'https://teck-talk-portal.vercel.app',
    screen: techtalk,
  },
];

export const clientNames = projects.filter((p) => p.kind === 'Client').map((p) => p.name);
