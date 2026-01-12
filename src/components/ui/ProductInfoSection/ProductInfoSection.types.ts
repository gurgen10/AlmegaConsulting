export interface ProductInfoBlockProps {
  id?: string;
  title: string;
  description: string;
  cta: {
    text: string;
    href: string;
  };
  reverse?: boolean;
}

export interface ProductInfoSectionProps {
  blocks: ProductInfoBlockProps[];
}
