import Vue from './vue';

const root = document.createElement('div');
document.body.appendChild(root);

const app = new Vue({
    el: "#app",
    data: {
        test: '测试，响应式！'
    }
});


console.log(app._data.test)
app._data.test = '你修改了数据～';
