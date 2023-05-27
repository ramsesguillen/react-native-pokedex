import Icon from 'react-native-vector-icons/Ionicons';
import { Platform } from 'react-native';
import { StackNavigation } from './Navigation';
import { Tab2Screen } from './Tab2';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();


export const Tabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: '#5856D6',
        tabBarLabelStyle: {
          marginBottom: (Platform.OS === 'ios') ? 0 : 10,
        },
        tabBarStyle: {
          position: 'absolute',
          backgroundColor: 'rgba(255, 255, 255, 0.90)',
          borderWidth: 0,
          elevation: 0,
          height: (Platform.OS === 'ios') ? 80 : 60
        },
      }}
      sceneContainerStyle={{
        backgroundColor: 'white'
      }}
    >
      <Tab.Screen
        name="HomeScreenNavigation"
        component={StackNavigation}
        options={{
          tabBarLabel: 'Listado',
          tabBarIcon: ({ color}) => <Icon color={color} size={25} name='list-outline' />
        }}
      />
      <Tab.Screen
        name="SearchScreenNavigation"
        component={Tab2Screen}
        options={{
          tabBarLabel: 'Buscar',
          tabBarIcon: ({ color}) => <Icon color={color} size={25} name='search-outline' />
        }}
      />
    </Tab.Navigator>
  );
}
