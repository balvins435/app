import { ImageSourcePropType } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

export type Prayer = {
  id: string;
  title: string;
  content: string;
};

export type PrayerSubcategory = {
  id: string;
  title: string;
  description: string;
  image: ImageSourcePropType;
  icon: string;
  prayers: Prayer[];
};

export type PrayerCategory = {
  id: string;
  title: string;
  description: string;
  items: PrayerSubcategory[];
};

export type RootStackParamList = {
  Home: undefined;
  Category: { categoryId: string };
  PrayerList: { categoryId: string; subcategoryId: string };
  PrayerDetail: { categoryId: string; subcategoryId: string; prayerId: string };
};

export type HomeScreenProps = NativeStackScreenProps<RootStackParamList, 'Home'>;
export type CategoryScreenProps = NativeStackScreenProps<RootStackParamList, 'Category'>;
export type PrayerListScreenProps = NativeStackScreenProps<RootStackParamList, 'PrayerList'>;
export type PrayerDetailScreenProps = NativeStackScreenProps<RootStackParamList, 'PrayerDetail'>;
