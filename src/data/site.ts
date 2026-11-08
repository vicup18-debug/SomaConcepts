// One place for company facts used across the site. Update here, not in the pages.

export const company = {
  name: 'Soma Concepts',
  legalName: 'Soma Concepts Global Digital Solutions',
  legalLine: 'Registered business name in Nigeria (CAC)',
  tagline: 'Built to last.',
  founded: 2025,
  clientsServed: 7,
  city: 'Abuja',
  country: 'Nigeria',
  phoneDisplay: '0802 308 1571',
  phoneIntl: '+2348023081571',
  whatsapp: '2348023081571',
  email: 'SomaConcepts1@gmail.com',
  instagram: 'https://www.instagram.com/somaconcepts',
  tiktok: 'https://www.tiktok.com/@somaconcepts',
  url: 'https://somaconcepts.com.ng',
};

export const whatsappLink = (text = 'Hello Soma Concepts, I would like to talk about a project.') =>
  `https://wa.me/${company.whatsapp}?text=${encodeURIComponent(text)}`;

export const services = [
  {
    id: 'mobile-apps',
    icon: 'mobile-app',
    name: 'Mobile apps',
    summary: 'Android and iOS apps your customers download from the store, with the admin tools your staff need behind them.',
    includes: ['App design in Figma before any code', 'Android and iOS builds', 'Admin dashboard for your team', 'Payments, maps and notifications', 'Play Store and App Store publishing'],
    forWho: 'Businesses taking a service online: bookings, deliveries, payments, memberships.',
  },
  {
    id: 'websites',
    icon: 'web',
    name: 'Websites and web apps',
    summary: 'Fast company websites and online systems for bookings, orders and customer portals that work on any phone.',
    includes: ['Company websites that load fast on mobile data', 'Booking, ordering and portal systems', 'Content you can update yourself', 'Search engine set-up', 'Hosting and maintenance'],
    forWho: 'Companies whose website should bring in customers, not just exist.',
  },
  {
    id: 'automation',
    icon: 'automation',
    name: 'Business automation',
    summary: 'We connect your forms, payments, invoices and follow-ups so your staff stop doing them by hand.',
    includes: ['A review of where time is lost today', 'Order and enquiry forms that log themselves', 'Automatic invoices and payment reminders', 'Customer follow-ups that never get missed', 'Simple reports on what is happening'],
    forWho: 'Teams still running the business on WhatsApp messages and spreadsheets.',
  },
  {
    id: 'brand-strategy',
    icon: 'brand-strategy',
    name: 'Brand strategy',
    summary: 'Logo, colours, voice and the templates your team uses every day, so everything you publish looks like one company.',
    includes: ['Positioning: who you serve and why they choose you', 'Logo and visual identity', 'Tone of voice and key messages', 'Business card, letterhead and social templates', 'A brand guide your team can follow'],
    forWho: 'New companies, and established ones that have outgrown their look.',
  },
  {
    id: 'ads',
    icon: 'ads',
    name: 'Ads management',
    summary: 'Meta, Google and TikTok campaigns, including the video content, with spend and results reported to you.',
    includes: ['Campaign plan and budget', 'Video and graphic ad content', 'Set-up and daily management', 'Audience and creative testing', 'Plain reports on spend and results'],
    forWho: 'Businesses ready to pay for growth and wanting to see where the money went.',
  },
];

export const process = [
  { name: 'Understand', time: '1 to 2 weeks', text: 'We learn your business, your customers and what success looks like, then agree the plan, the price and the dates.' },
  { name: 'Design', time: 'About 2 weeks', text: 'You see every screen before we build. Changes are cheap here, so this is where we get it right.' },
  { name: 'Build and test', time: '3 to 4 weeks', text: 'We build, test on real phones and show you progress as we go, not only at the end.' },
  { name: 'Launch and run', time: 'Ongoing', text: 'We launch, then stay on to host, maintain and improve what we built with you.' },
];

export const testimonials = [
  {
    quote: 'I am very impressed with the quality of work delivered on our company website. The design is clean, responsive and professionally executed. Your commitment to excellence and timely delivery deserve commendation.',
    who: 'Soluxe Homes',
    role: 'Real estate company',
  },
  {
    quote: 'They did an excellent job. The design was clean, professional, and aligned well with expectations. Communication was easy, they were open to feedback, and delivered.',
    who: 'Inspiring Teens International Foundation',
    role: 'Non-profit',
  },
];
