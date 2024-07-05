import { Component, AfterViewInit, ViewChild, ElementRef, Input } from '@angular/core';
import { Chart, ChartOptions } from 'chart.js/auto';

@Component({
  selector: 'app-glycemie-chart',
  templateUrl: './glycemie-chart.component.html',
  standalone: true,
  styleUrls: ['./glycemie-chart.component.css']
})
export class GlycemieChartComponent implements AfterViewInit {
  @ViewChild('chartCanvas') chartCanvas!: ElementRef<HTMLCanvasElement>;
  @Input() dates: string[] = []; // Entrée pour les dates
  @Input() values: number[] = []; // Entrée pour les valeurs de glycémie

  chart: Chart;

  constructor() {
    this.chart = {} as Chart;
  }
  ngAfterViewInit(): void {
    this.createChart();
  }

  createChart(): void {
    const canvas = this.chartCanvas.nativeElement;
    if (!canvas) {
      console.error('Canvas element not found in ViewChild.');
      return;
    }

    const ctx = canvas.getContext('2d');
    if (!ctx) {
      console.error('Failed to get 2D context for canvas.');
      return;
    }

    this.chart = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: this.dates,
        datasets: [{
          label: 'Glycémie',
          data: this.values,
          backgroundColor: 'rgba(0, 0, 255, 0.2)',
          borderColor: 'blue',
          borderWidth: 1
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });
  }
}
