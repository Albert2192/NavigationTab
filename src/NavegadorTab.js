import React from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { AntDesign, MaterialIcons } from '@expo/vector-icons';

//Screens
import MensajesPrivados from "./MensajesPrivados";
import MensajesGrupales from "./MensajesGrupales";
import Perfil from "./Perfil";

const Tab = createBottomTabNavigator();

function MyTabs() {
    return (
        <Tab.Navigator
            initialRouteName="Home"
            screenOptions={{
                tabBarActiveTintColor: "purple",
            }}
        >
            <Tab.Screen
                name="Mensajes"
                component={MensajesPrivados}
                options={{
                    tabBarLabel: "Mensajes",
                    tabBarIcon: ({ color, size }) => (
                        // <AntDesign name="home" size={28} />
                        <MaterialIcons name="message" size={size} color={color} />
                    ),
                    tabBarBadge: 3,
                    headerShown: false,
                }}
            />
            <Tab.Screen
                name="Grupos"
                component={MensajesGrupales}
                options={{
                    tabBarLabel: "Grupos",
                    tabBarIcon: ({ color, size }) => (
                        <MaterialIcons name="brightness-5" size={size} color={color} />
                    ),
                    tabBarBadge: 9,
                    headerShown: false,
                }}
            />
            <Tab.Screen
                name="Perfil"
                component={Perfil}
                options={{
                    tabBarLabel: "Perfil",
                    tabBarIcon: ({ color, size }) => (
                        <MaterialIcons name="brightness-5" size={size} color={color} />
                    ),
                    tabBarBadge: 9,
                    headerShown: false,
                }}
            />
        </Tab.Navigator>
    );
}

export default function NavegadorTab() {
    return (
        <NavigationContainer>
            <MyTabs />
        </NavigationContainer>
    );
}