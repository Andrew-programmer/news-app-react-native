import React from "react";
import {Main} from "./components/Main";

import {createStackNavigator} from "@react-navigation/stack";
import {NavigationContainer} from "@react-navigation/native";
import {screens} from "./screens";

const Stack = createStackNavigator();

export default function
    Navigate() {
    return (
            <Stack.Navigator
                initialRouteName={'Main'}
            >
                {
                    screens.map(({name, component, options}) => {
                        return <Stack.Screen
                            name={name}
                            component={component}
                            options={options}
                            key={name}/>
                    })
                }
            </Stack.Navigator>
    );
}