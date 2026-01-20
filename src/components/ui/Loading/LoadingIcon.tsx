import { Box, useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { useMemo } from 'react';

const Vector = ({ size = 65 }: { size?: number }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 65 65"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M64.9253 30.1506C63.8906 14.1003 50.7789 1.07935 34.6166 0.0695664C14.5655 -1.22367 -1.95354 15.6947 0.187149 35.7488C1.79267 50.7184 13.9054 62.7296 28.9616 64.324C49.1733 66.4676 66.2097 50.0629 64.9253 30.1329V30.1506ZM52.2952 34.2961C51.3497 43.5436 43.8038 51.0196 34.4918 51.9054C21.9152 53.1277 11.4615 42.7287 12.6745 30.2392C13.5843 20.9917 21.0946 13.498 30.4066 12.5768C43.0188 11.3012 53.5439 21.7534 52.2773 34.2784L52.2952 34.2961Z"
      fill="#000505"
    />
  </svg>
);

const Group = ({ size = 21 }: { size?: number }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 21 21"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M17.267 17.1474C21.217 13.2247 21.217 6.86475 17.267 2.94204C13.3169 -0.980674 6.91259 -0.980677 2.96253 2.94204C-0.987535 6.86475 -0.987536 13.2247 2.96253 17.1474C6.91259 21.0702 13.3169 21.0702 17.267 17.1474Z"
      fill="#000505"
    />
  </svg>
);

const sizeMap = {
  small: { vector: 42, group: 13, delta: -14 },
  medium: { vector: 61, group: 19, delta: -17 },
  large: { vector: 65, group: 21, delta: -20 },
};

export default function LoadingIcon() {
  const theme = useTheme();
  const isMedium = useMediaQuery(theme.breakpoints.down('md'));
  const isSmall = useMediaQuery(theme.breakpoints.down('sm'));

  const resposiveSize = useMemo(() => {
    if (isSmall) {
      return sizeMap.small;
    }

    if (isMedium) {
      return sizeMap.medium;
    }

    return sizeMap.large;
  }, [isMedium, isSmall]);

  return (
    <Box
      position="relative"
      sx={{
        animation: 'spin 2.5s linear infinite',
        '@keyframes spin': {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
      }}
      width={resposiveSize.vector}
      height={resposiveSize.vector}
    >
      <Box position="absolute" left={resposiveSize.delta}>
        <Group size={resposiveSize.group} />
      </Box>
      <Box position="absolute">
        <Vector size={resposiveSize.vector} />
      </Box>
    </Box>
  );
}
