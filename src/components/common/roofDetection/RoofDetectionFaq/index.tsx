import { useTranslations } from 'next-intl';
import Faq from '@/components/ui/Faq';

const faqs = [
  {
    question: 'How does AI roof detection work?',
    answer:
      'Our AI roof detection uses satellite images to automatically identify roof shapes, dimensions, pitch, orientation, and obstructions. It generates precise roof models instantly, removing the need for manual measurements.',
  },
  {
    question: 'Do I need to visit the home for measurements?',
    answer:
      "No, you don't need to visit the property. The AI-powered roof detection calculates exact dimensions and layouts remotely. It saves a lot of time and resources while creating accurate proposals.",
  },
  {
    question: 'Can the roof detection feature handle complex roof shapes?',
    answer:
      'Absolutely. Our technology identifies irregular shapes, dormers, overhangs, and multi-surface roofs to provide reliable system designs.',
  },
  {
    question: 'How accurate are the roof dimensions and pitch calculations?',
    answer:
      'Extremely accurate. The AI uses high-resolution imagery and advanced algorithms that we have developed using years of experience of our solar engineers.',
  },
  {
    question: 'How does AI-powered roof detection improve my solar sales process?',
    answer:
      'By producing quick, precise proposals, you avoid back-and-forth with engineering, boost homeowner confidence, and accelerate the deal pipeline.',
  },
];

export default function RoofDetectionFaq() {
  const t = useTranslations('homePage');

  return <Faq title={t('faq')} description={t('faqSubtitle')} faqs={faqs} />;
}
