import { Component, OnInit } from '@angular/core';
import { StadiumComponent } from '../stadium/stadium.component';
import { DataServiceService } from '../data-service.service';
import { Router } from '@angular/router';
import { AppRoutingModule } from '../app-routing/app-routing.module';

@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.css']
})
export class MainMenuComponent implements OnInit {

  constructor(private data: DataServiceService) { }

  ngOnInit() {
    this.data.selectedClub = 1;
  }

  setClub(club: number)
  {
    this.data.selectedClub = club;
  }

}
