import React, {useState} from 'react';
import {IonApp, IonButton, IonCol, IonContent, IonInput, IonItem, IonLabel, IonRow, IonPage} from '@ionic/react';
import {Redirect} from "react-router"

const TempScreen: React.FC = () => {

    return (
        <IonPage>
            <IonContent>
                <IonRow>
                    <IonCol>
                        <IonItem>
                            <h1>Temp screen</h1>
                        </IonItem>
                    </IonCol>
                </IonRow>
            </IonContent>
        </IonPage>
    )
}

export default TempScreen