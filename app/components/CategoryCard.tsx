import { MaterialCommunityIcons } from '@expo/vector-icons';
import { StyleSheet, Text, View } from 'react-native';

import { PrayerCategory } from '@/app/types/prayer';
import { AppTheme } from '@/constants/app-theme';

type CategoryCardProps = {
  item: PrayerCategory;
  prayerCount: number;
};

export default function CategoryCard({ item, prayerCount }: CategoryCardProps) {
  return (
    <View style={[styles.card, { backgroundColor: item.surface }]}>
      <View style={[styles.iconBadge, { backgroundColor: item.tint }]}>
        <MaterialCommunityIcons color={AppTheme.colors.background} name={item.icon as never} size={22} />
      </View>
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.subtitle}>{item.subtitle}</Text>
      <Text style={styles.count}>{prayerCount} prayers available offline</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    width: 220,
    borderRadius: AppTheme.radius.lg,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.08)',
    padding: AppTheme.spacing.md,
    marginRight: AppTheme.spacing.md,
    gap: AppTheme.spacing.sm,
    ...AppTheme.shadows.card,
  },
  iconBadge: {
    width: 44,
    height: 44,
    borderRadius: AppTheme.radius.pill,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    color: AppTheme.colors.white,
    fontSize: 18,
    fontWeight: '700',
  },
  subtitle: {
    color: '#E7D9CB',
    fontSize: 13,
    lineHeight: 18,
    minHeight: 54,
  },
  count: {
    color: 'rgba(255,255,255,0.72)',
    fontSize: 12,
    fontWeight: '600',
    marginTop: 'auto',
  },
});
