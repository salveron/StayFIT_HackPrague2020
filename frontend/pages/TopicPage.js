import {Image, ImageBackground, StyleSheet, Text, TextInput, TouchableOpacity, View, ScrollView} from "react-native";
import React from "react"

const TopicPage = () => {

    return (
        <ScrollView>
            <View style={styles.container}>
                <View style={{flexDirection: 'row-reverse', flex: 1, marginTop: 40}}>
                    <Image style={{width: 40, height: 40, marginRight: 15}} source={require('../assets/left_arrow1.png')}/>
                </View>
                <View style={{marginLeft: 20, marginTop: 70}}>
                    <Text style={{fontSize: 15, color: '#374254', width: 200}}>~ 9 min</Text>
                    <Text style={{fontSize: 35, color: '#374254', fontWeight: "bold", marginBottom: 15, width: 200}}>Real
                        Estate or
                        Stock</Text>
                </View>
                <View style={{marginLeft: 20, marginRight: 20}}>
                    <Text style={{fontSize: 25, color: '#374254', fontWeight: "bold", marginBottom: 20}}>Real
                        Estate</Text>
                    <Text style={{fontSize: 15, marginBottom: 20}}>Lorem ipsum dolor sit amet, consectetuer adipiscing
                        elit. In enim a
                        arcu imperdiet
                        malesuada. Duis ante orci, molestie vitae vehicula venenatis, tincidunt ac pede. Maecenas
                        fermentum, sem in pharetra pellentesque, velit turpis volutpat ante, in pharetra metus odio a
                        lectus. Nullam faucibus mi quis velit.

                        Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos hymenaeos.
                        Nulla turpis magna, cursus sit amet, suscipit a, interdum id, felis. Integer in sapien.
                        Curabitur vitae diam non enim vestibulum interdum. Nullam sapien sem, ornare ac, nonummy non,
                        lobortis a enim. Integer lacinia. Proin in tellus sit amet nibh dignissim sagittis.</Text>
                    <Image style={{
                        width: '90%',
                        height: '20%',
                        marginRight: 'auto',
                        marginLeft: 'auto',
                        marginBottom: 20,
                        borderBottomLeftRadius: 15,
                        borderBottomRightRadius: 15,
                        borderTopRightRadius: 15,
                        borderTopLeftRadius: 15,
                    }}
                           source={require('../assets/Photo.png')}/>
                    <Text style={{fontSize: 25, color: '#374254', fontWeight: "bold", marginBottom: 20}}>Stocks:</Text>
                    <Text style={{fontSize: 15, marginBottom: 20}}>Lorem ipsum dolor sit amet, consectetuer adipiscing
                        elit. In enim a
                        arcu imperdiet malesuada. Duis ante orci, molestie vitae vehicula venenatis, tincidunt ac pede.
                        Maecenas fermentum, sem in pharetra pellentesque, velit turpis volutpat ante, in pharetra metus
                        odio a lectus. Nullam faucibus mi quis velit.

                        Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos hymenaeos.
                        Nulla turpis magna, cursus sit amet, suscipit a, interdum id, felis. Integer in sapien. </Text>
                    <Image style={{
                        width: '90%',
                        height: '20%',
                        marginRight: 'auto',
                        marginLeft: 'auto',
                        marginBottom: 20,
                        borderBottomLeftRadius: 15,
                        borderBottomRightRadius: 15,
                        borderTopRightRadius: 15,
                        borderTopLeftRadius: 15,
                    }}
                        source={require('../assets/Photo-2.png')}/>
                </View>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F4F5F9',
        height: 1300
    },
})

export default TopicPage