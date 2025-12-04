import { Box, Card, Typography } from '@mui/material';
import Image from 'next/image';

const Review = ({
  name,
  position,
  review,
  image,
}: {
  name: string;
  position: string;
  review: string;
  image: string;
}) => {
  return (
    <Card>
      <Box>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: 2,
            pt: 3,
            px: 4,
          }}
        >
          <Box>
            {Array.from({ length: 5 }).map((_, index) => (
              <Image
                key={index}
                src="/images/Testimonials/star.svg"
                alt="star"
                width={18}
                height={18}
              />
            ))}
          </Box>
          <Box>
            <Image
              src="/images/Testimonials/blockquote.svg"
              alt="blockquote"
              width={20}
              height={18}
            />
          </Box>
        </Box>
        <Box>
          <Typography variant="subtitle2" sx={{ py: 2, color: 'grey.800', fontWeight: 300, px: 4 }}>
            {review}
          </Typography>
        </Box>
        <Box
          sx={theme => ({
            borderTop: `1px solid ${theme.palette.tertiary.main}`,
            py: 2,
            px: 4,
            display: 'flex',
            alignItems: 'center',
            gap: 2,
          })}
        >
          <Box sx={{ width: '48px', height: '48px', borderRadius: '50%', overflow: 'hidden' }}>
            {/*<Image src={image} alt={image.split('/').pop() ?? ''} width={48} height={48} />*/}
            <Box sx={{ width: '48px', height: '48px', backgroundColor: 'primary.main' }}></Box>
          </Box>
          <Box>
            <Typography variant="subtitle1" color="grey.800" fontWeight={700}>
              {name}
            </Typography>
            <Typography variant="subtitle2" color="grey.600" fontWeight={300}>
              {position}
            </Typography>
          </Box>
        </Box>
      </Box>
    </Card>
  );
};

export default Review;
