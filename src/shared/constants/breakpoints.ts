export type BreakpointKey = 'mobile' | 'tablet' | 'mid' | 'big' | 'tabletMid';

export const BREAKPOINTS: Record<BreakpointKey, number> = {
  mobile: 0,
  tabletMid: 600,
  tablet: 900,
  mid: 1200,
  big: 1536,
};
