import { ObjectId } from 'mongodb'
import { SafeJson, SafeJsonPlugin } from 'safe-json-type-plugins'
export class SafeJsonObjectId implements SafeJson {
    __type = 'ObjectId'
    id: string
}
/**
 * ObjectId类 转换插件
 * 由于mongodb只能在后端使用，因此本插件也只能在后端使用。
 * 本插件默认为ObjectId到string的转换，也可以实现ObjectId类型的安全转换，但对前端没有意义。
 * @author CaoMeiYouRen
 * @date 2020-02-16
 * @export
 * @class SafeJsonPluginObjectId
 * @implements {SafeJsonPlugin<SafeJsonObjectId, ObjectId>}
 */
export class SafeJsonPluginObjectId implements SafeJsonPlugin<SafeJsonObjectId, ObjectId> {
    private _useString: boolean
    readonly type = 'ObjectId'
    constructor(useString: boolean = true) {
        this._useString = useString
    }
    condition(obj: any): boolean {
        return obj instanceof ObjectId
    }
    serialize(obj: ObjectId): any {
        if (this._useString) {
            return obj.toHexString()
        } else {
            return {
                __type: 'ObjectId',
                id: obj.toHexString()
            }
        }
    }
    deserialize(obj: SafeJsonObjectId): ObjectId | SafeJsonObjectId {
        if (!this._useString && obj.id) {
            return new ObjectId(obj.id)
        }
        return obj
    }
}