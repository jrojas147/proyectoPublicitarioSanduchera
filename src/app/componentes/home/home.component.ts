import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public phone = "+573212299883"
  public title = "Hola Estoy interesado en comprar un sandwish";

  constructor() { }

  ngOnInit(): void {
  }

}
