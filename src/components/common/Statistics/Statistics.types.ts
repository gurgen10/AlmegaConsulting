export interface StatisticsProps {
  color?: string;
  dividerColor?: string;
}
export interface StatisticsBlockProps extends StatisticsProps {
  text: string;
  num: number;
  formattingFn: (num: number) => string;
}
