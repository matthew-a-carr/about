import { FunctionComponent, ReactNode } from 'react';
import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa';

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
  {
    href: 'mailto:carr.matty@gmail.com',
    icon: <FaEnvelope className="w-8 h-8" />,
    label: 'Email',
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
    target={href.startsWith('mailto:') ? '_self' : '_blank'}
    rel={href.startsWith('mailto:') ? undefined : 'noopener noreferrer'}
    aria-label={label}
    className="text-gray-400 hover:text-white transform hover:scale-110 transition-all duration-300"
  >
    {icon}
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
