'use client';

import { REGISTER_URL } from '@/shared/constants/common';
import HeroSectionBlock from '@/components/ui/HeroSectionBlock';

export default function HeroSection() {
  return (
    <HeroSectionBlock
      translationNamespace="financialForecasting"
      heroImageUrl="/images/hero-section.png"
      heroButtonUrl={REGISTER_URL}
    />
  );
}
