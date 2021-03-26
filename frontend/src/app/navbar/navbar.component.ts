import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {


  loggedin=false;

  constructor(private router:Router) { }

  ngOnInit() {

    if(localStorage.getItem('username')!=null)
    {
      this.loggedin=true;
    }
  }

  login()
  {
   this.router.navigateByUrl(`/login`)
  }
}
