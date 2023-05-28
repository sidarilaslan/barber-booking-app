import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import introComponent from '../pages/intro';
import loginComponent from '../pages/auth/login';
import registerComponent from '../pages/auth/register';
import homeComponent from '../pages/home';
import serviceDetailComponent from '../pages/serviceDetail';
import bookingComponent from '../pages/booking';
import bookingSuccess from '../pages/bookingSuccess';

const Stack = createNativeStackNavigator();
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

const MainStack = () => {
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
    </Stack.Navigator>
  );
};

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="mainStack" component={MainStack} />
        <Stack.Screen name="welcomeStack" component={WelcomeStack} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
