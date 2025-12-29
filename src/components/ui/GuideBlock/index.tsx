import { Box, Button, Typography } from '@mui/material';

import { CONTAINER_STYLES, SPACING_DEFAULT_X, SPACING_DEFAULT_Y } from '@/shared/constants/spacing';
import { GuideBlockProps } from '@/components/ui/GuideBlock/GuideBlock.types';

export function GuideBlock({
  title,
  children,
  content,
  cta,
  img,
  backgroundColor = 'grey.50',
  color = 'primary.main',
  boxShadow,
}: GuideBlockProps) {
  return (
    <Box
      position="relative"
      component="section"
      py={SPACING_DEFAULT_Y}
      px={SPACING_DEFAULT_X}
      boxShadow={boxShadow}
      sx={{ backgroundColor }}
    >
      <Box
        {...CONTAINER_STYLES}
        display="grid"
        gap={5}
        alignItems="center"
        justifyContent="space-between"
        gridTemplateColumns={{ md: '1fr auto' }}
      >
        <Box maxWidth={800} display="flex" gap={2} alignItems="flex-start" flexDirection="column">
          <Typography component="h2" variant="h3" color={color} fontWeight={500}>
            {title}
          </Typography>
          <Box color="grey.900">
            <Typography variant="subtitle2" component="div" fontWeight={300}>
              {content}
            </Typography>
            {children}
          </Box>
          <Button size="large" variant="contained" color="secondary" {...cta} />
        </Box>
        <Box>
          <Box
            maxWidth="100%"
            width={{ md: 340, lg: 376, xl: 400 }}
            borderRadius="8px"
            boxShadow="0 0 38px 0 rgba(0, 0, 0, 0.08)"
            border="4px solid"
            boxSizing="border-box"
            borderColor="grey.25"
            sx={{
              aspectRatio: '1/1',
              backgroundImage: `url(${img.src})`,
              backgroundSize: 'cover',
            }}
          />
        </Box>
      </Box>
    </Box>
  );
}
