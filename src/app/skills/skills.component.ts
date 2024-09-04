import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {NzProgressComponent, NzProgressFormatter} from "ng-zorro-antd/progress";
import {NgForOf} from "@angular/common";
import { AgCharts } from 'ag-charts-angular';
import {AgChartOptions } from "ag-charts-community";
import {AgBarSeriesOptions, AgDonutSeriesOptions} from "ag-charts-enterprise";




@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [
    NzProgressComponent,
    NgForOf,
    AgCharts
  ],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css',
  encapsulation: ViewEncapsulation.None
})
export class SkillsComponent implements OnInit{
  public chartOptions: AgChartOptions;
  public chartOptions1: AgChartOptions;


  constructor() {
    this.chartOptions = {
      // Data: Data to be displayed in the chart
      data: [
        { name: 'HTML', percent: 0, finalPercent: 90 },
        { name: 'CSS', percent: 0, finalPercent: 90 },
        { name: 'Java', percent: 0, finalPercent: 90 },
        { name: 'JavaScript', percent: 0, finalPercent: 85 },
        { name: 'TypeScript', percent: 0, finalPercent: 85 },
        { name: 'Boostrap', percent: 0, finalPercent: 80 },
        { name: 'Angular', percent: 0, finalPercent: 80 },
        { name: 'SQL', percent: 0, finalPercent: 75 },
        { name: 'Node JS', percent: 0, finalPercent: 65 },
        { name: 'React JS', percent: 0, finalPercent: 50 },
        { name: 'Python', percent: 0, finalPercent: 20 },
      ],
      // Series: Defines which chart type and data to use
      series: [{
        type: 'bar',
        xKey: 'name',  // Define the key for the angle (values of the series)
        yKey: 'finalPercent',  // Define the key for the labels (names of the series)
        fill:'linear-gradient(to right, #23074d, #cc5333)',
      } as AgBarSeriesOptions]
    };
    this.chartOptions1 = {
      // Data: Data to be displayed in the chart
      data: [
        { name: 'Python', finalPercent: 20 },
        { name: 'React JS', finalPercent: 50 },
        { name: 'Node JS', finalPercent: 65 },
        { name: 'SQL', finalPercent: 75 },
        { name: 'Angular', finalPercent: 80 },
        { name: 'Boostrap', finalPercent: 80 },
        { name: 'JavaScript', finalPercent: 85 },
        { name: 'TypeScript', finalPercent: 85 },
        { name: 'HTML', finalPercent: 90 },
        { name: 'CSS', finalPercent: 90 },
        { name: 'Java', finalPercent: 90 },
      ],
      series: [{
        type: 'donut',
        angleKey: 'finalPercent',
        labelKey: 'name',
        innerRadiusRatio: 0.4,
        outerRadiusOffset: 0,
        calloutLabelKey: 'name',
        label: {
          enabled: true,
          fontSize: 14,
          color: '#333',
        }
      } as AgDonutSeriesOptions]
    };
  }

  ngOnInit() {}

}
