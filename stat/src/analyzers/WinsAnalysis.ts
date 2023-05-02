 import { IAnalyzer } from '../Summary'
 import { TMatchData } from '../TMatchData'
 import { EIndexFor } from '../TMatchData';
 import { EMatchResult } from '../EMatchResult';

 export class WinsAnalysis implements IAnalyzer {

    constructor(public team: string){}

    run(matches: TMatchData[]): string {
        let wins = 0;

        for (let match of matches){
            if (match[EIndexFor.HomeTeam] === this.team && match[EIndexFor.Win] === EMatchResult.HomeWin) {
                wins++;
            } else 
            if (match[EIndexFor.AwayTeam] === this.team && match[EIndexFor.Win] === EMatchResult.AwayWin) {
                wins++;
            } 
        }

        return `Team ${this.team} won ${wins} times`
    }
 }