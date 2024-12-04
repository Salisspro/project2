
import { FlatList, Image, StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { StatusBar } from 'expo-status-bar'
import { Card, Paragraph } from 'react-native-paper'
import AntDesign from '@expo/vector-icons/AntDesign';



const DATA = [
    { id: '1', title: 'First Item', img: require('./newSection/ONE-IMG/1733234473366.jpg') },
    { id: '2', title: 'Second Item', img: require('./newSection/ONE-IMG/1733234478471.jpg') },
    { id: '3', title: 'Third Item', img: require('./newSection/ONE-IMG/1733234482530.jpg') },
    { id: '4', title: 'Fourth Item', img: require('./newSection/ONE-IMG/1733234488716.jpg') },
    { id: '5', title: 'Fifth Item', img: require('./newSection/ONE-IMG/1733234492748.jpg') },
]
const HomeCML = () => {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <StatusBar backgroundColor='#161625' />
            <FlatList
                data={DATA}
                keyExtractor={(item) => item.id}
                horizontal={true}

                showsHorizontalScrollIndicator={false}
                renderItem={({ item }) => (
                    <View style={styles.item}>
                        <Card>
                            <Card.Cover
                                resizeMode='cover'
                                style={{ width: 320, height: 290 }}
                                source={item.img} />

                            <Text style={{ color: '#2020d0', }}>
                                Click here to learn more about {item.title}
                            </Text>

                            <Card.Actions style={{ display: 'flex', alignItems: 'center', justifyContent: "space-between", margin: 10, gap: 10 }}>
                                {/* <Text style={{ color: '#2020d0' }}>Learn More</Text> */}
                                {/* <AntDesign name="heart" size={24} color="#292121" /> */}

                                <AntDesign name="message1" size={24} color="black" />
                                {/* <AntDesign name='ellipsis1' size={24} color='#2020d0' /> */}
                                <AntDesign name="sharealt" size={24} color="black" />

                            </Card.Actions>
                        </Card>
                    </View>
                )}
            />
        </View>
    )
}

export default HomeCML

const styles = StyleSheet.create({
    item: {
        flex: 1,
        margin: 10,
        alignItems: 'center',
        marginTop: 30

    }
})