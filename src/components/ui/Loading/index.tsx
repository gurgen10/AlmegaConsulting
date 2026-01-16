'use client';

import { useEffect, useMemo, useRef, useState } from 'react';
import Fade from '@mui/material/Fade';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

import LoadingIcon from './LoadingIcon';
import { useTheme } from '@mui/material/styles';
import { useMediaQuery } from '@mui/material';
import { useTranslations } from 'next-intl';

const TIME_DURATION = 30000;

export default function Loading({ loadingTexts = [] }: { loadingTexts: string[] }) {
  const [step, setStep] = useState(0);
  const stepRef = useRef(0);
  const theme = useTheme();
  const isMedium = useMediaQuery(theme.breakpoints.down('md'));
  const isSmall = useMediaQuery(theme.breakpoints.down('sm'));
  const t = useTranslations('loadingTexts');

  const verticalLineHeight = useMemo(() => {
    if (isSmall) return 48;

    if (isMedium) return 70;

    return 74;
  }, [isMedium, isSmall]);

  const logoWidth = useMemo(() => {
    if (isSmall) return 57;

    if (isMedium) return 82;

    return 87;
  }, [isMedium, isSmall]);

  useEffect(() => {
    if (loadingTexts) {
      const stepsCount = loadingTexts.length;
      const avgInterval = TIME_DURATION / stepsCount;
      const interval =
        Math.ceil(Math.random() * avgInterval) + (avgInterval * step - stepRef.current);

      if (step < stepsCount - 1) {
        setTimeout(() => {
          setStep(step + 1);
          stepRef.current += interval;
        }, interval);
      }
    }
  }, [step, loadingTexts]);

  return (
    <Box
      height="100svh"
      width="100lvw"
      position="fixed"
      left={0}
      top={0}
      display="flex"
      alignItems="center"
      justifyContent="center"
      sx={{ backgroundColor: 'grey.50', zIndex: 1801, px: '53px' }}
    >
      <Box display="flex" alignItems="center">
        <Box width={logoWidth}>
          <LoadingIcon />
        </Box>
        <Box
          sx={{
            margin: '0 26px',
            borderWidth: '1px',
            borderStyle: 'solid',
            borderColor: 'grey.900',
            height: `${verticalLineHeight}px`,
            [theme.breakpoints.down('sm')]: {
              margin: '0 16px',
            },
          }}
        ></Box>
        <Box
          sx={{
            width: 237,
            [theme.breakpoints.down('sm')]: {
              width: '100%',
            },
          }}
        >
          <Fade timeout={500} key={loadingTexts[step]} in>
            <Typography variant="h5" color="grey.800" fontWeight={300}>
              {loadingTexts[step] ? `${t(loadingTexts[step])}...` : ''}
            </Typography>
          </Fade>
        </Box>
      </Box>
    </Box>
  );
}
