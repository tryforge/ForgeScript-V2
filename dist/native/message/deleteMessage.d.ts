import { ArgType, NativeFunction } from "../../structures";
declare const _default: NativeFunction<[{
    name: string;
    description: string;
    rest: false;
    required: true;
    check: (i: BaseChannel) => any;
    type: ArgType.Channel;
}, {
    name: string;
    description: string;
    rest: true;
    required: true;
    pointer: number;
    type: ArgType.String;
}], true>;
export default _default;
//# sourceMappingURL=deleteMessage.d.ts.map