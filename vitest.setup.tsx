import '@testing-library/jest-dom';
import { vi } from 'vitest';
import type { ImageProps } from 'next/image';

// Optional: Add global test utilities or mocks

// Mock next/router
vi.mock('next/router', () => import('next-router-mock'));

// Mock next/image
vi.mock('next/image', () => ({
  default: ({ src, alt, width, height, ...props }: ImageProps) => {
    // Handle the case where src is an object (StaticImport)
    const srcString =
      typeof src === 'string' ? src : typeof src === 'object' && src && 'src' in src ? src.src : '';

    // eslint-disable-next-line @next/next/no-img-element
    return <img src={srcString} alt={alt || ''} width={width} height={height} {...props} />;
  },
}));
