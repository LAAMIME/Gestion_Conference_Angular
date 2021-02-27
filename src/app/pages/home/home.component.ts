import { Component, OnInit } from '@angular/core';
import {HomeService} from '../../../services/home.service';
import {AuthentificationService} from '../../../services/authentification.service';
import {Router} from '@angular/router';
import {HttpClient, HttpEvent, HttpEventType, HttpHeaders} from '@angular/common/http';
import {error} from '@angular/compiler/src/util';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  ListeConference: any = null;
  ListeConferenceByUser: any = null;
  // Chair: any=null;
  message: string;
  User : any=null;
  mode:number=0;

  constructor(public homeService: HomeService, private router: Router,
              public authenticationService: AuthentificationService,
              private httpClient: HttpClient) {
  }

  ngOnInit(): void {
    this.authenticationService.getUserConnected()
      .subscribe(
        (response) => {
          this.User=response
          console.log(this.User);
        },
        (error) => {
          console.log('Erreur ! : bzzf' + error);
        }
      );
    this.homeService.getConference()
      .subscribe(
        (response) => {
          console.log(response);
          this.ListeConference = response;
        },
        (error) => {
          this.authenticationService.logout();
          this.router.navigateByUrl("/login");
          console.log('Erreur ! : bzzf' + error);
        }
      );
  }

  /*VerifieChairConfs(idConf: number, id: number){
    this.authenticationService.isChairConf(idConf,id)
      .subscribe(
        (response) => {
          this.Chair=response;
          console.log(this.Chair);
          return true;
        },
        (error) => {
          this.authenticationService.logout();
          this.router.navigateByUrl("/login");
          console.log('Erreur ! : bzzf' + error);
          return false;
        }
      );
  }*/
  addChair(conference){
    /*    this.authenticationService.isChairConf(1,this.User.id)
          .subscribe(
            (response) => {
              this.Chair=response;
              console.log(this.Chair);
            },
            (error) => {
              this.authenticationService.logout();
              this.router.navigateByUrl("/login");
              console.log('Erreur ! : bzzf' + error);
            }
          );*/
    this.router.navigateByUrl('/newConference/' + conference);
  }

  MyConference() {
    this.homeService.getConferenceByUser(this.User.id)
      .subscribe(
        (response) => {
          this.mode=1;
          this.ListeConferenceByUser=response;
        },
        (error) => {
          console.log('Erreur ! : bzzf' + error);
        }
      );
  }

  onEditeConference(id: number) {
    this.router.navigateByUrl('/editConference/' + id);
    // this.router.navigate(['editConference',id])
  }
}
