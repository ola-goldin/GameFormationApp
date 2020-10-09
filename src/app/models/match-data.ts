
import {Player} from 'src/app/models/player'
export interface MatchDataJson {
    matchMetadata: {
        rivelName: string,
        rivelLogoImage: string
        score:{myTeam: number, rival: number},
        matchLocation: string
    }
    selectedFormation: string,
    players: {
        allPlayers:Player[],
         lineup: number[],
         bench: number[]
    }

}
