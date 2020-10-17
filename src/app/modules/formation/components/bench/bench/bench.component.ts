import { Component, OnInit } from '@angular/core';
import { FormationType } from 'src/app/models/formation-type';
import {StoreService} from 'src/app/state/store.service';
import { MatchPageDataServiceService } from 'src/app/services/match-page-data-service.service';
import { Observable, of } from 'rxjs';
import { Player } from 'src/app/models/player';


@Component({
  selector: 'app-bench',
  templateUrl: './bench.component.html',
  styleUrls: ['./bench.component.scss']
})
export class BenchComponent implements OnInit {

  constructor(private data:MatchPageDataServiceService,private store :StoreService) { }
  allFormations:Observable<FormationType[]>;
  benchPlayers:Observable<Player[]>
  showBench=false;
  ngOnInit(): void {
    this.allFormations = of(this.data.getFormationTypes()) ;
    this.data.playersList.subscribe(res=>{
      this.benchPlayers = of(res)
    })

  }
  
  setFormation(type: FormationType){
    this.store.updateFormation(type);
    this.showBench = true;
   
  }

  changePlayer(player:Player){
       this.store.setReplaceMode(player)
  }

}
