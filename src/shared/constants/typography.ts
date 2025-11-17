export type TypeScaleKey =
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'h6'
  | 'subtitle1'
  | 'subtitle2'
  | 'body1'
  | 'body2'
  | 'button'
  | 'caption'
  | 'overLine';

export type TypeScaleValue = [number, number, number, number, number, number];

export const TYPE_SCALE: Record<TypeScaleKey, TypeScaleValue> = {
  h1: [46, 72, 72, 80, 96, 110],
  h2: [32, 48, 48, 52, 60, 130],
  h3: [36, 44, 44, 46, 48, 130],
  h4: [28, 32, 32, 34, 34, 130],
  h5: [20, 24, 24, 24, 24, 130],
  h6: [18, 20, 20, 20, 20, 130],

  subtitle1: [16, 16, 16, 18, 18, 140],
  subtitle2: [14, 14, 14, 16, 16, 140],

  body1: [14, 14, 14, 14, 14, 150],
  body2: [13, 13, 13, 14, 14, 150],

  button: [15, 15, 15, 15, 15, 173],

  caption: [12, 12, 12, 12, 12, 160],

  overLine: [10, 10, 10, 10, 10, 160],
};
