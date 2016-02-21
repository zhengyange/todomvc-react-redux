# 很想好好的写一个非常适合新手的react与redux结合开发入门案例

## 我为什么要写这个demo，会以什么样的方式写
 * 刚刚结束一个react项目，以前从未接触过这个东西，项目完了后，感觉有好多想法需要表达出来
 * 本教程会借鉴官方todomvc案例，但会分开写这个案例，在适当的部分单独划分出一个demo，一步一步完善，我想这些许多新手想要看的东西，而不一个大而全的demo
 * 鄙人2天熟悉react并撰写demo，1天熟悉redux，第4天开始写项目，直到项目完成依然不知所以然，所以现在回头来看官方demo，把自己学习reac和redux时，想看而看不到的教程编写出来，大家互相学习
 * 本项目将以ES6规范来组织代码，用webpack打包输出，ES6及webpack请自行百度

## 项目运行

```  
    npm install
    npm start  
```

## 一、todomvc-base  
```
此demo是一个基本的react组件组成的页面，无任何交互效果及操作逻辑，这个比较简单，经些就不做更多的讲解。
我们的todo-react及todo-react-redux都会基于此demo进行开发，目的是比较两者开发的逻辑及效率等。  
```

## 二 、todomvc-react  
此demo我们会基于todomvc-rect，一步一个demo进行讲解，尤其让新手明白react中事件及数据传递的原理，下面正式开始

### 1、todomvc-react-addTodo添加item逻辑及效果，  
```javascript
		import {
			handleAddTodo,					//添加任务方法
			handleCompleteTodo,				//完成单个任务操作函数
			handleDeleteTodo,				//删除todo
			handleCompleteAll,				//操作完成所有选项
			handleOnClearCompeleted,		//清除已完成选项
			handleOnFilterAll				//筛选显示
		} from '../reducers/appReducer.js';

		import '../components/app.css';
```