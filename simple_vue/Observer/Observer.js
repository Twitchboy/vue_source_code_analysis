/**
 * 观察者 - Observer
 * 建立一套观察者模式
 * @fileOverview
 * @author pycoder.Junting
 * @email: 342766475@qq.com
 * @Date: 2018-06-01 09:40:57
 * @Last Modified by: pycoder.Junting
 * @Last Modified time: 2018-06-01 10:38:02
 */
import Dep from './Dep';

function observer () {
    if (!value || (typeof value !== 'object')) return;

    // 获取对象的枚举属性，处理每一个成员
    Object.keys(value).forEach((key) => {
        defineReactive(obj, key, value[key]);
    });
}

/**
 * 在 Object 上定义一个反应性属性
 * 利于被观察和通知
 * @param {object} obj
 * @param {string} key
 * @param {any} val 属性值
 */
function defineReactive(obj, key, val) {
    // 依赖收集
    const dep = new dep();

    // 在 obj对象的 key属性进行重新定义
    Object.defineProperty(obj, key, {
        enumerable: true,
        configurable: true,
        get: function reactiveGetter () {
            // 读取属性数据时，对其依赖收集
            dep.addSub(Dep.target);
            return val;
        },
        set: function reactiveSetter (newVal) {
            if (newVal === val) return;
            // 其属性被修改，进行广播
            dep.notify();
        }
    })
}

export default observer;
