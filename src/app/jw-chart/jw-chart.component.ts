import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import {Chart} from 'chart.js';

@Component({
  selector: 'app-jw-chart',
  templateUrl: './jw-chart.component.html',
  styleUrls: ['./jw-chart.component.css']
})
export class JwChartComponent implements OnInit, AfterViewInit {
  
  context: CanvasRenderingContext2D;

  myChart = null;

  @ViewChild('myChart') myCanvas;

  labels = ['5/1', '5/2', '5/3', '5/4', '5/5', '5/6'];
  highest = [12, 25.5, 3, 5, 2, 3];
  lowest = [2, 9, -3, -5, -2, -10.8];
  rain24h = [1.2, 1.9, 0.3, 0.5, 0.2, 0.3];
  snow = [20, 190, 120, 0, 18, 3];

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {
        const canvas = this.myCanvas.nativeElement;
        this.context = canvas.getContext('2d');

        this.myChart = new Chart(this.context, {
            type: 'bar',
            data: {
                labels: this.labels,
                datasets: [{
                    type: 'line',
                    label: '最高気温[℃]',
                    data: this.highest,
                    backgroundColor: 'rgba(255,10,10,0.2)',
                    borderColor: 'rgba(255,10,10,0.5)',
                    pointBackgroundColor: "rgba(255,10,10,0.2)",
                    borderWidth: 2,
                    fill: false,
                    yAxisID: "y-axis-1",
                },
                {
                    type: 'line',
                    label: '最低気温[℃]',
                    data: this.lowest,
                    pointStyle: 'triangle',
                    backgroundColor: 'rgba(10,10,255,0.2)',
                    borderColor: 'rgba(10,10,255,0.5)',
                    pointBackgroundColor: 'rgba(10,10,255,0.2)',
                    borderWidth: 2,
                    fill: false,
                    yAxisID: "y-axis-1",
                },
                {
                    type: 'bar',
                    label: '24h降水量[mm]',
                    data: this.rain24h,
                    backgroundColor: 'rgba(54, 162, 235, 0.2)',
                    borderColor: 'rgba(54, 162, 235, 1)',
                    borderWidth: 1,
                    yAxisID: "y-axis-2",
                },
                {
                    type: 'bar',
                    label: '積雪量[cm]',
                    data: this.snow,
                    backgroundColor: 'rgba(50, 50, 50, 0.2)',
                    borderColor: 'rgba(50, 50, 50, 1)',
                    borderWidth: 1,
                    yAxisID: "y-axis-2",
                }]
            },
            options: {
                responsive: false,
                title: {
                    display: true,
                    text: 'XXX の　情報',
                },
                legend: {
                    position: 'bottom',
                    labels: {
                        boxWidth: 20,
                    }
                },
                scales: {
                    yAxes: [{
                        id: "y-axis-1",   // Y軸のID
                        type: "linear",   // linear固定 
                        position: "left", // どちら側に表示される軸か？
                        ticks: {          // スケール
                            max: 35,
                            min: -30,
                            stepSize: 5
                        },
                    }, {
                        id: "y-axis-2",
                        type: "linear",
                        position: "right",
                        ticks: {
                            max: 300,
                            min: 0,
                            stepSize: 100
                        },
                        gridLines: {
                            drawOnChartArea: false,
                        },
                    }],
                }
            }
        });

  }
}
