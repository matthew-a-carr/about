import { ImageResponse } from 'next/og';
import { profile } from './content';

export const alt = `${profile.name} — ${profile.role}`;
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function OpengraphImage() {
  return new ImageResponse(
    <div
      style={{
        height: '100%',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        padding: '80px',
        background:
          'linear-gradient(135deg, #f6f1e8 0%, #f4c9a8 60%, #f2b280 100%)',
        color: '#1c1712',
        fontFamily:
          '"Palatino Linotype", "Book Antiqua", "Times New Roman", serif',
      }}
    >
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          fontSize: 24,
          fontFamily: '"SFMono-Regular", Menlo, Monaco, Consolas, monospace',
          letterSpacing: '0.4em',
          textTransform: 'uppercase',
          color: '#7d6b5c',
        }}
      >
        {profile.name}
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
        <div
          style={{
            fontSize: 76,
            fontWeight: 600,
            lineHeight: 1.05,
            maxWidth: 1000,
          }}
        >
          {profile.tagline}
        </div>
        <div
          style={{
            fontSize: 28,
            color: '#5c4a3a',
            maxWidth: 900,
          }}
        >
          {profile.role}
        </div>
      </div>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          fontSize: 20,
          fontFamily: '"SFMono-Regular", Menlo, Monaco, Consolas, monospace',
          letterSpacing: '0.32em',
          textTransform: 'uppercase',
          color: '#7d6b5c',
        }}
      >
        <span>Backend</span>
        <span>Cloud</span>
        <span>DX</span>
      </div>
    </div>,
    { ...size },
  );
}
