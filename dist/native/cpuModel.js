"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../structures");
const node_os_1 = __importDefault(require("node:os"));
exports.default = new structures_1.NativeFunction({
    name: "$cpuModel",
    description: "Returns the cpu model",
    unwrap: false,
    execute(ctx) {
        return structures_1.Return.success(node_os_1.default.cpus()[0]?.model);
    },
});
//# sourceMappingURL=cpuModel.js.map