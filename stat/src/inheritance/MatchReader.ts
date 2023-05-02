import { CsvFileReader } from "./CsvFileReader";
import { dataStringToDate } from "./utils";
import { EMatchResult } from "./EMatchResult";

type TMatchData = [ Date, string, string, number, number, EMatchResult, string]

export class MatchReader extends CsvFileReader<TMatchData> {
    constructor(filename: string) {
        super(filename)
    }
    
    mapRow(row: string): TMatchData {
        const [
            dateStr,
            HomeTeam,
            AwayTeam,
            HomeWinStr,
            AwayWinStr,
            ResultStr,
            Reff,
        ] = row.split( ',');

        const date = dataStringToDate(dateStr);
        const HomeWin = parseInt(HomeWinStr);
        const AwayWin = parseInt(AwayWinStr)

        return [
            date,
            HomeTeam,
            AwayTeam,
            HomeWin,
            AwayWin,
            ResultStr as EMatchResult, // Type assertion: 'H', 'A', 'D'
            Reff
        ]
    }
}