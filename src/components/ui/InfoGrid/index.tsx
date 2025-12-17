import { Box, Typography } from '@mui/material';
import { CONTAINER_STYLES, SPACING_DEFAULT_X, SPACING_DEFAULT_Y } from '@/shared/constants/spacing';
import InfoGridItem from '@/components/ui/InfoGrid/InfoGridItem';
import { InfoGridProps } from '@/components/ui/InfoGrid/InfoGridItem.types';

export default function InfoGrid({ titleMaxWidth = 800, title, points }: InfoGridProps) {
  return (
    <Box py={SPACING_DEFAULT_Y} px={SPACING_DEFAULT_X}>
      <Box {...CONTAINER_STYLES}>
        <Typography component="h2" variant="h3" fontSize="500" maxWidth={titleMaxWidth} mb={5}>
          {title}
        </Typography>
        <Box
          display="grid"
          columnGap={{ sm: 5 }}
          rowGap={{ xs: 3, xl: 5 }}
          gridTemplateColumns={{ sm: '1fr 1fr' }}
        >
          {points.map(point => (
            <InfoGridItem key={point.title} {...point} />
          ))}
        </Box>
      </Box>
    </Box>
  );
}
