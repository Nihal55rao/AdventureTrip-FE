import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { CommonService } from 'src/app/service/common.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-tour-cards',
  templateUrl: './tour-cards.component.html',
  styleUrls: ['./tour-cards.component.css']
})
export class TourCardsComponent implements OnInit {
  loggedin: any;
  @Input() name: any = 'name';
  @Input() id: any = null;
  @Input() difficulty: any = 'difficulty';
  @Input() price: any = 0;
  @Input() duration: any = 0;
  @Input() summary: any = 'Summary';
  @Input() imageCover: any = null;
  @Input() ratingsQuantity: any = 0;
  @Input() ratingsAverage: any = 0.0;
  @Input() maxGroupSize: any = 0;
  @Input() startDates: any = [];
  @Input() startLocation: any = [];
  @Input() stops: any = 0;
  
  @Output() apply = new EventEmitter<any[]>();
  constructor(public router: Router, private commonService: CommonService) { }

  ngOnInit(): void {
    if(this.commonService.getItem('loggedin') === true) {
      this.loggedin = true;
    } else {
      this.loggedin = false;
    }
  }

  Toast = Swal.mixin({
    toast: true,
    position: "top",
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.onmouseenter = Swal.stopTimer;
      toast.onmouseleave = Swal.resumeTimer;
    }
  });

  detailsClicked() {
    if(this.loggedin) {
      this.router.navigate(['/overview']);
      this.commonService.setItem('tour_id',this.id);
    } else {
      this.Toast.fire({
        icon: "error",
        title: "You need to login to access"
      });
    }

  }

}
