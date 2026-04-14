import { NavigationContainer, DarkTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';

import CategoryScreen from '@/app/screens/CategoryScreen';
import HomeScreen from '@/app/screens/HomeScreen';
import PrayerDetailScreen from '@/app/screens/PrayerDetailScreen';
import PrayerListScreen from '@/app/screens/PrayerListScreen';
import { RootStackParamList } from '@/app/types/prayer';
import { AppTheme } from '@/constants/app-theme';

const Stack = createNativeStackNavigator<RootStackParamList>();

const navigationTheme = {
  ...DarkTheme,
  colors: {
    ...DarkTheme.colors,
    background: AppTheme.colors.background,
    card: AppTheme.colors.background,
    text: AppTheme.colors.text,
    border: AppTheme.colors.border,
    primary: AppTheme.colors.accentStrong,
  },
};

export default function AppNavigator() {
  return (
    <NavigationContainer theme={navigationTheme}>
      <StatusBar style="light" />
      <Stack.Navigator
        screenOptions={{
          headerTintColor: AppTheme.colors.text,
          headerStyle: {
            backgroundColor: AppTheme.colors.background,
          },
          headerShadowVisible: false,
          headerTitleStyle: {
            color: AppTheme.colors.text,
            fontSize: 18,
            fontWeight: '700',
          },
          contentStyle: {
            backgroundColor: AppTheme.colors.background,
          },
          animation: 'slide_from_right',
        }}>
        <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Category" component={CategoryScreen} options={{ title: 'Daily Prayers' }} />
        <Stack.Screen name="PrayerList" component={PrayerListScreen} options={{ title: 'Rosary' }} />
        <Stack.Screen
          name="PrayerDetail"
          component={PrayerDetailScreen}
          options={{ title: 'Prayer' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
