# 记录

## 标识

1. --w

## 功能字段

## 大小

1. large:大
2. default:中(默认)
3. small:小

### 颜色

1. primary:主要
2. link:连接
3. success:成功
4. warning:警告
5. error:错误
6. disabled:禁用
7. base:基础(默认)

## 状态

1. hover:经过
2. active:激活
3. focus:焦点

## 样式

### 大小方面

1. font-size:字体大小
2. line-height:行高
3. margin:外边距
4. margin-vertical:上下外边距
5. margin-horizontal:左右外边距
6. padding:内边距
7. padding-vertical:上下内边距
8. padding-horizontal:左右内边距
9. border-width:边框大小
10. border-radius:圆角
11. outline-width:轮廓的宽度

### 颜色方面

1. color:字体颜色
2. background-color:背景色
3. border-color:边框颜色
4. text-decoration-color:下划线颜色
5. outline-color:轮廓的颜色
6. box-shadow:盒子阴影

### 只走`base`功能字段(这个部分是可以不进行配置直接默认)

1. font-style:字体样式
2. border-style:边框样式
3. outline-style:轮廓的样式
4. text-decoration-style:下划线样式
5. text-decoration-thickness:下划线粗细
6. text-decoration-line:下划线装饰类型
7. font-weight:字体粗细

## 组合示例

1. --w-color-primary
2. --w-color-success
3. --w-color-success-hover
4. --w-font-size-large
5. --w-font-size-middle
6. --w-font-size-small
7. --w-font-style-base

## 说明

大小方面的拼接`large`,`middle`,`small`三个
颜色方面走`primary`,`link`,`success`,`warning`,`error`,`disabled`拼接
状态方面`hover`,`active`,`focus`的拼接,跟随颜色走
每个功能的基础颜色不拼接状态，颜色方面默认值走`base`拼接,基础大小方面的默认值走`middle`拼接
只走`base`功能字段的不进行其他拼接(或拼接组件名称)
