import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable, observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class DetailService {

  private _url= "http://localhost:4006/Recipe_details";
  private _url1= "http://localhost:4006/Ingredients";
  private _url2= "http://localhost:4006/Procedure";
  constructor(private http:HttpClient) { }

  getrecipedetails():Observable<any>
  {
    return this.http.get<any>(this._url);
  }
  getrecing()
  {
    return this.http.get<any>(this._url1);
  }
  getproce()
  {
    return this.http.get<any>(this._url2); 
  }
}
