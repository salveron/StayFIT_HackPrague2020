import React, {useState} from 'react';
import {
    IonApp,
    IonButton,
    IonCol,
    IonContent,
    IonInput,
    IonItem,
    IonLabel,
    IonRow,
    IonPage,
    IonGrid
} from '@ionic/react';
import {Redirect} from "react-router";

const LoginScreen: React.FC = () => {
    const [tel, setTel] = useState<string>('')

    const phoneButtonHandler = () => {
        fetch('http://127.0.0.1:5000/phone_verification', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                phone_number: tel,
                country_code: '420'
            })
        })
    }

    return (
        <IonPage>
            <IonContent className="ion-justify-content-center">
                <IonGrid style={{height: '100%'}}>
                    <IonRow>
                        <IonCol>
                            <IonItem>
                                <IonLabel position="floating">Phone number: </IonLabel>
                                <IonInput type="text" value={tel} onIonChange={e => setTel(e.detail.value!)}/>
                            </IonItem>
                        </IonCol>
                    </IonRow>
                    <IonButton  routerLink={"/VerifyPhoneScreen"} expand="block"
                               onClick={phoneButtonHandler}>Block Button</IonButton>
                </IonGrid>
            </IonContent>
        </IonPage>
    )
}

export default LoginScreen