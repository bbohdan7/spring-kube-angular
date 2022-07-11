import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-alerts',
  templateUrl: './product-alerts.component.html',
  styleUrls: ['./product-alerts.component.css']
})
export class ProductAlertsComponent implements OnInit {

  @Input() public myVal = "default";

  public id: Number = 0

  constructor(private route: ActivatedRoute){

  }

  ngOnInit(): void {
    this.route.params.subscribe(param => {
      this.id = param['id']
    })
  }

}
