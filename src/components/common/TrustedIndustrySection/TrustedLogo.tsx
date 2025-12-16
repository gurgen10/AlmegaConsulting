import { Box } from '@mui/material';
import Image from 'next/image';

const TrustedLogo = ({ logo, logoWidth }: { logo: string; logoWidth: number }) => {
  return (
    <Box
      sx={{
        flexShrink: 0,
        width: `${logoWidth}px`,
        height: 32,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        filter: 'brightness(0) invert(1)',
        opacity: 0.6,
        transition: 'opacity 0.3s ease, transform 0.3s ease',
        '&:hover': {
          opacity: 1,
        },
      }}
    >
      <Image
        src={logo}
        alt="logo"
        width={logoWidth}
        height={32}
        style={{
          width: 'auto',
          height: '32px',
          objectFit: 'contain',
          pointerEvents: 'none',
        }}
      />
    </Box>
  );
};

export default TrustedLogo;
