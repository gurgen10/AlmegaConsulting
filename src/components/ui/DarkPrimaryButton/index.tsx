import { Button, ButtonProps } from '@mui/material';

export default function DarkPrimaryButton({ sx = {}, ...props }: ButtonProps) {
  return (
    <Button
      {...props}
      color="primary"
      sx={{
        ...sx,
        backgroundColor: 'primary.400',
        '&:hover': {
          backgroundColor: 'primary.500',
        },
      }}
    />
  );
}
