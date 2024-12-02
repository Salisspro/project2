
import { Button, Image, StatusBar, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'


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
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'flex-end', margin: 20, backgroundColor: '#ccc', padding: 20, borderRadius: 20 }}>

                <Image
                    style={{ width: 200, height: 200 }}
                    source={require('../assets/New folder 2/logo2.png')} />

                <Link
                    style={styles.btn}
                    href='../Home'>
                    <Text style={{ color: '#fff', }}>Start</Text>
                </Link>
            </View>
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
        backgroundColor: '#161625cd',
        padding: 15,
        width: 270,
        textAlign: 'center',
        borderRadius: 10
    }
})