import { Component, OnInit, Input } from '@angular/core';
import {MatIconRegistry} from '@angular/material/icon';
import {DomSanitizer} from '@angular/platform-browser';
import { FrontendserviceService } from '../frontendservice.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-loggednavbar',
  templateUrl: './loggednavbar.component.html',
  styleUrls: ['./loggednavbar.component.css']
})
export class LoggednavbarComponent implements OnInit {

  @Input() name;
  @Input() guestuser;
  private user=[];

  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer,private service:FrontendserviceService,private route:Router) {
    iconRegistry.addSvgIcon(
    'thumbs-up',
    sanitizer.bypassSecurityTrustResourceUrl('assets/img/examples/thumbup-icon.svg'));
  }

  fn(name)
  {
    this.route.navigate(['']).then(()=>{this.route.navigate(['/search',name])})
 

  }

  ngOnInit() {
  }

  logout()
  {
    this.service.logout();
    this.route.navigateByUrl('/homecomponent');
  }
}