import { ImageSourcePropType } from 'react-native';
import { CompositeScreenProps, NavigatorScreenParams } from '@react-navigation/native';
import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

export type LiturgicalSeason =
  | 'advent'
  | 'christmas'
  | 'lent'
  | 'holy_week'
  | 'easter'
  | 'ordinary_time';

export type PrayerReadingConfig = {
  allowTeleprompter: boolean;
  defaultFontScale: number;
  minFontScale: number;
  maxFontScale: number;
};

export type Prayer = {
  id: string;
  title: string;
  subtitle: string;
  excerpt: string;
  content: string;
  tags: string[];
  season: LiturgicalSeason;
  estimatedDuration: string;
  isFeatured?: boolean;
  defaultFavorite?: boolean;
  searchTerms: string[];
  reading: PrayerReadingConfig;
};

export type PrayerSubcategory = {
  id: string;
  title: string;
  description: string;
  image: ImageSourcePropType;
  icon: string;
  season: LiturgicalSeason;
  featuredLabel: string;
  prayers: Prayer[];
};

export type PrayerCategory = {
  id: string;
  title: string;
  description: string;
  icon: string;
  season?: LiturgicalSeason;
  items: PrayerSubcategory[];
};

export type PrayerRoute = {
  categoryId: string;
  subcategoryId: string;
  prayerId: string;
};

export type PrayerRecord = {
  category: PrayerCategory;
  subcategory: PrayerSubcategory;
  prayer: Prayer;
  route: PrayerRoute;
};

export type DailyReading = {
  title: string;
  reference: string;
  summary: string;
};

export type TodayExperience = {
  title: string;
  subtitle: string;
  verse: string;
  reference: string;
  dailyReading: DailyReading;
  dailyThought: string;
  season: LiturgicalSeason;
  featuredPrayerRoute: PrayerRoute;
  seasonalCategoryId: string;
};

export type RootTabParamList = {
  Home: undefined;
  Library: undefined;
  Today: undefined;
  Favorites: undefined;
  Settings: undefined;
};

export type RootStackParamList = {
  MainTabs: NavigatorScreenParams<RootTabParamList>;
  Category: { categoryId: string };
  PrayerList: { categoryId: string; subcategoryId: string };
  PrayerDetail: PrayerRoute;
};

export type HomeScreenProps = CompositeScreenProps<
  BottomTabScreenProps<RootTabParamList, 'Home'>,
  NativeStackScreenProps<RootStackParamList>
>;

export type LibraryScreenProps = CompositeScreenProps<
  BottomTabScreenProps<RootTabParamList, 'Library'>,
  NativeStackScreenProps<RootStackParamList>
>;

export type TodayScreenProps = CompositeScreenProps<
  BottomTabScreenProps<RootTabParamList, 'Today'>,
  NativeStackScreenProps<RootStackParamList>
>;

export type FavoritesScreenProps = CompositeScreenProps<
  BottomTabScreenProps<RootTabParamList, 'Favorites'>,
  NativeStackScreenProps<RootStackParamList>
>;

export type SettingsScreenProps = BottomTabScreenProps<RootTabParamList, 'Settings'>;
export type CategoryScreenProps = NativeStackScreenProps<RootStackParamList, 'Category'>;
export type PrayerListScreenProps = NativeStackScreenProps<RootStackParamList, 'PrayerList'>;
export type PrayerDetailScreenProps = NativeStackScreenProps<RootStackParamList, 'PrayerDetail'>;
