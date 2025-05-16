import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { GameSettings } from '../gamesettingsinterfaces';
import { ServerHostSettings } from '../server-host-settings';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-data-displayer',
  standalone: true,
  imports: [JsonPipe],
  templateUrl: './data-displayer.component.html',
  styleUrl: './data-displayer.component.css'
})
export class DataDisplayerComponent {

  constructor(@Inject(MAT_DIALOG_DATA) public data: GameSettings | ServerHostSettings ){
    console.log("I'm trying to display data");
    console.log(JSON.stringify(data));
  }


}
