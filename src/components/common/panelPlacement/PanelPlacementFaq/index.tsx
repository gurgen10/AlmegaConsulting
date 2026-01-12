import { useTranslations } from 'next-intl';
import Faq from '@/components/ui/Faq';

const faqs = [
  {
    question: 'How does AI panel placement work?',
    answer:
      'Our AI analyzes roof shapes, sun exposure, and shading to automatically find the best spots for each panel. It generates precise layouts instantly, saving time and ensuring high system efficiency.',
  },
  {
    question: 'Do I need to visit the property for panel placement?',
    answer:
      'No. AI handles the layout remotely, removing manual work and site visits while providing accurate, energy-efficient designs.',
  },
  {
    question: 'Can it handle complex roofs or shading situations?',
    answer:
      'Absolutely. AI accounts for irregular roof shapes, multiple surfaces, and obstructions to provide reliable, high-performance panel layouts for any property.',
  },
  {
    question: 'How accurate are the panel placement recommendations?',
    answer:
      'Extremely accurate. High-resolution imagery and advanced algorithms, built from years of solar engineering experience, ensure precise, data-driven placement.',
  },
  {
    question: 'How does AI-optimized panel placement improve my sales process?',
    answer:
      'By producing fast, accurate layouts, it reduces redesigns, builds homeowner confidence, and speeds up proposal approvals—helping you close more deals.',
  },
];

export default function PanelPlacementFaq() {
  const t = useTranslations('homePage');

  return <Faq title={t('faq')} description={t('faqSubtitle')} faqs={faqs} />;
}
