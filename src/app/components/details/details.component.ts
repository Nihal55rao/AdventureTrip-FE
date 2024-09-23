import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  Tour: any;
  tourId: any;

  constructor(private api: ApiService) { }

  ngOnInit(): void {
    this.tourId = this.getItem('tour_id')
   this.getTour(this.tourId);
  }

  getItem(key: string): any {
    const item = sessionStorage.getItem(key);
    return item ? JSON.parse(item) : null;
  }

  getTour(id: any) {
    const token = this.getItem('jwt');
    this.api.getTour(id).subscribe(res => {
      this.Tour = res.data.data;
      console.log('tour', this.Tour)
    })
  }

}
