/**
 * Vue - 实现一个简单的 Vue
 * @fileOverview
 * @author pycoder.Junting
 * @email: 342766475@qq.com
 * @Date: 2018-05-30 12:40:51
 * @Last Modified by: pycoder.Junting
 * @Last Modified time: 2018-05-30 13:29:48
 */

 /**
  * 修改数据时定义的回调
  * 操作更新
  * @param val {any} 更新值
  */
 const cb = (val: any): void => {
    //
    console.log('更新视图');
 }

 /**
  * 对象属性使其获得 getter 和 setter 函数
  * 成为可被观察的对象
  * @param obj {object} 绑定的对象
  * @param key {string} obj 的其中一个属性
  * @param val {any} 具体值
  */
 const defineReactive = (obj, key, val) => {
    Object.defineProperty(obj, key, {
        enumerable: true, // 属性可枚举
        configurable: true, // 属性可修改或删除
        get: () => {
            return val;
        },
        set: (newVal) => {
            if(val === newVal) return;

            cb(newVal);
        }

    })
 }

 /**
  * 观察者
  * 对传入的对象的每一个属性进行属性定义
  * @param obj {object}
  */
const observer = (obj: {}) => {
    if (!obj && typeof obj !== 'object') return;

    Object.keys(obj).forEach((key) => {
        defineReactive(obj, key, obj[key])
    });
}

/**
 * 接口 - 类类型
 */
 interface Attribute {
    _data: {};
 };

class Vue {
    _data: any;
    /**
     * 构造函数
     * @param options {}
     */
    constructor (options) {
        this._data = options.data;
        console.log(options)
        observer(this._data);
    }
}

const app = new Vue({
    el: "#app",
    data: {
        test: '测试，响应式！'
    }
});
console.log(app._data);
app._data.test = "测试，成功！！！";
