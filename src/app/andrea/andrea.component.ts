import { Component, OnInit } from '@angular/core';
import { OnlineDataService } from "../services/online-data.service";

@Component({
  selector: 'app-andrea',
  templateUrl: './andrea.component.html',
  styleUrls: ['./andrea.component.css']
})
export class AndreaComponent implements OnInit {

  testVar="broj1"

  constructor( private OnlineDataService: OnlineDataService) { 
    
  }

  ngOnInit(): void {
  this.OnlineDataService.getAPIandre()
  .then(response => {
    return response.json();
  })
  .then(response => {
    console.log("testAndr",response);
  })
  .catch(err => {
    console.log(err);
  });

}

}
