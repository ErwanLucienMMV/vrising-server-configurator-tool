import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormControlName, ReactiveFormsModule, FormControl, FormArray } from '@angular/forms';
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
 } from '../gamesettingsinterfaces';

@Component({
  selector: 'app-serverhostinggenerator',
  standalone: true,
  imports: [ReactiveFormsModule, NgFor, NgForOf],
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

  constructor(private fb: FormBuilder) {
  }

  ngOnInit(): void {
    this.form = this.fb.group({
      GameDifficulty: [''],
      GameModeType: [''],
      CastleDamageMode: [''],
      SiegeWeaponHealth: [''],
      PlayerDamageMode: [''],
      CastleHeartDamageMode: [''],
      PvPProtectionMode: [''],
      DeathContainerPermission: [''],
      RelicSpawnType: [''],
      SoulShard_DurabilityLossRate: [1],
      CanLootEnemyContainers: [false],
      BloodBoundEquipment: [false],
      TeleportBoundItems: [false],
      BatBoundItems: [false],
      BatBoundShards: [false],
      AllowGlobalChat: [false],
      AllWaypointsUnlocked: [false],
      FreeCastleRaid: [false],
      FreeCastleClaim: [false],
      FreeCastleDestroy: [false],
      InactivityKillEnabled: [false],
      InactivityKillTimeMin: [3600],
      InactivityKillTimeMax: [604800],
      InactivityKillSafeTimeAddition: [0],
      InactivityKillTimerMaxItemLevel: [0],
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
      CastleSiegeTimer: [60],
      CastleUnderAttackTimer: [0],
      CastleRaidTimer: [60],
      CastleRaidProtectionTime: [0],
      CastleExposedFreeClaimTimer: [0],
      CastleRelocationCooldown: [0],
      CastleRelocationEnabled: [false],
      AnnounceSiegeWeaponSpawn: [false],
      ShowSiegeWeaponMapIcon: [false],
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
        this.unlockedResearchOptions.map(option => 
          new FormControl(option.value)  
        )
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
      PlayerInteractionSettings: [''],
      TraderModifiers: this.fb.group({
        StockModifier: [1.0],
        PriceModifier: [1.0],
        RestockTimerModifier: [1.0]
      }),
      WarEventGameSettings: ['']
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

  onSubmit(): void {
    console.log(JSON.stringify(this.siegeWeaponHealthOptions));
    if (this.form.valid) {
      alert('Copy and paste this in your ServerGameSettings.json:\n' + JSON.stringify(this.form.value, null, 2));
    }
  }
}
