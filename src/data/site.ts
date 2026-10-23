// All editable copy lives here. No secrets: contact is a plain mailto link.
export const site = {
  name: 'Devbites Inc.',
  // PLACEHOLDER - confirm the real address/domain before launch.
  email: 'info@devbites.ca',
  years: '15+', // per Rajeev; the freelance practice began Dec 2005
  tagline: 'Product, design & delivery for teams that ship.',
};

export const services = [
  {
    title: 'Project management',
    blurb:
      'Technical project management from kickoff to launch: scope, agile cadence, QA/UAT, vendor and stakeholder coordination.',
    points: ['Delivery planning', 'Agile & scrum', 'QA + UAT', 'Stakeholder reporting'],
  },
  {
    title: 'UI / UX design',
    blurb:
      'Research, wireframes, interactive prototypes and polished UI, built on accessible, WCAG-minded design systems.',
    points: ['Wireframes & flows', 'Prototyping', 'Design systems', 'Accessibility'],
  },
  {
    title: 'Front-end development',
    blurb:
      'Responsive, performant web and mobile front ends. I recommend the right stack for the product, then build it.',
    points: ['HTML / CSS / JS', 'React, Angular, Ionic', 'Responsive & mobile web', 'Email & marketing sites'],
  },
  {
    title: 'Marketing & brand',
    blurb:
      'Brand kits, campaign sites, print and video that make a product easy to understand and easy to say yes to.',
    points: ['Brand guidelines', 'Campaign sites', 'Video & motion', 'Print & social'],
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
    slug: 'streaming',
    tag: 'Entertainment · Streaming',
    title: 'A streaming platform, end to end',
    summary:
      'Product design, project management and marketing for a music streaming experience across iOS, Android and web.',
    role: 'Product design & delivery',
    bullets: [
      'Wireframes and UI/UX design in Figma for every screen and flow.',
      'One design language across mobile apps and the web player.',
      'Hands-on project management through to launch.',
    ],
    images: ['playmi-web', 'playmi-phones', 'playmi-flows'],
    hero: 'playmi-web',
    alt: 'Music streaming web player designed in Figma',
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
  {
    slug: 'sites-brand',
    tag: 'Web · Brand · Print · Video',
    title: 'Sites, brands, print & video',
    summary:
      'A decade of campaign sites, brand kits and marketing collateral for startups, SMBs and corporate teams.',
    role: 'Designer, developer & producer',
    bullets: [
      'Marketing sites designed in Photoshop/Sketch and built in HTML and CSS3.',
      'Logo design and brand guidelines for startup, SMB and personal brands.',
      'Print campaigns and concept-treatment-shoot-edit video for web and social.',
    ],
    images: ['sites-process', 'sites-claimcast', 'brands', 'print-tidenotes'],
    hero: 'sites-process',
    alt: 'Marketing site design progression from low fidelity to final design',
  },
];

export const process = [
  { n: '01', title: 'Test', text: 'Start small. Validate the idea with real users or real data before committing.' },
  { n: '02', title: 'Tune', text: 'Refine what the evidence shows. Cut what does not earn its place.' },
  { n: '03', title: 'Try again', text: 'Iterate quickly and ship improvements in the open.' },
];
