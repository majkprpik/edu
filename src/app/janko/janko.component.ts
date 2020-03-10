import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-janko',
  templateUrl: './janko.component.html',
  styleUrls: ['./janko.component.css']
})
export class JankoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  myVar = 'ay';

  myVar2 = '';

  b = true;

  klik() {
    this.b = !this.b;
  }

  array = [
    '1', '2', '3', '4'
  ]

  del(a) {
    console.log(a)
    this.array.splice(this.array.findIndex((x) => {return x == a}), 1);
  }

  d = '';

  add() {
    this.array.push(this.d);
  }

}
