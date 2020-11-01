import React, {useState} from 'react';
import {
    IonApp,
    IonButton,
    IonCol,
    IonContent,
    IonInput,
    IonItem,
    IonLabel,
    IonRouterOutlet,
    IonRow,
} from '@ionic/react';
import 'react-phone-input-2/lib/style.css'
import {IonReactRouter} from '@ionic/react-router'


/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';

//import screens
import LoginScreen from './pages/LoginScreen'
import {Redirect, Route} from "react-router"
import VerifyPhoneScreen from "./pages/VerifyPhoneScreen"
import TempScreen from './pages/TempScreen'

const App: React.FC = () => {

    return (
        <IonApp>
            <IonReactRouter>
                <IonRouterOutlet>
                    <Route path="/loginScreen" component={LoginScreen}/>
                    <Redirect exact from="/" to="/loginScreen" />
                    <Route path="/verifyPhoneScreen" component={VerifyPhoneScreen}/>
                    <Route path="/tempScreen" component={TempScreen}/>
                </IonRouterOutlet>
            </IonReactRouter>
        </IonApp>
    )
};

export default App;
