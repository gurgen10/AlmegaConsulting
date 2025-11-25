import { BREAKPOINTS } from '@/shared/constants/breakpoints';
import { TypeScaleKey, TypeScaleValue } from '@/shared/constants/typography';

const toRem = (px: number): string => `${px / 16}rem`;

export const makeVariant = ([mob, tabletMid, tab, mid, big, lh]: TypeScaleValue) => ({
  lineHeight: lh,
  fontSize: toRem(mob),
  [`@media (min-width:0px)`]: { fontSize: toRem(mob) },
  [`@media (min-width:${BREAKPOINTS.tabletMid}px)`]: { fontSize: toRem(tabletMid) },
  [`@media (min-width:${BREAKPOINTS.tablet}px)`]: { fontSize: toRem(tab) },
  [`@media (min-width:${BREAKPOINTS.mid}px)`]: { fontSize: toRem(mid) },
  [`@media (min-width:${BREAKPOINTS.big}px)`]: { fontSize: toRem(big) },
});

export const buildTypography = (scale: Record<TypeScaleKey, TypeScaleValue>) => {
  const typography: Record<string, ReturnType<typeof makeVariant> | string> = {
    fontFamily: 'var(--font-alexandria)',
  };

  for (const key in scale) {
    typography[key] = makeVariant(scale[key as TypeScaleKey]);
  }

  return typography;
};
