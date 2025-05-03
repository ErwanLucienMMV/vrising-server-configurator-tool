export enum GameDifficultyPreset {
    Custom = '',
    Easy = 'Easy',
    Normal = 'Normal',
    Brutal = 'Brutal'
}

export const GameDifficultyOptions = Object.entries(GameDifficultyPreset)
  .map(([key, value]) => ({ label: key, value }));
