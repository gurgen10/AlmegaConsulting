import { Box } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import LearnMoreItem from './index';

export interface LearnMoreFeature {
  title: string;
  description: string;
  url: string;
  buttonText: string;
  image: string;
}

type LearnMoreGridRowProps = {
  items: LearnMoreFeature[];
  rowIndex: number;
  totalItems: number;
  translation: (key: string) => string;
};

export function LearnMoreGridRow({
  items,
  rowIndex,
  totalItems,
  translation,
}: LearnMoreGridRowProps) {
  const theme = useTheme();

  return (
    <Box
      sx={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        [theme.breakpoints.down('md')]: {
          gridTemplateColumns: '1fr',
        },
        position: 'relative',
        marginBottom: '1px',
        marginTop: rowIndex === 0 ? '1px' : 0,
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          width: '100%',
          height: rowIndex === 0 ? 0 : '1px',
          backgroundImage: 'linear-gradient(90deg, #FAFAFA 0%, #96B0B0 50.15%, #FAFAFA 100%)',
        },
      }}
    >
      {items.map((item, itemIndex) => (
        <LearnMoreItem
          key={itemIndex}
          item={item}
          index={itemIndex}
          totalItems={totalItems}
          translation={translation}
        />
      ))}
    </Box>
  );
}
