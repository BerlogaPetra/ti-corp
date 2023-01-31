export interface FleetStats {
    readonly description?: string;
    readonly passiveEffects?: string[],
    readonly move?: number,
    readonly capacity?: number
    readonly damage: number,
    readonly cost: number,
}