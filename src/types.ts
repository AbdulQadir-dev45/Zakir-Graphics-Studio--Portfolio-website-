export interface Project {
  id: string;
  title: string;
  category: 'Logo Design' | 'Flyers & Banners' | 'UI/UX Design' | 'Business Cards' | 'Social Media';
  description: string;
  imageUrl: string;
  tools: string[];
  year: string;
  tags: string[];
  behanceUrl?: string;
  likes: number;
  views: number;
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
  deliverables: string[];
  turnaround: string;
  accentColor: string;
}

export interface Testimonial {
  id: string;
  clientName: string;
  company: string;
  role: string;
  content: string;
  rating: number;
  avatarUrl: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  serviceType: string;
  subject: string;
  message: string;
}
