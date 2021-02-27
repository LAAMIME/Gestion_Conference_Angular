import { Component, OnInit } from '@angular/core';
import {HomeService} from '../../../services/home.service';
import {Router} from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-new-conference',
  templateUrl: './new-conference.component.html',
  styleUrls: ['./new-conference.component.css']
})
export class NewConferenceComponent implements OnInit {
	chair: string;
	users: any[];

  constructor(public homeService: HomeService, private router: Router,
  			  private route:ActivatedRoute
  	) { }

  ngOnInit(): void {
  	this.homeService.getUsers().subscribe(
  		resp => {
  			this.users = resp['_embedded'].appUsers;
  		},
  		error => {
  			console.log('walo');
  		}
  	);
  }

  addChairToConference(form){
  	 let idConf = this.route.snapshot.params['url'];
  	// id = atob(id);
  	let idUser = form.users;
  	let obj = {'iduser':idUser, 'idconf':idConf}
  	this.homeService.chairToConf(obj).subscribe(
  		resp => {
  			console.log('addChair nadia');
  			console.log(resp);
  		},
  		error => {
  			console.log(error);
  			console.log('addChair manadiach');
  		}
  	);
  }
}
