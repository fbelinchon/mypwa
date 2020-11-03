import { Component, OnInit} from '@angular/core';
import { Plugins, StatusBarStyle, Capacitor } from '@capacitor/core';
import { Platform } from '@ionic/angular';

import { AngularFireDatabase, AngularFireList, AngularFireObject } from '@angular/fire/database';
import { DataService} from './services/data.service';

// import { SplashScreen } from '@ionic-native/splash-screen/ngx';
// import { StatusBar } from '@ionic-native/status-bar/ngx';
const { SplashScreen, StatusBar } = Plugins;
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit  {
  public selectedIndex = 0;
  public appPages = [
    {
      title: 'Login',
      url: '/login',
      icon: 'mail'
    },
    {
      title: 'Registro',
      url: '/registration',
      icon: 'paper-plane'
    },
    {
      title: 'Mapa',
      url: '/map',
      icon: 'heart'
    },

  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];

  constructor(
    private platform: Platform,
    private db: AngularFireDatabase,
    private data: DataService
    // private splashScreen: SplashScreen,
    // private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    // firebase.initializeApp(environment.firebaseConfig)
    if (Capacitor.isNative) {
      StatusBar.setStyle({ style: StatusBarStyle.Light });

      /* To make sure we provide the fastest app loading experience
          for our users, hide the splash screen automatically
          when the app is ready to be used:
          // tslint:disable-next-line: no-trailing-whitespace

          https://capacitor.ionicframework.com/docs/apis/splash-screen#hiding-the-splash-screen
      */
      SplashScreen.hide();
    }
    this.platform.ready().then(() => {
      // StatusBar.setStyle()styleDefault();
      SplashScreen.hide();
    });
  }

  ngOnInit() {
    const path = window.location.pathname.split('folder/')[1];
    if (path !== undefined) {
      this.selectedIndex = this.appPages.findIndex(page => page.title.toLowerCase() === path.toLowerCase());
    }
    console.log('ON INT APP');
    // this.data.crearMensajes()

  }
}
