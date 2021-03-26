import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {MatTableModule} from '@angular/material/table';
import {Observable} from "rxjs";
import {Data, Router, ActivatedRoute} from "@angular/router";
import {DataSource} from "@angular/cdk/collections";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {FrontendserviceService} from "../../frontendservice.service";
import { HttpClient } from '@angular/common/http';
import { add } from 'ngx-bootstrap/chronos/public_api';
import {MatRadioModule} from '@angular/material/radio';
import { Ingredients, Address } from 'src/app/OrderDetails';
import { positionElements } from 'ngx-bootstrap';

import { NgxSpinnerService } from "ngx-spinner";
import { datepickerAnimation } from 'ngx-bootstrap/datepicker/datepicker-animations';

@Component({
  selector: 'app-orderpreview',
  templateUrl: './orderpreview.component.html',
  styleUrls: ['./orderpreview.component.css']
})
export class OrderpreviewComponent implements OnInit{

  constructor(private spinner: NgxSpinnerService,private _formBuilder: FormBuilder,private frontendservice:FrontendserviceService, private http:HttpClient,private route:Router,private activatedrouter:ActivatedRoute) { }

  order:Ingredients;   //ingredients array
  index=0;
  // name:string = localStorage.getItem('username') ;
  favoriteSeason: string;
  seasons: string[] = ['Work', 'Home'];


  orderId;
  isNewUser = false;
  display=false;
  secondFormGroup: FormGroup;
  deliveryAddress;
  addresses=[];
  panelOpenState = false;
  latitude:any;
  longitude:any;
  userCoordinates;
  currentAddress:Address;
  displayedColumns=['ingredient','quantity','unit'];
  position;
  public changedisplay=true;
  public changedisplay2=false;




  orderdetails={};
  recipeid;




//after adding data to add addressna
  ngOnInit()
    {

    let username=localStorage.getItem('username');


     // console.log(this.jwtToken+"hhhh");

     if(username==null)
     {
       this.route.navigateByUrl('/login');
     }




     this.recipeid=this.activatedrouter.snapshot.paramMap.get('recipeid');

      this.secondFormGroup = this._formBuilder.group({
        nameCtrl:new FormControl('',Validators.required),
        addressNameCtrl:new FormControl('',Validators.required),
        cityCtrl:new FormControl('',Validators.required),
        stateCtrl:new FormControl('',Validators.required),
        pinCtrl:new FormControl('',Validators.required),
        mobileCtrl:new FormControl('',Validators.required),
        addressCtrl:new FormControl('',Validators.required),
      });
       this.order=this.frontendservice.getarray();
       console.log(this.order);
       console.log("in ngonitnt in order privew");
       this.frontendservice.getAddresses().subscribe(data => {
        console.log(data);
        if(data == null) {
          this.isNewUser = true;
        }
        else {
          this.deliveryAddress=data;
          this.addresses=this.deliveryAddress.addresses;
          console.log(this.addresses);
        }
      });

    }


    saveAddress(addressName,name,mobile,address,city,state,pinCode)
    {
      //to get current location of the user
      if (navigator.geolocation)
      {

        navigator.geolocation.getCurrentPosition((position) => {this.latitude=position.coords.latitude;this.longitude=position.coords.longitude;console.log(position);
            this.userCoordinates={"latitude":this.latitude,"longitude":this.longitude};
            var addr={"addressName":addressName,"name":name,"mobileNumber":mobile,"location":address,"city":city,"state":state,"pin":pinCode,"coordinates":this.userCoordinates};
            console.log(addr);
            var addrArray=[];
            addrArray.push(addr);
            console.log("In save address");
            this.addresses.push(addr);
            console.log(this.addresses);
            if(this.isNewUser) {
              console.log("new User");
              var newAddr={"username":localStorage.getItem("username"),"addresses":addrArray};
              console.log(newAddr);
              this.frontendservice.addFirstAddress(newAddr).subscribe((data) => console.log(data));
            }
            else {
              this.frontendservice.addAddress(addr).subscribe((data)=>console.log(data));
            }});
            this.secondFormGroup.reset();
            //window.location.reload();
        }
        else
        {
          console.log("nothing");
        }
    }
    cancelAddress() {
      this.secondFormGroup.reset();
    }

    changebutton()
    {
      this.changedisplay=false;
      this.changedisplay2=true;
    }


    navtopage(id)
  {
    this.route.navigateByUrl(`/tryrecipe/${this.recipeid}/${id}`)
  }


  deliveryGuyDetails:any=[];
  adde :any;
  distanceTime:any=[];
  deliveryGuyCoordinates=[];
  deliveryGuyList=[];//contains delivery guy username,distance and time
  username= localStorage.getItem('username');




  fn()
  {
    this.display=true;
  }
  fns(i)
  {
console.log(i);
  }
  submit(i)
  {
    this.currentAddress=this.addresses[i];
    console.log(this.addresses);
    console.log(this.currentAddress);
  }


  public od;
  public y;


  orderplaced=false;

  getbacktocooking()
  {
    this.route.navigateByUrl(`/tryrecipe/${this.recipeid}/1`);
  }
  public finaldeliverycoor={};
  public deliveryTime=2;

  setfinaldeliverylatlong(data)
  {

    // this.finaldeliverycoor = data.deliveryGuy.coordinates;
    this.finaldeliverycoor = data.deliveryGuy.coordinates;
    console.log(data.address.coordinates,"final delivery man corrdinate");
    console.log(this.finaldeliverycoor);
    this.frontendservice.getDeliveryTime(data.address.coordinates,this.finaldeliverycoor).subscribe(data=>{this.deliveryTime=data.resourceSets[0].resources[0].results[0].travelDuration});


  }


  recipentname;



  onClick(i) {

    this.currentAddress=this.addresses[i];
    console.log(this.addresses);
    console.log(this.currentAddress);


    //to post user current address and list of ingredients
    var addressIngredients = {"orderId":localStorage.getItem("username"),"username":localStorage.getItem('username'),"address":this.currentAddress, "ingredients":this.order,"deliveryUsername":"","status":"Queue"};
    this.frontendservice.addOrderDetails(addressIngredients).subscribe(data => console.log(data));

    //to get coordinates of all the active delivery guys
    this.frontendservice.getDeliveryGuy().subscribe( data => {
        this.deliveryGuyDetails = data;
        console.log(data);
        //to store delivery guys coordinates


        for(let i=0; i<this.deliveryGuyDetails.length; i++) {
        var x={"latitude":this.deliveryGuyDetails[i].coordinates.latitude,"longitude":this.deliveryGuyDetails[i].coordinates.longitude};
        this.deliveryGuyCoordinates[i]=x;
        }


        console.log(this.deliveryGuyCoordinates);

        //to get the distance and time from all the delivery guys
        navigator.geolocation.getCurrentPosition((position) => {this.latitude=position.coords.latitude;this.longitude=position.coords.longitude;console.log(position);
            console.log(this.currentAddress);
            this.frontendservice.getDistanceTime(position.coords,this.deliveryGuyCoordinates).subscribe(list=>{
            this.distanceTime = list.resourceSets[0].resources[0].results;
            for(let i=0;i<this.distanceTime.length;i++) {
              var x={"deliveryUsername":this.deliveryGuyDetails[i].deliveryUsername,
                    "distance":this.distanceTime[i].travelDistance,
                    "time":this.distanceTime[i].travelDuration};
              this.deliveryGuyList[i]=x;
            }
            //var finalList={"username":localStorage.getItem("username"),"deliveryGuyDistanceTime":this.deliveryGuyList};
            //console.log(finalList);
            var finalList={"orderId":localStorage.getItem("username"),"deliveryGuyDistanceTime":this.deliveryGuyList};
            //var orderList={"username":localStorage.getItem("username"),"address":this.currentAddress,"ingredients":this.order,""}


            //to post delivery guy lists
            console.log(finalList);
            this.frontendservice.deliveryGuysList(finalList).subscribe(data => console.log(data));
            this.recipentname=localStorage.getItem('name');

            this.frontendservice.getorderdetails().subscribe((data)=>{this.od =data,this.setfinaldeliverylatlong(data), console.log("barunbarunbarun",data);});








            var finaldelivery=[];
            finaldelivery[0]=this.finaldeliverycoor;
            console.log(this.finaldeliverycoor,"zzzzzzz");
            this.frontendservice.getDistanceTime(position.coords,finaldelivery).subscribe(data=>{console.log("finalised data",data)});

            this.orderplaced=true;







          });
      });
    });



  }
}

