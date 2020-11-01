import {Image, ImageBackground, StyleSheet, Text, TextInput, TouchableOpacity, View} from "react-native";
import {StatusBar} from "expo-status-bar";
import React from "react";
import { IP_ADRESS } from "../config";

const LoginScreen = ({ navigation }) => {
    const [value, onChangeText] = React.useState('')

    const phoneButtonHandler = () => {
        fetch(`${IP_ADRESS}/phone_verification`, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                phone_number: value,
                country_code: '420'
            })
        }).then(r => navigation.navigate('Verify'))
            .catch((error) => {
                console.error(error);
            });
    }

    return (
        <View style={styles.container}>
            <ImageBackground source={require('../assets/Background.png')} style={styles.image}>
                <Image style={styles.mainLogo}
                       source={require('../assets/EduVest.png')}/>
                <Text style={{fontSize: 40, fontWeight: 'bold', color: '#374254', marginBottom: 20}}>Login</Text>
                <Text style={{marginBottom: 20}}>Access account with your phone number</Text>
                <View style={styles.inputDiv}>
                    <Image style={styles.smallLogo}
                           source={require('../assets/Flag_CR.png')}/>
                    <Text style={{textAlignVertical: 'center', color: '#374254', fontSize: 22}}>+420</Text>
                    <TextInput style={styles.textInput}
                               onChangeText={text => onChangeText(text)}
                               value={value}
                               keyboardType='numeric'
                    />
                </View>

                <TouchableOpacity style={styles.appButtonContainer} onPress = {phoneButtonHandler}>
                    <Text style={{textAlign: 'center', color: '#ffffff', fontWeight: 'bold', fontSize: 18}}>Sign in</Text>
                </TouchableOpacity>
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
    inputDiv: {
        width: '80%',
        backgroundColor: '#ffffff',
        borderRadius: 10,
        padding: 2,
        flexDirection: 'row',
        marginBottom: 30,
        alignItems: 'center',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
    },
    textInput: {
        width: "60%",
        padding: 10,
        color: "#374254",
        fontSize: 22
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
        flexDirection: 'row',
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

export default LoginScreen