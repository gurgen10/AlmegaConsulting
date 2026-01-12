'use client';

import { Box, Typography } from '@mui/material';

import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { GuideBlock } from '@/components/ui/GuideBlock';

export default function SeeWhatYourProposalWillLookLike() {
  const t = useTranslations('homePage');

  const points = [
    t('seeWhatYourProposalWillLookLikePoint1'),
    t('seeWhatYourProposalWillLookLikePoint2'),
    t('seeWhatYourProposalWillLookLikePoint3'),
    t('seeWhatYourProposalWillLookLikePoint4'),
  ];

  return (
    <GuideBlock
      title={t('seeWhatYourProposalWillLookLike')}
      cta={{
        children: t('downloadSampleProposal'),
        startIcon: (
          <Image
            src="/images/see-what-your-proposal-will-look-like/download.svg"
            alt="download"
            width={24}
            height={24}
          />
        ),
      }}
      content={t('seeWhatYourProposalWillLookLikeDescription')}
      img={{ src: '/images/lead-product-guide/img.png' }}
      boxShadow="0 0 38px 0 rgba(0, 0, 0, 0.25)"
    >
      <Box component="ul" sx={{ mb: 0 }}>
        {points.map(point => (
          <Box
            component="li"
            key={point}
            sx={{
              '&::marker': {
                color: 'primary.dark',
                marginLeft: '-20px',
              },
              marginLeft: '-10px',
            }}
          >
            <Typography variant="subtitle2" sx={{ fontWeight: 500, color: 'primary.dark' }}>
              {point}
            </Typography>
          </Box>
        ))}
      </Box>
    </GuideBlock>
  );
}
