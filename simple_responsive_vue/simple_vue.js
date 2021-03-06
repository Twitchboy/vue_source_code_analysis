/**
 * Vue - 实现一个简单的 Vue
 * @fileOverview
 * @author pycoder.Junting
 * @email: 342766475@qq.com
 * @Date: 2018-05-30 12:40:51
 * @Last Modified by: pycoder.Junting
 * @Last Modified time: 2018-06-01 09:39:54
 */
/**
 * 修改数据时定义的回调
 * 操作更新
 * @param val {any} 更新值
 */
var cb = function (val) {
    //
    console.log('更新视图');
};
/**
 * 对象属性使其获得 getter 和 setter 函数
 * 成为可被观察的对象
 * @param obj {object} 绑定的对象
 * @param key {string} obj 的其中一个属性
 * @param val {any} 具体值
 */
var defineReactive = function (obj, key, val) {
    Object.defineProperty(obj, key, {
        enumerable: true,
        configurable: true,
        get: function () {
            return val;
        },
        set: function (newVal) {
            if (val === newVal)
                return;
            cb(newVal);
        }
    });
};
/**
 * 观察者
 * 对传入的对象的每一个属性进行属性定义
 * @param obj {object}
 */
var observer = function (obj) {
    if (!obj && typeof obj !== 'object')
        return;
    Object.keys(obj).forEach(function (key) {
        defineReactive(obj, key, obj[key]);
    });
};
;
var Vue = /** @class */ (function () {
    /**
     * 构造函数
     * @param options {}
     */
    function Vue(options) {
        this._data = options.data;
        console.log(options);
        observer(this._data);
    }
    return Vue;
}());

var app = new Vue({
    el: "#app",
    data: {
        test: '测试，响应式！'
    }
});
console.log(app._data);
app._data.test = "测试，成功！！！";
