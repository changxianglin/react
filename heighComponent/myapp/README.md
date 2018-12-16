高阶组件

高阶组件就是接受一个组件作为一个函数并返回一个新的组件
高阶组件是一个函数，并不是组件

多个组件都是需要某个相同的功能， 使用高阶组件减少函数重复实现

重复是优秀系统设计的大敌---Robert.C.Martin

高阶组件实例：
    react-redux 中的 connect

编写高阶组件
1. 实现一个普通组件
1. 将普通组件使用函数包裹

使用高阶组件
1. higherOrderComponent(WrappedComponent)
1. @higherOrderComponent
1. [装饰器语法安装配置](https://www.cnblogs.com/zhourongcode/p/9875286.html)

代理方式的高阶组件
1. 操纵 props
1. 访问 ref
1. 抽取状态
1. 包装组件

继承方式的高阶组件
1. 操纵 props
1. 操纵生命周期

高阶组件显示名
getDisplayName