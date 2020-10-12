
import {ID} from '@datorama/akita'

import {Player} from 'src/app/models/player'
import { FormationType } from '../models/formation-type';


export interface MatchData {
    matchMetadata: {
        rivelName: string,
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

export function createStore(params: Partial<MatchData>) {
  return {

  } as MatchData;
}
