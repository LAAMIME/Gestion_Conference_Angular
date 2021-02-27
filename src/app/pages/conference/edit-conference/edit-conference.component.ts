import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {User} from '../../../../model/model.user';
import {HomeService} from '../../../../services/home.service';
import {Conference} from '../../../../model/model.conference';

@Component({
  selector: 'app-edit-conference',
  templateUrl: './edit-conference.component.html',
  styleUrls: ['./edit-conference.component.css']
})
export class EditConferenceComponent implements OnInit {
  idConference:number;
  ListeTheme:any= null;
  ListeAudience:any= null;
  ListeUsers:any= null;
  ListeCommites:Array<User>=[];
  conference:any=null;

  constructor(private activatedRoute:ActivatedRoute,private router:Router,private homeService:HomeService) {
    this.idConference = activatedRoute.snapshot.params['id'];
  }

  ngOnInit(): void {
    this.homeService.getConferenceById(this.idConference)
      .subscribe(resp=>{
        this.conference=resp;
        console.log(this.conference);
      },error => {
        console.log("Pas des Users"+error);
      })
    console.log(this.idConference);
    this.homeService.getThemes()
      .subscribe(resp=>{
        this.ListeTheme=resp;
        console.log(this.ListeTheme);
      },error => {
        console.log("Pas des Themes"+error);
      })
    this.homeService.getAudiences()
      .subscribe(resp=>{
        this.ListeAudience=resp;
        console.log(this.ListeAudience);
      },error => {
        console.log("Pas des Audiences"+error);
      })
    this.homeService.getUsers()
      .subscribe(resp=>{
        this.ListeUsers=resp;
        console.log(this.ListeUsers);
      },error => {
        console.log("Pas des Users"+error);
      })
  }
  addUser(e) {
    console.log(e.target.value);
    this.ListeCommites.push(e.target.value);
    console.log(this.ListeCommites);
  }

  onUpdateConference(conference:Conference) {
    conference.id=this.idConference;
    conference.list=this.ListeCommites;
    console.log(this.ListeCommites);
    //let obj = {'conference':conference, 'list':this.ListeCommites}
    console.log(conference);
    this.homeService.updateConference(conference)
      .subscribe(
        resp => {
          console.log('updateConf nadia');
          console.log(resp);
          this.router.navigateByUrl('/home');
        },
        error => {
          console.log(error);
          console.log('updateConf manadiach');
        }
      );
  }
}
