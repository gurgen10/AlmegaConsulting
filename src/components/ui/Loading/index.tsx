'use client';

import { useEffect, useMemo, useRef, useState } from 'react';
import Fade from '@mui/material/Fade';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

import LoadingIcon from './LoadingIcon';
import { useTheme } from '@mui/material/styles';
import { useMediaQuery } from '@mui/material';

const loadingTexts = [
  'Powering Tomorrow',
  'Charging the Future',
  'Go Solar Now',
  'Brighten Your World',
  'Shine Smarter',
  'Live Sun-Driven',
  'Switch to Clean',
  'Unleash Clean Energy',
  'Energize Green',
  'Save More with the Sun',
  'Solar That Pays You Back',
  'The Smartest Energy Choice',
  'The Future of Energy',
  'Invest in the Sun',
  'Skyrocket Your Solar Sales',
  'Unlock Solar Sales Success',
  'Turn Leads Into Solar Deals',
  'Sun-Powered, Future-Ready',
  'Smarter Homes Run on Solar',
  'Start Saving from Day One',
  'Stop Renting Power. Own It.',
];

export default function Loading() {
  const [step, setStep] = useState(0);
  const stepRef = useRef(0);
  const theme = useTheme();
  const isMedium = useMediaQuery(theme.breakpoints.down('md'));
  const isSmall = useMediaQuery(theme.breakpoints.down('sm'));

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
      const avgInterval = 12000 / stepsCount;
      const interval =
        Math.ceil(Math.random() * avgInterval) + (avgInterval * step - stepRef.current);

      if (step < stepsCount - 1) {
        setTimeout(() => {
          setStep(step + 1);
          stepRef.current += interval;
        }, interval);
      }
    }
  }, [step]);

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
      sx={{ background: '#fcfcfc', zIndex: 1801, px: '53px' }}
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
              {loadingTexts[step] ? `${loadingTexts[step]}...` : ''}
            </Typography>
          </Fade>
        </Box>
      </Box>
    </Box>
  );
}

// import './loading.css';
// import Image from 'next/image';
// import { useRef } from 'react';
//
// const texts = [
//   'Powering Tomorrow',
//   'Charging the Future',
//   'Go Solar Now',
//   'Brighten Your World',
//   'Shine Smarter',
//   'Live Sun-Driven',
//   'Switch to Clean',
//   'Unleash Clean Energy',
//   'Energize Green',
//   'Save More with the Sun',
//   'Solar That Pays You Back',
//   'The Smartest Energy Choice',
//   'The Future of Energy',
//   'Invest in the Sun',
//   'Skyrocket Your Solar Sales',
//   'Unlock Solar Sales Success',
//   'Turn Leads Into Solar Deals',
//   'Sun-Powered, Future-Ready',
//   'Smarter Homes Run on Solar',
//   'Start Saving from Day One',
//   'Stop Renting Power. Own It.',
// ];
//
// const Loading = () => {
//   const textContainer = document.getElementById('text-container');
//
//   const isReady = sessionStorage.getItem('status') === 'ready';
//
//   function animateText() {
//     textContainer.style.animation = 'fadeOut 1s forwards';
//     setTimeout(() => {
//       textContainer.textContent = texts[Math.floor(Math.random() * texts.length)];
//       textContainer.style.animation = 'fadeIn 1s forwards';
//     }, 500);
//   }
//
//   if (textContainer && !isReady) {
//     textContainer.textContent = texts[Math.floor(Math.random() * texts.length)];
//     textContainer.style.animation = 'fadeIn 1s forwards';
//     setInterval(animateText, 1500);
//   }
//   const loaderRef = useRef<HTMLDivElement>(null);
//   const content = document.getElementById('content');
//   const path = window.location.pathname;
//
//   if (path.endsWith('/')) {
//     if (isReady) {
//       loader.style.opacity = '0';
//       loader.style.display = 'none';
//       content.style.opacity = '1';
//     } else {
//       loader.style.zIndex = '2000000001';
//     }
//   }
//
//   window.addEventListener('load', () => {
//     if (path.endsWith('/')) {
//       if (!isReady) {
//         // Disable scrolling when the loader is visible.
//         document.body.style.overflow = 'hidden';
//
//         loader.style.transition = 'opacity 500ms ease-in-out';
//
//         setTimeout(() => {
//           loader.style.opacity = '0';
//           setTimeout(() => {
//             loader.style.display = 'none';
//             content.style.opacity = '1';
//             sessionStorage.setItem('status', 'ready');
//
//             // Re-enable scrolling after the loader is hidden.
//             document.body.style.overflow = 'auto';
//           }, 500);
//         }, 4000);
//       }
//     } else {
//       sessionStorage.setItem('status', 'ready');
//     }
//   });
//
//   return (
//     <div id="loading-container" ref={loaderRef} aria-hidden="true">
//       <div id="loading-images">
//         <Image src="/images/loading/image1.svg" alt="Static" className="static-img" />
//         <Image src="/images/loading/image2.svg" alt="Cycling" className="cycling-img" />
//       </div>
//       <div id="text-container"></div>
//     </div>
//   );
// };
//
// export default Loading;
