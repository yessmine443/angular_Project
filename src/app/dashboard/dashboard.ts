import { Component } from '@angular/core';
import { MemberService } from '../../services/member-service';
import { MatCardModule } from '@angular/material/card';
import { BaseChartDirective } from 'ng2-charts';
import { ChartDataset, ChartOptions } from 'chart.js';

@Component({
  selector: 'app-dashboard',
  imports: [MatCardModule, BaseChartDirective],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export class Dashboard {
  Nb_Members:number=0;
  chartData: ChartDataset[] = [
    {
      data: [] //count nbStudent,nbTeahcer
    }
  ];
  chartLabels: string[] = ['Student,Teacher']; //les types (student,teacher)
  chartOptions: ChartOptions = {};
Student: unknown[]|undefined;
  //injection de dependance 
  //ngOnInit se lance avant constructor
  constructor(private MS:MemberService){
    this.MS.GetAllMembers().subscribe((response) => {
      this.Nb_Members=response.length;
      //extraction des types 
      const types=[...new Set(response.map(e=>e.type))] //amelt set bch tnehy les duplications khatr map wahdha tkharjli kol membre type mteeo
      const count=types.map(e=>(response.filter(l=>l.type==e).length)) //taml filtrage tkharj tableau des types w ki hachtek bi count taml .length
      
      this.chartLabels=types
      this.chartData=[
        {
          data:count
        }
      ]

    });
  }


}
