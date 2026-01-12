import { memo } from 'react';
import Typography from '@mui/material/Typography';
import { useTranslations } from 'next-intl';

export default memo(function QuoteFooter() {
  const t = useTranslations('quotingSystemPage.quotePreview');

  return (
    <div className="lm-footer">
      <Typography variant="body2" sx={{ textWrap: 'nowrap' }}>
        {t.rich('termsOfUse', {
          link: chunks => (
            <Typography component="span" variant="inherit" sx={{ textDecoration: 'underline' }}>
              {chunks}
            </Typography>
          ),
        })}
      </Typography>

      <Typography variant="body2" mt={0.5}>
        {t.rich('poweredBy', {
          primary: chunks => (
            <Typography component="span" variant="inherit" color="primary">
              {chunks}
            </Typography>
          ),
          year: new Date().getFullYear(),
        })}
      </Typography>
    </div>
  );
});
