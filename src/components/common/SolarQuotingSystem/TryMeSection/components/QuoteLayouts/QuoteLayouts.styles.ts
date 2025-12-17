import styled from '@mui/system/styled';

const QuoteLayoutWrapper = styled('div')(() => ({
  height: '100%',
  width: '100%',
  color: 'var(--text-color)',
  pointerEvents: 'none',

  '.lm-logo': {
    width: 'auto',
    height: 'auto',
    maxWidth: '100%',
  },

  '.lm-form': {
    display: 'flex',
    textAlign: 'center',
    flexDirection: 'column',

    '.MuiOutlinedInput-notchedOutline': {
      border: '1px solid var(--text-field-border-color)',
    },

    '.MuiTextField-root': {
      backgroundColor: 'var(--text-field-background)',
      borderRadius: 4,
      'input, .MuiTypography-root': {
        color: 'var(--text-color)',

        '::placeholder': {
          opacity: 0.7,
        },
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

  '.lm-form': {
    maxWidth: 540,
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
    alignItems: 'center',
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
    alignItems: 'center',
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
