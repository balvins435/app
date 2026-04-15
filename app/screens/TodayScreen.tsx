import { useMemo } from 'react';
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import PrayerCard from '@/app/components/PrayerCard';
import SeasonBanner from '@/app/components/SeasonBanner';
import StatCard from '@/app/components/StatCard';
import { getPrayerRecord, getTodayExperience } from '@/app/data/prayers';
import { usePrayerApp } from '@/app/state/PrayerAppContext';
import { TodayScreenProps } from '@/app/types/prayer';
import { AppTheme } from '@/constants/app-theme';

export default function TodayScreen({ navigation }: TodayScreenProps) {
  const { prayerCounter, streakCount } = usePrayerApp();
  const todayExperience = useMemo(() => getTodayExperience(), []);
  const featuredRecord = useMemo(
    () => getPrayerRecord(todayExperience.featuredPrayerRoute),
    [todayExperience],
  );

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <Text style={styles.title}>Today</Text>
          <Text style={styles.subtitle}>
            Daily reading, seasonal focus, and a guided prayer moment for right now.
          </Text>
        </View>

        <SeasonBanner
          season={todayExperience.season}
          subtitle={todayExperience.subtitle}
          title={todayExperience.title}
        />

        <View style={styles.statsRow}>
          <StatCard label="Prayer count" value={`${prayerCounter}`} />
          <View style={styles.rowSpacer} />
          <StatCard label="Streak" value={`${streakCount} days`} />
        </View>

        <View style={styles.readingCard}>
          <Text style={styles.eyebrow}>Daily Reading</Text>
          <Text style={styles.cardTitle}>{todayExperience.dailyReading.title}</Text>
          <Text style={styles.reference}>{todayExperience.dailyReading.reference}</Text>
          <Text style={styles.cardBody}>{todayExperience.dailyReading.summary}</Text>
        </View>

        <View style={styles.thoughtCard}>
          <Text style={styles.eyebrow}>Daily Thought</Text>
          <Text style={styles.cardBody}>{todayExperience.dailyThought}</Text>
        </View>

        {featuredRecord ? (
          <View style={styles.featuredSection}>
            <Text style={styles.sectionTitle}>Featured Prayer</Text>
            <PrayerCard
              onPress={() => navigation.navigate('PrayerDetail', featuredRecord.route)}
              prayer={featuredRecord.prayer}
            />
          </View>
        ) : null}

        <Pressable
          accessibilityRole="button"
          onPress={handleOpenSeason}
          style={styles.actionButton}>
          <Text style={styles.actionLabel}>Browse seasonal prayers</Text>
        </Pressable>
      </ScrollView>
    </SafeAreaView>
  );

  function handleOpenSeason() {
    navigation.navigate('Category', {
      categoryId: todayExperience.seasonalCategoryId,
    });
  }
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: AppTheme.colors.background,
  },
  content: {
    paddingTop: AppTheme.spacing.md,
    paddingBottom: AppTheme.spacing.xxl,
  },
  header: {
    paddingHorizontal: AppTheme.spacing.lg,
    marginBottom: AppTheme.spacing.lg,
  },
  title: {
    color: AppTheme.colors.text,
    fontSize: 34,
    lineHeight: 40,
    fontFamily: AppTheme.fonts.heading,
    marginBottom: 8,
  },
  subtitle: {
    color: AppTheme.colors.textMuted,
    fontSize: 15,
    lineHeight: 22,
  },
  statsRow: {
    flexDirection: 'row',
    paddingHorizontal: AppTheme.spacing.lg,
    marginBottom: AppTheme.spacing.lg,
  },
  rowSpacer: {
    width: AppTheme.spacing.md,
  },
  readingCard: {
    backgroundColor: AppTheme.colors.card,
    borderRadius: 18,
    borderWidth: 1,
    borderColor: AppTheme.colors.border,
    padding: AppTheme.spacing.lg,
    marginHorizontal: AppTheme.spacing.lg,
    marginBottom: AppTheme.spacing.md,
  },
  thoughtCard: {
    backgroundColor: AppTheme.colors.cardMuted,
    borderRadius: 18,
    borderWidth: 1,
    borderColor: AppTheme.colors.border,
    padding: AppTheme.spacing.lg,
    marginHorizontal: AppTheme.spacing.lg,
    marginBottom: AppTheme.spacing.lg,
  },
  eyebrow: {
    color: AppTheme.colors.accentStrong,
    fontSize: 12,
    fontWeight: '700',
    letterSpacing: 0.8,
    textTransform: 'uppercase',
    marginBottom: 10,
  },
  cardTitle: {
    color: AppTheme.colors.text,
    fontSize: 20,
    fontFamily: AppTheme.fonts.heading,
    marginBottom: 4,
  },
  reference: {
    color: AppTheme.colors.textSoft,
    fontSize: 13,
    marginBottom: 10,
  },
  cardBody: {
    color: AppTheme.colors.textMuted,
    fontSize: 15,
    lineHeight: 22,
  },
  featuredSection: {
    paddingHorizontal: AppTheme.spacing.lg,
    marginBottom: AppTheme.spacing.lg,
  },
  sectionTitle: {
    color: AppTheme.colors.text,
    fontSize: 24,
    fontFamily: AppTheme.fonts.heading,
    marginBottom: AppTheme.spacing.md,
  },
  actionButton: {
    backgroundColor: AppTheme.colors.accentStrong,
    borderRadius: 16,
    paddingVertical: 16,
    alignItems: 'center',
    marginHorizontal: AppTheme.spacing.lg,
  },
  actionLabel: {
    color: '#101010',
    fontSize: 15,
    fontWeight: '700',
  },
});
