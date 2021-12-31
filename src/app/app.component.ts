import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { threadId } from 'worker_threads';
import { WebSocketAPI } from '../WebSocketAPI';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {


  webSocketAPI!: WebSocketAPI;
  greeting: string = "";


  constructor(private router: Router){}

  ngOnInit() {}


  handleMessage(message: string){

    this.greeting = message ;

    var g = JSON.parse(this.greeting).charAt(0).toUpperCase() + JSON.parse(this.greeting).substring(1);
    var gg = g.charAt(0).toUpperCase() + g.substring(1);

    switch(JSON.parse(this.greeting)) {

      case "identification": {
         this.router.navigate([g]);
         break;
      }
      case "datapicker_view": {
        this.router.navigate([g]);
         break;
      }
      case "confirmation_rende_vous": {
        this.router.navigate([g]);
         break;
      }
      default: {
        this.router.navigate(['/']);
         break;
      }
   }

  }


}
