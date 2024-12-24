import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import vuetify from './vuetify'; // Vuetify configuration
import '@mdi/font/css/materialdesignicons.css'; // Material Design Icons
import db from "./firebase";
import { collection, getDocs } from "firebase/firestore";

createApp(App)
  .use(router) // Register Vue Router
  .use(vuetify) // Register Vuetify
  .mount('#app');


  const testFirebase = async () => {
    const snapshot = await getDocs(collection(db, "recipes"));
    snapshot.forEach((doc) => {
      console.log(doc.id, doc.data());
    });
  };
  
  testFirebase();