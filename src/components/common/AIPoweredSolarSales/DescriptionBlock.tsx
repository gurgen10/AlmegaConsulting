import { Box, Button, Typography } from '@mui/material';
import { useTranslations } from 'next-intl';
import Image from 'next/image';

interface DescriptionBlockProps {
  title: string;
  points: string[];
  url: string;
}
export default function DescriptionBlock({ title, points, url }: DescriptionBlockProps) {
  const t = useTranslations('heroSection');
  return (
    <Box>
      <Typography variant="h5" sx={{ fontWeight: 700, color: 'grey.900' }}>
        {t(title)}
      </Typography>
      <Box component="ul">
        {points.map((point, index) => (
          <Typography variant="subtitle1" fontWeight={300} component="li" key={index}>
            {t(point)}
          </Typography>
        ))}
      </Box>
      <Box>
        <Button
          href={url}
          component="a"
          variant="text"
          color="primary"
          sx={{ display: 'inline-flex', alignItems: 'center', gap: 1.5 }}
        >
          {t('learnMore')}
          <Image
            src="/images/aI-powered-solar-sales/arrow-right.svg"
            alt="arrow-right"
            width={10}
            height={10}
          />
        </Button>
      </Box>
    </Box>
  );
}
