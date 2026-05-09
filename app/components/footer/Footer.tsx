import { FunctionComponent, ReactNode } from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { profile } from '../../content';
import type { OutboundLinkName } from '../../lib/track';
import OutboundLink from '../outbound-link/OutboundLink';

const icons: {
  href: string;
  icon: ReactNode;
  label: string;
  tracking: OutboundLinkName;
}[] = [
  {
    href: profile.links.github,
    icon: <FaGithub className="w-8 h-8" />,
    label: 'GitHub',
    tracking: 'github_footer',
  },
  {
    href: profile.links.linkedin,
    icon: <FaLinkedin className="w-8 h-8" />,
    label: 'LinkedIn',
    tracking: 'linkedin_footer',
  },
];

interface FooterIconProps {
  label: string;
  href: string;
  icon: ReactNode;
  tracking: OutboundLinkName;
}

const FooterIcon: FunctionComponent<FooterIconProps> = ({
  label,
  href,
  icon,
  tracking,
}) => (
  <OutboundLink
    href={href}
    tracking={tracking}
    aria-label={label}
    className="group inline-flex items-center gap-3 rounded-full border border-[color:var(--border)] bg-[color:var(--surface)] px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-[color:var(--fg)] shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-[color:var(--accent)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color:var(--accent)]"
  >
    <span className="text-[color:var(--accent)]">{icon}</span>
    <span>{label}</span>
  </OutboundLink>
);

const Footer: FunctionComponent = () => (
  <>
    {icons.map(({ label, href, icon, tracking }) => (
      <FooterIcon
        key={label}
        label={label}
        href={href}
        icon={icon}
        tracking={tracking}
      />
    ))}
  </>
);

export default Footer;
