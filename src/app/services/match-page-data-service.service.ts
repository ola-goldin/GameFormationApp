import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { playersListMock } from 'src/app/mocks/players-list-mock';
import { Player } from '../models/player';
import { StoreService } from '../state/store.service';

@Injectable({
  providedIn: 'root'
})
export class MatchPageDataServiceService {
 

  public playersList= new BehaviorSubject<Player[]> (null);
 
  constructor(private store: StoreService) {
    this.store.setPlayers(this.sortPlayers(playersListMock()));
    this.playersList.next(this.sortPlayers(playersListMock()))
  }


  getMyTeamdata(name: string, logo: string) {
    return {
      teamName: name,
      logoImage: logo
    }
  }

  getFormationTypes() {
    return [{ id: 1, name: '4-4-2' }, { id: 2, name: '4-3-3' }, { id: 3, name: '5-3-2' }, { id: 4, name: '2-4-4' }, { id: 5, name: '3-5-2' }]
  }
 
  sortPlayers(list :Player[]):Player[]{
   return list.sort(function(a,b) {
      var x = a.positionCategory.toLowerCase();
      var y = b.positionCategory.toLowerCase();
      return x < y ? -1 : x > y ? 1 : 0;
  })
  }

  submitMatch(matchData) {
    console.log(`matchData: ${matchData}`);
  }

  setPlayerOnField(player:Player){
     const all = this.playersList.getValue();
     const filtered =all.filter(x=>x.id!=player.id)
     this.playersList.next(this.sortPlayers(filtered))
      this.store.placePlayer(player);
  }








}
