import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-beta',
  templateUrl: './beta.component.html',
  styleUrls: ['./beta.component.css']
})
export class BetaComponent implements OnInit {
  data: any[] = [];

  constructor(private _dataservice: DataService) { }

  ngOnInit() {
    this._dataservice.data.subscribe(
      (data) => { this.data = data; }
    );
  }

}
