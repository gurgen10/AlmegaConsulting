import { useTranslations } from 'next-intl';
import Faq from '@/components/ui/Faq';

const faqs = [
  {
    question: 'How does intelligent financial forecasting work?',
    answer:
      'Our AI analyzes system design, homeowner energy usage, and local utility rates to automatically generate accurate savings estimates, ROI, and payback periods. This provides clear, data-backed financial insights within seconds.',
  },
  {
    question: 'Are savings estimates customized for each location?',
    answer:
      'Yes. Our system uses local electricity rates, tariffs, and regional cost data to generate location-specific savings projections that accurately reflect real-world conditions.',
  },
  {
    question: 'How are ROI and payback periods calculated?',
    answer:
      'ROI and payback are calculated based on homeowner energy consumption, system performance, and total installation costs. Our AI considers usage patterns and production estimates for accurate results.',
  },
  {
    question: 'Do I need to manually update rates or incentive programs?',
    answer:
      'No. Our platform stays up to date with changing energy rates and incentive programs, eliminating manual research and reducing errors.',
  },
  {
    question: 'How does intelligent financial forecasting improve my sales process?',
    answer:
      'It generates precise financial projections in seconds, keeps prospects, builds trust through transparency, and reduces sales cycles, helping you close more deals confidently.',
  },
];

export default function FinancialForeCastFaq() {
  const t = useTranslations('homePage');

  return <Faq title={t('faq')} description={t('faqSubtitle')} faqs={faqs} />;
}
