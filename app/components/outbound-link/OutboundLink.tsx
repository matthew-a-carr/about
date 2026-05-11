'use client';

import type { AnchorHTMLAttributes, ReactNode } from 'react';
import { type OutboundLinkName, trackOutbound } from '../../lib/track';

interface OutboundLinkProps
  extends Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'onClick'> {
  href: string;
  tracking: OutboundLinkName;
  children: ReactNode;
}

const OutboundLink = ({
  href,
  tracking,
  children,
  target = '_blank',
  rel = 'noopener noreferrer',
  ...rest
}: OutboundLinkProps) => (
  <a
    href={href}
    target={target}
    rel={rel}
    onClick={() => trackOutbound(tracking, href)}
    {...rest}
  >
    {children}
  </a>
);

export default OutboundLink;
