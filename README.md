# Vue 源码阅读

## 先了解下什么是观察者模式

### 概念：

当对象间存在一对多关系时，则使用观察者模式（Observer Pattern）。比如，当一个对象被修改时，则会自动通知它的依赖对象。观察者模式属于行为型模式。

### 通俗大白话

乘坐地铁🚇, 地铁（subs）承载N乘客（Watcher 观察者), 当快到达某个站台的时候（好比数据状态发生了变化），会进行广播📢，通知到每个乘客前方 XX 站将要到达，请需要下车的乘客做好提前准备，抵达站台🚉，乘客下车（乘客这个对象，数据发生改变），基本就是这么个意思。

### 主要解决：

一个对象状态改变给其他对象通知的问题，而且要考虑到易用和低耦合，保证高度的协作。

### 何时使用：

一个对象（目标对象）的状态发生改变，所有的依赖对象（观察者对象）都将得到通知，进行广播通知。

### 如何解决：

使用面向对象技术，可以将这种依赖关系弱化。

### 关键代码：

在抽象类里有一个 ArrayList 存放观察者们。

### 应用实例：

1、拍卖的时候，拍卖师观察最高标价，然后通知给其他竞价者竞价。

### 优点：

1、观察者和被观察者是抽象耦合的。
2、建立一套触发机制

### 缺点：

1、如果一个被观察者对象有很多的直接和间接的观察者的话，将所有的观察者都通知到会花费很多时间。
2、如果在观察者和观察目标之间有循环依赖的话，观察目标会触发它们之间进行循环调用，可能导致系统崩溃。
3、观察者模式没有相应的机制让观察者知道所观察的目标对象是怎么发生变化的，而仅仅只是知道观察目标发生了变化。

### 使用场景：

* 一个抽象模型有两个方面，其中一个方面依赖于另一个方面。将这些方面封装在独立的对象中使它们可以各自独立地改变和复用。
* 一个对象的改变将导致其他一个或多个对象也发生改变，而不知道具体有多少对象将发生改变，可以降低对象之间的耦合度。
* 一个对象必须通知其他对象，而并不知道这些对象是谁。
* 需要在系统中创建一个触发链，A对象 的行为将影响 B对象，B对象 的行为将影响 C对象……，可以使用观察者模式创建一种链式触发机制。

> 注意事项： 1、JAVA 中已经有了对观察者模式的支持类。 2、避免循环引用。 3、如果顺序执行，某一观察者错误会导致系统卡壳，一般采用异步方式。

上诉描述，摘抄自[runoob](http://www.runoob.com/design-pattern/observer-pattern.html)

## 相关介绍

```js

/**
 *  obj: 目标对象
 *  prop: 需要操作的目标对象的属性名
 *  descriptor: 描述符
 *  return value 传入对象
 */
Object.defineProperty(obj, prop, descriptor);
```

### 启动项目

```js
# 拉取项目到本地
$ git clone git@github.com:Twitchboy/vue_source_code_analysis.git

# 安装依赖
$ npm install

# 启动本地服务
$ npm run dev
```
