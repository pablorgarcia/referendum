import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {

  // Doughnut chart.js
  // https://valor-software.com/ng2-charts
  public doughnutChartLabels: string[] = ['Yes', 'Not', 'Not ask'];
  public doughnutChartData: number[] = [350, 450, 100]; // aqui traemos los datos del SI, NO, NO CONTESTA
  public doughnutChartType: string = 'doughnut';

//  question = 'aqui tengo que traerme el json que viene de BBDD';

  constructor(public http: Http) {}

  ngOnInit() {}


  // events chart
  public chartClicked(e: any): void {
    console.log(e);
  }

  // events chart
  public chartHovered(e: any): void {
    console.log(e);
  }

}


