export abstract class Sorter {
    abstract compare(currIndex: number, nextIndex: number): boolean;
    abstract swap(currIndex: number, nextIndex: number): void;
    abstract length: number;

    sort(): void {
        const { length } = this;

        for (let i = 0; i < length; i++){
            for (let j = 0; j < length -i -1; j++) {
                if(this.compare(j, j+1)){
                    this.swap(j, j+1);
                }
            }
        }
    }
}