import { ActionsType } from "../enums/actions.enum";

export interface Action {
    readonly type: ActionsType,
    readonly description: string
}