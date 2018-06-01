/**
 * 入口文件
 * 概念版 Vue 实现
 * @fileOverview
 * @author pycoder.Junting
 * @email: 342766475@qq.com
 * @Date: 2018-06-01 09:45:33
 * @Last Modified by: pycoder.Junting
 * @Last Modified time: 2018-06-01 12:31:00
 */
import observer from './Observer/observer';
import Watcher from './Observer/Watcher.js';

/**
 * Vue 构造类
 * 向外部暴露 Vue 的入口
 */
class Vue {
    constructor (options) {
        this._data = options.data;
        // 使传入的对象可观察
        observer(this._data);
        new Watcher();
    }
}

export default Vue;
