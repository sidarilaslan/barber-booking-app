import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import introComponent from "../pages/intro";
import loginComponent from "../pages/auth/login";
import registerComponent from "../pages/auth/register";


const Stack = createNativeStackNavigator();
const WelcomeStack = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false
            }}
        >
            <Stack.Screen name="introScreen" component={introComponent} />
            <Stack.Screen name="loginScreen" component={loginComponent} />
            <Stack.Screen name="registerScreen" component={registerComponent} />
        </Stack.Navigator>
    )
}

const AppNavigator = () => {
    return (
        <NavigationContainer >
            <Stack.Navigator screenOptions={{
                headerShown: false
            }}>
                <Stack.Screen name="welcomeStack" component={WelcomeStack} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default AppNavigator;