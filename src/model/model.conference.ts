import {User} from './model.user';

export class Conference {
  id : any = null;
  title : string ='';
  description : string ='';
  list:Array<User>=[];
  adresse : string ='';
  idTheme:any=null;
  idAudience:any=null;
  nbrPlaces:any=null;
  username:string='';
  startDate :Date=null;
  creationDate :Date=null;
  endDate :Date=null;
  paperSubmissionlimitDate :Date=null;
  photo:Blob=null;
  constructor() {}
}
