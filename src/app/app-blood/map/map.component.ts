import { Component, OnInit } from '@angular/core';
import { Loader } from '@googlemaps/js-api-loader';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {
  lat = 51.678418;
  lng = 7.809007;
  map: google.maps.Map;
  constructor() { }

  ngOnInit() {
    let loader = new Loader({
      apiKey:'AIzaSyA3tHeCwkt4eXWSAHxWFpx2KzgVfIXfhQE'
    });
    loader.load().then(()=>{
      this.initMap();
    })
    
  }



 initMap(): void {
  this.map = new google.maps.Map(document.getElementById("map") as HTMLElement, {
    center: { lat: -34.397, lng: 150.644 },
    zoom: 8,
  });
}

}
