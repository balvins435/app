import { PrayerCategory } from '@/app/types/prayer';

export const categories: PrayerCategory[] = [
  {
    id: 'daily',
    title: 'Daily Prayers',
    subtitle: 'Begin and end the day rooted in Christ.',
    icon: 'weather-sunset-up',
    tint: '#E8B167',
    surface: '#3A2414',
    prayerIds: ['morning-offering', 'angelus', 'act-of-contrition'],
  },
  {
    id: 'rosary',
    title: 'Rosary',
    subtitle: 'Meditative prayers centered on the life of Jesus and Mary.',
    icon: 'beads',
    tint: '#8FC7C2',
    surface: '#153A3A',
    prayerIds: ['holy-rosary-opening'],
  },
  {
    id: 'mercy',
    title: 'Divine Mercy',
    subtitle: 'Prayers for trust, healing, and intercession.',
    icon: 'heart-pulse',
    tint: '#F19184',
    surface: '#47221E',
    prayerIds: ['divine-mercy-chaplet', 'act-of-contrition'],
  },
  {
    id: 'devotions',
    title: 'Devotions',
    subtitle: 'Litanies and spiritual practices for deeper formation.',
    icon: 'candlestick',
    tint: '#C7B3F3',
    surface: '#31204A',
    prayerIds: ['litany-of-humility'],
  },
  {
    id: 'saints',
    title: 'Saints & Angels',
    subtitle: 'Companions in prayer for courage and protection.',
    icon: 'shield-cross',
    tint: '#A7D48F',
    surface: '#20361C',
    prayerIds: ['st-michael-prayer', 'guardian-angel'],
  },
];
