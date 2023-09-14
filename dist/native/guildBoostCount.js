"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../structures");
exports.default = new structures_1.NativeFunction({
    name: "$guildBoostCount",
    version: "1.0.0",
    description: "Returns the server boost count",
    brackets: false,
    args: [
        {
            name: "guild ID",
            description: "The guild to retrieve the data",
            rest: false,
            required: true,
            type: structures_1.ArgType.Guild
        }
    ],
    unwrap: true,
    execute(ctx, [guild]) {
        return structures_1.Return.success((guild ?? ctx.guild)?.premiumSubscriptionCount ?? 0);
    },
});
//# sourceMappingURL=guildBoostCount.js.map