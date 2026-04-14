import { FlatList, StyleSheet, Text, View } from 'react-native';

import AppScreen from '@/app/components/AppScreen';
import CategoryCard from '@/app/components/CategoryCard';
import PrayerCard from '@/app/components/PrayerCard';
import SectionHeader from '@/app/components/SectionHeader';
import VerseCard from '@/app/components/VerseCard';
import { categories } from '@/app/data/categories';
import { getFeaturedPrayers } from '@/app/lib/prayers';
import { AppTheme } from '@/constants/app-theme';

const featuredPrayers = getFeaturedPrayers();

export default function HomeScreen() {
  return (
    <AppScreen>
      <View style={styles.hero}>
        <Text style={styles.eyebrow}>Offline Catholic Prayer Companion</Text>
        <Text style={styles.title}>Pray with calm, clarity, and a library that stays with you.</Text>
        <Text style={styles.subtitle}>
          Built for daily devotion, quiet reflection, and quick access even without an internet connection.
        </Text>
      </View>

      <VerseCard
        reference="Psalm 119:105"
        verse="Your word is a lamp for my feet, a light on my path."
      />

      <View style={styles.section}>
        <SectionHeader
          title="Prayer Collections"
          subtitle="A small, focused structure that can grow cleanly as you add more devotional content."
        />
        <FlatList
          horizontal
          data={categories}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <CategoryCard item={item} prayerCount={item.prayerIds.length} />
          )}
          contentContainerStyle={styles.horizontalList}
          showsHorizontalScrollIndicator={false}
        />
      </View>

      <View style={styles.section}>
        <SectionHeader
          title="Featured Today"
          subtitle="Reusable prayer cards now drive the main browsing experience and route directly to detail pages."
        />
        <View style={styles.cardStack}>
          {featuredPrayers.map((prayer) => (
            <PrayerCard key={prayer.id} prayer={prayer} />
          ))}
        </View>
      </View>
    </AppScreen>
  );
}

const styles = StyleSheet.create({
  hero: {
    gap: AppTheme.spacing.sm,
    marginBottom: AppTheme.spacing.xl,
  },
  eyebrow: {
    color: AppTheme.colors.accentStrong,
    fontSize: 12,
    fontWeight: '700',
    letterSpacing: 1.2,
    textTransform: 'uppercase',
  },
  title: {
    color: AppTheme.colors.text,
    fontSize: 34,
    lineHeight: 40,
    fontFamily: AppTheme.fonts.heading,
  },
  subtitle: {
    color: AppTheme.colors.textMuted,
    fontSize: 15,
    lineHeight: 23,
  },
  section: {
    marginTop: AppTheme.spacing.xl,
  },
  horizontalList: {
    paddingRight: AppTheme.spacing.lg,
  },
  cardStack: {
    gap: AppTheme.spacing.md,
  },
});
