import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainMenuComponent } from '../main-menu/main-menu.component';
import { StadiumComponent} from '../stadium/stadium.component';
import { ParkrunComponent} from '../parkrun/parkrun.component';

    const routes: Routes = [
        { path: '', redirectTo: 'home', pathMatch: 'full' },
        { path: 'home', component: StadiumComponent },
        { path: 'parkrun', component: ParkrunComponent }
    ];

    @NgModule({
        imports: [
            RouterModule.forRoot(routes)
        ],
        exports: [
            RouterModule
        ],
        declarations: []
    })
    export class AppRoutingModule { }