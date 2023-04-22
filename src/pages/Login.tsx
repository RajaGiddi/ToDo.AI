import { useUser, useSupabaseClient } from '@supabase/auth-helpers-react';
import { useState } from 'react';

import {
  IonButton,
  IonContent,
  IonHeader,
  IonInput,
  IonItem,
  IonLabel,
  IonList,
  IonPage,
  IonTitle,
  IonToolbar,
  useIonToast,
  useIonLoading,
} from '@ionic/react';
import { Auth } from '@supabase/auth-ui-react';
import { ThemeSupa } from '@supabase/auth-ui-shared';

export default function Login() {
  const supabaseClient = useSupabaseClient();
  const user = useUser();

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Login</IonTitle>
        </IonToolbar>
      </IonHeader>

      {/* FIXME: redirect link for development locally and on codespaces */}
      <IonContent>
        {!user ? (
          <Auth
          supabaseClient={supabaseClient}
          appearance={{ theme: ThemeSupa }}
          redirectTo='http://localhost:3000/home'
          />
        ): (
          <IonLabel>Logged in</IonLabel>
        )}
      </IonContent>
    </IonPage>
  );
}