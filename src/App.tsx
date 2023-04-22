import { createBrowserSupabaseClient } from "@supabase/auth-helpers-shared";
import { SessionContextProvider } from "@supabase/auth-helpers-react";
import { useState } from "react";

import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonRouterOutlet, setupIonicReact } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import Home from './pages/Home';
import Login from "./pages/Login";

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

setupIonicReact();

const App: React.FC = () => {
  const [supabaseClient] = useState(() => createBrowserSupabaseClient({
    supabaseUrl: process.env.REACT_APP_SUPABASE_URL!,
    supabaseKey: process.env.REACT_APP_SUPABASE_ANON_KEY!,
  }));
  return (
    <IonApp>
      <IonReactRouter>
        <IonRouterOutlet>
          <SessionContextProvider supabaseClient={supabaseClient}>
            <Route exact path="/home">
              <Home />
            </Route>
            <Route exact path="/">
              <Redirect to="/home" />
            </Route>
            <Route exact path="/login">
              <Login />
            </Route>
          </SessionContextProvider>
        </IonRouterOutlet>
      </IonReactRouter>
    </IonApp>
    )
  };

export default App;
