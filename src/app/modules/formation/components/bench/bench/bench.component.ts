import { Component, OnInit } from '@angular/core';
import { FormationType } from 'src/app/models/formation-type';
import { MatchPageDataServiceService } from 'src/app/services/match-page-data-service.service';

@Component({
  selector: 'app-bench',
  templateUrl: './bench.component.html',
  styleUrls: ['./bench.component.scss']
})
export class BenchComponent implements OnInit {

  constructor(private data:MatchPageDataServiceService) { }
  allFormations;
  currentFormation;

  ngOnInit(): void {
    this.allFormations = this.data.getFormationTypes();
  }
  
  setFormation(type: FormationType){
   this.currentFormation = type.name.split('-').map(Number);
  }
}
