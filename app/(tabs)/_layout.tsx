
import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'
import AntDesign from '@expo/vector-icons/AntDesign';
import { PaperProvider, IconButton } from 'react-native-paper';


const _layout = () => {
    return (
        <Tabs>
            <Tabs.Screen name='Home'
                options={{
                    headerShown: false,
                    tabBarIcon: () => (
                        
                <IconButton
                    icon='home'
                    size={29}        
                />
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