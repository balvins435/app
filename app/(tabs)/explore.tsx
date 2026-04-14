import { StyleSheet, Text, View } from 'react-native';

import AppScreen from '@/app/components/AppScreen';
import PrayerCard from '@/app/components/PrayerCard';
import SectionHeader from '@/app/components/SectionHeader';
import { getLibrarySections } from '@/app/lib/prayers';
import { AppTheme } from '@/constants/app-theme';

const librarySections = getLibrarySections();

export default function LibraryScreen() {
  return (
    <AppScreen>
      <View style={styles.header}>
        <Text style={styles.eyebrow}>Library</Text>
        <Text style={styles.title}>Browse the offline prayer collection</Text>
        <Text style={styles.subtitle}>
          The content is local-first, grouped by devotion type, and ready for future additions like favorites, recents, and multilingual prayer packs.
        </Text>
      </View>

      <View style={styles.summaryCard}>
        <Text style={styles.summaryValue}>
          {librarySections.reduce((count, section) => count + section.prayers.length, 0)}
        </Text>
        <Text style={styles.summaryLabel}>prayers available without internet</Text>
      </View>

      <View style={styles.sectionStack}>
        {librarySections.map((section) => (
          <View key={section.id} style={styles.section}>
            <SectionHeader title={section.title} subtitle={section.subtitle} />
            <View style={styles.prayerGrid}>
              {section.prayers.map((prayer) => (
                <PrayerCard key={prayer.id} prayer={prayer} compact />
              ))}
            </View>
          </View>
        ))}
      </View>
    </AppScreen>
  );
}

const styles = StyleSheet.create({
  header: {
    gap: AppTheme.spacing.sm,
    marginBottom: AppTheme.spacing.xl,
  },
  eyebrow: {
    color: AppTheme.colors.success,
    fontSize: 12,
    fontWeight: '700',
    letterSpacing: 1.2,
    textTransform: 'uppercase',
  },
  title: {
    color: AppTheme.colors.text,
    fontSize: 32,
    lineHeight: 38,
    fontFamily: AppTheme.fonts.heading,
  },
  subtitle: {
    color: AppTheme.colors.textMuted,
    fontSize: 15,
    lineHeight: 23,
  },
  summaryCard: {
    backgroundColor: AppTheme.colors.cardMuted,
    borderRadius: AppTheme.radius.lg,
    borderWidth: 1,
    borderColor: AppTheme.colors.border,
    padding: AppTheme.spacing.lg,
    marginBottom: AppTheme.spacing.xl,
  },
  summaryValue: {
    color: AppTheme.colors.text,
    fontSize: 40,
    fontFamily: AppTheme.fonts.heading,
  },
  summaryLabel: {
    color: AppTheme.colors.textMuted,
    fontSize: 14,
    marginTop: 4,
  },
  sectionStack: {
    gap: AppTheme.spacing.xl,
  },
  section: {
    gap: AppTheme.spacing.sm,
  },
  prayerGrid: {
    gap: AppTheme.spacing.md,
  },
});
