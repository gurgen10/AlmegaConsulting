'use client';

import { Box, Typography } from '@mui/material';
import CountUp from 'react-countup';
import { StatisticsBlockProps } from '@/components/common/Statistics/Statistics.types';

export default function StatisticsBlock({
  text,
  num,
  formattingFn,
  color = 'secondary.400',
  dividerColor = 'secondary.300',
}: StatisticsBlockProps) {
  return (
    <Box>
      <Box sx={{ height: '1px', width: '32px', backgroundColor: dividerColor }} />
      <Typography lineHeight="58px" variant="h4" fontWeight={700} component="div" color={color}>
        <CountUp end={num} scrollSpyOnce formattingFn={formattingFn} />
      </Typography>
      <Typography variant="subtitle2" component="div" fontWeight={300} maxWidth={239}>
        {text}
      </Typography>
    </Box>
  );
}
