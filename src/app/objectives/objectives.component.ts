import { MessageService } from './../message.service';
import { Component, OnInit } from '@angular/core';
import { Options } from 'ng5-slider';



@Component({
  selector: 'app-objectives',
  templateUrl: './objectives.component.html',
  styleUrls: ['./objectives.component.scss']
})
export class ObjectivesComponent implements OnInit {
  value: number = 100;
  value6:number;
  value1: number = 10;
  value2: number = 75;
  admin:boolean=false
  user:number=1;
  mageemail="BbasangaL@99x.lk"
  progressBarValue:number;
  private bodyText: string;
  condition=true;
  constructor(private messageService: MessageService) { }
  options: Options = {
    floor: 0,
    ceil: 100,
    readOnly: false
  };

  options2: Options = {
    floor: 0,
    ceil: 100,
    readOnly: true
  };

 

   persons =[
     {"name":"hasanga","age":25, "email":"HasangaL@99x.lk"},
     {"name":"lakdinu","age":35, "email":"LasangaL@99x.lk"},
     {"name":"karunadasa","age":45, "email":"BasangaL@99x.lk"},
     {"name":"boss","age":55, "email":"HasangaL@99x.lk"}, 
  ]

  employees =[
    {"name":"hbaba","age":25},
    {"name":"lakdnjsjs","age":35},
    {"name":"karunasjsjsa","age":45},
    {"name":"bosjduds","age":55}, 
 ]

  ngOnInit() {
    this.bodyText = 'This text can be updated in modal 1';
  }


  sliderChanged(age){

    let total=this.persons.reduce((total,person)=>total+person.age,0)
    let percentageoF=total/this.persons.length
    this.progressBarValue=percentageoF;
    console.log(this.progressBarValue)
  

    console.log(total)
  }


  sendMessage(): void {
    // send message to subscribers via observable subject
    this.messageService.sendMessage();
}



  save(){
    // let total=this.persons.reduce((total,person)=>total+person.age,0)
    // console.log(total)
  }

}
