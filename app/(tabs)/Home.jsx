
import AntDesign from '@expo/vector-icons/AntDesign';
import { StatusBar, StyleSheet, Text, View, ScrollView } from 'react-native'
import React from 'react'
import { Link } from 'expo-router';
import { Card, Icon, PaperProvider, Paragraph, MD3Colors } from 'react-native-paper';

const Home = () => {
  return (

    <ScrollView style={{ backgroundColor: '#edebeb', marginTop: 0 }}>
      
        <StatusBar backgroundColor='#161652' />
          <Card style={{ margin: 20, marginTop: 40 }}>
            <View style={styles.container}>
              <Card.Content>
                <Paragraph style={{ padding: 1, marginTop: 10 }}
                  numberOfLines={4}>
                  A home is a physical space where people live and perform daily activities, such as sleeping, eating, and working. It can also be a place where people feel comfortable, loved, and protected. The concept of home can have many meanings, and it can be understood in different ways
                </Paragraph>
              </Card.Content>
              <Card.Actions>

                <Link
                  style={{ color: '#2020d0', borderWidth: 1, padding: 10, borderRadius: 30, marginTop: 15 }}
                  href='../components/HomeCML'>
                  Complete Home
                </Link>
              </Card.Actions>


            </View>
          </Card>

          <Card style={{ margin: 20 }}>
            <View style={styles.container}>
              <Card.Content>

                <Paragraph style={{ padding: 10, marginTop: 10 }}
                  numberOfLines={4}>
                  Residential home interior design focuses on enhancing the interior spaces of homes to create aesthetically pleasing and functional environments. It involves selecting color schemes, furniture lighting, and decor that reflect the homeowner's personal style while maximizing space efficiency and comfort.
                </Paragraph>
              </Card.Content>
              <Card.Actions>

                <Link
                  style={{ color: '#2020d0',borderWidth: 1, padding: 10, borderRadius: 30, marginTop: 15  }}

                  href='../components/HomeDesign'>
                  Home Design
                </Link>
              </Card.Actions>

            </View>
          </Card>

          <Card style={{ margin: 20 }}>
            <View style={styles.container}>


              <Card.Content>

                <Paragraph style={{ padding: 10, marginTop: 10 }}
                  numberOfLines={4}>
                  All walls help brace a building, and that is a major factor an interior designer should be aware of as they are primarily involved in the reshaping and construction of interiors. Walls are made in a number of ways and from many different materials and finishes.
                </Paragraph>
              </Card.Content>
              <Card.Actions>

                <Link
                  style={{ color: '#2020d0', borderWidth: 1, padding: 10, borderRadius: 30, marginTop: 15  }}
                  href='../components/WallDesign'>
                  Wall Design
                </Link>
              </Card.Actions>

            </View>
          </Card>

          <View style={styles.box}>
            <Text style={{ fontSize: 25, textAlign: 'center', marginBottom: 10 }}> Work on something important</Text>


            <View style={{ alignItems: 'center', justifyContent: 'center', flexDirection: "row", }}>
              <Link
                style={{ color: '#2020d0' }}
                href='../components/Work/'>Read More
              </Link>
              <AntDesign
                name="arrowright" size={24} color="black" />
            </View>
          </View>
    </ScrollView>

  )
}

export default Home

const styles = StyleSheet.create({
  container: {
    padding: 10,
    margin: 10,
    // width: 315,
    // height: 220,
    justifyContent: 'center'
  },
  btnStyle: {
    // borderColor: '#161719',
    // borderWidth: 1,
    // padding: 10,
    // height: 50,
    // margin: 10,
    // width: 250,
    // marginTop: 5,
    // borderRadius: 10
  },
  box: {
    backgroundColor: '#ccc',
    padding: 20,
    margin: 20,
    borderRadius: 10,
    width: 315,
    height: 160,

  },
  iconsContainer: {
    flex: 1,
    alignItems: 'center',
    justifyItems: 'center',
    flexDirection: 'row',
    marginLeft: 45
  }
})