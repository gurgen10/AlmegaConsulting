import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { ForwardedRef, forwardRef, memo } from 'react';
import { useWatch } from 'react-hook-form';
import { z } from 'zod';

import { QuoteLayoutProps } from '@/components/LeadMagnetConfiguration/QuoteLayouts/QuoteLayouts.types';
import { SideImageLayoutWrapper } from '@/components/LeadMagnetConfiguration/QuoteLayouts/QuoteLayouts.styles';
import QuoteForm from '@/components/LeadMagnetConfiguration/QuoteLayouts/QuoteForm';
import QuoteFooter from '@/components/LeadMagnetConfiguration/QuoteLayouts/QuoteFooter';
import { leadMagnetSettingsSchema } from '@/components/LeadMagnetSettings/leadMagnetSettingsSchema';

export default memo(
  forwardRef(function SideImage(props: QuoteLayoutProps, ref: ForwardedRef<HTMLDivElement>) {
    const pageSettings = useWatch<z.infer<typeof leadMagnetSettingsSchema>>({
      name: 'pageSettings',
    });
    return (
      <SideImageLayoutWrapper data-mode={pageSettings.mode} ref={ref} {...props}>
        <Box className="lm-bg" sx={{ backgroundImage: `url(${pageSettings.image})` }} />
        <div className="lm-form">
          <img src={pageSettings.logo} alt="Logo" className="lm-logo" />
          <div>
            <Typography mb={2} variant="h4" fontWeight={300} color={pageSettings.titleColor}>
              {pageSettings.title}
            </Typography>
            <Typography gutterBottom variant="body2" mb={3} fontWeight={300}>
              {pageSettings.description}
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
        </div>
      </SideImageLayoutWrapper>
    );
  })
);
