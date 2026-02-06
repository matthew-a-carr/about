import { FunctionComponent, ReactNode } from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const icons = [
  {
    href: 'https://github.com/matthew-a-carr',
    icon: <FaGithub className="w-8 h-8" />,
    label: 'GitHub',
  },
  {
    href: 'https://www.linkedin.com/in/matthew-carr-17012284',
    icon: <FaLinkedin className="w-8 h-8" />,
    label: 'LinkedIn',
  },
];

interface FooterIconProps {
  label: string;
  href: string;
  icon: ReactNode;
}

const FooterIcon: FunctionComponent<FooterIconProps> = ({
  label,
  href,
  icon,
}) => (
  <a
    key={label}
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    aria-label={label}
    className="group inline-flex items-center gap-3 rounded-full border border-[color:var(--border)] bg-[color:var(--surface)] px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-[color:var(--fg)] shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-[color:var(--accent)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color:var(--accent)]"
  >
    <span className="text-[color:var(--accent)]">{icon}</span>
    <span>{label}</span>
  </a>
);

const Footer: FunctionComponent = () => (
  <>
    {icons.map(({ label, href, icon }) => (
      <FooterIcon key={label} label={label} href={href} icon={icon} />
    ))}
  </>
);

export default Footer;
