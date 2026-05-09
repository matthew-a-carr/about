export const profile = {
  name: 'Matthew Carr',
  role: 'Senior Backend Engineer',
  tagline: 'I build backend platforms teams trust in production.',
  description:
    'Senior backend engineer focused on reliability, scalability, and developer experience. I help teams ship faster by making architecture clearer and operations safer.',
  jobTitle: 'Senior Backend Engineer',
  employer: 'Benifex',
  links: {
    github: 'https://github.com/matthew-a-carr',
    linkedin: 'https://www.linkedin.com/in/matthew-carr-17012284',
    employer: 'https://benifex.com',
  },
} as const;

export const profileSnapshot = [
  {
    label: 'Role',
    value: 'Senior Backend Engineer',
  },
  {
    label: 'Core stack',
    value: 'Java, Spring Boot, AWS/GCP, Kubernetes, Pub/Sub messaging',
  },
  {
    label: 'Currently',
    value: 'Benifex - Product-led development across multiple projects',
  },
  {
    label: 'Focus',
    value: 'Reliability, scalability, developer experience',
  },
] as const;

export const workPrinciples = [
  {
    title: 'Design for change',
    text: 'Interfaces and data models that absorb new product demands without rewrites.',
  },
  {
    title: 'Ship safely',
    text: 'Progressive delivery, guardrails, and observability that make releases boring.',
  },
  {
    title: 'Leave clear trails',
    text: 'Readable code, sharp docs, and tooling that helps the next engineer move fast.',
  },
] as const;

export const impactHighlights = [
  {
    title: 'Reliability first',
    text: 'I bias toward calm production behavior before optimization work.',
  },
  {
    title: 'Product-aware backend',
    text: 'I map technical decisions to product outcomes and operational cost.',
  },
  {
    title: 'Team acceleration',
    text: 'I reduce cognitive load with conventions, documentation, and paved paths.',
  },
] as const;

export const navLinks = [
  { label: 'Overview', href: '#main-content', sectionId: 'main-content' },
  { label: 'About', href: '#about', sectionId: 'about' },
  { label: 'Impact', href: '#impact', sectionId: 'impact' },
  { label: 'Skills', href: '#skills', sectionId: 'skills' },
  { label: 'Current', href: '#current', sectionId: 'current' },
  { label: 'Contact', href: '#contact', sectionId: 'contact' },
] as const;

export type NavLink = (typeof navLinks)[number];
