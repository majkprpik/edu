import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  polje: Array<string>;
  title = "edu";

  /**
   *
   */
  constructor() {
    this.polje = [];
  }
  dodaj() {
    this.polje.push("asdasds");
  }

  delete(item) {
    console.log(item);
  }
}
