import { Component } from '@angular/core';

@Component({
    selector: 'google-map',
    templateUrl: './google-map.html',
    styleUrls: ['./google-map.css']
})
export class GoogleMapComponent{
    animate : number = 0; 
    lat: number = 18;
    lng: number = -77;
}
