import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule, NgFor } from '@angular/common';
import { GameDifficultyPreset, GameDifficultyOptions } from '../game-difficulty-preset';
import { gameSettingsPresetOptions } from '../gamesettingsinterfaces';
import { MatDialog } from '@angular/material/dialog';
import { DataDisplayerComponent } from '../data-displayer/data-displayer.component';
import { ServerHostSettings } from '../server-host-settings';

@Component({
  selector: 'app-servergamesettinggenerator',
  standalone: true,
  imports: [ReactiveFormsModule, NgFor, CommonModule],
  templateUrl: './servergamesettinggenerator.component.html',
  styleUrl: './servergamesettinggenerator.component.css'
})


export class ServergamesettinggeneratorComponent {
  serverForm: FormGroup;
  difficultyOptions = GameDifficultyOptions;
  presetName = gameSettingsPresetOptions;

  constructor(private fb: FormBuilder, private dialogRef : MatDialog) {
    this.serverForm = this.fb.group({
      Name: ['ErwanMMV-MyVrisingServerName', Validators.required],
      Description: ['This is an awesome description of my server'],
      Port: [9876, [Validators.required, Validators.min(1)]],
      QueryPort: [9877, [Validators.required, Validators.min(1)]],
      MaxConnectedUsers: [40, Validators.required],
      MaxConnectedAdmins: [10, Validators.required],
      ServerFps: [30, Validators.required],
      SaveName: ['world1', Validators.required],
      Password: [''],
      Secure: [true],
      ListOnSteam: [true],
      ListOnEOS: [true],
      AutoSaveCount: [30, [Validators.required,Validators.min(1),Validators.max(1000)]],
      AutoSaveInterval: [120, Validators.required],
      CompressSaveFiles: [true],
      GameSettingsPreset: [""],
      GameDifficultyPreset: [GameDifficultyPreset.Normal],
      AdminOnlyDebugEvents: [false],
      DisableDebugEvents: [false],
      API: this.fb.group({
        Enabled: [true]
      }),
      Rcon: this.fb.group({
        Enabled: [false],
        Port: [25575],
        Password: ['']
      })
    });
  }

  onSubmit(): void {
    console.log("attempting to save data");
    if (this.serverForm.valid) {
      var formData = this.serverForm.value;
      formData.ListOnEOS = formData.ListOnSteam;
      //alert('Copy and paste this in your ServerHostSettings.json:\n' + JSON.stringify(formData, null, 2));
      let dataToDisplay = formData as ServerHostSettings;
      console.log("Before sending the dialog opener" + JSON.stringify(dataToDisplay));
      this.dialogRef.open(DataDisplayerComponent, {data: dataToDisplay })
    } else {
      alert('Please fill in all required fields.');
    }
  }
}
