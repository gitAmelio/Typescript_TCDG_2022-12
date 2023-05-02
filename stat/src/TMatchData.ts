import { EMatchResult } from "./EMatchResult"

/** 
 * 1. Date
 * 2. Home Team
 * 3. Away Team
 * 4. Home team goals
 * 5. Away team goals
 * 6. Win
 * 7. Reff
 */


export type TMatchData = [ 
    Date, 
    string, 
    string, 
    number, 
    number, 
    EMatchResult, 
    string
]

export enum EIndexFor {
    Date = 0,
    HomeTeam = 1,
    AwayTeam = 2,
    HTGaols = 3,
    ATGaols = 4,
    Win = 5,
    Reff = 6
} 