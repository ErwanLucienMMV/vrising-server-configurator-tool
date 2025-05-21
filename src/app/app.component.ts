import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { NgFor } from '@angular/common';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { Meta, Title } from '@angular/platform-browser';
import { SeoService } from './seo.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive, NgFor, MatDialogModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  constructor(private meta: Meta, private titleService: Title,private seo: SeoService) { 
  }

  ngOnInit(): void{
    this.seo.updateMeta(
      'Vrising server configurator tool',
      'A tool to help you out setting up your dedicated config files');
  }
  
  title = 'vrising-server-configurator-tool';
}
