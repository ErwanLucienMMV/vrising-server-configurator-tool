import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule, NgFor } from '@angular/common';
import { GameDifficultyPreset, GameDifficultyOptions } from '../game-difficulty-preset';
import { gameSettingsPresetOptions } from '../gamesettingsinterfaces';

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

  constructor(private fb: FormBuilder) {
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
      alert('Copy and paste this in your ServerHostSettings.json:\n' + JSON.stringify(formData, null, 2));
    } else {
      alert('Please fill in all required fields.');
    }
  }
}
