import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
 name: any;
 dob:number;
 gender: any;
 email:any;
 mobileno: any;
 
 registerCredentials = { name: '',dob:'', gender: '', email: '',mobileno:'' };

  constructor(public navCtrl: NavController) {

  }

  register() {
    //    console.log(this.name);
      //  console.log(this.dob);
        //alert(this.name);

         
      this.auth.register(this.registerCredentials).subscribe(success => {
        if (success) {
          this.createSuccess = true;
        //  this.showPopup("Success", "Account created.");
        } else {
         // this.showPopup("Error", "Problem creating account.");
        }
      },
        error => {
          alert("Error", error);
        });
    }
    

    }
