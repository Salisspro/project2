
import { View, Text, StatusBar, StyleSheet, ImageBackground } from 'react-native'
import React from 'react'
import EvilIcons from '@expo/vector-icons/EvilIcons';
import Fontisto from '@expo/vector-icons/Fontisto';
import Ionicons from '@expo/vector-icons/Ionicons';
import Contact from '../components/Contact';

const Profile = () => {
  return (

    <View style={styles.mainContainer}>
      <StatusBar backgroundColor='#285cb0d3' />

      <ImageBackground
      resizeMode='stretch'
        style={{ width: 350, height: 170 }}
        source={require('../components/logo/profileLogo1.png')}>

      </ImageBackground>

      <View style={styles.textAndEmail}>
        <View style={styles.call}>
          <Ionicons name="call-outline" size={24} color="#eee3e3" />
          <Text style={{ color: '#fff' }}>Calls</Text>
        </View>

        <View style={styles.email}>
          <Fontisto name="email" size={24} color="#f9f2f2" />
          <Text style={{ color: '#fff' }}>Email Us</Text>
        </View>

      </View>
      <View style={{ flex: 1, alignItems: 'center' }}>
        <Contact />
      </View>
    </View>
  )
}

export default Profile

const styles = StyleSheet.create({
  signInContainer: {
    backgroundColor: '#8d8a8a',
    borderRadius: 600,
    padding: 20,
    width: 100,
    height: 100
  },
  mainContainer: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#ece6e6'
  },

  profileContainer: {
    backgroundColor: '#ccc',
    padding: 20,
    width: '100%'
  },
  signText: {
    // fontStyle: 'italic'
    color: '#27272737'
  },
  textAndEmail: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  call: {
    backgroundColor: '#285cb0d3',
    width: 180,
    height: 70,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    gap: 10

  },
  email: {
    backgroundColor: '#5254548b',
    width: 180,
    height: 70,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    gap: 10

  }
})