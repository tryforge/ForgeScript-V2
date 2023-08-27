import { ArgType, NativeFunction, Return } from "../structures"

export default new NativeFunction({
    name: "$c",
    description: "Marks any code inside as a comment",
    unwrap: false,
    args: [
        {
            name: "comment",
            rest: true,
            required: true,
            description: "The comments",
            type: ArgType.String
        }
    ],
    brackets: true,
    execute(ctx) {
        return Return.success()
    },
})