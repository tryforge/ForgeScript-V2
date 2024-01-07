import { ArgType, NativeFunction } from "../../structures";
declare const _default: NativeFunction<[{
    name: string;
    description: string;
    rest: false;
    required: true;
    type: ArgType.Guild;
}, {
    name: string;
    description: string;
    rest: false;
    type: ArgType.Member;
    required: true;
    pointer: number;
}, {
    name: string;
    description: string;
    rest: true;
    type: ArgType.String;
    enum: any;
    required: true;
}], true>;
export default _default;
//# sourceMappingURL=hasPerms.d.ts.map