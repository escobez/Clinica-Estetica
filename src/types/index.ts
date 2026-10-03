export type ServiceCategory = 'cabeleireiro' | 'manicure' | 'maquiagem' | 'depilacao';

export interface ServiceItem {
  id: string;
  name: string;
  category: ServiceCategory;
  categoryLabel: string;
  shortDesc: string;
  fullDesc: string;
  duration: string;
  frequency: string;
  benefits: string[];
  recommendedFor: string[];
  careNotes: string;
  priceNote?: string;
  badge?: string;
}

export interface BeforeAfterItem {
  id: string;
  title: string;
  category: ServiceCategory;
  categoryLabel: string;
  serviceName: string;
  description: string;
  timeframe: string;
  beforeLabel: string;
  afterLabel: string;
  beforeDetails: string[];
  afterDetails: string[];
  visualType: 'hair' | 'nails';
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  avatarText: string;
  service: string;
  category: ServiceCategory;
  stars: number;
  timeAsClient: string;
  quote: string;
  verified: boolean;
}

export interface BlogPost {
  id: string;
  title: string;
  summary: string;
  category: string;
  readTime: string;
  date: string;
  author: string;
  authorRole: string;
  content: string[];
  keyTips: string[];
  relatedServiceId: string;
}

export interface FAQItem {
  question: string;
  answer: string;
  category: string;
}
