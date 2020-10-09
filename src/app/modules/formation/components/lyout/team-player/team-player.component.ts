import { Component, Input, OnInit } from '@angular/core';
import {Player} from './../../../../../models/player';
import {playersListMock} from '../../../../../mocks/players-list-mock';
const gc = 'Goalkeeper';
@Component({
  selector: 'app-team-player',
  templateUrl: './team-player.component.html',
  styleUrls: ['./team-player.component.scss']
})


export class TeamPlayerComponent implements OnInit {
  
  constructor() { }
  @Input() isGoalkeeper = false;
  players :Player[];
  player :Player;
  ngOnInit(): void {
   
    this.players =  this.orderPlayers(playersListMock())
  } 

  setPlayer($event){
    if($event!==undefined){
      let playerI = 'player';
      this.player = $event;
      if( this.player.positionCategory == gc)playerI='goalkeeper';
      this.player.image = `../../../../../assets/${playerI}.jpg`;
    }
    
  }

  private orderPlayers(all:Player[]){
    let players = [];
    if(!this.isGoalkeeper)
    players= all.filter(x=>x.positionCategory!= gc)
    else
     players= all.filter(x=>x.positionCategory== gc)
  return  players.sort((a, b) => (a.positionCategory > b.positionCategory) ? 1 : -1)
    
  }
  


}
