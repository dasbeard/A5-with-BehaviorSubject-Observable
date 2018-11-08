import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-alpha',
  templateUrl: './alpha.component.html',
  styleUrls: ['./alpha.component.css']
})
export class AlphaComponent implements OnInit {
  data: any[] = [];
  info: string = '';

  constructor(private _dataservice: DataService) { }

  ngOnInit() {
    this._dataservice.data.subscribe(
      (data) => { this.data = data; }
    );
  }

  onSubmit() {
    console.log(this.info);
    this._dataservice.addData(this.info);
    this.info = '';
  }

}
