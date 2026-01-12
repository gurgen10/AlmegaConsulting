import { ReactNode } from 'react';

export interface InfoGridItemProps {
  title: string;
  text: string;
  icon: ReactNode;
}

export interface InfoGridProps {
  titleMaxWidth?: number;
  title: string;
  points: InfoGridItemProps[];
}
