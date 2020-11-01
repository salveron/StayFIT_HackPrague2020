import {Image, ImageBackground, StyleSheet, Text, TextInput, TouchableOpacity, View, ScrollView} from "react-native";
import React from "react"
import Video from 'react-native-video'
import YoutubePlayer from "react-native-youtube-iframe";
import { IP_ADRESS } from "../config";

class CourseItemPage extends React.Component {
    isMount = false
    constructor(props) {
        super(props);
        this.state = {
            data: {},
            videos: [],
            video: 'tzihFOcSvtY'
        };
    }

    async componentDidMount() {
        let key = this.props.route.params.key;

        const response = await fetch(`${IP_ADRESS}/courses/${key}`);
        const json = await response.json();
            this.setState({
                data: json
                }
        )
    }

    componentWillUnmount() {
        this.isMount = false
    }

    render() {
        const onPressLink = (element) => {
            if ( element === 1)
                this.setState({
                    data: this.state.data,
                    video: 'tzihFOcSvtY'
                })
            else if ( element === 2 )
                this.setState({
                    data: this.state.data,
                    video: 'YKmwgMD7i6I'
                })
            else if ( element === 3 )
                this.setState({
                    data: this.state.data,
                    video: 'J5FJ2bT26Sg'
                })
            else if ( element === 4 )
                this.setState({
                    data: this.state.data,
                    video: '4cVce3nxul8'
                })
        }

        return (
            <ScrollView>
                <View style={styles.container}>
                    <View style={{flexDirection: 'row-reverse', flex: 1, marginTop: 40}}>
                        <TouchableOpacity hitSlop={{top: 30, bottom: 30, left: 30, right: 30}}
                                          onPress={() => this.props.navigation.navigate('CoursePage')}>
                            <Image style={{width: 40, height: 40, marginRight: 15}}
                                   source={require('../assets/left_white_arrow.png')}/>
                        </TouchableOpacity>
                    </View>
                    <View style={{padding: 20, marginTop: 30}}>
                        <Text style={{
                            fontSize: 35,
                            color: '#ffffff',
                            fontWeight: "bold",
                            marginBottom: 15
                        }}>{this.state.data.article_header}</Text>
                        <Text style={{fontSize: 25, color: '#ffffff', fontWeight: "bold"}}>Intro in stocks</Text>
                    </View>
                    <View>
                        <YoutubePlayer
                            height={300}
                            play={true}
                            videoId={this.state.video}
                            onChangeState={() => {
                            }}
                        />
                    </View>
                    <View>
                        <Text style={{marginLeft: 20, marginRight: 20, color: "#ffffff", marginBottom: 20}}>
                            {this.state.data.article_content}
                        </Text>
                    </View>
                    <View style={styles.contentContainer}>
                        <Text style={{fontSize: 30, color: '#ffffff', fontWeight: "bold"}}>Course content</Text>
                    </View>
                    <View style={{alignSelf: "center", flexDirection: 'column', marginBottom: 50}}>
                        <ContentItem header='Introduction' locked={false} number={1} onPressed={onPressLink} index={1}/>
                        <ContentItem header='Money makes the world go around' locked={false} number={2} index={2} onPressed={onPressLink}/>
                        <ContentItem header='Teaching mathematics' locked={true} number={3} index={3} onPressed={onPressLink}/>
                        <ContentItem header='Money and children' locked={true} number={4} index={4} onPressed={onPressLink}/>
                    </View>
                </View>
            </ScrollView>
        )
    }
}

const ContentItem = ({header, locked, number, onPressed, index}) => {
    let lock = require('../assets/open_lock.png')
    if (locked)
        lock = require('../assets/closed_lock.png')

    if (number <= 9)
        number = '0' + number

    return (
        <TouchableOpacity key={index} onPress={() => onPressed(index)}>
            <View style={styles.contentItem}>
                <View style={{flexDirection: 'row', flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                    <View style={styles.contentNumber}>
                        <Text style={{fontSize: 30, color: '#000000', fontWeight: "bold"}}>{number}</Text>
                    </View>
                    <Text style={{fontSize: 20, color: '#000000', marginRight: 10, minWidth: 120}}>{header}</Text>
                    <Image style={{width: 35, height: 40, marginRight: 5}} source={lock}/>
                </View>
            </View>
        </TouchableOpacity>
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