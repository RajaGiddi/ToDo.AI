import { IonButton, IonContent, IonHeader, IonPage, IonToolbar } from '@ionic/react';
import './Home.css';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  const isDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;

  return (
    <IonPage>
      <IonHeader>
      </IonHeader>
      <IonContent fullscreen className={isDarkMode ? 'dark' : ''}>
        <div className="container">
          <div className="title-container">
            <h1 className="header-title">ToDo.AI</h1>
            <p>Where productivity meets AI</p>
          </div>
          <div className="button-container">
            <Link to="/login">
              <IonButton color="primary" expand="block" style={{ width: 'auto' }}>Get Started</IonButton>
            </Link>
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Home;
