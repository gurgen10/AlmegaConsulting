import { useTranslations } from 'next-intl';
import Faq from '@/components/ui/Faq';

const faqs = [
  {
    question: 'How does your solar sales software help sales teams?',
    answer:
      'It takes care of the heavy lifting in your sales process, from roof analysis and system design to instant quoting and proposal generation. Reps can create accurate, sales-ready proposals in minutes instead of hours, respond to leads faster, and spend more time actually selling instead of doing manual admin work.',
  },
  {
    question: 'Do I need technical solar design experience to use this tool?',
    answer:
      'No. The platform is built so non-technical sales reps can use it confidently. AI handles measurements, layout, and calculations in the background, while you follow a guided workflow to adjust options and finalize the proposal.',
  },
  {
    question: 'Can I customize proposal templates with my branding and pricing?',
    answer:
      'Yes. You can add your logo, colors, and branding, set your own pricing, incentives, and financing options, and save them as templates. Every proposal your team sends will look consistent and fully aligned with your brand.',
  },
  {
    question: 'Does the system calculate savings, payback period, and financial forecasts?',
    answer:
      'Yes. Based on location, usage, system size, and pricing, the software estimates energy production, bill savings, payback period, and long-term ROI. These numbers are automatically added to the proposal in a way homeowners can easily understand.',
  },
  {
    question: 'Can multiple team members collaborate on proposals?',
    answer:
      'Yes. Different team members can access shared projects, update designs, adjust pricing, and track proposal status. This keeps sales, design, and management aligned and removes version-control headaches.',
  },
  {
    question: 'Does the software store all my designs and quotes in one place?',
    answer:
      'Yes. Every design, quote, and final proposal is saved in a central dashboard. You can quickly search past projects, duplicate successful proposals, and track where each deal is in your pipeline.',
  },
];

export default function HomepageFaq() {
  const t = useTranslations('homePage');

  return <Faq title={t('faq')} description={t('faqSubtitle')} faqs={faqs} />;
}
