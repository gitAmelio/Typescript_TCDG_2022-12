import Map from 'ol/Map';
import View from 'ol/View';
import Overlay from 'ol/Overlay'
import Layer from 'ol/layer/Vector';

import Source from 'ol/source/Vector';
import Point from 'ol/geom/Point'
import Feature from 'ol/Feature'
import { fromLonLat } from 'ol/proj';
import TileLayer from 'ol/layer/Tile';
import XYZ from 'ol/source/XYZ';

import { MarkerStyle } from './MarkerStyle'

export interface Mappable {
  location: {
    lat: number;
    lng: number;
  };
  markerContent(): string;
}

export class CustomMap {
    private map: Map;
    overlay: Overlay;

    key: string;
    attributions: string;

    container: HTMLElement | null;
    content: HTMLElement | null;
    closer: HTMLElement | null;

    constructor(elID: string) {
        /**
         * Elements that make up the popup.
         */
        this.container = document.getElementById('popup');
        this.content = document.getElementById('popup-content');
        this.closer = document.getElementById('popup-closer');

        /**
         * Create an overlay to anchor the popup to the map.
         */
        this.overlay = new Overlay({
          element: this.container || undefined,
          autoPan: {
            animation: {
              duration: 250,
            },
          },
        });

        /**
         * Add a click handler to hide the popup.
         * @return {boolean} Don't follow the href.
         */
        if(this.closer){
          this.closer.onclick = () => {
            this.overlay.setPosition(undefined);
            if(this.closer) this.closer.blur();
            return false;
          };
        }

        this.key = 'Get your own API key at https://www.maptiler.com/cloud/';
        this.attributions =
        '<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> ' +
        '<a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>';
      
        this.map = new Map({
          target: elID,
          layers: [
            new TileLayer({
              source: new XYZ({
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
              })
            })
          ],
          overlays: [this.overlay],
          view: new View({
            center: [0, 0],
            zoom: 1
          })
        });

        /**
         * Add a click handler to the map to render the popup.
         */
        this.map.on('click', (event) => {
          /** 
           * Get the current marker on the map that is being clicked.
           */
          const marker = this.map.forEachFeatureAtPixel(event.pixel, (feature) => {
            return feature;
          });

          if (marker) {

            const geometry = marker.getGeometry();

            console.log(geometry)


            /** 
             * Cast geometry as Point type to make the 'get' method
             * available
             */
            if(geometry instanceof Point)
            if(geometry){
              
              const coordinates = geometry.getCoordinates();

              if(this.content){
                /** 
                 * Assign popups content to the marker's info
                 */
                this.content.innerHTML = marker.get('markerContent');

                this.overlay.setPosition(coordinates);
              }
           }
          }
        });

    }

    addMarker(item: Mappable): void {

        const layer = new Layer({
            source: new Source({
                features: [
                    new Feature({
                        geometry: new Point(fromLonLat([item.location.lng, item.location.lat])),
                        /** 
                         * Assign item's info to marker's info
                         */
                        markerContent: item.markerContent(),
                    })
                ]
            }),
            style: new MarkerStyle().style('BluePoint'),

        });
        this.map.addLayer(layer);
   

    }


}
