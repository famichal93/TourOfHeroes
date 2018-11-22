import {NgModule} from '@angular/core';
import {Router, RouterModule, Routes} from '@angular/router';
import {HeroesComponent} from './heroes/heroes.component';
import {Hero} from './hero';
import {DashboardComponent} from './dashboard/dashboard.component';

const routes: Routes = [
    {path: 'heroes', component: HeroesComponent},
    {path: 'dashboard', component: DashboardComponent}
];

@NgModule({
    exports: [RouterModule],
    imports: [RouterModule.forRoot(routes)]
})
export class AppRoutingModule {
}