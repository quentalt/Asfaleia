import React from "react";
import { StyleSheet, Text, View } from 'react-native';

import {NavigationContainer} from "@react-navigation/native";
import {createStackNavigator} from "@react-navigation/stack";
import SignUpScreen from "./components/SignUpScreen";
import SignInScreen from "./components/SignInScreen";

const Stack = createStackNavigator();

function App(){

    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="SignUpScreen" component={SignUpScreen} />
                <Stack.Screen name="SignInScreen" component={SignInScreen} />
            </Stack.Navigator>
        </NavigationContainer>

    );


    const styles = StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: '#fff',
            alignItems: 'center',
            justifyContent: 'center',
        }
    });
}

export default App;