import {Image, ImageBackground, StyleSheet, Text, TextInput, TouchableOpacity, View} from "react-native";
import {StatusBar} from "expo-status-bar";
import React from "react";

const GoalsOKPage = ({ navigation }) => {

    const goToCourses = () => {
        navigation.navigate('CoursePage')
    }

    return (
        <View style={styles.container}>
            <ImageBackground source={require('../assets/Background.png')} style={styles.image}>
                <Image style={styles.mainLogo}
                       source={require('../assets/EduVest.png')}/>
                <Text style={{fontSize: 32, color: '#374254', marginBottom: 15}}>You selected a goal!</Text>
               
                <View style={styles.appButtonContainer}>
                <TouchableOpacity onPress = {goToCourses}>
                    <Text style={{textAlign: 'center', color: '#ffffff', fontWeight: 'bold', fontSize: 18}}>Go to courses</Text>
                </TouchableOpacity>
                </View>

                <StatusBar style="auto"/>
            </ImageBackground>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    },
    mainLogo: {
        width: 200,
        height: 40,
        marginTop: 120,
        marginBottom: 80
    },
    image: {
        flex: 1,
        resizeMode: "cover",
        alignItems: 'center',
    },
    appButtonContainer: {
        backgroundColor: '#7683F7',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 15,
        width: '80%',
        borderRadius: 10,
        marginBottom: 50,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    }
});

export default GoalsOKPage