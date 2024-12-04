
import { Image, StatusBar, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'
import {  Button, List, MD3Colors } from 'react-native-paper';



const index = () => {
    return (
        <View style={styles.container}>
            <StatusBar backgroundColor='#1c1c29' />

            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', marginTop: 100 }}>
                <Image
                    resizeMode='contain'
                    style={{ width: 450, height: 350 }}
                    source={require('../assets/New folder 2/logo10.png')} />
            </View>
            <View style={styles.linkContainer}>

                <Image
                    style={{ width: 200, height: 200 }}
                    source={require('../assets/New folder 2/logo2.png')} />

                <Link
                    style={styles.btn}
                    href='../Home'>
                    <Button
                        icon='read'>
                        Press me
                    </Button>

                </Link>
            </View>

            {/* <>
                <List.Icon color= {MD3Colors.neutral90} icon="folder" />
                <List.Icon color={MD3Colors.tertiary70} icon="equal" />
                <List.Icon color={MD3Colors.tertiary70} icon="calendar" />
            </> */}
        </View>
    )
}

export default index

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    btn: {
        backgroundColor: '#efefefcd',
        padding: 5,
        width: 270,
        textAlign: 'center',
        borderRadius: 10
    },
    linkContainer: {
        flex: 0.8,
        alignItems: 'center',
        justifyContent: 'flex-end',
        margin: 20,
        backgroundColor: '#ccc',
        padding: 20,
        borderRadius: 20
    }
})