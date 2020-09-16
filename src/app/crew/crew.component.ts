import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-crew',
  templateUrl: './crew.component.html',
  styleUrls: ['./crew.component.css']
})
export class CrewComponent implements OnInit {
  memberBeingEdited: object = null;
inCrew: boolean = false;
  crew: object[] = [
    {name: "Eileen Collins", firstMission: false},
    {name: "Mae Jemison", firstMission: false},
    {name: "Ellen Ochoa", firstMission: true}
  ];

  constructor() { }

  ngOnInit() {
  }
  add(addName : string, fstMission : boolean){
    let errorMsg : string="";
    //for(let i =0 ;i< this.crew.length; i++){
      addName= addName.trim();
      if(addName===""){
         errorMsg='Enter a valid name!!'
      }else if(fstMission){
         this.crew.push({name: addName , firstMission: fstMission });
      }else {
          this.crew.push({name: addName , firstMission: fstMission });
      }
    //}

    return errorMsg;
  }
  remove(member: object){
    let index =this.crew.indexOf(member)
    this.crew.splice(index,1)
  }
  edit(member : object){
    this.memberBeingEdited = member;
  }

  save(names: string, member: object) {
    member['name'] = names;
    this.memberBeingEdited = null;
    }


}