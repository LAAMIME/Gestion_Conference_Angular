import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {ActivatedRoute, Router} from '@angular/router';
import {AuthentificationService} from './authentification.service';

@Injectable()
export class HomeService {

  host: string = 'http://localhost:8080';

  constructor(private http:HttpClient,private router:Router,
              private route:ActivatedRoute,private authenticationService : AuthentificationService) {
  }
  getConference(){
    return this.http
      .get<any[]>(this.host + '/conferences',{headers:new HttpHeaders({'Authorization':localStorage.getItem('token')})});
  }
  getConferenceById(id) {
    return this.http
      .get<any[]>(this.host + '/conferences/'+id,{headers:new HttpHeaders({'Authorization':localStorage.getItem('token')})});
  }

  getConferenceByUser(id){
    return this.http
      .get<any[]>(this.host +'/chercherConferenceByUser?idUser='+id,{headers:new HttpHeaders({'Authorization':localStorage.getItem('token')})});
  }

  getUsers(){
    return this.http
      .get<any[]>(this.host + '/appUsers',{headers:new HttpHeaders({'Authorization':localStorage.getItem('token')})});
  }
  getThemes(){
    return this.http
      .get<any[]>(this.host + '/themes',{headers:new HttpHeaders({'Authorization':localStorage.getItem('token')})});
  }
  chairToConf(obj){
    return this.http
      .post<any>( this.host + '/chairConf', obj, {headers :new HttpHeaders({'Authorization':localStorage.getItem('token')})});
  }
  addConference(obj){
    return this.http
      .post<any>( this.host +'/addConference', obj, {headers :new HttpHeaders({'Authorization':localStorage.getItem('token')})});
  }
  updateConference(obj){
    return this.http
      .put<any>( this.host +'/updateConference', obj, {headers :new HttpHeaders({'Authorization':localStorage.getItem('token')})});
  }
  getAudiences() {
    return this.http
      .get<any[]>(this.host + '/audiences',{headers:new HttpHeaders({'Authorization':localStorage.getItem('token')})});
  }

}

