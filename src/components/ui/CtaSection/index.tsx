'use client';
import { Box, Button, Stack, Typography } from '@mui/material';

import { CONTAINER_STYLES, SPACING_DEFAULT_X } from '@/shared/constants/spacing';
import Link from 'next/link';
import { CtaSectionProps } from '@/components/ui/CtaSection/CtaSection.types';

export default function CtaSection({ title, cta, mainCta }: CtaSectionProps) {
  return (
    <Box component="section" py={6} px={SPACING_DEFAULT_X} sx={{ backgroundColor: 'tertiary.100' }}>
      <Box {...CONTAINER_STYLES}>
        <Typography
          component="h2"
          variant="h3"
          color="tertiary.800"
          fontWeight={500}
          textAlign="center"
          mb={5}
        >
          {title}
        </Typography>
        <Stack direction="row" gap={2} justifyContent="center">
          <Button
            size="large"
            variant="contained"
            color="secondary"
            component={Link}
            {...mainCta}
          />
          <Button size="large" variant="outlined" component={Link} {...cta} />
        </Stack>
      </Box>
    </Box>
  );
}
