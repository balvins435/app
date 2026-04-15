import { Ionicons } from '@expo/vector-icons';
import { Pressable, StyleSheet, Text, View } from 'react-native';

import { PrayerSubcategory } from '@/app/types/prayer';
import { AppTheme } from '@/constants/app-theme';

type CollectionListItemProps = {
  item: PrayerSubcategory;
  onPress: (item: PrayerSubcategory) => void;
};

export default function CollectionListItem({ item, onPress }: CollectionListItemProps) {
  return (
    <Pressable accessibilityRole="button" onPress={handlePress} style={styles.card}>
      <View style={styles.leading}>
        <View style={styles.iconWrap}>
          <Ionicons color={AppTheme.colors.accentStrong} name={item.icon as never} size={18} />
        </View>
        <View style={styles.copy}>
          <Text style={styles.title}>{item.title}</Text>
          <Text numberOfLines={2} style={styles.subtitle}>
            {item.description}
          </Text>
          <Text style={styles.meta}>{item.prayers.length} prayers</Text>
        </View>
      </View>
      <Ionicons color={AppTheme.colors.textMuted} name="chevron-forward" size={18} />
    </Pressable>
  );

  function handlePress() {
    onPress(item);
  }
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: AppTheme.colors.card,
    borderRadius: 18,
    borderWidth: 1,
    borderColor: AppTheme.colors.border,
    padding: AppTheme.spacing.md,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: AppTheme.spacing.md,
  },
  leading: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 14,
  },
  iconWrap: {
    width: 44,
    height: 44,
    borderRadius: 14,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: AppTheme.colors.backgroundAlt,
  },
  copy: {
    flex: 1,
  },
  title: {
    color: AppTheme.colors.text,
    fontSize: 16,
    fontWeight: '700',
    marginBottom: 4,
  },
  subtitle: {
    color: AppTheme.colors.textMuted,
    fontSize: 13,
    lineHeight: 18,
  },
  meta: {
    marginTop: 8,
    color: AppTheme.colors.accentStrong,
    fontSize: 12,
    fontWeight: '700',
    textTransform: 'uppercase',
  },
});
