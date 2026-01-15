'use client';

import { Box, Typography } from '@mui/material';
import { CONTAINER_STYLES, INVERT_TEXT_COLOR, SPACING_DEFAULT_X } from '@/shared/constants/spacing';
import { useTranslations } from 'next-intl';
import StatisticsBlock from '@/components/common/Statistics/StatisticsBlock';
import {
  formatNumber,
  formatPercentage,
  formatX,
} from '@/components/common/Statistics/Statistics.utils';
import { StatisticsProps } from '@/components/common/Statistics/Statistics.types';

export default function Statistics(props: StatisticsProps) {
  const t = useTranslations('quotingSystemPage.summarySection');

  return (
    <Box
      component="section"
      py={6}
      px={SPACING_DEFAULT_X}
      sx={{
        backgroundColor: 'tertiary.800',
        position: 'relative',
        zIndex: 1,
        boxShadow: '0 0 38px 0 rgba(0, 0, 0, 0.25)',
      }}
    >
      <Box
        sx={CONTAINER_STYLES}
        color={INVERT_TEXT_COLOR}
        display="grid"
        gridTemplateColumns={{
          xs: '1fr',
          md: '1fr minmax(430px, 1fr)',
          lg: '1fr minmax(510px, 1fr)',
          xl: '1fr 682px',
        }}
        alignItems={{ md: 'center', xl: 'start' }}
        gap={5}
      >
        <Typography variant="h3" component="h2" fontWeight={500}>
          {t('title')}
        </Typography>
        <Box display="grid" gridTemplateColumns="repeat(2, auto)" gap={4}>
          <StatisticsBlock
            {...props}
            color="secondary.400"
            dividerColor="secondary.300"
            text={t('proposalsGenerated')}
            num={42000}
            formattingFn={formatNumber}
          />
          <StatisticsBlock
            {...props}
            color="secondary.400"
            dividerColor="secondary.300"
            text={t('quotesSent')}
            num={10000}
            formattingFn={formatNumber}
          />
          <StatisticsBlock
            {...props}
            color="secondary.400"
            dividerColor="secondary.300"
            text={t('increaseProductivity')}
            num={25}
            formattingFn={formatPercentage}
          />
          <StatisticsBlock
            {...props}
            color="secondary.400"
            dividerColor="secondary.300"
            text={t('ledToProposalConversion')}
            num={3}
            formattingFn={formatX}
          />
        </Box>
      </Box>
    </Box>
  );
}
