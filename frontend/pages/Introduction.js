import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import { StyleSheet, View, Image, Text, ImageBackground } from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import LoginScreen from './LoginScreen';
import { ThemeConsumer } from 'react-native-elements';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column"
    },
    buttonCircle: {
        width: 40,
        height: 40,
        backgroundColor: 'rgba(0, 0, 0, .2)',
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center"
    }
});

const slides = [
    {
        key: 'one',
        image: require('../assets/Start-1.png'),
    },
    {
        key: 'two',
        image: require('../assets/Start-2.png'),
    },
    {
        key: 'three',
        image: require('../assets/Start-3.png'),
    },
    {
        key: 'four',
        image: require('../assets/Start-4.png'),
    }
];

export default class Introduction extends React.Component{
    constructor(props) {
        super(props);
    }
    state = {
        showRealApp: false
    }
    _renderItem = ({ item }) => {

        return (
            <View style={styles.container}>
                <ImageBackground source={item.image} style={styles.image}>
                    <Text></Text>
                </ImageBackground>
            </View>
        );
    }
    _renderNextButton = () => {
        return (
            <View style={styles.buttonCircle}>
                <Icon
                    name="md-arrow-round-forward"
                    color="rgba(255, 255, 255, .9)"
                    size={24}
                />
            </View>
        );
    };
    _renderDoneButton = () => {
        return (
            <View style={styles.buttonCircle}>
                <Icon
                    name="md-checkmark"
                    color="rgba(255, 255, 255, .9)"
                    size={24}
                />
            </View>
        );
    };
    _onDone = () => {
        this.setState({ showRealApp: true });
    }
    render() {
        if (this.state.showRealApp) {
            this.props.navigation.navigate('Login');
            return <View></View>
        } else {
            return (
                <AppIntroSlider
                    renderItem={this._renderItem}
                    data={slides}
                    renderDoneButton={this._renderDoneButton}
                    renderNextButton={this._renderNextButton}
                    onDone={this._onDone}
                />
            );
        };
    }
}
