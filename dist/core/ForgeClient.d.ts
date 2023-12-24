import { Client, ClientOptions, IntentsBitField } from "discord.js";
import { BaseCommand, CommandType } from "../structures/base/BaseCommand";
import { EventManager } from "../managers/EventManager";
import { ForgeFunctionManager } from "../managers/ForgeFunctionManager";
import { ForgeExtension } from "../structures/forge/ForgeExtension";
import { CooldownManager } from "../managers/CooldownManager";
import { NativeCommandManager } from "../managers/NativeCommandManager";
import { ApplicationCommandManager } from "../managers/ApplicationCommandManager";
import { ThreadManager } from "../managers/ThreadManager";
import { LogPriority } from "../structures/@internal/Logger";
export interface ITrackers {
    invites?: boolean;
    voice?: boolean;
}
export interface IRestrictions {
    guildIDs?: string[];
    userIDs?: string[];
}
export interface IForgeClientOptions extends ClientOptions {
    commands?: string;
    events?: CommandType[];
    prefixes: string[];
    logLevel?: LogPriority;
    functions?: string;
    allowBots?: boolean;
    token?: string;
    /**
     * @deprecated use trackers: { invites: true } instead
     */
    useInviteSystem?: boolean;
    mobile?: boolean;
    trackers?: ITrackers;
    /**
     * @deprecated Does not work
     */
    optionalGuildID?: boolean;
    extensions?: ForgeExtension[];
    restrictions?: IRestrictions;
    /**
     * Array of function names you want to disable.
     */
    disableFunctions?: string[];
}
export declare class ForgeClient extends Client<true> {
    #private;
    options: (Omit<ClientOptions, "intents"> & {
        intents: IntentsBitField;
    }) & IForgeClientOptions;
    readonly commands: NativeCommandManager;
    readonly applicationCommands: ApplicationCommandManager;
    readonly events: EventManager;
    readonly cooldowns: CooldownManager;
    readonly functions: ForgeFunctionManager;
    readonly threading: ThreadManager;
    [x: PropertyKey]: unknown;
    constructor(options: IForgeClientOptions);
    get<T>(key: string): T;
    get version(): string;
    canRespondToBots(cmd: BaseCommand<any>): boolean;
    login(token?: string | undefined): Promise<string>;
}
//# sourceMappingURL=ForgeClient.d.ts.map