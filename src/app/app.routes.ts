import { RouterModule, Routes } from '@angular/router';
import { ServergamesettinggeneratorComponent } from './servergamesettinggenerator/servergamesettinggenerator.component';
import { HomepageComponent } from './homepage/homepage.component';
import { ServerhostinggeneratorComponent } from './serverhostinggenerator/serverhostinggenerator.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

export const routes: Routes = [
    { path: 'home', component:HomepageComponent},
    { path: 'game-setting-generator',     loadComponent: () => import('./serverhostinggenerator/serverhostinggenerator.component').then(m => m.ServerhostinggeneratorComponent)},
    { path: 'host-setting-generator', loadComponent: () => import('./servergamesettinggenerator/servergamesettinggenerator.component').then(m => m.ServergamesettinggeneratorComponent)},
    { path: '', redirectTo: 'home', pathMatch: 'full'}
];


