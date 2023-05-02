import {Circle, Fill, Stroke, Style} from 'ol/style.js';

export class MarkerStyle {

    private styles: {};
    color: [number, number, number, number];
    fill: [number, number, number, number];
    width: number;

    constructor(){
        this.styles = {};
        this.width = 3;
        this.color = [255, 255, 255, 1];
        this.fill = [255, 0, 0, 1];
        const blue = [0, 153, 255, 1];
        this.styles['Polygon'] = [
        new Style({
            fill: new Fill({
            color: [255, 255, 255, 0.5],
            }),
        }),
        ];
        this.styles['MultiPolygon'] = this.styles['Polygon'];
        this.styles['LineString'] = [
            new Style({
                stroke: new Stroke({
                    color: this.color,
                    width: this.width + 2,
                }),
            }),
            new Style({
                stroke: new Stroke({
                    color: blue,
                    width: this.width,
                }),
            }),
        ];
        this.styles['MultiLineString'] = this.styles['LineString'];
        this.styles['Circle'] = this.styles['Polygon'].concat(
             this.styles['LineString']
        );
        this.styles['Point'] = [
            new Style({
                image: new Circle({
                    radius: this.width * 2,
                    fill: new Fill({
                        color: blue,
                    }),
                    stroke: new Stroke({
                        color: this.color,
                        width: this.width / 2,
                    }),
                }),
                zIndex: Infinity,
            }),
        ];
        this.styles['BluePoint'] = this.styles['Point']
        this.styles['RedPoint'] = [
            new Style({
                image: new Circle({
                    radius: this. width * 2,
                    fill: new Fill({
                        color: this.fill,
                    }),
                    stroke: new Stroke({
                        color: this.color,
                        width: this.width / 2,
                    }),
                }),
                zIndex: Infinity,
            }),
        ];
        this.styles['MultiPoint'] = this.styles['Point'];
        this.styles['GeometryCollection'] = this.styles['Polygon'].concat(
            this.styles['LineString'],
            this.styles['Point']
        );

        
    }
    
    style(s: string): Style[] {
        return this.styles[s]
    } 

   
}