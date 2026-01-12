import { useTranslations } from 'next-intl';
import Faq from '@/components/ui/Faq';

const faqs = [
  {
    question: 'How does AI shading analysis work?',
    answer:
      'Our AI shading analysis uses aerial imagery and sun-path modeling to automatically detect trees, nearby buildings, roof features, and shadows from other objects. It generates detailed shading maps and sun-exposure insights instantly.',
  },
  {
    question: 'Do I need to visit the property for shading analysis?',
    answer:
      'No, our AI technology automatically performs shading assessments in seconds. It saves you a lot of time and resources while providing accurate sun-path modeling and visual data for your proposals.',
  },
  {
    question: 'Can the shading analysis handle complex scenarios?',
    answer:
      'Absolutely. AI accounts for irregular roof shapes, multiple surfaces, and obstructions to provide reliable, high-performance panel layouts for any property.',
  },
  {
    question: 'How accurate are the shading maps and data?',
    answer:
      'Extremely accurate. Our AI combines high-resolution imagery with advanced AI technology developed from years of solar engineering experience.',
  },
  {
    question: 'How does AI-powered shading analysis improve my solar sales process?',
    answer:
      'By delivering quick, precise shading reports, it reduces homeowner uncertainty, optimizes system design, and helps you close deals faster.',
  },
];

export default function ShadingAnalysisFaq() {
  const t = useTranslations('homePage');

  return <Faq title={t('faq')} description={t('faqSubtitle')} faqs={faqs} />;
}
