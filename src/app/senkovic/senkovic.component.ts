import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-senkovic',
  templateUrl: './senkovic.component.html',
  styleUrls: ['./senkovic.component.css']
})
export class SenkovicComponent implements OnInit {


  nekaVarijabla = "senkovic";
  lista: any = [];

  constructor() { }

  ngOnInit(): void {
  }

  callService(){
    this.nekaVarijabla = "senkovic";
    var url = "https://jsonplaceholder.typicode.com/posts";
    this.getData(url).then(data => {
      console.log("Ovo je vratio weather: ", data);
      if(data){
        this.nekaVarijabla = "uspješan dohvat podataka";
        this.lista = data["Response"];
      }
      else{
        this.nekaVarijabla = "Nema podataka :(";
      }
    });
  }


  getData(url): Promise<Response> {
    return fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    });    
  }

  getWeather(): Promise<Response> {
    const url = "https://localhost:44385/weatherforecast";
    return fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    });
  }

}
