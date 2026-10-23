// All editable copy lives here. No secrets: contact is a plain mailto link.
export const site = {
  name: 'Devbites Inc.',
  // Contact address (plain mailto link).
  email: 'rajeev@devbites.com',
  years: '15+', // per Rajeev; the freelance practice began Dec 2005
  tagline: 'AI-driven product design & delivery for teams that ship.',
};

export const services = [
  {
    title: 'Project management',
    blurb:
      'AI-assisted planning and delivery from kickoff to launch: scoping, agile cadence, QA/UAT and stakeholder reporting, with less overhead and clearer visibility.',
    points: ['AI-assisted planning', 'Agile & scrum', 'QA + UAT', 'Stakeholder reporting'],
  },
  {
    title: 'UI / UX design',
    blurb:
      'AI-accelerated research, wireframes and prototypes, then polished, accessible UI on design systems that scale.',
    points: ['AI-powered research', 'Rapid prototyping', 'Design systems', 'Accessibility'],
  },
  {
    title: 'Front-end development',
    blurb:
      'Responsive, performant web and mobile products built with AI-assisted engineering: the right stack, shipped in weeks instead of quarters.',
    points: ['AI-assisted engineering', 'React, Astro, Ionic', 'Web & mobile apps', 'Automation & integrations'],
  },
  {
    title: 'Marketing & brand',
    blurb:
      'AI-generated content, brand systems, campaign sites and video that make a product easy to understand and easy to say yes to.',
    points: ['Brand systems', 'Campaign sites', 'AI content & video', 'Social'],
  },
];

// Official logo files may be dropped into /public/clients/<slug>.svg and referenced via `logo`.
// Until then the strip renders clean text wordmarks. Confirm logo usage with each client first.
export const clients: { name: string; logo?: string }[] = [
  { name: 'CIBC' },
  { name: 'National Bank' },
  { name: 'Scotiabank' },
  { name: "McDonald's" },
];

export const work = [
  {
    slug: 'clientdesk',
    tag: 'Insurtech · Founder-led',
    title: 'ClientDesk: a digital insurance platform',
    summary:
      'Designed and built an end-to-end platform that puts insurance in consumers’ hands while giving brokers a modern workspace.',
    role: 'Founder, CTO & lead designer · 2015–2018',
    bullets: [
      'iOS/Android app and broker dashboard, from wireframes and user-flow maps to the final UI.',
      'Hybrid app on Ionic/Angular and a React dashboard, backed by a MEAN stack on AWS.',
      'Broker advisory group and A/B testing to find and fix real pain points.',
      'Used by 20,000+ customers.',
    ],
    images: ['clientdesk-hero', 'clientdesk-app', 'clientdesk-wires'],
    hero: 'clientdesk-hero',
    alt: 'ClientDesk insurance platform shown across phone, tablet and laptop',
  },
  {
    slug: 'playmi',
    url: 'https://playmi.ca',
    tag: 'Entertainment · Music streaming',
    title: 'Playmi: a music streaming platform',
    summary:
      'Product design, project management and marketing for a streaming service across web, iOS and Android, built around independent artists and DJs.',
    role: 'Founder-led product design & delivery',
    bullets: [
      'One design language across the web player and the iOS/Android apps, designed in Figma.',
      'Home feed with featured track, new releases, trending charts and a live "all-time heaters" rail.',
      'Album, artist and player screens for mobile, with credits that link through to artist pages.',
    ],
    images: ['playmi-home', 'playmi-mobile', 'playmi-album', 'playmi-flows'],
    hero: 'playmi-home',
    alt: 'Playmi web player home screen with featured track, new releases and charts',
  },
  {
    slug: 'ticketmi',
    url: 'https://ticketmi.ca',
    tag: 'Events · Ticketing',
    title: 'Ticketmi: event discovery & ticketing',
    summary:
      'A dark-first events marketplace where people discover, RSVP and buy tickets, and organizers create events.',
    role: 'Product design & front-end',
    bullets: [
      'Event cards with category, date, venue, price and clear status badges such as Closed.',
      'Fast search across events, artists and venues, plus a Find My Tickets lookup.',
      'Free RSVP and paid ticket flows, organizer event creation, and a light/dark toggle.',
    ],
    images: ['ticketmi-web'],
    hero: 'ticketmi-web',
    alt: 'Ticketmi events marketplace showing past event cards',
  },
  {
    slug: 'bmo-life',
    tag: 'Finance · Insurance',
    title: 'BMO Life portal & app pilot',
    summary:
      'Wireframes and design mocks for a policy-management portal and companion mobile app.',
    role: 'UX/UI designer',
    bullets: [
      'Self-service flows such as change of beneficiary and change of address.',
      'Clear policy summary on mobile with the key numbers up front.',
      'Mocks delivered for stakeholder review and approval.',
    ],
    images: ['bmo-portal', 'bmo-app', 'bmo-portal-2'],
    hero: 'bmo-portal',
    alt: 'BMO Life policy portal design mocks',
  },
];

export const process = [
  { n: '01', title: 'Test', text: 'Start small. Use AI to prototype in hours, then validate with real users and real data before committing.' },
  { n: '02', title: 'Tune', text: 'Let the evidence steer. Refine what works and cut what does not earn its place.' },
  { n: '03', title: 'Try again', text: 'Iterate quickly with AI in the loop and ship improvements in the open.' },
];

export const experience = [
  { n: '01', title: 'We see the whole picture', text: 'Strategy, design, build, QA, launch and support. After 15+ years across every stage, I know how each decision upstream shows up downstream.' },
  { n: '02', title: 'We know what to ask AI for', text: 'AI is only as good as the person directing it. Experience is knowing the right problem, the right constraints and when the output is wrong.' },
  { n: '03', title: 'We have shipped under real constraints', text: 'Banks, insurers and startups: compliance, accessibility, stakeholders, budgets and deadlines. The unglamorous parts that make products actually launch.' },
  { n: '04', title: 'One accountable lead', text: 'No hand-offs between five vendors. One senior partner owns the outcome from first workshop to live product.' },
];
