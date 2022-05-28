import { Component, Input, OnInit } from '@angular/core';
import { Scheme } from 'src/app/classes/scheme';
import { DatePipe } from '@angular/common';
import { SchemeHelper } from 'src/app/classes/scheme-helper';
import { LegendPosition } from '@swimlane/ngx-charts';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})
export class ChartComponent implements OnInit {
  @Input() chartData: any[] = [
    {
      "name": "Germany",
      "series": [
        {
          "name": "1990",
          "value": 62000000
        },
        {
          "name": "2010",
          "value": 73000000
        },
        {
          "name": "2011",
          "value": 89400000
        }
      ]
    }
  ];
  @Input() chartFields!: string[];
  @Input() chartDataNames!: string [];
  data!: any[];
  displayedData!: any[];
  view: [number, number] = [700, 300];

  // options
  legend: boolean = false;
  showLabels: boolean = true;
  animations: boolean = true;
  xAxis: boolean = true;
  yAxis: boolean = true;
  showYAxisLabel: boolean = false;
  showXAxisLabel: boolean = false;
  xAxisLabel: string = 'Time';
  yAxisLabel: string = 'Value';
  timeline: boolean = true;
  autoScale: boolean = true;
  legendPosition: LegendPosition = LegendPosition.Below;

  finishedSetting: boolean = false;

  scheme = new Scheme();
  schemeHelper = new SchemeHelper();

  constructor(
    private datePipe: DatePipe
  ) {
  }

  ngOnInit(): void {
    console.log(this.chartData);
    if (this.data === undefined) {
      this.data = [];
    }
    this.chartData.forEach((chartItem, itemIndex) => {
      console.log(chartItem);
      this.chartFields.forEach((chartField, fieldIndex) => {
        console.log(chartField);
        const chartFieldIndex = this.data.findIndex(object => {if(object.name === chartField) {return true} else {return false}});
        if (chartFieldIndex === -1) {
          const chartFieldLength = this.data.push({
            name: chartField,
            series: []
          });
          this.data[chartFieldLength - 1].series.push({
            name: chartItem.date,
            // name: chartItem.date,
            value: chartItem[chartField]
          });
        } else {
          this.data[chartFieldIndex].series.push({
            name: chartItem.date,
            // name: chartItem.date,
            value: chartItem[chartField]
          });
        }
        if (this.chartFields.length - 1 === fieldIndex && this.chartData.length - 1 === itemIndex) {
          this.finishedSetting = true;
          this.displayedData = this.data;
          this.chartFields.forEach((chartField: string, index: number) => {
            if (index > 0) {
              this.toggleChartField(chartField);
            }
          });
        }
      });
    });
  }
  formatDate(UNIX_timestamp: number){
    var a = new Date(UNIX_timestamp * 1000);
    var year = a.getFullYear();
    var month = a.getMonth();
    var date = a.getDate();
    var time = date + '/' + month + '/' + year;
    return time;
  }
  removeYAxis(UNIX_timestamp: number){
    return '';
  }
  
  onLabelClick(event: string, data: any) {
    console.log(event);
  }
  toggleChartField(chartField: string) {
    const chartFieldIndex = this.displayedData.findIndex(object => {if(object.name === chartField) {return true} else {return false}});
    if (chartFieldIndex === -1) {
      return;
    } else {
      if (this.data[chartFieldIndex].series[0].value !== 0) {
        this.data[chartFieldIndex].series.forEach((itemInSeries: any) => {
          itemInSeries.value = 0;
        })
        this.displayedData = [...this.data];
      } else {
        this.data[chartFieldIndex].series.forEach((itemInSeries: any, index: number) => {
          itemInSeries.value = this.chartData[index][chartField];
        })
        this.displayedData = [...this.data];
      }
    }
  }
  onSelect(event: string) {
  }

  onActivate(data: any): void {
    console.log('Activate', JSON.parse(JSON.stringify(data)));
  }

  onDeactivate(data: any): void {
    console.log('Deactivate', JSON.parse(JSON.stringify(data)));
  }
}