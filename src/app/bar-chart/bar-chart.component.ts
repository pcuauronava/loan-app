import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';


@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.scss']
})
export class BarChartComponent implements OnInit {
  public chart: any = null;
  createChart() {
    this.chart = new Chart("MyChart", {
      type: 'bar', //this denotes tha type of chart
      data: {// values on X-Axis
        labels: ['October 2023', 'November 2023', '2022-05-12','2022-05-13',
								 '2022-05-14', '2022-05-15', '2022-05-16','2022-05-17', ], 
	       datasets: [
          {
            label: "Interest",
            data: ['96.67','95.93', '95.18', '94.42', '93.63',
								 '92.82', '92.00', '91.15'],
            backgroundColor: 'orange'
          },
          {
            label: "Principal",
            data: ['30.30','31.04', '31.79', '32.55', '33.34', '34.15', '34.97', '35.82'],
            backgroundColor: 'red'
          }  
        ]
      },
      options: {
        aspectRatio:2.5
      }   
    });
  }
  ngOnInit(): void {
   this.createChart(); 
  }
}
