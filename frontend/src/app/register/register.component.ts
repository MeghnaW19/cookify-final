import { Component, OnInit } from '@angular/core';
import {FrontendserviceService} from '../frontendservice.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import {FormControl, FormGroupDirective, NgForm, Validators, FormGroup} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
import {map, startWith} from "rxjs/operators";
import {Observable} from "rxjs";
/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
 }
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private frontendserviceservice:FrontendserviceService,private http:HttpClient,private router:Router) { }

  filteredOptions1: Observable<string[]>;
  myControl1 = new FormControl();
  options1: string[] = [
    'Maharashtra','Tamil Nadu','Kerala','Andhra Pradesh', 'Utar Pradesh']
  ;
  ngOnInit() {
    this.filteredOptions1 = this.myControl1.valueChanges
      .pipe(
        startWith(''),
        map(value1 => this._filter1(value1))
      );
  }

  private _filter1(value1: string): string[] {
    const filterValue1 = value1.toLowerCase();

    return this.options1.filter(option1 => option1.toLowerCase().includes(filterValue1));
  }
  state ="";
  country="";
  genderControl=new FormGroup({
    gender: new FormControl('Male')
  });

  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.pattern(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)
  ]);
  nameFormControl = new FormControl('', [
    Validators.required,Validators.pattern("[a-zA-Z ]*")
  ]);
  userNameFormControl = new FormControl('', [
    Validators.required,Validators.pattern('^[A-Za-z0-9-]{3,12}$')
  ]);
  passwordFormControl = new FormControl('', [
    Validators.required,Validators.pattern(/^(?=.*[A-Z])(?=.*[!@#\$%\^&\*])(?=.{9,})/)
  ]);
  ageFormControl = new FormControl('', [
    Validators.required,Validators.pattern("[0-9]{1,3}")
  ]);
  cityFormControl = new FormControl('', [
    Validators.required
  ]);
  matcher = new MyErrorStateMatcher();




  getStateAndCountry($event,city)
  {
    this.frontendserviceservice.getStateAndCountry().subscribe((data)=>{
      console.log(data);
      for(var i in Object.keys(data))
      {
        let s=data[i].City;
        if(s==city)
        {
          this.state=data[i].State;
          this.country="India";
          break;
        }
      }
    });
  }

  userId;
  registerUser(name,st,email,userName,password,city,age,gender,ct)
  {
   
    let x = age.split("/");
    let date: Date = new Date();

    age=date.getFullYear()-x[2];

    console.log(name+email+userName+password+city+age+gender.gender);

    if(this.state=="")
    {
     this.state= st;
     this.country=ct;
     console.log(this.state);
    }

    var userObj={name:name,emailId:email,username:userName,password:password,city:city,state:this.state,country:this.country,age:age,gender:gender.gender};


    this.frontendserviceservice.userRegister(userObj).subscribe((data)=>{
      this.userId=data.id;
      this.router.navigate(['/selectyourinterests',data.id]);
    });
  }
}
