import { PropsWithChildren } from 'react';
import { ScrollView, ScrollViewProps, StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { AppTheme } from '@/constants/app-theme';

type AppScreenProps = PropsWithChildren<
  ScrollViewProps & {
    padded?: boolean;
  }
>;

export default function AppScreen({
  children,
  padded = true,
  contentContainerStyle,
  ...scrollProps
}: AppScreenProps) {
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={[
          styles.content,
          padded && styles.padded,
          contentContainerStyle,
        ]}
        {...scrollProps}>
        <View>{children}</View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: AppTheme.colors.background,
  },
  content: {
    paddingBottom: AppTheme.spacing.xxl,
  },
  padded: {
    paddingHorizontal: AppTheme.spacing.lg,
    paddingTop: AppTheme.spacing.md,
  },
});
