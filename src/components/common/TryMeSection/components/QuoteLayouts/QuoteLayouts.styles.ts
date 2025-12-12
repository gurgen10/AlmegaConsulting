import styled from '@mui/system/styled';
import { Mode } from '@/providers/QuoteSettingsProvider/QuoteSettingsProvider.types';

const QuoteLayoutWrapper = styled('div')(() => ({
  '--background-color': 'rgba(247, 252, 252, 0.90)',
  '--background-color-secondary': 'rgba(255, 255, 255, 1)',
  '--border-color': 'rgba(245, 245, 245, 1)',
  '--form-background-color': 'rgba(247, 252, 252, 0.90)',
  '--text-color': 'rgba(0, 5, 5, 1)',
  '--text-field-color': 'rgba(0, 5, 5, 0.7)',
  '--text-field-background': 'rgba(250, 250, 250, 0.8)',
  '--box-shadow':
    '0 1.221px 6.105px 0 rgba(0, 0, 0, 0.12), 0 2.442px 2.442px 0 rgba(0, 0, 0, 0.14), 0 3.663px 1.221px -2.442px rgba(0, 0, 0, 0.20)',
  '--backdrop-filter': 'blur(20.757020950317383px)',
  '--footer-color': 'rgba(0, 5, 5, 0.9)',
  '--opacity-30': 'rgba(255, 255, 255, 0.3)',

  [`&[data-mode="${Mode.Dark}"]`]: {
    '--background-color': 'rgba(27,27,27,0.9)',
    '--background-color-secondary': 'rgba(66, 66, 66, 1)',
    '--border-color': 'rgba(117, 117, 117, 1)',
    '--form-background-color': 'rgba(0, 5, 5, 0.7)',
    '--text-color': 'rgba(255, 255, 255, 1)',
    '--text-field-color': 'rgba(247, 252, 252, 0.9)',
    '--text-field-background': 'rgba(0, 5, 5, 0.6)',
    '--box-shadow':
      '0 1.221px 6.105px 0 rgba(0, 0, 0, 0.12), 0 2.442px 2.442px 0 rgba(0, 0, 0, 0.14), 0 3.663px 1.221px -2.442px rgba(0, 0, 0, 0.20)',
    '--backdrop-filter': 'blur(37px)',
    '--footer-color': 'rgba(247, 252, 252, 0.6)',
    '--opacity-30': 'rgba(0, 5, 5, 0.3)',
  },

  height: '100%',
  width: '100%',
  color: 'var(--text-color)',
  // pointerEvents: 'none',

  '.lm-form': {
    display: 'flex',
    textAlign: 'center',
    flexDirection: 'column',

    '.lm-logo': {
      width: 'auto',
      height: 'auto',
    },

    '.MuiTextField-root': {
      backgroundColor: 'var(--text-field-background)',
      'input, .MuiTypography-root': {
        color: 'var(--text-color)',
      },
    },

    '.lm-form-item-icn path, .lm-form-item-icn circle': {
      stroke: 'var(--text-color)',
    },

    '.lm-checkbox': {
      border: '1px solid var(--text-field-color)',
      height: 20,
      width: 20,
      borderRadius: 4,
    },

    '.lm-footer': {
      color: 'var(--footer-color)',
    },

    '.lm-submit-btn': {
      minWidth: 300,
      alignSelf: 'center',
    },
  },
}));

export const BackgroundLayoutWrapper = styled(QuoteLayoutWrapper)(() => ({
  backgroundColor: 'var(--background-color)',
  backgroundSize: 'cover',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: '0 48px',

  '.lm-logo': {
    maxWidth: '100%',
  },

  '.lm-form': {
    width: 540,
    padding: '60px 32px 32px',
    borderRadius: 20,
    gap: 48,
    border: '1px solid var(--border-color)',
    background: 'var(--form-background-color)',
    boxShadow: 'var(--box-shadow)',
    backdropFilter: 'var(--backdrop-filter)',

    '.lm-submit-btn': {
      marginTop: '24px',
    },
  },
}));

export const SideImageLayoutWrapper = styled(QuoteLayoutWrapper)(() => ({
  display: 'grid',
  gridTemplateColumns: '1fr 586px',
  backgroundColor: 'var(--background-color)',

  '.lm-bg': {
    backgroundSize: 'cover',
  },

  '.lm-form': {
    padding: '60px 64px 16px',
    justifyContent: 'space-between',
    background: 'var(--background-color-secondary)',
  },
}));

export const MinimalisticLayoutWrapper = styled(QuoteLayoutWrapper)(() => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: 'var(--background-color-secondary)',
  position: 'relative',

  '.lm-form': {
    width: 540,
    padding: 48,
    gap: 24,
    background: 'var(--opacity-30)',
    boxShadow: 'var(--box-shadow)',
    borderRadius: 16,
  },

  '.lm-footer': {
    position: 'absolute',
    bottom: 16,
    textAlign: 'center',
  },
}));

export const ElegantLayoutWrapper = styled(QuoteLayoutWrapper)(() => ({
  position: 'relative',
  display: 'grid',
  padding: '60px 240px',
  gridTemplateColumns: 'repeat(2, 1fr)',
  alignItems: 'center',
  gap: 80,
  textAlign: 'center',
  backgroundColor: 'var(--background-color-secondary)',

  '.lm-form': {
    padding: 48,
    background: 'var(--opacity-30)',
    boxShadow: 'var(--box-shadow)',
    borderRadius: 16,
  },

  '.lm-footer': {
    width: '100%',
    position: 'absolute',
    bottom: 16,
  },
}));
