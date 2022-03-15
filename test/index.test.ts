import { SafeJsonPluginObjectId } from '../src'
import { ObjectId } from 'mongodb'
import 'should'
describe('测试ObjectId类的转换', () => {
    it('转换ObjectId到string', () => {
        const plugin = new SafeJsonPluginObjectId(true)
        const id = new ObjectId('5e48f7e42a6bfd4d10ef1387')
        const obj1 = plugin.serialize(id)
        obj1.should.equal('5e48f7e42a6bfd4d10ef1387');
    })
    it('转换ObjectId到SafeJson', () => {
        const plugin = new SafeJsonPluginObjectId(false)
        const id = new ObjectId('5e48f7e42a6bfd4d10ef1387')
        const obj1 = plugin.serialize(id)
        obj1.should.deepEqual({ __type: 'ObjectId', id: '5e48f7e42a6bfd4d10ef1387' });
        const obj2 = plugin.deserialize(obj1);
        (obj2 instanceof ObjectId).should.ok()
    })
})
