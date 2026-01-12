import { ReactNode } from 'react';
import { BoxProps } from '@mui/system';
import { ButtonProps } from '@mui/material';

export interface GuideBlockProps {
  title: string;
  children?: ReactNode;
  content?: string;
  cta: ButtonProps;
  img: {
    src: string;
    width?: BoxProps['width'];
  };
}
