export interface FaqProps {
  title: string;
  description: string;
  faqs: {
    id?: string;
    question: string;
    answer: string;
  }[];
}
