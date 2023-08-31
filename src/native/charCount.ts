import { ArgType, NativeFunction, Return } from "../structures"

export default new NativeFunction({
    name: "$charCount",
    description: "Gets the char count of a text",
    brackets: true,
    unwrap: true,
    args: [
        {
            name: "text",
            description: "The text to get its length",
            rest: false,
            type: ArgType.String,
            required: true
        }
    ],
    execute(ctx, [ str ]) {
        return Return.success(str.length)
    },
})