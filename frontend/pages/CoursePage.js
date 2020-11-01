import {
    Image,
    ImageBackground,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
    ScrollView
} from "react-native";
import React from "react";
import * as Progress from 'react-native-progress'
import {SearchBar} from 'react-native-elements'
import { IP_ADRESS } from "../config";

class CoursePage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: []
        };
    }

    async componentDidMount() {
        const response = await fetch(`${IP_ADRESS}/course_list`);
        const json = await response.json();
        this.setState({data: json})
    }

    render() {
        const {data} = this.state;

        if (data.courses === undefined) {
            return null;
        }

        const onCoursePress = (keyEl, topic) => {
            if ( topic === 'course')
                this.props.navigation.navigate('CourseItemPage', {
                    key: keyEl
                });
            else
                this.props.navigation.navigate('TopicItemPage', {
                    key: keyEl
                });
        }

        return (
            <View style={styles.container}>
                <View style={{flexDirection: 'row-reverse', flex: 1, marginTop: 70}}>
                    <Image style={styles.avatar}
                           source={require('../assets/avatar.png')}/>
                </View>
                <View style={styles.topView}>
                    <Text style={{fontSize: 40, fontWeight: 'bold', color: '#374254', marginBottom: 20}}>Hello!
                        👋</Text>
                    <Text style={{marginBottom: 20, fontSize: 25, fontWeight: 'bold'}}>Let's find a course for
                        you</Text>
                    <SearchBar
                        placeholder="Search for course"
                        onChangeText={() => {
                        }}
                        value={'search'}
                        lightTheme={true}
                        containerStyle={{backgroundColor: 'white', borderWidth: 0, borderRadius: 5}}
                        hideBackground={true}
                    />
                </View>
                <ScrollView
                    showsVerticalScrollIndicator={false}>
                    <View style={styles.courses}>
                        {this.state.data.courses ? this.state.data.courses.map(item => (
                            <CourseComponent
                                header={item.header}
                                about={item.description}
                                type={item.topic}
                                key={item.id}
                                time={item.duration}
                                element={item.id}
                                onCPress={onCoursePress}/>
                        )) : <Text></Text>}
                    </View>
                </ScrollView>
            </View>
        )
    }
}

const CourseComponent = ({header, about, type, time, element, onCPress}) => {
    let backColor = '#7683F7'
    let progressColor = '#F19894'
    if (type === 'topic') {
        backColor = '#F19894'
        progressColor = '#7683F7'
    }

    return (
        <TouchableOpacity key={ element } onPress={() => onCPress( element, type )}>
            <View
                style={{padding: 20, borderRadius: 10, color: "#ffffff", marginBottom: 30, backgroundColor: backColor}}
                key={element}>
                <View style={{flexDirection: 'row'}}>
                    <Text style={{
                        fontSize: 20,
                        fontWeight: 'bold',
                        color: '#ffffff',
                        marginBottom: 20,
                        marginRight: 20,
                        minWidth: 225
                    }}>{header}</Text>
                    <View style={styles.courseLabel}>
                        <Text style={{fontSize: 15, color: '#7683F7'}}>{type}</Text>
                    </View>
                </View>
                <View style={{flexDirection: 'row'}}>
                    <Text style={{
                        fontSize: 15,
                        color: '#ffffff',
                        marginBottom: 20,
                        width: '70%',
                        marginRight: 20
                    }}>{about} </Text>
                    <Image style={{width: 17, height: 17, marginRight: 5}}
                           source={require('../assets/icon-clock.png')}/>
                    <Text style={{fontSize: 14, color: '#ffffff'}}>{time}</Text>
                </View>
                <Progress.Bar progress={0.3} width={200} color={progressColor} unfilledColor={'#ffffff'}
                              borderColor={'rgba(0, 122, 255, 0)'}/>
            </View>
        </TouchableOpacity>
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
    courseContainer: {
        padding: 20,
        borderRadius: 10,
        color: "#ffffff",
        marginBottom: 30
    },
    courses: {
        height: '100%',
        backgroundColor: '#ffffff',
        padding: 15,
        width: '100%',
        marginLeft: 'auto',
        marginRight: 'auto',
        borderRadius: 200,
        flexDirection: 'column',
        marginBottom: 50,
        flex: 1,
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
    scrollView: {
        backgroundColor: 'pink',
        marginHorizontal: 20,
    },
    topView: {
        padding: 20,
        marginTop: 40
    },
    avatar: {
        width: 100,
        height: 100,
    }
});

export default CoursePage