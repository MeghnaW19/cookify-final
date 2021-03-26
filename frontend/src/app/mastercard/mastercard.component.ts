import { Component, OnInit ,Input} from '@angular/core';

@Component({
  selector: 'app-mastercard',
  templateUrl: './mastercard.component.html',
  styleUrls: ['./mastercard.component.css']
})
export class MastercardComponent implements OnInit {

  @Input() id;
  @Input() master_name;
  @Input() image_path;
  @Input() cu=[];

  constructor() { }

  ngOnInit() {
  }

  master(id)
  {
    console.log("clicked on master with id:"+id );
  }

}
