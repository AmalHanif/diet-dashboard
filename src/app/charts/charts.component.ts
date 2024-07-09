import { Component, OnInit ,ViewChild,Input} from '@angular/core';
import DatalabelsPlugin from 'chartjs-plugin-datalabels';
import { ChartConfiguration, ChartData, ChartEvent, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';
@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.css']
})
export class ChartsComponent implements OnInit {
  @ViewChild(BaseChartDirective) chart: BaseChartDirective | undefined;
  @Input() fat:any = 0;
  @Input() protein:any = 0;
  @Input() carbohydrate:any = 0;

  // Pie
  public pieChartOptions: ChartConfiguration['options'] = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
        position: 'top',
      },
      datalabels: {
        formatter: (value, ctx) => {
          if (ctx.chart.data.labels) {
            return ctx.chart.data.labels[ctx.dataIndex];
          }
        },
      },
    },
  };

  public pieChartData: ChartData<'pie', number[], string | string[]> = {
    labels: [ 'Fat', 'Carbohydrate', 'Protein' ],
    datasets: [ {
      data: [ this.fat, this.carbohydrate, this.protein ],
      // backgroundColor: [ '#266a88 ','#40879a', '#74c2be'],
      // borderColor: ['rgba(250, 250, 250, 1)', 'rgba(250, 250, 250, 1)', 'rgba(250, 250, 250, 1)'],
      // hoverBackgroundColor: [  '#246886','#246886',  '#246886'],
      // hoverBorderColor: ['#13547a ', '#13547a ','#13547a'], 
      backgroundColor: [ '#3193b1', '#30cfd0','#15c9da'],
      borderColor: ['rgba(250, 250, 250, 1)', 'rgba(250, 250, 250, 1)', 'rgba(250, 250, 250, 1)'],
      hoverBackgroundColor: [  '#88e7f0','#88e7f0',  '#88e7f0'],
      hoverBorderColor: ['#13547a ', '#13547a ','#13547a'],
    } ]
  };

  public pieChartType: ChartType = 'pie';
  public pieChartPlugins = [ DatalabelsPlugin ];
 
  // events
  public chartClicked({ event, active }: { event: ChartEvent, active: {}[] }): void {
    // console.log(event, active);
  }

  public chartHovered({ event, active }: { event: ChartEvent, active: {}[] }): void {
    // console.log(event, active);
  }
  constructor() { 
  }

  ngOnInit(): void {
  }

  ngOnChanges(){
    this.pieChartData= {
      labels: [ 'Fat', 'Carbohydrate', 'Protein' ],
      
      datasets: [ {
        data: [ this.fat, this.carbohydrate, this.protein ],
        backgroundColor: [ '#3193b1', '#30cfd0','#15c9da'],
        borderColor: ['rgba(250, 250, 250, 1)', 'rgba(250, 250, 250, 1)', 'rgba(250, 250, 250, 1)'],
        hoverBackgroundColor: [  '#88e7f0','#88e7f0',  '#88e7f0'],
        hoverBorderColor: ['#13547a ', '#13547a ','#13547a'],
      } ]
    };
  }

}
