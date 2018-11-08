import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http'

@Injectable()
export class DataService {
  data: BehaviorSubject<any[]> = new BehaviorSubject([]);
  MyURL: string = 'http://5bce81cde7268800136fb89c.mockapi.io/task';

  constructor(private _http: HttpClient) {
    this.retriveData();
  }

  // -- New Linked-List Item function moved into retriveData function --
  // updateData(newData: any): void {
  //   const tempData = this.data.getValue();
  //   tempData.push(newData);
  //   this.data.next(tempData);
  // }

  retriveData() {
    this._http.get(this.MyURL).subscribe(
      (data: any[]) => { this.data.next(data) }
    );
  }

  addData(newData: any) {
    console.log(newData);

    this._http.post(this.MyURL, newData).subscribe(
      (response) => { this.retriveData(); }
    );
  }

}
