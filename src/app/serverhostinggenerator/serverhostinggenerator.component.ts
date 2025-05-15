import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormControlName, ReactiveFormsModule, FormControl, FormArray, Validators } from '@angular/forms';
import { NgFor, NgForOf } from '@angular/common';
import {
  GameDifficultyChoices,
  GameModeType,
  CastleDamageModeOptions,
  SiegeWeaponHealthOptions,
  PlayerDamageModeOptions,
  CastleHeartDamageModeOptions,
  PvPProtectionModeOptions,
  DeathContainerPermissionOptions,
  RelicSpawnTypeOptions,
  VampireStatModifiers,
  UnitStatModifiers,
  EquipmentStatModifiers,
  HeartLevelSettings,
  HeartLimits,
  CastleStatModifiers,
  TimeRange,
  PlayerInteractionSettings,
  TraderModifiers,
  GameTimeModifiers,
  WarEventScaling,
  WarEventGameSettings,
  UnlockedAchievementsOptions,
  UnlockedResearch,
  UnlockedResearchOptions,
  UnlockedAchievements,
  warEventDurationOptions,
  warEventIntervalOptions,
  WarEventInterval,
  WarEventDuration,
  StarterEquipmentId,
  StarterEquipmentIdOptions,
  StarterResourceIdOptions,
 } from '../gamesettingsinterfaces';
 import { NgSelectModule } from '@ng-select/ng-select';

@Component({
  selector: 'app-serverhostinggenerator',
  standalone: true,
  imports: [ReactiveFormsModule, NgFor, NgForOf, NgSelectModule],
  templateUrl: './serverhostinggenerator.component.html',
  styleUrl: './serverhostinggenerator.component.css'
})
export class ServerhostinggeneratorComponent {
  form!: FormGroup;

  gameDifficultyOptions = GameDifficultyChoices;
  gameModeOptions = Object.values(GameModeType).map(v => ({ label: v, value: v }));
  castleDamageModeOptions = CastleDamageModeOptions;
  siegeWeaponHealthOptions = SiegeWeaponHealthOptions;
  playerDamageModeOptions = PlayerDamageModeOptions;
  castleHeartDamageModeOptions = CastleHeartDamageModeOptions;
  pvpProtectionModeOptions = PvPProtectionModeOptions;
  deathContainerPermissionOptions = DeathContainerPermissionOptions;
  relicSpawnTypeOptions = RelicSpawnTypeOptions;
  unlockedAchievementsOptions = UnlockedAchievementsOptions;
  unlockedResearchOptions = UnlockedResearchOptions;
  warEventIntervalOptions = warEventIntervalOptions;
  warEventDurationOptions = warEventDurationOptions;
  starterEquipementIdOptions = StarterEquipmentIdOptions;
  starterResourceIdOptions = StarterResourceIdOptions;

  constructor(private fb: FormBuilder) {
  }

  ngOnInit(): void {
    this.form = this.fb.group({
      GameDifficulty: [0],
      GameModeType: ["PvP"],
      CastleDamageMode: [0],
      SiegeWeaponHealth: [2],
      PlayerDamageMode: [1],
      CastleHeartDamageMode: [0],
      PvPProtectionMode: [3],
      DeathContainerPermission: [2],
      RelicSpawnType: [1],
      SoulShard_DurabilityLossRate: [1],
      CanLootEnemyContainers: [true],
      BloodBoundEquipment: [true],
      TeleportBoundItems: [true],
      BatBoundItems: [false],
      BatBoundShards: [false],
      AllowGlobalChat: [true],
      AllWaypointsUnlocked: [false],
      FreeCastleRaid: [false],
      FreeCastleClaim: [false],
      FreeCastleDestroy: [false],
      InactivityKillEnabled: [false],
      InactivityKillTimeMin: [3600],
      InactivityKillTimeMax: [604800], 
      InactivityKillSafeTimeAddition: [0],
      InactivityKillTimerMaxItemLevel: new FormControl(84, [Validators.min(0), Validators.max(255)]), //Start putting validators from here
      StartingProgressionLevel: [0],
      DisableDisconnectedDeadEnabled: [false],
      DisableDisconnectedDeadTimer: [0],
      DisconnectedSunImmunityTime: [0],
      InventoryStacksModifier: [1],
      DropTableModifier_General: [1],
      DropTableModifier_StygianShards: [1],
      DropTableModifier_Missions: [1],
      MaterialYieldModifier_Global: [1],
      BloodEssenceYieldModifier: [1], 
      JournalVBloodSourceUnitMaxDistance: 25,
      CastleMinimumDistanceInFloors: 2,
      PvPVampireRespawnModifier: [1],
      ClanSize: [4],
      BloodDrainModifier: [1],
      DurabilityDrainModifier: [1],
      GarlicAreaStrengthModifier: [1],
      HolyAreaStrengthModifier: [1],
      SilverStrengthModifier: [1], //
      SunDamageModifier: [1],
      CastleDecayRateModifier: [1],
      CastleBloodEssenceDrainModifier: [1],
      CastleSiegeTimer: [420],
      CastleUnderAttackTimer: [300],
      CastleRaidTimer: [60],
      CastleRaidProtectionTime: [600],
      CastleExposedFreeClaimTimer: [0],
      CastleRelocationCooldown: [60],
      CastleRelocationEnabled: [true],
      AnnounceSiegeWeaponSpawn: [true],
      ShowSiegeWeaponMapIcon: [true],
      BuildCostModifier: [1],
      RecipeCostModifier: [1],
      CraftRateModifier: [1],
      ResearchCostModifier: [1],
      RefinementCostModifier: [1],
      RefinementRateModifier: [1],
      ResearchTimeModifier: [1],
      DismantleResourceModifier: [1],
      ServantConvertRateModifier: [1],
      RepairCostModifier: [1],
      Death_DurabilityFactorLoss: [1],
      Death_DurabilityLossFactorAsResources: [1],
      StarterEquipmentId: [0],
      StarterResourcesId: [0],
      VBloodUnitSettings: [],  
      UnlockedAchievements: this.fb.array(
        this.unlockedAchievementsOptions.map(unlockedAchievementsOptions => 
          new FormControl(false) 
        )
      ),
      UnlockedResearchs: this.fb.array(
        this.unlockedResearchOptions.map(() => new FormControl(false)) 
      ), 
      GameTimeModifiers: this.fb.group({
        DayDurationInSeconds: [1080.0],
        DayStartHour: [9],
        DayStartMinute: [0],
        DayEndHour: [17],
        DayEndMinute: [0],
        BloodMoonFrequency_Min: [10],
        BloodMoonFrequency_Max: [18],
        BloodMoonBuff: [0.2]
      }),
      VampireStatModifiers: this.fb.group({
        MaxHealthModifier: [1.0],
        PhysicalPowerModifier: [1.0],
        SpellPowerModifier: [1.0],
        ResourcePowerModifier: [1.0],
        SiegePowerModifier: [1.0],
        DamageReceivedModifier: [1.0],
        ReviveCancelDelay: [5.0]
      }),
      UnitStatModifiers_Global: this.fb.group({
        MaxHealthModifier: [1.0],
        PowerModifier: [1.0],
        LevelIncrease: [0]
      }),
      UnitStatModifiers_VBlood: this.fb.group({
        MaxHealthModifier: [1.0],
        PowerModifier: [1.0],
        LevelIncrease: [0]
      }),
      EquipmentStatModifiers_Global: this.fb.group({
        MaxHealthModifier: [1.0],
        ResourceYieldModifier: [1.0],
        PhysicalPowerModifier: [1.0],
        SpellPowerModifier: [1.0],
        SiegePowerModifier: [1.0],
        MovementSpeedModifier: [1.0]
      }),
      CastleStatModifiers_Global: this.fb.group({
        TickPeriod: [5.0],
        SafetyBoxLimit: [1],
        EyeStructuresLimit: [1],
        TombLimit: [12],
        VerminNestLimit: [4],
        PrisonCellLimit: [24],
        HeartLimits: this.fb.group({
          Level1: this.fb.group({
            FloorLimit: [50],
            ServantLimit: [1],
            HeightLimit: [3]
          }),
          Level2: this.fb.group({
            FloorLimit: [140],
            ServantLimit: [3],
            HeightLimit: [3]
          }),
          Level3: this.fb.group({
            FloorLimit: [240],
            ServantLimit: [5],
            HeightLimit: [3]
          }),
          Level4: this.fb.group({
            FloorLimit: [360],
            ServantLimit: [7],
            HeightLimit: [3]
          }),
          Level5: this.fb.group({
            FloorLimit: [550],
            ServantLimit: [8],
            HeightLimit: [3]
          })
        }),
        CastleHeartLimitType: ['User'],
        CastleLimit: [2],
        NetherGateLimit: [1],
        ThroneOfDarknessLimit: [1],
        ArenaStationLimit: [5],
        RoutingStationLimit: [10]
      }),
      PlayerInteractionSettings: this.fb.group({
        TimeZone: ['Local'],
        VSPlayerWeekdayTime: this.fb.group({
          StartHour: [0],
          StartMinute: [0],
          EndHour: [23],
          EndMinute: [59]
        }),
        VSPlayerWeekendTime: this.fb.group({
          StartHour: [0],
          StartMinute: [0],
          EndHour: [23],
          EndMinute: [59]
        }),
        VSCastleWeekdayTime: this.fb.group({
          StartHour: [0],
          StartMinute: [0],
          EndHour: [23],
          EndMinute: [59]
        }),
        VSCastleWeekendTime: this.fb.group({
          StartHour: [0],
          StartMinute: [0],
          EndHour: [23],
          EndMinute: [59]
        }),
      }),
      TraderModifiers: this.fb.group({
        StockModifier: [1.0],
        PriceModifier: [1.0],
        RestockTimerModifier: [1.0]
      }),
      WarEventGameSettings: this.fb.group({
        Interval: [WarEventInterval.Minimum],
        MajorDuration: [WarEventDuration.Minimum],
        MinorDuration: [WarEventDuration.Minimum],
        WeekdayTime: this.fb.group({
          StartHour: [0],
          StartMinute: [0],
          EndHour: [23],
          EndMinute: [59]
        }),
        WeekendTime: this.fb.group({
          StartHour: [0],
          StartMinute: [0],
          EndHour: [23],
          EndMinute: [59]
        }),
        ScalingPlayers1: this.fb.group({
          PointsModifier: [1.0],
          DropModifier: [1.0]
        }),
        ScalingPlayers2: this.fb.group({
          PointsModifier: [1.0],
          DropModifier: [1.0]
        }),
        ScalingPlayers3: this.fb.group({
          PointsModifier: [1.0],
          DropModifier: [1.0]
        }),
        ScalingPlayers4: this.fb.group({
          PointsModifier: [1.0],
          DropModifier: [1.0]
        })
      })
    });

 
  }

  get unlockedAchievementsControl() {
    return (this.form.get('UnlockedAchievements') as FormArray);
  }

  // Getter pour l'accès aux éléments du tableau "UnlockedAchievements"
  get unlockedAchievements() {
    return this.unlockedAchievementsControl.controls;
  }

  getControl(index: number): FormControl {
    return this.unlockedAchievementsControl.at(index) as FormControl;
  }

  appendResults(optionsValue: {label: string;value: string|UnlockedAchievements|UnlockedResearch}[], ArrayOfStatus:boolean [] ){
    var result: (string | UnlockedAchievements | UnlockedResearch)[] = [];
    var i = 0
    ArrayOfStatus.forEach((value) =>
    {
      if (value == true){
        result.push(optionsValue[i].value)
      }
      i+=1
    }
    )
    return result;
  }

  onSubmit(): void {
    this.form.value.UnlockedAchievements = this.appendResults(this.unlockedAchievementsOptions,this.form.value.UnlockedAchievements);
    this.form.value.UnlockedResearch = this.appendResults(this.unlockedResearchOptions, this.form.value.UnlockedResearchs); 
    if (this.form.valid) {
      alert('Copy and paste this in your ServerGameSettings.json:\n' + JSON.stringify(this.form.value, null, 2));
    }
    else {
      const errors: string[] = [];
  
      Object.keys(this.form.controls).forEach(key => {
        const control = this.form.get(key);
        if (control && control.invalid) {
          const controlErrors = control.errors;
          if (controlErrors) {
            Object.keys(controlErrors).forEach(errorKey => {
              switch (errorKey) {
                case 'required':
                  errors.push(`${key} is required.`);
                  break;
                case 'min':
                  errors.push(`${key} is below the minimal value (${controlErrors['min'].min}).`);
                  break;
                case 'max':
                  errors.push(`${key} is greater than the max value (${controlErrors['max'].max}).`);
                  break;
                case 'pattern':
                  errors.push(`${key} is not fitting the format.`);
                  break;
                default:
                  errors.push(`${key} have an error of type "${errorKey}".`);
              }
            });
          }
        }
      });
  
      alert('The form contains errors :\n' + errors.join('\n'));
    }
  }
}
