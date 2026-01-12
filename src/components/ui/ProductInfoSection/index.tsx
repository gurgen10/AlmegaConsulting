import {
  CONTAINER_STYLES,
  SPACING_DEFAULT_X,
  SPACING_DEFAULT_Y,
  TEXT_COLOR,
} from '@/shared/constants/spacing';
import { Box } from '@mui/material';
import GradientDivider from '@/components/ui/GradientDivider';
import { Fragment } from 'react';
import { ProductInfoSectionProps } from '@/components/ui/ProductInfoSection/ProductInfoSection.types';
import ProductInfoBlock from '@/components/ui/ProductInfoSection/components/ProductInfoBlock';

export default function ProductInfoSection({ blocks }: ProductInfoSectionProps) {
  return (
    <Box
      component="section"
      py={SPACING_DEFAULT_Y}
      px={SPACING_DEFAULT_X}
      sx={{ backgroundColor: 'grey.50' }}
    >
      <Box sx={CONTAINER_STYLES} color={TEXT_COLOR} display="grid" gap={{ xs: 5, md: 7 }}>
        {blocks.map((block, index) => (
          <Fragment key={block.id}>
            {index ? <GradientDivider /> : null}
            <ProductInfoBlock {...block} reverse={!(index % 2)} />
          </Fragment>
        ))}
      </Box>
    </Box>
  );
}
