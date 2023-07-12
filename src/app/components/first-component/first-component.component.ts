import { Component } from '@angular/core';

@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrls: ['./first-component.component.scss']
})
export class FirstComponentComponent {
  name: string = 'Gabriel';
  age: number = 29;
  job = 'Dev';
  hobbies = ["Correr", "Jogar", "Estudar"];
  car = {
    name: "Gol",
    year: 2022
  }

}
