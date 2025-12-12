import Typography from '@mui/material/Typography';
import { ForwardedRef, forwardRef, memo } from 'react';
import { useWatch } from 'react-hook-form';
import { z } from 'zod';
import Box from '@mui/material/Box';

import { QuoteLayoutProps } from '@/components/LeadMagnetConfiguration/QuoteLayouts/QuoteLayouts.types';
import { ElegantLayoutWrapper } from '@/components/LeadMagnetConfiguration/QuoteLayouts/QuoteLayouts.styles';
import QuoteForm from '@/components/LeadMagnetConfiguration/QuoteLayouts/QuoteForm';
import QuoteFooter from '@/components/LeadMagnetConfiguration/QuoteLayouts/QuoteFooter';
import { leadMagnetSettingsSchema } from '@/components/LeadMagnetSettings/leadMagnetSettingsSchema';

export default memo(
  forwardRef(function Elegant(props: QuoteLayoutProps, ref: ForwardedRef<HTMLDivElement>) {
    const pageSettings = useWatch<z.infer<typeof leadMagnetSettingsSchema>>({
      name: 'pageSettings',
    });

    return (
      <ElegantLayoutWrapper data-mode={pageSettings.mode} ref={ref} {...props}>
        <Box display="flex" flexDirection="column" justifyContent="center" gap={2}>
          <img src={pageSettings.logo} alt="Logo" className="lm-logo" />
          <Typography variant="body2" mb={3} fontWeight={300}>
            {pageSettings.description}
          </Typography>
        </Box>
        <div className="lm-form">
          <Typography mb={5} variant="h4" fontWeight={300} color={pageSettings.titleColor}>
            {pageSettings.title}
          </Typography>
          <QuoteForm
            buttonColor={pageSettings.buttonColor}
            buttonTextColor={pageSettings.buttonTextColor}
          />
        </div>
        <QuoteFooter
          privacyPolicyUrl={pageSettings.privacyPolicyUrl}
          termsAndConditionsUrl={pageSettings.termsAndConditionsUrl}
        />
      </ElegantLayoutWrapper>
    );
  })
);
