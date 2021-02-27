import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {AuthentificationService} from '../../../services/authentification.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  password: string = "";
  matched: boolean = true;
  error: string ;

  constructor(private router:Router,
              private authenticationService:AuthentificationService
              ) { }

  ngOnInit() {
  }

  onRegister(user){
    if(user.estProf == "Professeur"){
      user.estProf = true;
    }else {
      user.estProf = false;
    }
  	this.authenticationService.register(user).subscribe(
  		resp => {
        console.log(resp);
  			this.router.navigateByUrl('');
  		},
  		error => {
  			if(error.status == 500){
          this.error = error.error.message;
        }
  		}
  	);
  }

  onInputPass(e){
    let val = e.target.value;
    let statut = document.querySelector('.statut');
    let pass_strength = document.querySelector('.pass-strength');
    pass_strength.textContent = "password strength: ";
    if(val != ""){
      if(val.length <= 5){
        statut.textContent = "WEAK";
        statut['style'].color = "#fa6775";
        pass_strength['style'].color = "#fa6775";
      }
      else if(val.length <= 10){
        statut.textContent = "GOOD";
        statut['style'].color = "#336b87";
        pass_strength['style'].color = "#336b87";
      }
      else {
        statut.textContent = "STRONG";
        statut['style'].color = "#00AB66";
        pass_strength['style'].color = "#00AB66";
      }
    }
  }

  onInputValidation(e){
    this.matched = this.password.includes(e.target.value) && (this.password.length == e.target.value.length);

  }

}
