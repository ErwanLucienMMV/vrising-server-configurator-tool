import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { SeoService } from '../seo.service';

@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.css'
})
export class HomepageComponent {

  constructor(private seo:SeoService){

  }
  ngOnInit(): void{
    this.seo.updateMeta(
      'Vrising server configuration generator',
      `A tool to help you out setting up your dedicated server's config file`);
  }
}
