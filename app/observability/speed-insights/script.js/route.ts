const body = `// Local/CI stub for Vercel speed insights script.
window.si ||= function (...args) {
  (window.siq ||= []).push(args);
};
`;

export function GET() {
  return new Response(body, {
    headers: {
      'content-type': 'application/javascript; charset=utf-8',
    },
  });
}
