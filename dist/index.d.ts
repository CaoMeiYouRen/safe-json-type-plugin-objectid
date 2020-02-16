import { ObjectId } from 'mongodb';
import { SafeJson, SafeJsonPlugin } from 'safe-json-type-plugins';
export declare class SafeJsonObjectId implements SafeJson {
    __type: string;
    id: string;
}
export declare class SafeJsonPluginObjectId implements SafeJsonPlugin<SafeJsonObjectId, ObjectId> {
    private _useString;
    readonly type = "ObjectId";
    constructor(useString?: boolean);
    condition(obj: any): boolean;
    serialize(obj: ObjectId): any;
    deserialize(obj: SafeJsonObjectId): ObjectId | SafeJsonObjectId;
}
