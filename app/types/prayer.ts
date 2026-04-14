export type PrayerCategoryId =
  | 'daily'
  | 'rosary'
  | 'mercy'
  | 'devotions'
  | 'saints';

export type Prayer = {
  id: string;
  slug: string;
  title: string;
  category: PrayerCategoryId;
  duration: string;
  excerpt: string;
  content: string;
  tags: string[];
};

export type PrayerCategory = {
  id: PrayerCategoryId;
  title: string;
  subtitle: string;
  icon: string;
  tint: string;
  surface: string;
  prayerIds: string[];
};
