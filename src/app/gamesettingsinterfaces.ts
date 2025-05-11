  export enum GameDifficulty{
    Relaxed = '0',
    Normal = '1',
    Hard = '2'
  }
  export const GameDifficultyChoices = Object.entries(GameDifficulty).map(([key, value]) => ({label:key, value}));

  export enum GameModeType{
    PvP = "PvP",
    PvE = "PvE",
  }

  export enum CastleDamageMode{
    Never = "0",
    Always = "1",
    TimeRestricted = "2"
  }

  export const CastleDamageModeOptions = Object.entries(CastleDamageMode).map(([key, value])=> ({label:key, value}));

  export enum PlayerDamageMode{
    Always = 0,
    TimeRestricted = 1,
  }
  export const PlayerDamageModeOptions = Object.entries(CastleDamageMode).map(([key, value])=> ({label:key, value}));

  export enum SiegeWeaponHealth{
    VeryLow = '0',
    Low = '1',
    Normal = '2',
    High = '3',
    VeryHigh = '4',
    MegaHigh = '5',
    UltraHigh = '6',
    CrazyHigh = '7',
    Max = '8',
  }
  export const SiegeWeaponHealthOptions = Object.entries(SiegeWeaponHealth).map(([key, value])=> ({label:key, value}));

  export enum CastleHeartDamageMode {
    CanBeDestroyedOnlyWhenDecaying = '0', // Castle heart can only be destroyed while decaying
    CanBeDestroyedByPlayers = '1',        // Castle heart can be destroyed by players
    CanBeSeizedOrDestroyedByPlayers = '2' // Castle heart can be seized or destroyed by players
  }
  export const CastleHeartDamageModeOptions = Object.entries(CastleHeartDamageMode).map(([key, value])=> ({label:key, value}));
  
  export enum PvPProtectionMode {
    Disabled = '0',   // 0 Seconds
    VeryShort = '1',  // 900 Seconds (15 Minutes)
    Short = '2',      // 1800 Seconds (30 Minutes)
    Medium = '3',     // 3600 Seconds (1 Hour)
    Long = '4'        // 7200 Seconds (2 Hours)
  }
  export const PvPProtectionModeOptions = Object.entries(PvPProtectionMode).map(([key, value])=> ({label:key, value}));
  
  export enum DeathContainerPermission {
    Anyone = '0',       // Anyone can loot death containers
    ClanMembers = '1',  // Only clan members can loot
    OnlySelf = '2'      // Only the owner can loot
  }
  export const DeathContainerPermissionOptions = Object.entries(DeathContainerPermission).map(([key, value])=> ({label:key, value}));
  
  export enum RelicSpawnType {
    Unique = '0',     // Only one of each shard can exist
    Plentiful = '1'   // Unlimited number of shards can exist
  }
  export const RelicSpawnTypeOptions = Object.entries(RelicSpawnType).map(([key, value])=> ({label:key, value}));

  export enum PresetName {
    DuoPvP = "DuoPvP",
    DuoPvP_DailySiege = "DuoPvP_DailySiege",
    DuoPvP_NoSiege = "DuoPvP_NoSiege",
    DuoPvP_WeekendSiege = "DuoPvP_WeekendSiege",
    HardcoreDuoPvP = "HardcoreDuoPvP",
    HardcorePvP = "HardcorePvP",
    HardcoreTrioPvP = "HardcoreTrioPvP",
    Level30PvE = "Level30PvE",
    Level30PvP = "Level30PvP",
    Level40PvE = "Level40PvE",
    Level40PvP = "Level40PvP",
    Level50PvE = "Level50PvE",
    Level50PvP = "Level50PvP",
    Level60PvE = "Level60PvE",
    Level60PvP = "Level60PvP",
    Level70PvE = "Level70PvE",
    Level70PvP = "Level70PvP",
    Level80PvE = "Level80PvE",
    Level80PvP = "Level80PvP",
    Level90PvE = "Level90PvE",
    Level90PvP = "Level90PvP",
    SoloPvP = "SoloPvP",
    StandardPvE = "StandardPvE",
    StandardPvP = "StandardPvP",
    StandardPvP_DailySiege = "StandardPvP_DailySiege",
    StandardPvP_NoSiege = "StandardPvP_NoSiege",
    StandardPvP_WeekendSiege = "StandardPvP_WeekendSiege",
    TrioPvP = "TrioPvP",
    TrioPvP_DailySiege = "TrioPvP_DailySiege",
    TrioPvP_NoSiege = "TrioPvP_NoSiege",
    TrioPvP_WeekendSiege = "TrioPvP_WeekendSiege"
  }
  
  export interface VampireStatModifiers {
    MaxHealthModifier: number;
    PhysicalPowerModifier: number;
    SpellPowerModifier: number;
    ResourcePowerModifier: number;
    SiegePowerModifier: number;
    DamageReceivedModifier: number;
    ReviveCancelDelay: number;
  }
  
  export interface UnitStatModifiers {
    MaxHealthModifier: number;
    PowerModifier: number;
    LevelIncrease: number;
  }
  
  export interface EquipmentStatModifiers {
    MaxHealthModifier: number;
    ResourceYieldModifier: number;
    PhysicalPowerModifier: number;
    SpellPowerModifier: number;
    SiegePowerModifier: number;
    MovementSpeedModifier: number;
  }
  
  export interface HeartLevelSettings {
    FloorLimit: number;
    ServantLimit: number;
    HeightLimit: number;
  }
  
  export interface HeartLimits {
    Level1: HeartLevelSettings;
    Level2: HeartLevelSettings;
    Level3: HeartLevelSettings;
    Level4: HeartLevelSettings;
    Level5: HeartLevelSettings;
  }
  
  export interface CastleStatModifiers {
    TickPeriod: number;
    SafetyBoxLimit: number;
    EyeStructuresLimit: number;
    TombLimit: number;
    VerminNestLimit: number;
    PrisonCellLimit: number;
    HeartLimits: HeartLimits;
    CastleHeartLimitType: string;
    CastleLimit: number;
    NetherGateLimit: number;
    ThroneOfDarknessLimit: number;
    ArenaStationLimit: number;
    RoutingStationLimit: number;
  }
  
  export interface TimeRange {
    StartHour: number;
    StartMinute: number;
    EndHour: number;
    EndMinute: number;
  }
  
  export interface PlayerInteractionSettings {
    TimeZone: string;
    VSPlayerWeekdayTime: TimeRange;
    VSPlayerWeekendTime: TimeRange;
    VSCastleWeekdayTime: TimeRange;
    VSCastleWeekendTime: TimeRange;
  }
  
  export interface TraderModifiers {
    StockModifier: number;
    PriceModifier: number;
    RestockTimerModifier: number;
  }

  export interface GameTimeModifiers {
    DayDurationInSeconds: number;
    DayStartHour: number;
    DayStartMinute: number;
    DayEndHour: number;
    DayEndMinute: number;
    BloodMoonFrequency_Min: number;
    BloodMoonFrequency_Max: number;
    BloodMoonBuff: number;
  }
  
  export interface WarEventScaling {
    PointsModifier: number;
    DropModifier: number;
  }

  export enum UnlockedAchievements {
    CollectingTheRemains = -1770927128,
    WieldingTheSword = 436375429,
    MasteringMagic = -1400391027,
    DefensiveMeasures = -2102083739,
    HidesOfTheWild = 1566228114,
    IntoTheWoods = 1695239324,
    Gathering = -54280488,
    LordOfShadows = 1694767961,
    Fortify = -1899098914,
    Shelter = -122882616,
    GettingReadyForTheHunt = 560247139,
    BloodHunt = -1995132640,
    ThirstForPower = -302458684,
    TheFirstBookInTheLibrary = -1434604634,
    ExpandingMyDomain = 1668809517,
    BuildingACastle = 334973636,
    Waygate = 134993992,
    LordOfTheManor = 606418711,
    Servants = -892747762,
    ArmyOfDarkness = -437605270,
    BroadenHorizons = -1472413073,
    BloodOnTap = 1248242594,
    ThroneOfCommand = -327597689,
    ReignSupreme = 149111189,
    AnEyeIntoMortium = -452204266,
    ACastleReachingTheSky = 1805684941,
    NightfallSteed = -699165894,
    VampireEmpire = 1861267375,
    SoulStones = -2104585843,
    LordOfTheNight = 1762480233
  }

  export const UnlockedAchievementsOptions = Object.entries(UnlockedAchievements)
  .filter(([key]) => isNaN(Number(key))).map(([label, value]) => ({ label, value }));
  
  export enum UnlockedResearch {
    Research1 = -495424062,
    Research2 = -1292809886,
    Research3 = -1262194203
  }
  
  export const UnlockedResearchOptions = Object.entries(UnlockedResearch)
  .filter(([key]) => isNaN(Number(key))).map(([label, value]) => ({ label, value }));
  
  export interface WarEventGameSettings {
    Interval: WarEventInterval;
    MajorDuration: WarEventDuration;
    MinorDuration: number;
    WeekdayTime: TimeRange;
    WeekendTime: TimeRange;
    ScalingPlayers1: WarEventScaling;
    ScalingPlayers2: WarEventScaling;
    ScalingPlayers3: WarEventScaling;
    ScalingPlayers4: WarEventScaling;
  }

  export enum WarEventInterval{
    Minimum= '30min',
    VeryShort = '1 hour',
    Short = '1 hour 30 minutes',
    Medium = '2 hours',
    Long = '4 hours',
    VeryLong = '8 hours',
    Extensive = '12 hours',
    Maximum = '24 hours'
  }

  export enum WarEventDuration{
    Minimum= '15 minutes',
    VeryShort = '20 minutes',
    Short = '25 minutes',
    Medium = '30 minutes',
    Long = '35 minutes',
    VeryLong = '45 minutes',
    Extensive = '1 hour',
    Maximum = '2 hours'
  }

  export const warEventIntervalOptions = Object.entries(WarEventInterval).map(([key, value]) => ({ label: key, value }));
  export const warEventDurationOptions = Object.entries(WarEventDuration).map(([key, value]) => ({ label: key, value }));
  
  
  export interface GameSettings {
    GameDifficulty: GameDifficulty;
    GameModeType: GameModeType;
    CastleDamageMode: CastleDamageMode;
    SiegeWeaponHealth: SiegeWeaponHealth;
    PlayerDamageMode: PlayerDamageMode;
    CastleHeartDamageMode: CastleHeartDamageMode;
    PvPProtectionMode: PvPProtectionMode;
    DeathContainerPermission: DeathContainerPermission;
    RelicSpawnType: RelicSpawnType;
    SoulShard_DurabilityLossRate: number; //Float from 0 to 3
    CanLootEnemyContainers: boolean;  
    BloodBoundEquipment: boolean; 
    TeleportBoundItems: boolean;  
    BatBoundItems: boolean;
    BatBoundShards: boolean;
    AllowGlobalChat: boolean;
    AllWaypointsUnlocked: boolean;
    FreeCastleRaid: boolean;
    FreeCastleClaim: boolean;
    FreeCastleDestroy: boolean;
    InactivityKillEnabled: boolean;
    InactivityKillTimeMin: number; 
    InactivityKillTimeMax: number;
    InactivityKillSafeTimeAddition: number; 
    InactivityKillTimerMaxItemLevel: number;
    StartingProgressionLevel: number; //Int from 0 to 255, define which level new connected players start at
    DisableDisconnectedDeadEnabled: boolean;
    DisableDisconnectedDeadTimer: number;
    DisconnectedSunImmunityTime: number;
    InventoryStacksModifier: number; //Float from 0.25 to 3
    DropTableModifier_General: number;  //Float from 0.25 to 3
    DropTableModifier_StygianShards: number; //Float from 0.25 to 3
    DropTableModifier_Missions: number; //Float from 0.25 to 3
    MaterialYieldModifier_Global: number; //Amount of ressources that can be extracted from a single ressources Nod from 0.25 to 3
    BloodEssenceYieldModifier: number; //Amount of blood essences units drops from 0.25 to 3
    JournalVBloodSourceUnitMaxDistance: number; //Unused
    PvPVampireRespawnModifier: number; //Range 0 to 3 multiplier of the times between respawn after being killed in a PvP fight (the higher the number the longer it will take)
    CastleMinimumDistanceInFloors: number; //Unused
    ClanSize: number; //Range 1 to 50
    BloodDrainModifier: number; //Defines how fast blood reserves depletes, the higher it is the faster you starve Range 0 to 3
    DurabilityDrainModifier: number; //Defines how equipement breaks, the higher it is the faster it breaks Range 0 to 3
    GarlicAreaStrengthModifier: number;  //Range 0 to 3
    HolyAreaStrengthModifier: number; //Range 0 to 3
    SilverStrengthModifier: number; //Range 0 to 3
    SunDamageModifier: number; //Range 0 to 3
    CastleDecayRateModifier: number; //Range 0 to 3
    CastleBloodEssenceDrainModifier: number; //Range 0 to 3
    CastleSiegeTimer: number; //Range 60 to 1800 (s) define how long castle is considered siege after being struck by a siege golem
    CastleUnderAttackTimer: number; //Range 0 to 60 (s) define how long a castle is considered under attack 
    CastleRaidTimer: number; //Range 60 to 3600 (s) time during which defense are disabled through castle heart   
    CastleRaidProtectionTime: number; //Range 0 to 604 800(7 Days) (s) time during which a castle can't be raided again
    CastleExposedFreeClaimTimer: number; //Range 0 to 3600 Defines how long a castle is free to clame after being forfeited
    CastleRelocationCooldown: number; //Range 0 to 2 592 000 (30 days)
    CastleRelocationEnabled: boolean;
    AnnounceSiegeWeaponSpawn: boolean;
    ShowSiegeWeaponMapIcon: boolean;
    BuildCostModifier: number; //Range 0 to 3, 0 is basically creative while 3 is farming simulator 2025
    RecipeCostModifier: number; //Range 0 to 3, 0 is basically creative while 3 is farming simulator 2025
    CraftRateModifier: number; //Range 0 to 6, 0 is basically slow while 3 is impatient craft speed
    ResearchCostModifier: number; //Range 0 to 3, 0 is basically creative while 3 is farming simulator 2025
    RefinementCostModifier: number; //Range 0 to 3, 0 is basically creative while 3 is farming simulator 2025
    RefinementRateModifier: number; //Range 0 to 6, 0 is basically slow while 3 is impatient refinement speed
    ResearchTimeModifier: number; //Unused
    DismantleResourceModifier: number; //Range 0 to 1 define the percentage of ressources u get refunded when dismanteling a building
    ServantConvertRateModifier: number;
    RepairCostModifier: number;
    Death_DurabilityFactorLoss: number;
    Death_DurabilityLossFactorAsResources: number;
    StarterEquipmentId: number; 
    StarterResourcesId: number;
    VBloodUnitSettings: any[]; //Stopped here You can replace `any` with a more specific type if known
    UnlockedAchievements: any[];
    UnlockedResearchs: any[]; //f possible values:-495424062: Tier 1 | Tier 2: -1292809886 | Tier 3: -1262194203
    GameTimeModifiers: GameTimeModifiers;
    VampireStatModifiers: VampireStatModifiers;
    UnitStatModifiers_Global: UnitStatModifiers;
    UnitStatModifiers_VBlood: UnitStatModifiers;
    EquipmentStatModifiers_Global: EquipmentStatModifiers;
    CastleStatModifiers_Global: CastleStatModifiers;
    PlayerInteractionSettings: PlayerInteractionSettings;
    TraderModifiers: TraderModifiers;
    WarEventGameSettings: WarEventGameSettings;
  }
  
