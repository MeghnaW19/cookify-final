import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { Validators } from "@angular/forms";
let OrderpreviewComponent = class OrderpreviewComponent {
    constructor(_formBuilder, frontendservice, http, route) {
        this._formBuilder = _formBuilder;
        this.frontendservice = frontendservice;
        this.http = http;
        this.route = route;
        this.index = 0;
        this.isNewUser = false;
        this.display = false;
        this.panelOpenState = false;
        this.displayedColumns = ['ingredient', 'quantity', 'unit'];
        this.deliveryGuyDetails = [];
        this.distanceTime = [];
        this.deliveryGuyCoordinates = [];
        this.deliveryGuyList = []; //contains delivery guy username,distance and time
        this.username = localStorage.getItem('username');
    }
    //after adding data to add addressna
    ngOnInit() {
        let username = localStorage.getItem('username');
        // console.log(this.jwtToken+"hhhh");
        if (username == null) {
            this.route.navigateByUrl('/login');
        }
        this.secondFormGroup = this._formBuilder.group({
            secondCtrl: ['', Validators.required]
        });
        this.order = this.frontendservice.getarray();
        console.log(this.order);
        console.log("in ngonitnt in order privew");
        this.frontendservice.getAddresses().subscribe(data => {
            console.log(data);
            if (data == null) {
                this.isNewUser = true;
            }
            else {
                this.deliveryAddress = data;
                this.addresses = this.deliveryAddress.addresses;
                console.log(this.addresses);
            }
        });
    }
    saveAddress(addressName, name, mobile, address, city, state, pinCode) {
        //to get current location of the user
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((position) => {
                this.latitude = position.coords.latitude;
                this.longitude = position.coords.longitude;
                console.log(position);
                this.userCoordinates = { "latitude": this.latitude, "longitude": this.longitude };
                var addr = { "addressName": addressName, "name": name, "mobileNumber": mobile, "location": address, "city": city, "state": state, "pin": pinCode, "coordinates": this.userCoordinates };
                console.log(addr);
                var addrArray = [];
                addrArray.push(addr);
                console.log("In save address");
                if (this.isNewUser) {
                    console.log("new User");
                    var newAddr = { "username": localStorage.getItem("username"), "addresses": addrArray };
                    console.log(newAddr);
                    this.frontendservice.addFirstAddress(newAddr).subscribe((data) => console.log(data));
                }
                else {
                    this.frontendservice.addAddress(addr).subscribe((data) => console.log(data));
                }
            });
        }
        else {
            console.log("nothing");
        }
    }
    fn() {
        this.display = true;
    }
    fns(i) {
        console.log(i);
    }
    submit(i) {
        this.currentAddress = this.addresses[i];
        console.log(this.addresses);
        console.log(this.currentAddress);
    }
    onClick() {
        //to post user current address and list of ingredients
        var addressIngredients = { "orderId": localStorage.getItem("username"), "username": localStorage.getItem('username'), "address": this.currentAddress, "ingredients": this.order, "deliveryUsername": "", "status": "Queue" };
        this.frontendservice.addOrderDetails(addressIngredients).subscribe(data => console.log(data));
        //to get coordinates of all the active delivery guys
        this.frontendservice.getDeliveryGuy().subscribe(data => {
            this.deliveryGuyDetails = data;
            console.log(data);
            //to store delivery guys coordinates
            for (let i = 0; i < this.deliveryGuyDetails.length; i++) {
                var x = { "latitude": this.deliveryGuyDetails[i].coordinates.latitude, "longitude": this.deliveryGuyDetails[i].coordinates.longitude };
                this.deliveryGuyCoordinates[i] = x;
            }
            console.log(this.deliveryGuyCoordinates);
            //to get the distance and time from all the delivery guys
            navigator.geolocation.getCurrentPosition((position) => {
                this.latitude = position.coords.latitude;
                this.longitude = position.coords.longitude;
                console.log(position);
                console.log(this.currentAddress);
                this.frontendservice.getDistanceTime(position.coords, this.deliveryGuyCoordinates).subscribe(list => {
                    this.distanceTime = list.resourceSets[0].resources[0].results;
                    for (let i = 0; i < this.distanceTime.length; i++) {
                        var x = { "deliveryUsername": this.deliveryGuyDetails[i].deliveryUsername,
                            "distance": this.distanceTime[i].travelDistance,
                            "time": this.distanceTime[i].travelDuration };
                        this.deliveryGuyList[i] = x;
                    }
                    //var finalList={"username":localStorage.getItem("username"),"deliveryGuyDistanceTime":this.deliveryGuyList};
                    //console.log(finalList);
                    var finalList = { "orderId": localStorage.getItem("username"), "deliveryGuyDistanceTime": this.deliveryGuyList };
                    //var orderList={"username":localStorage.getItem("username"),"address":this.currentAddress,"ingredients":this.order,""}
                    //to post delivery guy lists
                    console.log(finalList);
                    this.frontendservice.deliveryGuysList(finalList).subscribe(data => console.log(data));
                });
            });
        });
    }
};
OrderpreviewComponent = tslib_1.__decorate([
    Component({
        selector: 'app-orderpreview',
        templateUrl: './orderpreview.component.html',
        styleUrls: ['./orderpreview.component.css']
    })
], OrderpreviewComponent);
export { OrderpreviewComponent };
//# sourceMappingURL=orderpreview.component.js.map