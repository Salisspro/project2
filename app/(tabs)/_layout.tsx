
import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'
import AntDesign from '@expo/vector-icons/AntDesign';


const _layout = () => {
    return (
        <Tabs>
            <Tabs.Screen name='Home'
                options={{
                    headerShown: false,
                    tabBarIcon: () => (
                        <AntDesign name="home" size={24} color="black" />
                    )
                }} />


            <Tabs.Screen name='Profile'
                options={{
                    headerShown: false,
                    tabBarIcon: () => (
                        <AntDesign name="user" size={24} color="black" />
                    )
                }} />
        </Tabs>
    )
}

export default _layout

const styles = StyleSheet.create({})