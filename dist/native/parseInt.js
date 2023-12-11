"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../structures");
exports.default = new structures_1.NativeFunction({
    name: "$parseInt",
    description: "Implements native parseInt's function into ForgeScript",
    unwrap: true,
    brackets: true,
    args: [
        {
            name: "value",
            description: "The number to parse",
            rest: false,
            required: true,
            type: structures_1.ArgType.String
        },
        {
            name: "radix",
            rest: false,
            required: false,
            description: "Radix to use for the parser",
            type: structures_1.ArgType.Number
        }
    ],
    execute(ctx, [val, radix]) {
        return structures_1.Return.success(parseInt(val, radix ?? undefined));
    },
});
//# sourceMappingURL=parseInt.js.map