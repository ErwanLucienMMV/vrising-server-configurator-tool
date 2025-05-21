import { Injectable } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class SeoService {
  private baseUrl = window.location.origin;
  private imagePath = `${this.baseUrl}/assets/Vrising configurator tool logo.png`
  constructor(private titleService: Title, private metaService: Meta) {}

  updateMeta(
    title: string,
    description: string,
    options?: {
      image?: string;
      url?: string;
    })
    {

      var fullUrl = this.baseUrl+options?.url;
  
      this.titleService.setTitle(title);

      // Met à jour les meta tags classiques
      this.metaService.updateTag({ name: 'description', content: description });
      this.metaService.updateTag({ name: 'robots', content: 'index, follow' });
  
      // Open Graph (Facebook, Discord…)
      this.metaService.updateTag({ property: 'og:title', content: title });
      this.metaService.updateTag({ property: 'og:description', content: description });

      this.metaService.updateTag({ property: 'og:image', content: this.imagePath });

      if (options?.url) {
        this.metaService.updateTag({ property: 'og:url', content: fullUrl });
      }
  
      // Twitter Cards
      this.metaService.updateTag({ name: 'twitter:card', content: 'summary_large_image' });
      this.metaService.updateTag({ name: 'twitter:title', content: title });
      this.metaService.updateTag({ name: 'twitter:description', content: description });

      this.metaService.updateTag({ name: 'twitter:image', content: this.imagePath });
      
    }
    
}
