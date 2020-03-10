import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-miroslav',
  templateUrl: './miroslav.component.html',
  styleUrls: ['./miroslav.component.css']
})
export class MiroslavComponent implements OnInit {
  
  moja='Moja varijabla';
  drugavar='Druga varijabla';
  mojabool = true;
  polje=['Prvo','Drugo','Treće','Četvrto','Peto','Šest','Sedmo','Osmo','Deveto'];

  constructor() { }

  ngOnInit(): void {
  
  }

  callService()
  {
      console.log("Kliknio si!");
  }

  promjeni()
  {
    this.mojabool=!this.mojabool;
  }

  odaberi(odabrano)
  {
    console.log(odabrano);
    this.polje.splice(1,1,odabrano);
  }
}
