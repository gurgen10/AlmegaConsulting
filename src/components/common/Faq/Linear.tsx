import { Box } from '@mui/material';

export default function Linear({ color = 'grey.900' }: { color?: string }) {
  return (
    <Box color={color}>
      <svg
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M25.3327 12L15.9993 20L6.66602 12"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </Box>
  );
}
