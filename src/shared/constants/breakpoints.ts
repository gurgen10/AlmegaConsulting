export type BreakpointKey = 'mobile' | 'tablet' | 'mid' | 'big' | 'tabletMid';

export const BREAKPOINTS: Record<BreakpointKey, number> = {
  mobile: 0,
  tabletMid: 1000,
  tablet: 1021,
  mid: 1280,
  big: 1400,
};
