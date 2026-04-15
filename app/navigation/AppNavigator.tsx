import { Ionicons } from '@expo/vector-icons';
import { DarkTheme, NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';

import CategoryScreen from '@/app/screens/CategoryScreen';
import FavoritesScreen from '@/app/screens/FavoritesScreen';
import HomeScreen from '@/app/screens/HomeScreen';
import LibraryScreen from '@/app/screens/LibraryScreen';
import PrayerDetailScreen from '@/app/screens/PrayerDetailScreen';
import PrayerListScreen from '@/app/screens/PrayerListScreen';
import SettingsScreen from '@/app/screens/SettingsScreen';
import TodayScreen from '@/app/screens/TodayScreen';
import { RootStackParamList, RootTabParamList } from '@/app/types/prayer';
import { AppTheme } from '@/constants/app-theme';

const Stack = createNativeStackNavigator<RootStackParamList>();
const Tab = createBottomTabNavigator<RootTabParamList>();

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
        <Stack.Screen name="MainTabs" component={MainTabs} options={{ headerShown: false }} />
        <Stack.Screen name="Category" component={CategoryScreen} options={{ title: 'Collections' }} />
        <Stack.Screen name="PrayerList" component={PrayerListScreen} options={{ title: 'Prayers' }} />
        <Stack.Screen name="PrayerDetail" component={PrayerDetailScreen} options={{ title: 'Prayer' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

function MainTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarStyle: {
          backgroundColor: '#101010',
          borderTopColor: AppTheme.colors.border,
          height: 74,
          paddingBottom: 10,
          paddingTop: 10,
        },
        tabBarActiveTintColor: AppTheme.colors.accentStrong,
        tabBarInactiveTintColor: AppTheme.colors.textSoft,
        tabBarLabelStyle: {
          fontSize: 11,
          fontWeight: '600',
        },
        tabBarIcon: ({ color, size }) => (
          <Ionicons color={color} name={getTabIcon(route.name)} size={size} />
        ),
      })}>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Library" component={LibraryScreen} />
      <Tab.Screen name="Today" component={TodayScreen} />
      <Tab.Screen name="Favorites" component={FavoritesScreen} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
    </Tab.Navigator>
  );
}

function getTabIcon(routeName: keyof RootTabParamList): keyof typeof Ionicons.glyphMap {
  switch (routeName) {
    case 'Library':
      return 'library-outline';
    case 'Today':
      return 'sunny-outline';
    case 'Favorites':
      return 'heart-outline';
    case 'Settings':
      return 'settings-outline';
    default:
      return 'home-outline';
  }
}
