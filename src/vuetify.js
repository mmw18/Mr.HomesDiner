import { createVuetify } from 'vuetify';
import 'vuetify/styles'; // Vuetify styles
import '@mdi/font/css/materialdesignicons.css'; // Material Design Icons

import {
  VApp,
  VAppBar,
  VToolbarTitle,
  VContainer,
  VBtn,
  VImg,
  VRow,
  VMain,
  VIcon, // Add VIcon for the icons
  VMenu,
  VList,
  VListItem,
  VListItemTitle,
} from 'vuetify/components';

export default createVuetify({
  icons: {
    defaultSet: 'mdi', // Use Material Design Icons
  },
  components: {
    VApp,
    VAppBar,
    VToolbarTitle,
    VContainer,
    VBtn,
    VImg,
    VRow,
    VMain,
    VIcon, // Ensure VIcon is included
    VMenu,
    VList,
    VListItem,
    VListItemTitle,
  },
  theme: {
    defaultTheme: 'light',
    themes: {
      light: {
        colors: {
          primary: '#0093A2ff',
          secondary: '#FF9D00ff',
          accent: '#DD348Cff',
        },
      },
      dark: {
        colors: {
          primary: '#bb86fc',
          secondary: '#03dac6',
          accent: '#ff80ab',
        },
      },
    },
  },
});
