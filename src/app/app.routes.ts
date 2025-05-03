import { Routes } from '@angular/router';
import { ServergamesettinggeneratorComponent } from './servergamesettinggenerator/servergamesettinggenerator.component';
import { HomepageComponent } from './homepage/homepage.component';
import { ServerhostinggeneratorComponent } from './serverhostinggenerator/serverhostinggenerator.component';

export const routes: Routes = [
    { path: 'home', component: HomepageComponent},
    { path: 'host-setting-generator', component: ServerhostinggeneratorComponent},
    { path: 'game-setting-generator', component: ServergamesettinggeneratorComponent},
    { path: '', component: HomepageComponent}
];
