import { Box, Button, Typography } from '@mui/material';
import Image from 'next/image';

interface DescriptionBlockProps {
  title: string;
  subtitle?: string;
  points?: string[];
  url?: string;
  buttonText: string;
}
export default function DescriptionBlock({
  title,
  subtitle,
  points,
  url,
  buttonText,
}: DescriptionBlockProps) {
  return (
    <Box>
      <Typography
        component="h3"
        variant="h5"
        sx={{ fontWeight: 700, color: 'grey.900', marginBottom: 2 }}
      >
        {title}
      </Typography>
      {subtitle && (
        <Typography
          component="p"
          variant="subtitle1"
          sx={{ fontWeight: 300, color: 'grey.900', marginBottom: 2 }}
        >
          {subtitle}
        </Typography>
      )}
      {points && (
        <Box component="ul">
          {points.map((point, index) => (
            <Typography variant="subtitle1" fontWeight={300} component="li" key={index}>
              {point}
            </Typography>
          ))}
        </Box>
      )}
      <Box>
        <Button
          href={url}
          component="a"
          variant="text"
          color="primary"
          sx={{ display: 'inline-flex', alignItems: 'center', gap: 1.5 }}
        >
          {buttonText}
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
