import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'proyecto6';
  public numero:number = 1;

  incrementar(){
    this.numero++;
  }

  decrementar(){
    this.numero--;
  }
}
