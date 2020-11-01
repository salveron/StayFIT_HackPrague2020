import {Image, StyleSheet, Text, TextInput, TouchableOpacity, View} from "react-native";
import React from "react";

const GoalsPage = ({navigation}) => {

    const goToOK = () => {
        navigation.navigate('GoalsOKPage')
    }

    return (
        <View style={styles.container}>
            <Text style={{fontSize: 30, fontWeight: 'bold', color: '#374254', marginTop: 45, padding: 5, textAlign: "center", marginBottom: 20}}>Choose your goal</Text>
                <View style={{flex: 1, flexDirection: 'column'}}>
                    <TouchableOpacity style={{width: 340, height: 100, marginBottom: 30, marginLeft: 'auto', marginRight: 'auto'}} onPress = {goToOK}>
                    <Image style={{width: 340, height: 100}} source={require("../assets/goal1.png")}/>
                    </TouchableOpacity>

                    <TouchableOpacity style={{width: 340, height: 100, marginBottom: 30, marginLeft: 'auto', marginRight: 'auto'}} onPress = {goToOK}>
                    <Image style={{width: 340, height: 100}} source={require("../assets/goal2.png")}/>
                    </TouchableOpacity>

                    <TouchableOpacity style={{width: 340, height: 100, marginBottom: 30, marginLeft: 'auto', marginRight: 'auto'}} onPress = {goToOK}>
                    <Image style={{width: 340, height: 100}} source={require("../assets/goal3.png")}/>
                    </TouchableOpacity>

                    <TouchableOpacity style={{width: 340, height: 100, marginBottom: 30, marginLeft: 'auto', marginRight: 'auto'}} onPress = {goToOK}>
                    <Image style={{width: 340, height: 100}} source={require("../assets/goal4.png")}/>
                    </TouchableOpacity>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    smallLogo: {
        width: 40,
        height: 30,
        marginRight: 5,
        marginLeft: 25,
    },
    mainLogo: {
        width: 200,
        height: 40,
        marginTop: 120,
        marginBottom: 150
    },
    goalLogo: {
        width: 100,
        height: 20,
        marginTop: 5,
        marginBottom: 3,
    },
    image: {
        flex: 1,
        resizeMode: "cover",
        alignItems: 'center',
    },
    courseLabel: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        backgroundColor: "#ffffff",
        borderRadius: 10,
        width: 80,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center'
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

export default GoalsPage
