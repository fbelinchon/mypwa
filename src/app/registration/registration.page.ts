import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { AuthenticationService } from "../services/authentication.service";
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'registration',
  templateUrl: './registration.page.html',
  styleUrls: ['./registration.page.scss'],
})

export class RegistrationPage implements OnInit {

  constructor(
    public authService: AuthenticationService,
    public router: Router,
    public alertCtrl: AlertController
  ) { }

  ngOnInit(){}

  async signUp(email, password,repassword): Promise<void> {
    try {
      console.log("Login password "+password.value+" login repassword "+repassword.value)
      if (password.value == repassword.value) {

        await this.authService.RegisterUser(email.value, password.value).then(
          () => {
            console.log("usuario " + email + " password " + password)
            this.authService.SendVerificationMail();
            this.router.navigate(['verify-email']);
          },
          async error => {
            const alert = await this.alertCtrl.create({
              message: error.message,
              buttons: [{ text: 'Ok', role: 'cancel' }],
            });
            await alert.present();
          });
      }else{
        const alert = await this.alertCtrl.create({
          message: "Upss las contraseñas no son iguales. Tienen que coincidir para evitar que pongas una contraseña incorrecta",
          buttons: [{ text: 'Ok', role: 'cancel' }],
        });
        await alert.present();
      }
    }catch(error){
      console.log("ERROR Register "+error)
      const alert = await this.alertCtrl.create({
        message: error.message,
        buttons: [{ text: 'Ok', role: 'cancel' }],
      });
      await alert.present();
      console.log('error->'+error)} //TODO
  }

}
