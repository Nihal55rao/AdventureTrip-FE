import { Component, OnInit} from '@angular/core';
import { ApiService } from 'src/app/service/api.service';
import { CommonService } from 'src/app/service/common.service';

@Component({
  selector: 'app-top-tours',
  templateUrl: './top-tours.component.html',
  styleUrls: ['./top-tours.component.css']
})
export class TopToursComponent implements OnInit {
  topTours: any = [];

  constructor(private api: ApiService,private commonService: CommonService) { }

  ngOnInit(): void {
    this.getTours();

  }

  getTours() {
    const token = this.commonService.getItem('jwt');
    this.api.getAllTours().subscribe(res => {
      this.topTours = res.data.data;
      console.log('top tours', this.topTours)
    })
  }

}
