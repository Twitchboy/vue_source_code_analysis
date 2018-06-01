/**
 * 观察者抽象类
 * 对收集依赖项进行处理，某项发生变化，进行触发
 * @fileOverview
 * @author pycoder.Junting
 * @email: 342766475@qq.com
 * @Last Modified by: pycoder.Junting
 * @Last Modified time: 2018-06-01 09:52:40
 * @Last Modified time: 2018-06-01 10:43:34
 */
import Dep from './Dep';

 class Watcher {
    constructor () {
        Dep.target = this;
    }

    update () {
        console.log("数据更新啦～");
    }
 }

 export default Watcher;
