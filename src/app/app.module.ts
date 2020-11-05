import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ServiceWorkerModule } from '@angular/service-worker';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { environment } from '../environments/environment';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule} from '@angular/fire/auth';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFirestoreModule, SETTINGS } from '@angular/fire/firestore';
import { Geolocation } from '@ionic-native/geolocation/ngx';
// import { Camera } from '@ionic-native/camera/ngx';





@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    IonicModule.forRoot(),
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    AngularFirestoreModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    ScrollingModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
    //ServiceWorkerModule.register('ngsw-worker.js')
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Geolocation,
    // Camera,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    {
      provide: SETTINGS,
      useValue: environment.production ? undefined : {
        host: 'localhost:8080',
        ssl: false
      }
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
