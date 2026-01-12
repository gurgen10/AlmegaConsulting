import { ReactNode } from 'react';
import { ButtonProps } from '@mui/material';

export interface GuideBlockProps {
  title: string;
  children?: ReactNode;
  content?: string;
  cta: ButtonProps;
  backgroundColor?: string;
  color?: string;
  boxShadow?: string;
  img: {
    src: string;
  };
}
