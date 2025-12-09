import { Typography } from '@mui/material';
import { FooterLinkHeader } from './Footer.style';
import { ReactNode } from 'react';

const FooterMenuWrapper = ({ children }: { children: ReactNode | string }) => {
  return (
    <FooterLinkHeader>
      <Typography color="tertiary.300" variant="body1">
        {children}
      </Typography>
    </FooterLinkHeader>
  );
};

export default FooterMenuWrapper;
