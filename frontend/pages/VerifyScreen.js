import {Image, ImageBackground, StyleSheet, Text, TextInput, TouchableOpacity, View} from "react-native";
import {StatusBar} from "expo-status-bar";
import React from "react";
import CodeInput from 'react-native-confirmation-code-input';
import { IP_ADRESS } from "../config";


const VerifyScreen = ({ navigation }) => {
    const [value, onChangeText] = React.useState('')

    const verifyButton = () => {
        fetch(`${IP_ADRESS}/verify`, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                token: value
            })
        }).then(r => r.json() ? navigation.navigate('GoalsPage') : '')
            .catch((error) => {
                console.error(error);
            });
    }

    return (
        <View style={styles.container}>
            <ImageBackground source={require('../assets/Background.png')} style={styles.image}>
                <Image style={styles.mainLogo}
                       source={require('../assets/EduVest.png')}/>
                <Text style={{fontSize: 25, color: '#374254'}}>We sent you an SMS code</Text>
                <CodeInput
                    activeColor='rgba(118, 131, 247, 4)'
                    inactiveColor='rgba(129, 199, 212, 1.3)'
                    size={60}
                    autoFocus={false}
                    ignoreCase={true}
                    inputPosition='center'
                    codeLength={4}
                    onFulfill={verifyButton}
                    containerStyle={{ marginTop: 30 }}
                    codeInputStyle={{ borderWidth: 1.5 }}
                    codeInputStyle={{ fontSize: 35 }}
                />
                <View style={styles.appButtonContainer}>

                <TouchableOpacity >
                    <Text style={{textAlign: 'center', color: '#ffffff', fontWeight: 'bold', fontSize: 18}}>Verify</Text>
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
    textInput: {
        width: "60%",
        padding: 10,
        color: "#374254",
        fontSize: 22
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


export default VerifyScreen