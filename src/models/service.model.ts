export type ServiceCategory = 'all' | 'web' | 'software' | 'ai' | 'growth';

export interface ServiceItem {
  id: string;
  title: string;
  category: Exclude<ServiceCategory, 'all'>;
  categoryTag: string;
  description: string;
  features: string[];
  ctaText: string;
  badgeColor: string;
  iconName: string;
}
