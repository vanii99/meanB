import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'My title';

  count = 0;
  
  number1 = 0;
  number2 = 0;
  res = 0;

  listofNumbers = [43,52,12,4,1];
  listofNames = ["Jae","Felix","Lisa"]
  increment = () => {
    this.count++;
  }
  decrement = () => {
    this.count--;
  }
  add = () => {
    this.res = this.number1 + this.number2;
  }
}
