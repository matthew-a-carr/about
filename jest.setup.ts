import '@testing-library/jest-dom';
import React from 'react';

jest.mock('next/image', () => ({
  __esModule: true,
  default: (
    props: React.ImgHTMLAttributes<HTMLImageElement> & { src?: any },
  ) => {
    const { src, alt, ...rest } = props;
    const resolvedSrc = typeof src === 'string' ? src : src?.src;

    return React.createElement('img', { src: resolvedSrc, alt, ...rest });
  },
}));
