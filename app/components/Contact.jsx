import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import EvilIcons from '@expo/vector-icons/EvilIcons';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import AntDesign from '@expo/vector-icons/AntDesign';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
const Contact = () => {
    return (
        <View style={{ alignItems: 'center', justifyContent: 'space-around',marginTop: 40}}>

            <View style={{ flexDirection: 'row', alignItems: 'center', padding: 15, gap: 10 }}>
                <Text>Location</Text>
                <EvilIcons name="location" size={39} color="black" />
            </View>

            <View style={{ flexDirection: 'row', alignItems: 'center', padding: 15, gap: 10 }}>

                <Text>Deals</Text>
                <FontAwesome name="handshake-o" size={32} color="black" />
            </View>

            <View style={{ flexDirection: 'row', alignItems: 'center', padding: 15, gap: 10 }}>

                <Text>Address Book</Text>
                <AntDesign name="book" size={32} color="black" />
            </View>

            <View style={{ flexDirection: 'row', alignItems: 'center', padding: 15, gap: 10 }}>

                <Text>Reviews</Text>
                <MaterialIcons name="rate-review" size={32} color="black" />
            </View>


            <View style={{ flexDirection: 'row', alignItems: 'center', padding: 15, gap: 10 }}>

                <Text>About Us</Text>
                <MaterialIcons name="groups" size={32} color="black" />
            </View>

            <View style={{ flexDirection: 'row', alignItems: 'center', padding: 15, gap: 10 }}>

                <Text>FAQ</Text>
                <FontAwesome5 name="tags" size={32} color="black" />
            </View>
        </View>


    )
}

export default Contact

const styles = StyleSheet.create({})