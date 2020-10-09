import { Component,OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { AuthenticationService } from "../services/authentication.service"
import { AlertController } from '@ionic/angular'; 
import * as firebase from 'firebase/app';
import 'firebase/auth';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})

export class LoginPage implements OnInit {

  constructor(
    public authService: AuthenticationService,
    public router: Router,
    private alertCtrl: AlertController
  ) {}

  ngOnInit() {
     console.log("UUUUSERRR")
    firebase.auth().onAuthStateChanged((user: firebase.User) =>{
      console.log("USER "+user.email)
      if (user) {
        
        this.router.navigate(['userRegistered']);
      }
    });
  }

  async logIn(email, password) {
    try {
      await this.authService.SignIn(email.value, password.value).then(
        () => {
          this.router.navigate(['tabs/personas']);
          /* async error => {
            console.log('ERROR->' + error); 
            const alert = await this.alertCtrl.create({
              message: error.message,
              buttons: [{ text: 'Ok', role: 'cancel' }],
            });
            alert.present();
          } */
        });
    } catch (error) { 
      const alert = await this.alertCtrl.create({
        message: error.message,
        buttons: [{ text: 'Ok', role: 'cancel' }],
      });
      await alert.present();
      console.log('errr->' + error); 
      console.log("errorcode: "+error.code) 
    } //TODO
  }

  async logout(){
    try{
      await this.authService.SignOut();
    }catch(error){console.log("erro logout ->"+error)}
  }

  registration(){
    this.router.navigate(['registration']);
  }

}