import React from 'react';
import {
  getFocusedRouteNameFromRoute,
  NavigationContainer,
} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import introComponent from '../pages/intro';
import loginComponent from '../pages/auth/login';
import registerComponent from '../pages/auth/register';
import homeComponent from '../pages/home';
import serviceDetailComponent from '../pages/serviceDetail';
import bookingComponent from '../pages/booking';
import bookingSuccess from '../pages/bookingSuccess';
import bookingListComponent from '../pages/bookingList';
import mapComponent from '../pages/map';
import profileComponent from '../pages/profile';
import bookingDetailComponent from '../pages/bookingDetail';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const WelcomeStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="introScreen" component={introComponent} />
      <Stack.Screen name="loginScreen" component={loginComponent} />
      <Stack.Screen name="registerScreen" component={registerComponent} />
    </Stack.Navigator>
  );
};
const HomeStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="homeScreen" component={homeComponent} />
      <Stack.Screen
        name="serviceDetailScreen"
        component={serviceDetailComponent}
      />
      <Stack.Screen name="bookingScreen" component={bookingComponent} />
      <Stack.Screen name="bookingSuccess" component={bookingSuccess} />
      <Stack.Screen name="mapScreen" component={mapComponent} />
      <Stack.Screen name="bookingListScreen" component={bookingListComponent} />
    </Stack.Navigator>
  );
};

const ProfileStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="profileScreen" component={profileComponent} />
      <Stack.Screen name="bookingListScreen" component={bookingListComponent} />
      <Stack.Screen
        name="bookingDetailScreen"
        component={bookingDetailComponent}
      />
    </Stack.Navigator>
  );
};

const MainStack = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        headerShown: false,

        tabBarIcon: ({focused, color, size}) => {
          let iconName;

          if (route.name === 'homeStack') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'profileStack') {
            iconName = focused ? 'person-circle' : 'person-circle-outline';
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: 'green',
        tabBarInactiveTintColor: 'gray',
      })}>
      <Tab.Screen
        name="homeStack"
        component={HomeStack}
        options={({route}) => ({
          title: 'Anasayfa',
          tabBarStyle: (currentRoute => {
            const routeName = getFocusedRouteNameFromRoute(currentRoute);
            if (routeName === 'mapScreen') {
              return {display: 'none'};
            }
          })(route),
        })}
      />
      <Tab.Screen
        name="profileStack"
        component={ProfileStack}
        options={{title: 'Profil'}}
      />
    </Tab.Navigator>
  );
};

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="welcomeStack" component={WelcomeStack} />
        <Stack.Screen name="mainStack" component={MainStack} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
