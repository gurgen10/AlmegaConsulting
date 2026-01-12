'use client';

import { Box, useTheme } from '@mui/material';
import Image from 'next/image';
import DescriptionBlock from './DescriptionBlock';
import VerticalGradient from '@/components/common/AIPoweredSolarSales/VerticalGradient';
import { ReactNode } from 'react';

interface FeatureBlockProps {
  data: {
    title: string;
    points: string[];
    url: string;
    image: {
      src: string;
      alt: string;
      width?: number;
      height?: number;
    };
  };
  layout?: 'imageLeft' | 'imageRight' | 'vertical';
  index?: number;
  totalItems?: number;
  showGradient?: boolean;
  showBorder?: boolean;
  children?: ReactNode;
}

export default function FeatureBlock({
  data,
  layout = 'imageRight',
  index = 0,
  totalItems = 0,
  showGradient = false,
  showBorder = false,
  children,
}: FeatureBlockProps) {
  const theme = useTheme();
  const { title, points, url, image } = data;

  const isFirst = index === 0;
  const isLast = index === totalItems - 1;
  const isMobile = theme.breakpoints.down('md');

  // Determine grid layout based on props
  const gridConfig = {
    imageLeft: {
      gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' },
      imageOrder: { xs: 1, md: 1 },
      contentOrder: { xs: 2, md: 2 },
    },
    imageRight: {
      gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' },
      imageOrder: { xs: 1, md: 2 },
      contentOrder: { xs: 2, md: 1 },
    },
    vertical: {
      gridTemplateColumns: { xs: '1fr', md: '1fr' },
      imageOrder: { xs: 1, md: 1 },
      contentOrder: { xs: 2, md: 2 },
    },
  }[layout];

  const contentPadding = {
    xs: 0,
    md: 4,
    lg: 6,
  };

  return (
    <Box
      sx={{
        display: 'grid',
        gridTemplateColumns: gridConfig.gridTemplateColumns,
        position: 'relative',
        marginBottom: '1px',
        marginTop: isFirst ? 0 : '-1px',
        '&::before': showBorder
          ? {
              content: '""',
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              width: '100%',
              height: '1px',
              backgroundImage: 'linear-gradient(90deg, #FAFAFA 0%, #96B0B0 50.15%, #FAFAFA 100%)',
            }
          : undefined,
      }}
    >
      {showGradient && <VerticalGradient />}

      {/* Content Block */}
      <Box
        sx={{
          order: gridConfig.contentOrder,
          padding: contentPadding,
          position: 'relative',
          '&::before':
            layout === 'imageLeft' && !isMobile
              ? {
                  content: '""',
                  position: 'absolute',
                  top: 0,
                  right: 0,
                  width: '1px',
                  height: '100%',
                  backgroundColor: 'tertiary.main',
                }
              : undefined,
        }}
      >
        {children}
        <DescriptionBlock title={title} points={points} url={url} />
      </Box>

      {/* Image Block */}
      <Box
        sx={{
          order: gridConfig.imageOrder,
          padding: contentPadding,
          overflow: 'hidden',
          position: 'relative',
          mt: { xs: 3, md: 0 },
          mb: { xs: 3, md: 0 },
        }}
      >
        {isLast && layout === 'vertical' && (
          <Box
            sx={{
              position: 'absolute',
              bottom: 0,
              right: 0,
              left: 0,
              width: '100%',
              height: { xs: '80px', xl: 0 },
              backgroundImage:
                'linear-gradient(180deg, rgba(250, 250, 250, 0.00) 0%, rgba(250, 250, 250, 0.64) 38.94%, #FAFAFA 87.98%)',
            }}
          />
        )}
        <Image
          src={image.src}
          alt={image.alt}
          width={image.width || 386}
          height={image.height || 342}
          style={{ width: '100%', height: 'auto' }}
        />
      </Box>
    </Box>
  );
}
