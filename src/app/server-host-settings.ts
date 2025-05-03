import { GameDifficultyPreset } from "./game-difficulty-preset"

export interface ServerHostSettings {
    Name: string,
    Description: string
    Port: number,
    QueryPort: number,
    MaxConnectedUsers: number,
    MaxConnectedAdmins: number,
    ServerFps: number,
    SaveName: string,
    Password: string,
    Secure: boolean,
    ListOnSteam: boolean,
    ListOnEOS: boolean,
    AutoSaveCount: number,
    AutoSaveInterval: number,
    CompressSaveFiles: boolean,
    GameSettingsPreset: string,
    GameDifficultyPreset: GameDifficultyPreset,
    AdminOnlyDebugEvents: boolean,
    DisableDebugEvents: boolean,
    API: {
        Enabled: boolean
    },
    Rcon: {
    Enabled: boolean,
    Port: boolean,
    Password: string
  }
}
