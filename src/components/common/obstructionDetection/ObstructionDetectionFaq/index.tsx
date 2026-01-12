import { useTranslations } from 'next-intl';
import Faq from '@/components/ui/Faq';

const faqs = [
  {
    question: 'How does AI-powered obstruction detection work for solar panel proposals?',
    answer:
      'Our AI-powered obstruction detection scans the roof’s layout and identifies potential obstructions such as chimneys, vents, skylights, and fire setbacks. It then generates a detailed map that shows where solar panels can be placed without interference, ensuring your proposal is accurate and efficient.',
  },
  {
    question: 'What types of obstructions can the AI detect on the roof?',
    answer:
      'The AI can detect a wide range of rooftop obstructions, including fire setbacks, chimneys, vents, skylights, air conditioning units, and roof slopes. By identifying these obstructions, it helps create an optimal solar panel placement plan that maximizes space and efficiency.',
  },
  {
    question: 'How accurate is the AI when identifying roof obstructions?',
    answer:
      "The AI is very accurate and precise. It leverages advanced algorithms to analyze the roof's structure and detect obstructions with great precision. This ensures that your solar proposals are based on real, accurate data, which reduces the risk of errors and optimizing panel placement.",
  },
  {
    question: 'How does the obstruction detection feature help sales reps save time?',
    answer:
      'By automatically identifying and mapping roof obstructions, the AI eliminates the need for manual assessment and guesswork. Sales reps can generate proposals much faster, freeing up time to focus on closing deals and engaging with clients instead of spending hours on roof analysis.',
  },
  {
    question: 'Can the AI handle roofs with complex layouts?',
    answer:
      'Yes, the AI is designed to handle roofs with complex shapes and multiple obstructions. Whether the roof has irregular slopes, multiple structures, or tight spaces, the tool analyzes the entire layout and provides a customized plan for optimal solar panel placement, ensuring accurate and effective proposals.',
  },
];

export default function FinancialForeCastFaq() {
  const t = useTranslations('homePage');

  return <Faq title={t('faq')} description={t('faqSubtitle')} faqs={faqs} />;
}
