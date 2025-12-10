'use client';

import { BurgerIcon } from '@/components/ui/Burger/Burger.styles';
import { BurgerProps } from '@/components/ui/Burger/Burger.types';

export default function Burger({ open }: BurgerProps) {
  return (
    <BurgerIcon className={open ? 'active' : ''}>
      <span />
      <span />
      <span />
    </BurgerIcon>
  );
}
