import React from 'react';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

//screens
import LoginScreen from "./pages/LoginScreen"
import VerifyScreen from "./pages/VerifyScreen";
import CoursePage from "./pages/CoursePage"
import GoalsPage from "./pages/GoalsPage"
import GoalsOKPage from "./pages/GoalsOKPage"
import CourseItemPage from './pages/CourseItemPage'
import TopicItemPage from './pages/TopicPage'
import Introduction from "./pages/Introduction";

export default class App extends React.Component {

    render() {
        return (
            <NavigationContainer>
                <Stack.Navigator initialRouteName="Introduction" screenOptions={{headerShown: false}}>
                    <Stack.Screen name="Login" component={LoginScreen} />
                    <Stack.Screen name="Verify" component={VerifyScreen} />
                    <Stack.Screen name="CoursePage" component={CoursePage} />
                    <Stack.Screen name="GoalsPage" component={GoalsPage} />
                    <Stack.Screen name="GoalsOKPage" component={GoalsOKPage} />
                    <Stack.Screen name="CourseItemPage" component={CourseItemPage} />
                    <Stack.Screen name="TopicItemPage" component={TopicItemPage}/>
                    <Stack.Screen name="Introduction" component={Introduction} />
                </Stack.Navigator>
            </NavigationContainer>
        );
    }
}
