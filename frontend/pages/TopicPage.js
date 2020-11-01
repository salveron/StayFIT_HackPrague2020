import {Image, ImageBackground, StyleSheet, Text, TextInput, TouchableOpacity, View, ScrollView} from "react-native";
import React from "react"

class TopicPage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            data: {}
        };
    }

    async componentDidMount() {
        const key = this.props.route.params.key;
        const response = await fetch(`http://192.168.0.106:5000/courses/${key}`);
        const json = await response.json();
        this.setState({data: json})
        console.log(json)
    }

    render() {

        // const onBackPressed = () => {
        //     console.log(this.props.navigation)
        //     this.props.navigation.navigate.back();
        // }

        return (
            <ScrollView>
                <View style={styles.container}>
                    <View style={{flexDirection: 'row-reverse', flex: 1, marginTop: 40}}>
                        <TouchableOpacity hitSlop={{ top: 30, bottom: 30, left: 30, right: 30 }} onPress={() => this.props.navigation.navigate('CoursePage')}>
                            <Image style={{width: 40, height: 40, marginRight: 15}}
                                   source={require('../assets/left_arrow1.png')}/>
                        </TouchableOpacity>
                    </View>
                    <View style={{marginLeft: 20, marginTop: 70}}>
                        <Text style={{fontSize: 15, color: '#374254', width: 200}}>{this.state.data.duration}</Text>
                        <Text
                            style={{fontSize: 30, color: '#374254', fontWeight: "bold", marginBottom: 15, width: 200}}>
                            {this.state.data.header}
                        </Text>
                    </View>
                    <View style={{marginLeft: 20, marginRight: 20}}>
                        {/*<Image style={{*/}
                        {/*    width: '90%',*/}
                        {/*    height: '20%',*/}
                        {/*    marginRight: 'auto',*/}
                        {/*    marginLeft: 'auto',*/}
                        {/*    marginBottom: 20,*/}
                        {/*    borderBottomLeftRadius: 15,*/}
                        {/*    borderBottomRightRadius: 15,*/}
                        {/*    borderTopRightRadius: 15,*/}
                        {/*    borderTopLeftRadius: 15,*/}
                        {/*}}*/}
                        {/*       source={require('../assets/Photo.png')}/>*/}
                        {/*<Text style={{*/}
                        {/*    fontSize: 25,*/}
                        {/*    color: '#374254',*/}
                        {/*    fontWeight: "bold",*/}
                        {/*    marginBottom: 20*/}
                        {/*}}>Stocks:</Text>*/}
                        <Text style={{fontSize: 15, marginBottom: 20}}>{this.state.data.article_content}</Text>
                        {/*<Image style={{*/}
                        {/*    width: '90%',*/}
                        {/*    height: '20%',*/}
                        {/*    marginRight: 'auto',*/}
                        {/*    marginLeft: 'auto',*/}
                        {/*    marginBottom: 20,*/}
                        {/*    borderBottomLeftRadius: 15,*/}
                        {/*    borderBottomRightRadius: 15,*/}
                        {/*    borderTopRightRadius: 15,*/}
                        {/*    borderTopLeftRadius: 15,*/}
                        {/*}}*/}
                        {/*       source={require('../assets/Photo-2.png')}/>*/}
                    </View>
                </View>
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F4F5F9',
        height: '100%'
    },
})

export default TopicPage