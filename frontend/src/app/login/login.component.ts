import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient} from '@angular/common/http';

import { FrontendserviceService } from '../frontendservice.service';
import { User } from '../User';
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  private token;
  private loggedusername;
  private loginstatus;

  constructor(private router:Router,private http:HttpClient,private FrontEndService:FrontendserviceService,private spinner: NgxSpinnerService) { }

  ngOnInit() {
    this.loginstatus="";
  }

  register()
  {
   this.router.navigateByUrl(`/register`)
  }

  user: User =new User();
  submitlogindetails(username,password): any
  {

    this.spinner.show();

    this.user.username=username;
    this.user.password=password;

    this.FrontEndService.login(this.user).subscribe((res)=>{
      if(res.status==200)
      {
        var token=JSON.stringify(res.body);
        var tokenPart=token.slice(10,-2);
        localStorage.setItem('token',tokenPart);
        localStorage.setItem('username',username);
        this.FrontEndService.getUserDetails(username).subscribe((data)=>localStorage.setItem('name',data.name));
        /** spinner ends after 5 seconds */
        this.spinner.hide();
        this.router.navigate(['dashboard']);
      }
    },
    (error) => {
      this.spinner.hide();
      console.log(error,"bbbbbbb");
      if(error.status==401)
      this.spinner.hide();
      this.loginstatus="Incorrect Details";
    }
    );
  }
}
