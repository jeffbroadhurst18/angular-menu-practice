import { Component, OnInit,OnChanges } from '@angular/core';
import { Router,ActivatedRoute } from "@angular/router";
import { DataServiceService } from '../data-service.service';

@Component({
  selector: 'app-stadium',
  templateUrl: './stadium.component.html',
  styleUrls: ['./stadium.component.css']
})
export class StadiumComponent implements OnChanges,OnInit {

  constructor(private data: DataServiceService) { }

  stadium : string;
  club : string;
  capacity : string;
  picture : string;

  ngOnChanges() {
    this.populateClub();
  }

  ngOnInit() {
    this.populateClub();
  }

  ngDoCheck() {
		this.populateClub();
	}

  populateClub()
  {
    var id = this.data.selectedClub;

    switch (id) {
      case 1:
        this.club = 'Liverpool';
        this.stadium = 'Anfield';
        this.capacity = '54,074';
        this.picture = 'anfield.jpg';
        break;
      case 2:
        this.club = 'Manchester United';
        this.stadium = 'Old Trafford';
        this.capacity = '75,643';
        this.picture = 'oldtrafford.jpg';
        break;
      case 3:
        this.club = 'Arsenal';
        this.stadium = 'Emirates Stadium';
        this.capacity = '60,432';
        this.picture = 'emirates.jpg';
        break;
      case 4:
        this.club = 'Sheffield Wednesday';
        this.stadium = 'Hillsborough';
        this.capacity = '60,432';
        this.picture = 'hillsboro.jpg';
        break;
      case 5:
        this.club = 'Sheffield United';
        this.stadium = 'Bramall Lane';
        this.capacity = '32,703';
        this.picture = 'brammall-lane.jpg';
        break;  
      default:
        this.stadium = 'No club selected';
    }
  }

}
