import { Ionicons } from '@expo/vector-icons';
import { Tabs } from 'expo-router';
import { colors } from '@/constants/theme';
import { useLanguage } from '@/hooks/useLanguage';
type IconName = keyof typeof Ionicons.glyphMap;
type TabBarIconProps = {
  color: string;
  size: number;
};
function createTabBarIcon(name: IconName) {
  function TabBarIcon({ color, size }: TabBarIconProps) {
    return <Ionicons name={name} color={color} size={size} />;
  }
  TabBarIcon.displayName = `TabBarIcon(${name})`;
  return TabBarIcon;
}
export default function TabLayout() {
  const { t } = useLanguage();
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: colors.deepGreen,
        tabBarInactiveTintColor: colors.muted,
        tabBarStyle: {
          height: 72,
          paddingBottom: 10,
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: t('home'),
          tabBarIcon: createTabBarIcon('home'),
        }}
      />
      <Tabs.Screen
        name="catalog"
        options={{
          title: t('catalog'),
          tabBarIcon: createTabBarIcon('grid'),
        }}
      />
      <Tabs.Screen
        name="search"
        options={{
          title: t('search'),
          tabBarIcon: createTabBarIcon('search'),
        }}
      />
      <Tabs.Screen
        name="cart"
        options={{
          title: t('cart'),
          tabBarIcon: createTabBarIcon('bag'),
        }}
      />
      <Tabs.Screen
        name="account"
        options={{
          title: t('account'),
          tabBarIcon: createTabBarIcon('person'),
        }}
      />
    </Tabs>
  );
}
