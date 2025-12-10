import { ColorPaletteKey, COLORS, ColorShade } from '@/shared/constants/colors';

const mainColors: { [key in ColorPaletteKey]?: ColorShade } = {
  grey: 700,
};

export const makePalette = (key: ColorPaletteKey) => {
  const scale = COLORS[key];

  return {
    ...scale,
    main: scale[mainColors[key] || 500],
    light: scale[400],
    dark: scale[700],
    contrastText: '#fff',
  };
};
