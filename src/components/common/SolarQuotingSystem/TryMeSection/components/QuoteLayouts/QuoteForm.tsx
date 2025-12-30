import { memo } from 'react';
import { useTranslations } from 'next-intl';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import InputAdornment from '@mui/material/InputAdornment';

import Button from '@mui/material/Button';
import SearchIcon from '@/components/ui/icons/SearchIcon';
import USAFlagIcon from '@/components/ui/icons/USAFlagIcon';
import ArrowDown from '@/components/ui/icons/ArrowDown';
import { Link } from '@mui/material';
import { QuoteFormProps } from '@/components/common/SolarQuotingSystem/TryMeSection/components/QuoteLayouts/QuoteLayouts.types';

export default memo(function QuoteForm({ buttonTextColor, buttonColor }: QuoteFormProps) {
  const t = useTranslations('quotingSystemPage.quotePreview');

  return (
    <Stack width="100%" spacing={2}>
      <TextField size="small" placeholder={t('fullName')} />
      <Stack direction="row" spacing={1}>
        <TextField size="small" fullWidth placeholder={t('email')} />
        <TextField
          size="small"
          fullWidth
          placeholder="(385) 217-8490"
          slotProps={{
            input: {
              startAdornment: (
                <InputAdornment position="start">
                  <USAFlagIcon />
                </InputAdornment>
              ),
            },
          }}
        />
      </Stack>
      <TextField
        size="small"
        placeholder={t('address')}
        className="lm-form-item-icn"
        slotProps={{
          input: {
            endAdornment: (
              <InputAdornment position="end">
                <SearchIcon />
              </InputAdornment>
            ),
          },
        }}
      />
      <Box display="grid" gridTemplateColumns="1fr 88px" gap={2}>
        <TextField size="small" placeholder={t('consumption')} />
        <TextField
          size="small"
          className="lm-form-item-icn"
          slotProps={{
            input: {
              startAdornment: <InputAdornment position="start">$</InputAdornment>,
              endAdornment: (
                <InputAdornment position="end">
                  <ArrowDown />{' '}
                </InputAdornment>
              ),
            },
          }}
        ></TextField>
      </Box>
      <Stack direction="row" gap={1} alignItems="center" justifyContent="center">
        <Box className="lm-checkbox" />
        <Typography fontWeight={300}>{t('isOwner')}</Typography>
      </Stack>
      <Button
        className="lm-submit-btn"
        variant="contained"
        sx={{
          color: buttonTextColor,
          background: buttonColor,
        }}
      >
        {t('requestQuote')}
      </Button>
      <Typography variant="body2" mt={2}>
        {t('contactUs')} :{' '}
        <Link component="span" color="#2961F9">
          +1345 34 3456
        </Link>{' '}
        <Link component="span" color="#2961F9">
          info@poweredge.com
        </Link>
      </Typography>
    </Stack>
  );
});
