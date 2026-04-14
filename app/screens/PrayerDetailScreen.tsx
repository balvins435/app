import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function PrayerDetailScreen({ route }: any) {
  const { prayer } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{prayer.title}</Text>
      <Text style={styles.content}>{prayer.content}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  title: { fontSize: 22, fontWeight: "bold", marginBottom: 10 },
  content: { fontSize: 16, lineHeight: 24 }
});