import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { LoginPage} from '../pages/login/login';

import * as firebase from "firebase";

var config = {
  apiKey: "AIzaSyBuU4OPNZu9EwABdbC_e94SJZOQG7DTIA4",
  authDomain: "simplelogin-4ea16.firebaseapp.com",
  databaseURL: "https://simplelogin-4ea16.firebaseio.com",
  projectId: "simplelogin-4ea16",
  storageBucket: "simplelogin-4ea16.appspot.com",
  messagingSenderId: "476072182813"
};

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
    
    firebase.initializeApp(config);
    firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
        this.rootPage = HomePage;
      } else {
        this.rootPage = LoginPage;
      }
    });
  }
}

