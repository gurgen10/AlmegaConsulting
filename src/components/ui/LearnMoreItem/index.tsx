'use client';

import { Box, useTheme } from '@mui/material';
import Image from 'next/image';
import DescriptionBlock from './DescriptionBlock';

interface LearnMoreItemProps {
  item: {
    title: string;
    description: string;
    url: string;
    image: string;
    buttonText: string;
  };
  index: number;
  totalItems: number;
  translation: (key: string) => string;
}

export default function LearnMoreItem({
  item,
  index,
  totalItems,
  translation,
}: LearnMoreItemProps) {
  const theme = useTheme();

  const isEven = index % 2 === 0;
  const isFirst = index === 0;
  const isLast = index === totalItems - 1;
  const isInFirstRow = index < 2; // First two items
  const isInSecondRow = index >= 2; // Last two items

  const showRightBorder = isEven && !isLast;

  return (
    <Box
      sx={{
        position: 'relative',
        padding: { xs: 3, md: 4, lg: 6 },
        display: 'flex',
        flexDirection: 'column',
        ...(isFirst && {
          mt: 0,
          [theme.breakpoints.down('md')]: {
            mt: 3,
          },
        }),
        ...(isEven && {
          mt: 0,
        }),
        ...(isEven &&
          isInFirstRow && {
            [theme.breakpoints.down('md')]: {
              mt: 3,
            },
          }),
        ...(showRightBorder && {
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            right: 0,
            width: {
              xs: '0',
              md: '1px',
            },
            height: '100%',
            backgroundColor: 'tertiary.main',
          },
        }),
        ...(isEven && {
          [theme.breakpoints.down('md')]: {
            '&::after': {
              content: '""',
              position: 'absolute',
              bottom: 0,
              left: 0,
              width: '100%',
              height: '1px',
              backgroundImage: 'linear-gradient(90deg, #FAFAFA 0%, #96B0B0 50.15%, #FAFAFA 100%)',
            },
          },
        }),
      }}
    >
      {/* Overlay gradient for second item in first row */}
      {index === 1 && (
        <Box
          sx={{
            position: 'absolute',
            bottom: 0,
            right: 0,
            left: 0,
            width: '100%',
            height: {
              xs: '80px',
              xl: '0',
            },
            backgroundImage:
              'linear-gradient(180deg, rgba(250, 250, 250, 0.00) 0%, rgba(250, 250, 250, 0.64) 38.94%, #FAFAFA 87.98%)',
            zIndex: 1,
          }}
        />
      )}

      {/* Overlay gradient for first item in second row */}
      {index === 2 && (
        <Box
          sx={{
            position: 'absolute',
            bottom: 0,
            right: 0,
            left: 0,
            width: '100%',
            height: '80px',
            backgroundImage:
              'linear-gradient(180deg, rgba(250, 250, 250, 0.00) 0%, rgba(250, 250, 250, 0.64) 38.94%, #FAFAFA 87.98%)',
            zIndex: 1,
          }}
        />
      )}

      {/* Content */}
      <Box
        sx={{
          ...(isInSecondRow &&
            isEven && {
              mt: 0,
              [theme.breakpoints.down('md')]: {
                mt: 3,
              },
            }),
        }}
      >
        <DescriptionBlock
          title={translation(item.title)}
          subtitle={translation(item.description)}
          buttonText={translation(item.buttonText)}
          url={item.url}
        />
      </Box>

      <Box
        sx={{
          mb: 0,
          ...(isInSecondRow &&
            !isEven && {
              mt: 0,
              [theme.breakpoints.down('md')]: {
                mt: 3,
              },
            }),
          overflow: 'hidden',
          position: 'relative',
        }}
      >
        <Image
          src={item.image}
          alt={translation(item.title)}
          width={386}
          height={342}
          style={{ width: '100%', height: 'auto' }}
        />
      </Box>
    </Box>
  );
}
