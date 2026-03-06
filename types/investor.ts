export interface SEOData {
  title: string;
  description: string;
  keywords?: string[];
}

export interface ReportItem {
  title: string;
  url: string;
  type: 'pdf' | 'audio' | 'video';
  date?: string;
}

export interface TableRow {
  [key: string]: string;
}

export interface TableData {
  title: string;
  headers: string[];
  rows: TableRow[];
}

export interface ContactInfo {
  title: string;
  name?: string;
  address?: string;
  telephone?: string;
  email?: string;
  website?: string;
  contactPerson?: string;
  sebiRegistration?: string;
  cin?: string;
  details?: string;
}

export interface SubCategory {
  id: string;
  title: string;
  reports?: ReportItem[];
  subCategories?: SubCategory[];
}

export interface InvestorCategory {
  id: string;
  title: string;
  reports?: ReportItem[];
  tables?: TableData[];
  contacts?: ContactInfo[];
  subCategories?: SubCategory[];
}

export interface InvestorPageContent {
  seo: SEOData;
  hero: {
    title: string;
    subtitle: string;
    backgroundImage?: string;
  };
  categories: InvestorCategory[];
}
