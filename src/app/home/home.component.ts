
import { Component, OnInit, OnDestroy } from '@angular/core';
import {SharedService} from '../service/shared.service'
import {NgForm} from '@angular/forms'
import { from } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit,OnDestroy {

  percentageValue: (value: number) => string;

  selectedPersonDeptId:number;

  persons=[
    {
      "Username":"Hasanga",
      "age":20,
      "DeptId":2
    },
    {
      "Username":"Lakdinu",
      "age":25,
      "DeptId":1
    },
    {
      "Username":"Karunadasa",
      "age":65,
      "DeptId":3
    }
  ]

  departments=[
    {
      "Id":1,
      "name":"IT",
    },
    {
      "Id":2,
      "name":"IT",
    },
    {
      "Id":3,
      "name":"IT",
    }
  ]
  personWithDept=[]

  //  messages = [{userId: 2, content: "Salam"}, {userId: 5, content: "Hello"},{userId: 4, content: "Moi"},{userId: 4, content: "Mokokaranne"},{userId: 2, content: "Mokokaranne"}];
  //  users = [{id: 2, name: "Grace"}, {id: 4, name: "Janetta"},{id: 5, name: "Sara"}];
    
  

  gaugeValues: any = {
    1: 100,
    2: 50,
    3: 50,
    4: 50,
    5: 50,
    6: 50,
    7: 50
  };

  interval: any;

  constructor(private sharedService:SharedService) {
    this.percentageValue = function(value: number): string {
      return `${Math.round(value)} / ${this['max']}`;
    };
   }

  ngOnInit(): void {
    const updateValues = (): void => {
      this.gaugeValues = {
        1: Math.round(Math.random() * 100),
        2: Math.round(Math.random() * 100),
        3: Math.round(Math.random() * 100),
        4: Math.round(Math.random() * 100),
        5: Math.round(Math.random() * 200),
        6: Math.round(Math.random() * 100),
        7: Math.round(Math.random() * 100)
      };


      
    };

    const INTERVAL: number = 5000;

    this.interval = setInterval(updateValues, INTERVAL);
    updateValues();

    // let messagesWithUserNames = this.messages.map((msg)=> {
    // let haveEqualId = (user) => user.id === msg.userId
    //   let userWithEqualId= this.users.find(haveEqualId)
    //   return Object.assign({}, msg, userWithEqualId)
    // })
    // console.log(messagesWithUserNames)

    let personWithDepartment= this.persons.map(person=>{
      let haveEqualId=(department)=> department.Id===person.DeptId
      let departmentWithEqualId=this.departments.find(haveEqualId)
      return Object.assign({}, person, departmentWithEqualId)
    })

      this.personWithDept= personWithDepartment;
      console.log( this.personWithDept)

      this.sharedService.hello().subscribe((message)=>{
        console.log(message);
      })
  }

  ngOnDestroy(): void {
    clearInterval(this.interval);
  }


  OnSubmit(formdata:NgForm){
    console.log(formdata.value.email)
    console.log(formdata.value.password)
    console.log(formdata.value.selectedTeam)
    console.log(this.selectedPersonDeptId)
  }

  selectedPerson(deptId){
    console.log(deptId)
    this.selectedPersonDeptId=deptId;
  }

}

