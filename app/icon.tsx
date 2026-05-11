import { ImageResponse } from 'next/og';

export const size = { width: 512, height: 512 };
export const contentType = 'image/png';

export default function Icon() {
  return new ImageResponse(
    <div
      style={{
        height: '100%',
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: '#f6f1e8',
        color: '#1c1712',
        fontSize: 280,
        fontWeight: 600,
        fontFamily:
          '"Palatino Linotype", "Book Antiqua", "Times New Roman", serif',
        letterSpacing: '-0.04em',
      }}
    >
      MC
    </div>,
    { ...size },
  );
}
