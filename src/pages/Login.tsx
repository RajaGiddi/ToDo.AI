import { useUser, useSupabaseClient } from '@supabase/auth-helpers-react';
import { useHistory } from 'react-router-dom';

import {
  IonButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonIcon,
  IonLabel,
  IonPage,
  IonTitle,
  IonToolbar,
} from '@ionic/react';
import { Auth } from '@supabase/auth-ui-react';
import { ThemeSupa } from '@supabase/auth-ui-shared';

import { arrowBack } from 'ionicons/icons';

export default function Login() {
  const supabaseClient = useSupabaseClient();
  const user = useUser();
  const history = useHistory();

  const handleBack = () => {
    history.goBack();
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonButton onClick={handleBack}>
              <IonIcon slot="icon-only" icon={arrowBack} />
            </IonButton>
          </IonButtons>
          <IonTitle>Login</IonTitle>
        </IonToolbar>
      </IonHeader>

      {/* FIXME: redirect link for development locally and on codespaces */}
      <IonContent>
        <div className="container">
          {!user ? (
            <Auth
              supabaseClient={supabaseClient}
              appearance={{ theme: ThemeSupa }}
              redirectTo="http://localhost:3000/home"
            />
          ) : (
            <IonLabel>Logged in</IonLabel>
          )}
        </div>
      </IonContent>
    </IonPage>
  );
}