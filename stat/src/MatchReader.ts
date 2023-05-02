import { dataStringToDate } from './utils';
import { EMatchResult } from './EMatchResult'
import { TMatchData } from './TMatchData'
import { CsvFileReader } from './CsvFileReader';


interface IDataReader {
    read(): void;
    data: string[];
}

export class MatchReader {
    static fromCsv(filename: string): MatchReader {
        return new MatchReader(new CsvFileReader(filename)); 
    }

    matches: TMatchData[] = [];

    constructor( public reader: IDataReader) {}

    load(): void {
        this.reader.read();
        this.matches = this.reader.data.map((row: string): TMatchData => {
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
        })
    }
}