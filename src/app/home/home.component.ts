import { Component, OnInit, AfterViewInit } from '@angular/core';

@Component({
  selector: 'training-home',
  templateUrl: './home.component.html',
  // template: '<div>Home component</div>',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  // private name: string = 'Rajiv';
  name: any = '<i>Rajiv</i>';
  student: any = {
    name: 'Vignesh',
    age: 20
  }

  employees: any = [
    {
      name : 'Raj',
      age: 27
    },
    {
      name : 'Aravind',
      age: 23
    },
    {
      name : 'Dinesh',
      age: 21
    }
  ]

  showDiv = false;
  constructor() {
    // this.name = 123;
    let name = 'test';
    // this.employees[2].name = 'Mani'
    // this.save();
   }

  ngOnInit(): void {
  }

  ngAfterViewInit(){

  }

  save(param){
    alert(param);
  }

  togglePara(){
    this.showDiv = !this.showDiv;
  }
}
