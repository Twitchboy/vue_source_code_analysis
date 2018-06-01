/**
 * 依赖收集抽象类
 * @fileOverview
 * @author pycoder.Junting
 * @email: 342766475@qq.com
 * @Date: 2018-06-01 09:51:36
 * @Last Modified by: pycoder.Junting
 * @Last Modified time: 2018-06-01 10:33:51
 */

 class Dep {
    constructor(){
        // 观察者收集的容器
        this.subs = [];
    }

    addSubs (sub) {
        this.subs.push(sub);
    }

    notify () {
        this.subs.forEach((sub) => {
            sub.update();
        })
    }
 }

 export default Dep;
