import { Component, OnInit } from '@angular/core';
import { ViewChild } from '@angular/core';
import { } from '@types/googlemaps';

@Component({
  selector: 'app-parkrun',
  templateUrl: './parkrun.component.html',
  styleUrls: ['./parkrun.component.css']
})
export class ParkrunComponent implements OnInit {

lat: number = 53.2531322;
lng: number = -2.6845829;
zoom: number = 11;
markers : marker[];
grids : marker[];
clicked : marker;
distances : distance[]
blueDot : string = 'http://maps.google.com/mapfiles/ms/icons/blue-dot.png';
purpleDot : string = 'http://maps.google.com/mapfiles/ms/icons/purple-dot.png';
yellowDot : string = 'http://maps.google.com/mapfiles/ms/icons/yellow-dot.png';
greenDot : string = 'http://maps.google.com/mapfiles/ms/icons/green-dot.png';

  constructor(){
    this.clicked = { lat: 0, lng: 0};
    this.markers = [];
    this.distances = [];
    this.grids = [];
  }

  ngOnInit() {

    this.buildMarkers();
  }

  doGrid() {
    for  (var i = 53.179; i < 53.385; i += 0.02)
      {
        for (var j = -2.967; j < -2.442; j += 0.02)
          {
            var col : string;
            var gridDist : distance[] = [];
            var gridMarker : marker = { lat:i, lng:j };
            this.markers.forEach(element => {
            var calculated = this.distanceInKmBetweenEarthCoordinates(element.lat,element.lng,gridMarker.lat,gridMarker.lng);
            gridDist.push({name:element.label, value: calculated});
          });
            gridDist.sort(function(a, b){return parseFloat(a.value)-parseFloat(b.value)})

            switch (gridDist[0].name) {
              case "Ellesmere Port":
                col = this.blueDot;
                break;
            case "Chester":
                col = this.purpleDot;
                break;
            case "Delamere":
                col = this.yellowDot;
                break;
            case "Phoenix":
                col = this.greenDot;
                break;
            case "Northwich":
                col = this.blueDot;
                break;                
              default:
                break;
            }

            this.grids.push({ lat: i, lng: j, icon: col})
          }
      }
  } 


  placeMarker($event){
    console.log($event.coords.lat);
    console.log($event.coords.lng);

    this.clicked = { lat: $event.coords.lat, lng: $event.coords.lng, label: 'Home', icon: 'http://maps.google.com/mapfiles/ms/icons/green-dot.png'}
    
    this.distances = [];
    this.markers.forEach(element => {
      var calculated = this.distanceInKmBetweenEarthCoordinates(element.lat,element.lng,this.clicked.lat,this.clicked.lng);
      this.distances.push({name:element.label, value: calculated});
    });
    this.distances.sort(function(a, b){return parseFloat(a.value)-parseFloat(b.value)})    
  }

     buildMarkers(){
     this.markers.push({ lat: 53.232987, lng: -2.6757290000000467, label: 'Delamere'});
     this.markers.push({ lat: 53.27065600311727, lng: -2.510067299999946, label: 'Northwich'});
     this.markers.push({ lat: 53.337783586132694, lng: -2.682346499999994, label: 'Phoenix'});
     this.markers.push({ lat: 53.20632502404474, lng: -2.9196915556640306, label: 'Chester'});
     this.markers.push({ lat: 53.27187508059073, lng: -2.903014999999982, label: 'Ellesmere Port'});
  }

distanceInKmBetweenEarthCoordinates(lat1, lon1, lat2, lon2) {
  var earthRadiusKm = 6371;

  var dLat = this.degreesToRadians(lat2-lat1);
  var dLon = this.degreesToRadians(lon2-lon1);

  lat1 = this.degreesToRadians(lat1);
  lat2 = this.degreesToRadians(lat2);

  var a = Math.sin(dLat/2) * Math.sin(dLat/2) +
          Math.sin(dLon/2) * Math.sin(dLon/2) * Math.cos(lat1) * Math.cos(lat2); 
  var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
  return (earthRadiusKm * c).toFixed(2);
}
  
degreesToRadians(degrees) {
  return degrees * Math.PI / 180;
}

}

// just an interface for type safety.
interface marker {
	lat: number;
	lng: number;
  label?: string;
  icon?:string;
}

interface distance {
  name: string;
  value : string;
}