import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-reviewcard',
  templateUrl: './reviewcard.component.html',
  styleUrls: ['./reviewcard.component.css']
})
export class ReviewcardComponent implements OnInit {
  @Input() reviews: any[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
