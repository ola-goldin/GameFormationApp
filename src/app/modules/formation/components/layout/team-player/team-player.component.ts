import {  AfterViewInit, Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import {Player} from './../../../../../models/player';

import { MatchPageDataServiceService } from 'src/app/services/match-page-data-service.service';
import { Observable, of } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { StoreService } from 'src/app/state/store.service';

const gc = 'Goalkeeper';
const path ='../../../../../assets/'
@Component({
  selector: 'app-team-player',
  templateUrl: './team-player.component.html',
  styleUrls: ['./team-player.component.scss'],

})


export class TeamPlayerComponent implements OnInit {
  
  constructor(private data:MatchPageDataServiceService,private store:StoreService) { }


  @Input() isGoalkeeper = false;
  @ViewChild('viewDropDown') vd: ElementRef;
  @ViewChild('viewSelf') vs: ElementRef;
  players :Observable<Player[]>;
  player : Player;

  ngOnInit(): void {
   // this.players= this.getFieldPlayers(); 
    
  } 


  replaceMode(playe:Player){
    this.data.playersList.next([...this.data.playersList.getValue(),this.player]) 
    this.setPlayer(this.store.getReplaceModePlayer());
    this.store.placePlayer(playe);
    this.store.setReplaceMode(null);
    
  // var z= this.vs.nativeElement.style.background = 'grey';

  }

  setPlayer($event){
   
    if($event!==undefined){
      let playerI = 'player';
      this.player = $event;
      if( this.player.positionCategory == gc)
      playerI=this.player.positionCategory.toLowerCase();
      this.player.image = `${path}${playerI}.jpg`;
      this.data.setPlayerOnField(this.player);
     
    }
    
    
  }

  setList($event){
    if(!this.isGoalkeeper)
    this.players = of(this.data.playersList.getValue().filter(x => x.positionCategory != gc));
    else{
      this.players = of(this.data.playersList.getValue().filter(x => x.positionCategory == gc)) }
  }

  // getFieldPlayers(): Observable<Player[]> {
  //   let list = [];

  //   this.store.getPlayers().subscribe(({ allPlayers }) => {
    
  //     if (!this.isGoalkeeper )
  //       list = allPlayers.filter(x => x.positionCategory != gc)
  //     else list = allPlayers.filter(x => x.positionCategory == gc)
  //   }
  //   )
     
  //   return  of(list);
  // }
   
 

}
