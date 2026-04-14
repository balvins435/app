import { prayerCategories } from '@/app/data/prayers';

export type LegacyPrayer = {
  id: string;
  title: string;
  content: string;
  category: string;
  duration: string;
  excerpt: string;
  tags: string[];
};

type LibrarySection = {
  id: string;
  title: string;
  subtitle: string;
  prayers: LegacyPrayer[];
};

const featuredPrayerIds = [
  'morning-offering',
  'how-to-pray-the-rosary',
  'divine-mercy-chaplet',
];

const prayers: LegacyPrayer[] = prayerCategories.flatMap((category) =>
  category.items.flatMap((item) =>
    item.prayers.map((prayer) => ({
      id: prayer.id,
      title: prayer.title,
      content: prayer.content,
      category: item.id,
      duration: estimateDuration(prayer.content),
      excerpt: buildExcerpt(prayer.content),
      tags: [category.title, item.title],
    })),
  ),
);

export function getPrayerById(id: string): LegacyPrayer | undefined {
  return prayers.find((prayer) => prayer.id === id);
}

export function getFeaturedPrayers(): LegacyPrayer[] {
  return featuredPrayerIds
    .map((id) => getPrayerById(id))
    .filter((prayer): prayer is LegacyPrayer => Boolean(prayer));
}

export function getPrayersByCategory(categoryId: string): LegacyPrayer[] {
  return prayers.filter((prayer) => prayer.category === categoryId);
}

export function getLibrarySections(): LibrarySection[] {
  return prayerCategories.map((category) => ({
    id: category.id,
    title: category.title,
    subtitle: category.description,
    prayers: category.items.flatMap((item) => getPrayersByCategory(item.id)),
  }));
}

function buildExcerpt(content: string): string {
  const normalized = content.replace(/\s+/g, ' ').trim();
  return normalized.length > 110 ? `${normalized.slice(0, 107)}...` : normalized;
}

function estimateDuration(content: string): string {
  const wordCount = content.trim().split(/\s+/).length;
  const minutes = Math.max(1, Math.ceil(wordCount / 130));
  return `${minutes} min`;
}
