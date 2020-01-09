import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-objectives-child',
  templateUrl: './objectives-child.component.html',
  styleUrls: ['./objectives-child.component.scss']
})
export class ObjectivesChildComponent implements OnInit {

  @Input() Pearsons:any;

  @Input() Empss:any;

  constructor() { }

  ngOnInit() {
    console.log(this.Pearsons);
    console.log(this.Empss);
  }

}
