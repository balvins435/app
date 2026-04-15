import { Ionicons } from '@expo/vector-icons';
import { StyleSheet, Text, View } from 'react-native';

import { getSeasonLabel } from '@/app/data/prayers';
import { LiturgicalSeason } from '@/app/types/prayer';
import { AppTheme } from '@/constants/app-theme';

type SeasonBannerProps = {
  season: LiturgicalSeason;
  title: string;
  subtitle: string;
};

export default function SeasonBanner({ season, title, subtitle }: SeasonBannerProps) {
  return (
    <View style={styles.card}>
      <View style={styles.badge}>
        <Ionicons color={AppTheme.colors.accentStrong} name="sparkles-outline" size={16} />
        <Text style={styles.badgeText}>{getSeasonLabel(season)}</Text>
      </View>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.subtitle}>{subtitle}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: AppTheme.colors.cardMuted,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: AppTheme.colors.border,
    padding: AppTheme.spacing.lg,
    marginHorizontal: AppTheme.spacing.lg,
    marginBottom: AppTheme.spacing.xl,
  },
  badge: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'flex-start',
    gap: 6,
    backgroundColor: AppTheme.colors.background,
    borderRadius: AppTheme.radius.pill,
    paddingHorizontal: 12,
    paddingVertical: 8,
    marginBottom: AppTheme.spacing.md,
  },
  badgeText: {
    color: AppTheme.colors.accentStrong,
    fontSize: 12,
    fontWeight: '700',
    letterSpacing: 0.6,
    textTransform: 'uppercase',
  },
  title: {
    color: AppTheme.colors.text,
    fontSize: 28,
    lineHeight: 34,
    fontFamily: AppTheme.fonts.heading,
    marginBottom: 8,
  },
  subtitle: {
    color: AppTheme.colors.textMuted,
    fontSize: 15,
    lineHeight: 22,
  },
});
