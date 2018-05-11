import { Component, AfterViewInit, ViewChild } from '@angular/core';
import {Chart} from 'chart.js';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
//  title = 'app';
  context: CanvasRenderingContext2D;

  myChart = null;

  @ViewChild('myChart') myCanvas;

  ngAfterViewInit() {
    // myCanvas
    //  const canvas = document.getElementById('myChart');
    const canvas = this.myCanvas.nativeElement;
    this.context = canvas.getContext('2d');

    this.myChart = new Chart(this.context, {
      type: 'bar',
      data: {
          labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
          datasets: [{
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
  }

  // レスポンシた対応がデフォルトで true になっていたのが原因みたい
  // width,height 指定しても 無視しやがる。
  // この辺参考になった
  // https://hacknote.jp/archives/31226/
  // https://obel.hatenablog.jp/entry/20160626/1466937585
}
