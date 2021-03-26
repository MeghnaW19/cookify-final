import { Component, OnInit } from '@angular/core';
import { FrontendserviceService } from '../frontendservice.service';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  private user=[];
  private username;
  jwtToken;
  showFiller = false;
  name;
  constructor(private fservice:FrontendserviceService,private route:Router,private router:ActivatedRoute) {
  }
 

  ngOnInit() {
   
    this.username=localStorage.getItem('username');
    this.jwtToken=localStorage.getItem('token');
    if(this.username==null)
    {
      this.route.navigateByUrl('/login');
    }

    this.fservice.getUserDetails(this.username).subscribe((data)=>{
      this.user=data;
      this.name=data.name;
      console.log(data,"dashboard user data");
    });
  }

}
