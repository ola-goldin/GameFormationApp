
import {Player} from 'src/app/models/player'
import { FormationType } from 'src/app/models/formation-type';
export interface Match {
    matchMetadata: {
        rivelName: string
        rivelLogoImage: string
        score:{myTeam: number, rival: number},
        matchLocation: string
    }
    selectedFormation: FormationType,
    players: {
        allPlayers:Player[],
         lineup: number[],
         bench: number[]
    }
  
   

}
