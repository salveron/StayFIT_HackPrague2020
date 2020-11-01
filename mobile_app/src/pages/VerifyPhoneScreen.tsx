import React, {useState} from 'react';
import {IonApp, IonButton, IonCol, IonContent, IonInput, IonItem, IonLabel, IonRow, IonPage} from '@ionic/react';
import {Redirect} from "react-router";

const VerifyPhoneScreen: React.FC = () => {
    const [pin, setPin] = useState<string>('')
    const [isVerified, setVerified] = useState<boolean>(false)

    const verifyButtonHandler = () => {
        (async () => {
            const rawResponse = await fetch('http://127.0.0.1:5000/verify', {
                method: 'POST',
                credentials: 'include',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    token: pin
                })
            })

            const isVerified = await rawResponse.json();
            setVerified(isVerified);
        })();
    }

    return (
        <IonPage>
            <IonContent>
                <IonRow>
                    <IonCol>
                        <IonItem>
                            <IonLabel position="floating">Enter your pin:</IonLabel>
                            <IonInput minlength={4} maxlength={4} type="number" value={pin}
                                      onIonChange={e => setPin(e.detail.value!)}/>
                        </IonItem>
                    </IonCol>
                </IonRow>
                <IonButton expand="block" onClick={verifyButtonHandler}>Verify</IonButton>
                {isVerified ? <Redirect exact from="/VerifyPhoneScreen" to="/tempScreen" /> : ''}
            </IonContent>
        </IonPage>
    )
}

export default VerifyPhoneScreen