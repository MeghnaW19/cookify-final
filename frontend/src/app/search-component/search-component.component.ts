import { Component, OnInit, Input } from '@angular/core';
import { FrontendserviceService } from '../frontendservice.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-search-component',
  templateUrl: './search-component.component.html',
  styleUrls: ['./search-component.component.css']
})
export class SearchComponentComponent implements OnInit {

  private searchResult:any;
  @Input() public message1;

  constructor(private searchRecipe:FrontendserviceService,private route:ActivatedRoute,private http:HttpClient,private router:Router) { }

  tr(id)
  { 
  
    this.router.navigate(['/recipedetails',id]);
    
    console.log(id);
  }

  ngOnInit()
  {
  let name=this.route.snapshot.paramMap.get('name');
  console.log(name);
  this.searchRecipe.SearchRecipe(name).subscribe((data)=>{this.searchResult=data; console.log(data,"searchresults");});
  }


}
