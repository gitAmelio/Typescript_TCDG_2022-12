import { MatchReader } from './MatchReader';
import { Summary } from './Summary';
import fs from 'fs';

const matchReader = MatchReader.fromCsv( 'football.csv');
const summary  = Summary.winsAnalysisWithHtmlReport('Man United');

matchReader.load();
summary.buldAndPrintReport(matchReader.matches)

const html = fs.readFileSync('report.html', {
            encoding: 'utf-8'
        })

console.log(html)        


