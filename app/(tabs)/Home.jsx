
import AntDesign from '@expo/vector-icons/AntDesign';
import { StatusBar, StyleSheet, Text, View, ScrollView } from 'react-native'
import React from 'react'

const Home = () => {
  return (

    <ScrollView style={{}}>
      <View >
        <StatusBar backgroundColor='#285cb0d3' />
        <View style={{}}>

          <View style={styles.container}>
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', }}>

              <Text
                style={{ padding: 10, marginTop: 10 }}
                numberOfLines={5}>A home is a physical space where people live and perform daily activities, such as sleeping, eating, and working. It can also be a place where people feel comfortable, loved, and protected. The concept of home can have many meanings, and it can be understood in different ways</Text>
              <View style={styles.btnStyle}>

                <View style={{ flex: 1, alignItems: 'center', justifyItems: 'center', flexDirection: 'row' }}>

                  <Text style={{ padding: 5, textAlign: 'center' }}>Complete Home
                  </Text>
                  <AntDesign name="arrowright" size={24} color="black" />

                </View>

              </View>
            </View>
          </View>

          <View style={styles.container}>
            <Text style={{ padding: 10, marginTop: 10 }}
              numberOfLines={5}>
              Residential home interior design focuses on enhancing the interior spaces of homes to create aesthetically pleasing and functional environments. It involves selecting color schemes, furniture lighting, and decor that reflect the homeowner's personal style while maximizing space efficiency and comfort.
            </Text>

            <View style={styles.btnStyle}>
              <Text style={{ padding: 10, textAlign: 'center' }}>Home Design</Text>
            </View>
          </View>
          <View style={styles.container}>
            <Text style={{ padding: 10, marginTop: 10 }}
              numberOfLines={5}>
              All walls help brace a building, and that is a major factor an interior designer should be aware of as they are primarily involved in the reshaping and construction of interiors. Walls are made in a number of ways and from many different materials and finishes.

            </Text>

            <View style={styles.btnStyle}>
              <Text style={{ padding: 10, textAlign: 'center' }}>Wall Design</Text>
            </View>
          </View>

          <View style={styles.box}>
            <View >
              <Text style={{ fontSize: 25, textAlign: 'center', marginBottom: 20 }}>Work on something important</Text>
            </View>
            <Text numberOfLines={5}>Our modern world is filled with infinite buildings of all different shapes, sizes and purposes. From schools to swimming pools, prisons to playgrounds, your degree could lead you to work in many interesting jobs and projects that improve the way we live.</Text>
          </View>
        </View>

      </View>
    </ScrollView>
  )
}

export default Home

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ccc',
    padding: 20,
    margin: 20,
    borderRadius: 10,
    width: 315,
    height: 220,
    textAlign: "center",
    justifyContent: 'center'
  },
  btnStyle: {
    borderColor: '#161719',
    borderWidth: 1,
    // padding: 10,
    height: 50,
    margin: 10,
    width: 250,
    marginTop: 5,
    borderRadius: 10
  },
  box: {
    backgroundColor: '#ccc',
    padding: 20,
    margin: 20,
    borderRadius: 10,
    width: 315,
    height: 220,
    textAlign: "center",
    justifyContent: 'center'
  }
})



// Five reasons to study Building

// If you're interested in a degree in Building, explore our reasons why it might be a good idea for you and discover how it can help with your future.



// Work on something important

// Our modern world is filled with infinite buildings of all different shapes, sizes and purposes. From schools to swimming pools, prisons to playgrounds, your degree could lead you to work in many interesting jobs and projects that improve the way we live.



// Have exceptional employment prospects


// Degrees in medical disciplines have the highest employment prospects, but outside of those subjects, Building is right up there with the very best. Professional employment is above average and shows that a degree in this subject area will increase your employability.



// Expect a healthy starting salary


// Building graduates usually have a good graduate starting salary, and the average numbers are increasing. So, if you’re applying to the subject now, you should have some assurances over the salary you expect to earn upon graduation.


// Develop transferable skills


// If you decide not to pursue a career in this field, you needn't worry; a Building degree will give you more than enough skills that are useful in other careers. Upon graduation, you should be able to count logical thinking, teamwork, communication, technical expertise, leadership and the ability to deal with complex technical details among your skillset.


// Hone your skills on work placements


// Many Building courses are professionally accredited, meaning you'll be readily qualified to work in the industry. As such, courses tend to contain multiple compulsory work placements. These give you the chance to increase your skills in a practical capacity.