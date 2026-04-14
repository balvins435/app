import { categories } from '@/app/data/categories';
import { featuredPrayerIds, prayers } from '@/app/data/prayers';

export function getPrayerById(id: string) {
  return prayers.find((prayer) => prayer.id === id);
}

export function getFeaturedPrayers() {
  return featuredPrayerIds
    .map((id) => getPrayerById(id))
    .filter((prayer): prayer is NonNullable<typeof prayer> => Boolean(prayer));
}

export function getPrayersByCategory(categoryId: string) {
  return prayers.filter((prayer) => prayer.category === categoryId);
}

export function getLibrarySections() {
  return categories.map((category) => ({
    ...category,
    prayers: getPrayersByCategory(category.id),
  }));
}
