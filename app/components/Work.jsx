
import {RefreshControl, Image, ScrollView, StyleSheet, View } from 'react-native'
import React from 'react'
import { StatusBar } from 'expo-status-bar'
import { Card, Icon, PaperProvider, Text, MD3Colors, Paragraph } from 'react-native-paper'

const Work = () => {

    const [refreshing, setRefreshing] = React.useState(false);

    const onRefresh = React.useCallback(() => {
      setRefreshing(true);
      setTimeout(() => {
        setRefreshing(false);
      }, 2000);
    }, []);
    return (
        <ScrollView>
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'flex-start' }}>

                
                <StatusBar backgroundColor='black' />

                <Text style={{ fontSize: 35, padding: 20, fontWeight: '800' }}>Five reasons to study Building
                </Text>
                <View style={{ padding: 20 }}>
                    <Card>
                        <Card.Cover
                            resizeMode='stretch'
                            source={require('./imgs/A Q&A with Gemma (The Digger Girl) At Breedons Quarry. - UK Plan.png')} />

                        <Paragraph style={{ padding: 20, }}>
                            If you're interested in a degree in Building, explore our reasons why it might be a good idea for you and discover how it can help with your future.
                        </Paragraph>
                    </Card>
                </View>

                <View style={{ padding: 20 }}>
                    <Text style={{ fontSize: 25, textAlign: 'center', padding: 10 }}>
                        Work on something important
                    </Text>
                    <Card>
                        <Card.Cover
                            resizeMode='stretch'
                            source={require('./imgs/Female Construction PNG Transparent Images Free Download  Vector.png')} />

                        <Paragraph style={{ padding: 20, }}>
                            Our modern world is filled with infinite buildings of all different shapes, sizes and purposes. From schools to swimming pools, prisons to playgrounds, your degree could lead you to work in many interesting jobs and projects that improve the way we live.
                        </Paragraph>
                    </Card>
                </View>

                <View style={{ padding: 20 }}>
                    <Text style={{ fontSize: 20, textAlign: 'center', padding: 10 }}>
                        Have exceptional employment prospects
                    </Text>
                    <Card>
                        <Card.Cover
                            resizeMode='stretch'
                            source={require('./imgs/Girl Construction Worker PNG, Vector, PSD, and Clipart With Tran.png')} />

                        <Paragraph style={{ padding: 20, }}>
                            Degrees in medical disciplines have the highest employment prospects, but outside of those subjects, Building is right up there with the very best. Professional employment is above average and shows that a degree in this subject area will increase your employability.
                        </Paragraph>
                    </Card>
                </View>

                <View style={{ padding: 20 }}>
                    <Text style={{ fontSize: 20, textAlign: 'center', padding: 10 }}>
                        Expect a healthy starting salary
                    </Text>
                    <Card>
                        <Card.Cover
                            resizeMode='stretch'
                            source={require('./imgs/PlanGrid  Login & Get Support.png')} />
                        <Paragraph style={{ padding: 20, }}>
                            Building graduates usually have a good graduate starting salary, and the average numbers are increasing. So, if you’re applying to the subject now, you should have some assurances over the salary you expect to earn upon graduation.
                        </Paragraph>
                    </Card>
                </View>

                <View style={{ padding: 20 }}>
                    <Text style={{ fontSize: 20, textAlign: 'center', padding: 10 }}>Develop transferable skills
                    </Text>
                    <Card>
                        <Card.Cover
                            resizeMode='stretch'
                            source={require('./imgs/Pretty young cross-armed female engineer in blue workwear and sa.png')} />
                        <Paragraph style={{ padding: 20, }}>
                            If you decide not to pursue a career in this field, you needn't worry; a Building degree will give you more than enough skills that are useful in other careers. Upon graduation, you should be able to count logical thinking, teamwork, communication, technical expertise, leadership and the ability to deal with complex technical details among your skillset.
                        </Paragraph>
                    </Card>
                </View>

                <View style={{ padding: 20 }}>
                    <Text style={{ fontSize: 20, textAlign: 'center', padding: 10 }}>Hone your skills on work placements
                    </Text>
                    <Card>
                        <Card.Cover
                            resizeMode='stretch'
                            source={require('./imgs/Worker PNGs for Free Download.png')} />
                        <Paragraph style={{ padding: 20, }}>
                            Many Building courses are professionally accredited, meaning you'll be readily qualified to work in the industry. As such, courses tend to contain multiple compulsory work placements. These give you the chance to increase your skills in a practical capacity.
                        </Paragraph>
                    </Card>
                </View>
            </View>
        </ScrollView>
    )
}

export default Work

const styles = StyleSheet.create({})