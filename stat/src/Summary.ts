import { TMatchData } from "./TMatchData";
import { WinsAnalysis } from "./analyzers/WinsAnalysis";
import { HtmlReport } from "./reportTargets/HtmlReport";

export interface IAnalyzer {
    run(matches: TMatchData[]): string;
}

export interface IOutputTarget {
    print(report: string): void;
}

export class Summary {
    static winsAnalysisWithHtmlReport(team:  string): Summary {
         return new Summary( new WinsAnalysis(team), new HtmlReport());    
    }

    constructor(
        public analyzer: IAnalyzer,
        public outputTarget: IOutputTarget,
    ){}

    buldAndPrintReport(matches: TMatchData[]): void {
        const output = this.analyzer.run(matches);
        this.outputTarget.print(output);
    }
}