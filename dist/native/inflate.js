"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const zlib_1 = require("zlib");
const structures_1 = require("../structures");
exports.default = new structures_1.NativeFunction({
    name: "$inflate",
    version: "1.2.0",
    description: "Decompresses given input",
    unwrap: true,
    brackets: true,
    args: [
        {
            name: "input",
            description: "The text to decompress",
            type: structures_1.ArgType.String,
            rest: false,
            required: true
        },
        {
            name: "encoding",
            rest: false,
            required: false,
            description: "The input encoding to use",
            type: structures_1.ArgType.String
        }
    ],
    execute(ctx, [input, enc]) {
        return structures_1.Return.success((0, zlib_1.inflateSync)(Buffer.from(input, (enc ?? "hex"))).toString("utf-8"));
    },
});
//# sourceMappingURL=inflate.js.map