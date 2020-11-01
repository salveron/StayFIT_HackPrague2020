import {Image, ImageBackground, StyleSheet, Text, TextInput, TouchableOpacity, View, ScrollView} from "react-native";
import React from "react"
import Video from 'react-native-video'
import YoutubePlayer from "react-native-youtube-iframe";

const CourseItemPage = () => {

    return (
        <ScrollView>
            <View style={styles.container}>
                <View style={{flexDirection: 'row-reverse', flex: 1, marginTop: 40}}>
                    <Image style={{width: 40, height: 40, marginRight: 15}} source={require('../assets/left_white_arrow.png')}/>
                </View>
                <View style={{padding: 20, marginTop: 30}}>
                    <Text style={{fontSize: 35, color: '#ffffff', fontWeight: "bold", marginBottom: 15}}>Investment for
                        beginners</Text>
                    <Text style={{fontSize: 25, color: '#ffffff', fontWeight: "bold"}}>Intro in stocks</Text>
                </View>
                <View>
                    <YoutubePlayer
                        height={300}
                        play={true}
                        videoId={"iee2TATGMyI"}
                        onChangeState={() => {}}
                    />
                </View>
                <View>
                    <Text style={{marginLeft: 20, marginRight: 20, color: "#ffffff", marginBottom: 20}}>
                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. In enim a arcu imperdiet malesuada.
                        Duis ante orci, molestie vitae vehicula venenatis, tincidunt ac pede. Maecenas fermentum, sem in
                        pharetra pellentesque, velit turpis volutpat ante, in pharetra metus odio a lectus. Nullam
                        faucibus mi quis velit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per
                        inceptos hymenaeos. Nulla turpis magna, cursus sit amet, suscipit a, interdum id, felis. Integer
                        in sapien. Curabitur vitae diam non enim vestibulum interdum. Nullam sapien sem, ornare ac,
                        nonummy non, lobortis a enim. Integer lacinia. Proin in tellus sit amet nibh dignissim sagittis.
                    </Text>
                </View>
                <View style={styles.contentContainer}>
                    <Text style={{fontSize: 30, color: '#ffffff', fontWeight: "bold"}}>Course content</Text>
                </View>
                <View style={{alignSelf: "center", flexDirection: 'column', marginBottom: 50}}>
                    <ContentItem header='Intro in stocks' locked={false} number={1}/>
                    <ContentItem header='Invest in gold' locked={false} number={2}/>
                    <ContentItem header='What is IPO' locked={true} number={3}/>
                    <ContentItem header='Test' locked={true} number={4}/>
                </View>
            </View>
        </ScrollView>
    )
}

const ContentItem = ({header, locked, number}) => {
    let lock = require('../assets/open_lock.png')
    if ( locked )
        lock = require('../assets/closed_lock.png')

    if (number <= 9)
        number = '0' + number

    return (
        <View style={styles.contentItem}>
            <View style={{flexDirection: 'row', flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                <View style={styles.contentNumber}>
                    <Text style={{fontSize: 30, color: '#000000', fontWeight: "bold"}}>{number}</Text>
                </View>
                <Text style={{fontSize: 20, color: '#000000', marginRight: 10, minWidth: 120}}>{header}</Text>
                <Image style={{width: 35, height: 40, marginRight: 5}} source={lock}/>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#7683F7',
        height: '100%'
    },
    contentContainer: {
        marginLeft: 20,
        marginBottom: 20
    },
    contentItem: {
        width: 300,
        height: 80,
        backgroundColor: '#F4F5F9',
        borderRadius: 5,
        marginBottom: 20,

    },
    contentNumber: {
        width: 50,
        height: 50,
        backgroundColor: '#ffffff',
        borderRadius: 5,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        marginRight: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },

})

export default CourseItemPage