export interface LeadInfoBlockProps {
  title: string;
  description: string;
  cta: {
    text: string;
    href: string;
  };
  reverse?: boolean;
}
