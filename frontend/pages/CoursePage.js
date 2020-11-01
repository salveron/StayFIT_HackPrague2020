import {Image, ImageBackground, StyleSheet, Text, TextInput, TouchableOpacity, View, ScrollView} from "react-native";
import React from "react";
import * as Progress from 'react-native-progress'
import { SearchBar } from 'react-native-elements';

const CoursePage = () => {
    const [search, setSearch] = React.useState('')

    const updateSearch = (search) => {
        this.setState({search});
    };

    return (
        <View style={styles.container}>
            <View style={{flexDirection: 'row-reverse', flex: 1, marginTop: 70}}>
                <Image style={styles.avatar}
                       source={require('../assets/avatar.png')}/>
            </View>
            <View style={styles.topView}>
                <Text style={{fontSize: 40, fontWeight: 'bold', color: '#374254', marginBottom: 20}}>Hello!
                    👋</Text>
                <Text style={{marginBottom: 20, fontSize: 25, fontWeight: 'bold'}}>Let's find a course for you</Text>
                <SearchBar
                    placeholder="Search for course"
                    onChangeText={updateSearch}
                    value={search}
                    lightTheme={true}
                    containerStyle={{backgroundColor: 'white', borderWidth: 0, borderRadius: 5}}
                    hideBackground={true}
                />
            </View>
            <ScrollView
                showsVerticalScrollIndicator={false}>
                <View style={styles.courses}>
                    <CourseComponent
                        header='Investment for beginners'
                        about='Lorem ipsum dolor sit amet, consectetuer adipiscing elit. In enim a arcu imperdiet malesuada.'
                        type='course'
                        time='2h 19min'
                        key='1'
                    />
                    <CourseComponent
                        header='Real Estate or stocks'
                        about='Lorem ipsum dolor sit amet, consectetuer adipiscing elit. In enim a arcu imperdiet malesuada.'
                        type='topic'
                        time='2h 19min'
                        key='2'
                    />
                    <CourseComponent
                        header='Investment for beginners'
                        about='Lorem ipsum dolor sit amet, consectetuer adipiscing elit. In enim a arcu imperdiet malesuada.'
                        type='course'
                        time='2h 19min'
                        key='3'
                    />
                </View>
            </ScrollView>
        </View>
    )
}

const CourseComponent = ({header, about, type, time, key}) => {
    let backColor = '#7683F7'
    let progressColor = '#F19894'
    if (type === 'topic') {
        backColor = '#F19894'
        progressColor = '#7683F7'
    }

    return (
        <View style={{padding: 20, borderRadius: 10, color: "#ffffff", marginBottom: 30, backgroundColor: backColor}} key={key}>
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
                <Image style={{width: 17, height: 17, marginRight: 5}} source={require('../assets/icon-clock.png')}/>
                <Text style={{fontSize: 14, color: '#ffffff'}}>{time}</Text>
            </View>
            <Progress.Bar progress={0.3} width={200} color={progressColor} unfilledColor={'#ffffff'}
                          borderColor={'rgba(0, 122, 255, 0)'}/>
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