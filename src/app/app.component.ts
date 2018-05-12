import { Component, AfterViewInit, ViewChild } from '@angular/core';
import {Chart} from 'chart.js';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {

  context: CanvasRenderingContext2D;
  context2: CanvasRenderingContext2D;

  myChart = null;
  myChart2 = null;

  @ViewChild('myChart') myCanvas;
  @ViewChild('myChart2') myCanvas2;

  ngAfterViewInit() {

    const canvas = this.myCanvas.nativeElement;
    this.context = canvas.getContext('2d');

    const canvas2 = this.myCanvas2.nativeElement;
    this.context2 = canvas2.getContext('2d');

      this.myChart = new Chart(this.context, {
          type: 'bar',
          data: {
              labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
              datasets: [{
                  type: 'line',
                  label: '# of Votes',
                  data: [12, 19, 3, 5, 2, 3],
                  backgroundColor: [
                      'rgba(255, 99, 132, 0.2)',
                      'rgba(54, 162, 235, 0.2)',
                      'rgba(255, 206, 86, 0.2)',
                      'rgba(75, 192, 192, 0.2)',
                      'rgba(153, 102, 255, 0.2)',
                      'rgba(255, 159, 64, 0.2)'
                  ],
                  borderColor: 'rgba(10,255,10,0.7)',
                  pointBackgroundColor: "rgba(100,255,100,0.8)",
                  borderWidth: 1,
                  fill: false
              },
              {
                  type: 'bar',
                  label: '# of Votes',
                  data: [12, 19, 3, 5, 2, 3],
                  backgroundColor: [
                      'rgba(255, 99, 132, 0.2)',
                      'rgba(54, 162, 235, 0.2)',
                      'rgba(255, 206, 86, 0.2)',
                      'rgba(75, 192, 192, 0.2)',
                      'rgba(153, 102, 255, 0.2)',
                      'rgba(255, 159, 64, 0.2)'
                  ],
                  borderColor: [
                      'rgba(255,99,132,1)',
                      'rgba(54, 162, 235, 1)',
                      'rgba(255, 206, 86, 1)',
                      'rgba(75, 192, 192, 1)',
                      'rgba(153, 102, 255, 1)',
                      'rgba(255, 159, 64, 1)'
                  ],
                  borderWidth: 1
              }]
          },
          options: {
              responsive: false,
              scales: {
                  yAxes: [{
                      ticks: {
                          beginAtZero: true
                      }
                  }]
              }
          }
      });

      const labels = ['5/1', '5/2', '5/3', '5/4', '5/5', '5/6'];
      const highest = [12, 25.5, 3, 5, 2, 3];
      const lowest = [2, 9, -3, -5, -2, -10.8];
      const rain24h = [1.2, 1.9, 0.3, 0.5, 0.2, 0.3];
      const snow = [2, 9, 5, 0, 0, 3];

      this.myChart2 = new Chart(this.context2, {
          type: 'bar',
          data: {
              labels: labels,
              datasets: [{
                  type: 'line',
                  label: '最高気温[℃]',
                  data: highest,
                  backgroundColor: 'rgba(255,10,10,0.2)',
                  borderColor: 'rgba(255,10,10,0.5)',
                  pointBackgroundColor: "rgba(255,10,10,0.2)",
                  borderWidth: 2,
                  fill: false
              },
              {
                  type: 'line',
                  label: '最低気温[℃]',
                  data: lowest,
                  backgroundColor: 'rgba(10,10,255,0.2)',
                  borderColor: 'rgba(10,10,255,0.5)',
                  pointBackgroundColor: 'rgba(10,10,255,0.2)',
                  borderWidth: 2,
                  fill: false
              },
              {
                  type: 'bar',
                  label: '24h降水量[mm]',
                  data: rain24h,
                  backgroundColor: 'rgba(54, 162, 235, 0.2)',
                  borderColor: 'rgba(54, 162, 235, 1)',
                  borderWidth: 1
              },
              {
                  type: 'bar',
                  label: '積雪量[cm]',
                  data: snow,
                  backgroundColor: 'rgba(50, 50, 50, 0.2)',
                  borderColor: 'rgba(50, 50, 50, 1)',
                  borderWidth: 1
              }]
          },
          options: {
              responsive: false,
              scales: {
                  yAxes: [{
                      ticks: {
                          beginAtZero: false
                      }
                  }]
              }
          }
      });
    }

    test() {
        console.log('test!');
        console.log(this.myChart2.data.labels);
        for(let i=0;i<this.myChart2.data.datasets.length;i++) {
            console.log(this.myChart2.data.datasets[i].data);
        }
    }

  // レスポンシた対応がデフォルトで true になっていたのが原因みたい
  // width,height 指定しても 無視しやがる。
  // この辺参考になった
  // https://hacknote.jp/archives/31226/
  // https://obel.hatenablog.jp/entry/20160626/1466937585
}
