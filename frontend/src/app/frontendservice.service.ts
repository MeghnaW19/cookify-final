import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable, BehaviorSubject} from 'rxjs';
import { User } from './User';
import { Address, Coordinates, OrderDetails, Ingredients } from './OrderDetails';



@Injectable({
  providedIn: 'root'
})
export class FrontendserviceService {

  private currentusernamesubject:BehaviorSubject<String>;
  private currentusername;

  private token;
  private currenttoken;
  private fullToken;
  private CurrentrecipeId;
  private apiKey = 'AhHRFQWZBhpQDBaPLWMu2yGNwbS5AAQ2vwRL5tE9Rzh80PUdAy0axKdNr2SkQlSl';

  private ordered:Ingredients;





  constructor(private http:HttpClient,) {
    this.currentusernamesubject=new BehaviorSubject<String>(localStorage.getItem('username'));
    this.currentusername=this.currentusernamesubject.asObservable();



    // this.token=new BehaviorSubject<String>(localStorage.getItem('token'));
    // this.currenttoken=this.token.asObservable();
   }

getalltopmasters():Observable<any>
{

return this.http.get<any>("http://localhost:3000/master");
}

getalltrendingrecipe():Observable<any>
{
  // var httpOptions=this.makeToken('token');
return this.http.get<any>("https://10.20.1.50:8443/recommendationService/api/v1/recipes/trending");
}

getallrecommendedbyhistoryrecipe():Observable<any>
{
  let httpOptions=this.makeToken('token');
  let username=localStorage.getItem('username');
  return this.http.get<any>("https://10.20.1.50:8443/recommendationService/api/v1/recommended/"+username,httpOptions);
}

getallrecommendedrecipe():Observable<any>
{
  let httpOptions=this.makeToken('token');
  let username=localStorage.getItem('username');
  return this.http.get<any>("https://10.20.1.50:8443/recommendationService/api/v1/recommendedByCuisine/"+username,httpOptions);
}

getallrecommendedrecipeByIngredients(list):Observable<any>
{
  let httpOptions=this.makeToken('token');
  let username=localStorage.getItem('username');
    return this.http.get<any>("https://10.20.1.50:8443/recommendationService/api/v1/recipes/"+list,httpOptions);
}
userRegister(user)
{
  var url="https://10.20.1.50:8443/userLogin/register";
  return this.http.post<any>(url,user);
}

login(user:User)
{
  let _url="https://10.20.1.50:8443/userLogin/authenticate";
  return this.http.post<User>(_url,user,{observe:'response'});
}

logout()
{
  localStorage.removeItem('username');
  localStorage.removeItem('token');
  localStorage.removeItem('name');
}
//get user by id in selectinterest
getUser(id)
{
  var  url="https://10.20.1.50:8443/userLogin/user/"+id;
  return this.http.get(url);
}

getStateAndCountry()
{
  return this.http.get<any>("https://indian-cities-api-nocbegfhqg.now.sh/cities");
}
// public  getdataforinterests():Observable<any>
//   { let _url= "http://localhost:3000/interestrecipes";
//     return this.http.get<any>(_url);
//   }



public submitfinalfavourites(obj:any):Observable<any>
{
  console.log(obj.cuisines);
   let _url1="https://10.20.1.50:8443/userLogin/user";
 return  this.http.post(_url1,obj);
}

// localhost
 public postPublishRecipe(obj:any):Observable<any>
{
  var httpOptions=this.makeToken('token');
  let urlz="https://10.20.1.50:8443/recipeService/api/v1/recipe";
  return this.http.post(urlz,obj,httpOptions);

}


getRecipeDetails(id)
{
  return this.http.get<any>("https://10.20.1.50:8443/recipeService/api/v1/recipedetail/"+id)
}

getUserDetails(username)
{
  var httpOptions=this.makeToken('token');
  console.log(httpOptions.headers.get('Authorization')+" inside Service ");
  return this.http.get<any>("https://10.20.1.50:8443/userProfile/api/v1/user/"+username,httpOptions);
}

SearchRecipe(reqname)
{
  let _url="https://10.20.1.50:8443/recipeService/api/v1/recipes/"+reqname;
 return this.http.get<any>(_url);

}
saveuserlikerecipe(recipeobj)
{
  var httpOptions=this.makeToken('token');
  let urlz="https://10.20.1.50:8443/userProfile/api/v1/userlikerecipe/"+localStorage.getItem('username');
  console.log(urlz,"inside save");
  return this.http.post(urlz,recipeobj,httpOptions);
}

  saveusertryrecipe(recipeobj)
  {
    var httpOptions=this.makeToken('token');
    let urlz="https://10.20.1.50:8443/userProfile/api/v1/usertryrecipe/"+localStorage.getItem('username');
    console.log(urlz,"inside save");
    return this.http.post(urlz,recipeobj,httpOptions);
  }
  makeToken(token)
  {
    this.token=localStorage.getItem(token);
    this.fullToken="Bearer "+this.token;
    console.log(this.fullToken);
    var httpOptions={
      headers: new HttpHeaders({
        Authorization: this.fullToken
      })
    }
    return httpOptions;
  }

  getAddresses()
  {
    var httpOptions=this.makeToken('token');

    var url="https://10.20.1.50:8443/deliveryService/api/v1/ds/"+localStorage.getItem("username");

    console.log(localStorage.getItem("username"));
    console.log(this.http.get(url));
    return this.http.get(url,httpOptions);
  }

  //Add address for the first time
  addFirstAddress(address) {
    let httpOptions=this.makeToken('token');

    var url="https://10.20.1.50:8443/deliveryService/api/v1/ds";

    return this.http.post(url,address,httpOptions);
  }

  //to post address
  addAddress(address)
  {
    console.log(address);
    let httpOptions=this.makeToken('token');

    var url="https://10.20.1.50:8443/deliveryService/api/v1/da/"+localStorage.getItem('username');

    return this.http.put(url,address,httpOptions);
  }

move(array)
{
  this.ordered=array;
  console.log(this.ordered);
  console.log("In move function");

}
getarray()
{
  console.log(this.ordered);
  console.log("In ordered Function");
  return this.ordered;

}
rating(recipedetail)
{
   let httpOptions=this.makeToken('token');

  let _url="https://10.20.1.50:8443/recipeService/api/v1/recipe";
  console.log("working");
  console.log(recipedetail,"service");
  return this.http.put<any>(_url,recipedetail,httpOptions);
 }



  //to pass the current delivery address and list of ingredients
  public addOrderDetails(orderDetails) {
    //replace with orderDetails api and add username(user) as path variable
    console.log(orderDetails);
    let httpOptions=this.makeToken('token');

    var url="https://10.20.1.50:8443/deliveryService/api/v1/od";

    //add jwt token in http Authorization header
    return this.http.post(url,orderDetails,httpOptions);
  }

  //to get deliveryguy object which contains deliveryguy username and coordinates
  public getDeliveryGuy() {
    //replace with get deliveryGuy api
    let httpOptions=this.makeToken('token');
    var url="https://10.20.1.50:8443/deliveryService/api/v1/dg";

    //add jwt token in http Authorization header
    return this.http.get(url,httpOptions);

  }

  //to get the distance and time from bing api
  public getDistanceTime(userCoordinates,deliveryGuyCoordinates): any {

    //user location
    var userLocation = userCoordinates.latitude+','+userCoordinates.longitude;
    console.log("userCoordinates" + userCoordinates.latitude);
    //deliveryguy location
    console.log(deliveryGuyCoordinates);
    var deliveryGuyLocations = "";
    for(let val of deliveryGuyCoordinates) {
      deliveryGuyLocations+=val.latitude+','+val.longitude+';';
    }
    var  deliveryGuyLocations= deliveryGuyLocations.substring(0, deliveryGuyLocations.length-1);
    console.log(deliveryGuyLocations);
    let bingUrl = `https://dev.virtualearth.net/REST/v1/Routes/DistanceMatrix?origins=${userLocation}&destinations=${deliveryGuyLocations}&travelMode=driving&key=${this.apiKey}`;
    console.log(bingUrl);
    return this.http.get(bingUrl);
  }

  public getDeliveryTime(userCoordinates,deliveryGuyCoordinates):any{
    var userLocation1 = userCoordinates.latitude+','+userCoordinates.longitude;
    var deliveryGuyLocation1 = deliveryGuyCoordinates.latitude+','+deliveryGuyCoordinates.longitude;
    let bingUrl1 = `https://dev.virtualearth.net/REST/v1/Routes/DistanceMatrix?origins=${userLocation1}&destinations=${deliveryGuyLocation1}&travelMode=driving&key=${this.apiKey}`;
    console.log(bingUrl1);
    return this.http.get(bingUrl1);
  

  }

  //to get orderId
  public getOrderId() {
    let httpOptions=this.makeToken('token');

    var url="https://10.20.1.50:8443/deliveryService/api/v1/";

    return this.http.get(url,httpOptions);
  }

  //to post list of deliveryguys along with distance and time in order
  public deliveryGuysList(deliveryGuyList) {
    //username=localStorage.getItem('username');
   // var orderId = this.getOrderId(localStorage.getItem('username'));
    //replace with postDeliveryGuy list api
    let httpOptions=this.makeToken('token');

    console.log(deliveryGuyList);
    var url="https://10.20.1.50:8443/deliveryService/api/v1/ods";
    //add jwt token in http Authorization header
    return this.http.post(url,deliveryGuyList,httpOptions);
  }


//get the regional name of  ingredients in recipe details
  getRegionalName(view: any) {
    var httpOptions=this.makeToken('token');
    return this.http.get("https://10.20.1.50:8443/recommendationService/api/v1/ingredients/"+view+"_"+localStorage.getItem('username'),httpOptions);

  }

  //get ingredients in group
  getIngredients(recipeid: any) {
    return this.http.get<any>("https://10.20.1.50:8443/recommendationService/api/v1/allIngredients/"+recipeid+"_"+localStorage.getItem('username'));

  }

  getCommonlyUsedIngredients() {
    var httpOptions=this.makeToken('token');
    return this.http.get("https://10.20.1.50:8443/recommendationService/api/v1/ingredients/mostused",httpOptions);
  }

  // a recipe tried how many times
  getNumberOfTried(recipeid: any) {
    return this.http.get("https://10.20.1.50:8443/recommendationService/api/v1/numberOfTried")
  }

  getalllatestrecipe() {
    return this.http.get("https://10.20.1.50:8443/recommendationService/api/v1/recipes/latest")
  }

  getallpopularrecipe() {
    return this.http.get("https://10.20.1.50:8443/recommendationService/api/v1/recipes/popular")

  }

  //Number of people tried a recipe
  getNumberOfTriedInRecipe(recipeId){
    return this.http.get("https://10.20.1.50:8443/recommendationService/api/v1/numberOfTried/"+recipeId);
  }


  getorderdetails()
  {
    var username=localStorage.getItem('username');
    var httpOptions=this.makeToken('token');

    return this.http.get("https://10.20.1.50:8443/deliveryService/api/v1/od/"+username,httpOptions);
  }

  getSuggestedIngredients(value: string) {
    var httpOptions=this.makeToken('token');
    return this.http.get("https://10.20.1.50:8443/recommendationService/api/v1/suggested/ingredients/"+value,httpOptions);
  }

  updateImage(newUser: any) {
    var httpOptions=this.makeToken('token');
    return this.http.put("https://10.20.1.50:8443/userProfile/api/v1/user/",newUser,httpOptions);

  }

  getCuisines() {
    return this.http.get<string[]>("https://10.20.1.50:8989/Cuisine");
  }

  getCourses() {
    return this.http.get<string[]>("https://10.20.1.50:8989/Course");

  }

  getIngredientsWhilePublishing() {
    return this.http.get<string[]>("https://10.20.1.50:8989/PublishIngredients");
  }
  getIngredientsWhileSearching(){
    return this.http.get<string[]>("https://10.20.1.50:8989/Ingredients");
  }
}


