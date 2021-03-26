import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FrontendserviceService } from '../frontendservice.service';

@Component({
  selector: 'app-recommendedbyhistory',
  templateUrl: './recommendedbyhistory.component.html',
  styleUrls: ['./recommendedbyhistory.component.css']
})
export class RecommendedbyhistoryComponent implements OnInit {

  public recipe=[];

  constructor(private http:HttpClient,private fservice:FrontendserviceService) { }

  ngOnInit() {

    this.fservice.getallrecommendedbyhistoryrecipe().subscribe(data => {console.log(data);this.recipe=data; console.log(this.recipe,"data of trending recipe")});
  }

  tr(id)
  {
    console.log("clicked on trending recipe id:"+id);
  }
}
