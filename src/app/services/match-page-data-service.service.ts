import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MatchPageDataServiceService {
  
  
  constructor() { }
  
  getMyTeamdata(name:string, logo:string){
    return {
      teamName: name,
      logoImage:logo
    }
  }

  getFormationTypes() {
    return [{ id: 1, name: '4-4-2' }, { id: 2, name: '4-3-3' }, { id: 3,   name: '5-3-2' }, { id: 4,   name: '2-4-4' }, { id: 5,   name: '3-5-2' }]
        }
     
        submitMatch(matchData) {
            console.log(`matchData: ${matchData}`);
        }
    
}
