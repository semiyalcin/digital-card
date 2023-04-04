import 'zone.js/dist/zone';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { bootstrapApplication } from '@angular/platform-browser';
import { DunyaComponent } from './dunya/dunya.component';

@Component({
  selector: 'my-app',
  standalone: true,
  imports: [CommonModule, DunyaComponent],
  styles: [
    `
    .wrapper {
      display: flex;
    }
    
    @media (max-width: 600px) {
      .wrapper {
        display: block;
      }
    }
    
  `,
  ],
  template: `
  <div class='wrapper'>   
    <app-dunya
    [title]="title"
    [subTitle]="subTitle"
    [content]="content"
    [paths]='paths'
    [cardStyle] = 'cardStyle1'
    ></app-dunya>
    <app-dunya
    [title]="title2"
    [subTitle]="subTitle2"
    [content]="content2"
    [paths]='paths2'
    [cardStyle] = 'cardStyle2'
    ></app-dunya>
  </div>
  `,
})
export class App {
  name = 'Angular';
  title = "Bi' Dünya Fırsat";
  subTitle = "Bi' Dünya Fırsat Seni Bekliyor";
  content =
    'Türk Telekom’un sizler için sunduğu indirim ve avantajlardan hemen yararlan!';
  paths = [
    'assets/dr.svg',
    'assets/flo.svg',
    'assets/arzum.svg',
    'assets/vivense.svg',
    'assets/setur.svg',
    'assets/arrow.svg',
  ];
  cardStyle1 = 'linear-gradient(90deg, #002855, #0c0c0c)';

  title2 = 'Dijital Servisler';
  subTitle2 = 'Dijital Servislerimizi Keşfedin';
  content2 =
    "Eğlenceden oyuna, eğitimden kişisel gelişime, zengin içerikli birçok ürün Türk Telekom Dijital Servis Paketleri'nde bir arada.";
  paths2 = [
    'assets/dijital-depo.svg',
    'assets/muud.svg',
    'assets/mcafee.svg',
    'assets/tt-wifi.svg',
    'assets/vitamin.svg',
    'assets/arrow2.svg',
  ];
  cardStyle2 = 'linear-gradient(90deg, #2476EE, #A217BF)';
}

bootstrapApplication(App);
