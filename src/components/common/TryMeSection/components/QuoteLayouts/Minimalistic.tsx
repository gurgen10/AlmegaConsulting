import Typography from '@mui/material/Typography';
import { ForwardedRef, forwardRef, memo } from 'react';
import { useWatch } from 'react-hook-form';
import { z } from 'zod';

import { QuoteLayoutProps } from '@/components/LeadMagnetConfiguration/QuoteLayouts/QuoteLayouts.types';
import { MinimalisticLayoutWrapper } from '@/components/LeadMagnetConfiguration/QuoteLayouts/QuoteLayouts.styles';
import QuoteForm from '@/components/LeadMagnetConfiguration/QuoteLayouts/QuoteForm';
import QuoteFooter from '@/components/LeadMagnetConfiguration/QuoteLayouts/QuoteFooter';
import { leadMagnetSettingsSchema } from '@/components/LeadMagnetSettings/leadMagnetSettingsSchema';

export default memo(
  forwardRef(function Minimalistic(props: QuoteLayoutProps, ref: ForwardedRef<HTMLDivElement>) {
    const pageSettings = useWatch<z.infer<typeof leadMagnetSettingsSchema>>({
      name: 'pageSettings',
    });

    return (
      <MinimalisticLayoutWrapper data-mode={pageSettings.mode} ref={ref} {...props}>
        <div className="lm-form">
          <img src={pageSettings.logo} alt="Logo" className="lm-logo" />
          <div>
            <Typography mb={2} variant="h4" fontWeight={300} color={pageSettings.titleColor}>
              {pageSettings.title}
            </Typography>
            <Typography variant="body2" mb={3} fontWeight={300}>
              {pageSettings.description}
            </Typography>
            <QuoteForm
              buttonColor={pageSettings.buttonColor}
              buttonTextColor={pageSettings.buttonTextColor}
            />
          </div>
        </div>
        <QuoteFooter
          privacyPolicyUrl={pageSettings.privacyPolicyUrl}
          termsAndConditionsUrl={pageSettings.termsAndConditionsUrl}
        />
      </MinimalisticLayoutWrapper>
    );
  })
);
