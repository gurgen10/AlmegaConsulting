import { Box, Button, Typography } from '@mui/material';
import { LeadInfoBlockProps } from '@/components/ui/LeadInfoBlock/LeadInfoBlock.types';

const reverseStyles = { xs: 0, md: 1 };

export default function LeadInfoBlock({ title, description, cta, reverse }: LeadInfoBlockProps) {
  return (
    <Box display="grid" gridTemplateColumns={{ md: '1fr 1fr' }} columnGap={6} rowGap={3}>
      <Box order={reverse ? reverseStyles : {}}>
        <Box sx={{ aspectRatio: '78/55', background: '#D9D9D9' }} />
      </Box>
      <Box>
        <Typography maxWidth={540} variant="h4" component="h3" fontWeight={500}>
          {title}
        </Typography>
        <Typography variant="subtitle1" component="p" fontWeight={300} my={2}>
          {description}
        </Typography>
        <Button variant="contained" color="secondary" size="medium" component="a" href={cta.href}>
          {cta.text}
        </Button>
      </Box>
    </Box>
  );
}
