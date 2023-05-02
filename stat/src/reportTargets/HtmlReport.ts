import fs from 'fs';
import { IOutputTarget } from '../Summary' 

export class HtmlReport implements IOutputTarget {
    print(report: string): void {
        const html = `
            <div>
                <h1>Analysis Output</h1>
                <h3>${new Date()} </h3>
                <div>${report}</div>
            </div>
        `
        fs.writeFileSync('report.html', html);
    }
}