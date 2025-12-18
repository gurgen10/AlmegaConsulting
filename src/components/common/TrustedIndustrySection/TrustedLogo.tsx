import { Box } from '@mui/material';
import Image from 'next/image';

const TrustedLogo = ({ logo }: { logo: string }) => {
  return (
    <Box
      sx={{
        flexShrink: 0,
        height: 32,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        filter: 'brightness(0) invert(1)',
        opacity: 0.6,
        transition: 'opacity 0.3s ease, transform 0.3s ease',
        '&:hover': {
          cursor: 'grab',
          opacity: 1,
        },
      }}
    >
      <Image
        src={logo}
        alt="logo"
        width={180}
        height={32}
        style={{
          width: '100%',
          height: '32px',
          objectFit: 'contain',
        }}
      />
    </Box>
  );
};

export default TrustedLogo;
