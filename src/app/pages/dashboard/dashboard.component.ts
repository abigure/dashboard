import { Component, OnInit, Input } from '@angular/core';
import { DataDashboardService } from '../../data-dashboard.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {


  constructor(public sum_data_srv: DataDashboardService) { }

  ngOnInit() {
  }

}
