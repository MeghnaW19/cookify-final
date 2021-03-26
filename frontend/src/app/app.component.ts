import { Component } from "@angular/core";
import {Router, NavigationStart} from '@angular/router';
import { FrontendserviceService } from './frontendservice.service';

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "music-frontend";

  public shownav=false;
 

  constructor(private router:Router,private fservice:FrontendserviceService) {
}

ngOnInit() {


  this.router.events.forEach((event) => {
    if(event instanceof NavigationStart) 
    {
      if(event.url=="/homecomponent" || event.url=="/register" || event.url=='/')
        {
          this.shownav = true;
        }
      else
      {
       
        this.shownav = false;
       
      }
    }
  });
}

}
