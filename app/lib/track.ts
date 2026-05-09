type VercelAnalyticsFn = (
  event: 'event',
  payload: { name: string; [key: string]: string | number | boolean },
) => void;

declare global {
  interface Window {
    va?: VercelAnalyticsFn;
    vaq?: unknown[];
  }
}

export type OutboundLinkName =
  | 'github'
  | 'linkedin'
  | 'employer'
  | 'github_footer'
  | 'linkedin_footer'
  | 'github_contact'
  | 'linkedin_contact'
  | 'github_hero'
  | 'linkedin_hero';

export const trackOutbound = (name: OutboundLinkName, href: string): void => {
  if (typeof window === 'undefined') {
    return;
  }
  window.va?.('event', { name: 'outbound_click', link: name, href });
};
