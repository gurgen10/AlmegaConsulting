const numberFormatter = new Intl.NumberFormat('en-US');

export const formatNumber = (number: number) => numberFormatter.format(number);
export const formatPercentage = (percentage: number) => `${percentage}%`;
export const formatX = (number: number) => `${number}x`;
