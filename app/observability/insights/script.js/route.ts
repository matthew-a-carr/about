const body = `// Local/CI stub for Vercel analytics script.
window.va ||= function (...args) {
  (window.vaq ||= []).push(args);
};
`;

export function GET() {
  return new Response(body, {
    headers: {
      'content-type': 'application/javascript; charset=utf-8',
    },
  });
}
