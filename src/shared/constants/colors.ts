export type ColorShade =
  | 25
  | 50
  | 100
  | 200
  | 300
  | 400
  | 500
  | 600
  | 700
  | 800
  | 900
  | 'A100'
  | 'A200'
  | 'A400'
  | 'A700';

export type ColorPaletteKey = 'primary' | 'secondary' | 'grey' | 'tertiary';

export type ColorPalette = Partial<Record<ColorShade, string>>;

export const COLORS: Record<ColorPaletteKey, ColorPalette> = {
  primary: {
    50: '#e6f9fb',
    100: '#b0edf2',
    200: '#8ae4ec',
    300: '#54d7e4',
    400: '#00c4d6',
    500: '#00808c',
    600: '#00747f',
    700: '#005b63',
    800: '#00464d',
    900: '#00363b',
    A700: '#00808c',
    A400: '#00c4d6',
    A200: '#54d7e4',
    A100: '#b0edf2',
  },
  secondary: {
    50: '#fff2e9',
    100: '#ffd8ba',
    200: '#ffc598',
    300: '#ffaa69',
    400: '#ff801f',
    500: '#c15400',
    600: '#b04c00',
    700: '#893c00',
    800: '#6a2e00',
    900: '#512300',
    A700: '#c15400',
    A400: '#ff801f',
    A200: '#ffaa69',
    A100: '#ffd8ba',
  },
  grey: {
    25: '#ffffff',
    50: '#fafafa',
    100: '#f5f5f5',
    200: '#eeeeee',
    300: '#e0e0e0',
    400: '#bdbdbd',
    500: '#9e9e9e',
    600: '#757575',
    700: '#616161',
    800: '#424242',
    900: '#000505',
    A700: '#616161',
    A400: '#bdbdbd',
    A200: '#eeeeee',
    A100: '#f5f5f5',
  },
  tertiary: {
    50: '#F7FCFC',
    100: '#E8F4F4',
    200: '#D8EBEB',
    300: '#B9D9D9',
    400: '#A8C5C5',
    500: '#96B0B0',
    600: '#758A8A',
    700: '#556565',
    800: '#374242',
    900: '#1C2323',
  },
};
