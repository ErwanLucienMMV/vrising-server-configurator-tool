export enum GameDifficultyPreset {
    Custom = '',
    Easy = '0',
    Normal = '1',
    Brutal = '2'
}

export const GameDifficultyOptions = Object.entries(GameDifficultyPreset)
  .map(([key, value]) => ({ label: key, value }));
