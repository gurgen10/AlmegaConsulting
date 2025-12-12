import { useCallback, useEffect, useRef } from 'react';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import { ZoomedElementProps } from '@/components/ui/ZoomedElement/ZoomedElement.types';

export default function ZoomedElement({ children, contentWidth }: ZoomedElementProps) {
  const elementRef = useRef<HTMLDivElement>(null);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const scaleToFit = useCallback(() => {
    const parent = elementRef.current;

    if (!parent || !contentWidth) return;

    const parentRect = parent.getBoundingClientRect();

    requestAnimationFrame(() => {
      const scale = parentRect.width / contentWidth;
      parent.style.transform = `scale(${scale})`;
      parent.style.transformOrigin = `top left`;
      parent.style.width = `calc(100% / ${scale})`;
    });
  }, [contentWidth]);

  useEffect(() => {
    const resizeObserver = new ResizeObserver(() => scaleToFit());

    scaleToFit();

    return () => resizeObserver.disconnect();
  }, [isMobile, scaleToFit]);

  return (
    <div ref={elementRef} style={{ height: '100%' }}>
      {children}
    </div>
  );
}
