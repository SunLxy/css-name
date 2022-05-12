# 记录

## 标识

1. --w

## 功能字段

1. large:大
2. middle:中
3. small:小
4. primary:主
5. link:连接
6. success:成功
7. warning:警告
8. error:错误
9. disabled:禁用

## 状态

1. hover:经过
2. active:激活
3. focus:焦点

## 样式

### 大小方面

1. font-size:字体大小
2. line-height:行高
3. margin:外边距
4. padding:内边距
5. font-weight:字体粗细
6. border-width:边框大小
7. border-radius:圆角
8. outline-width:轮廓的宽度

### 颜色方面

1. color:字体颜色
2. background-color:背景色
3. border-color:边框颜色
4. text-decoration-color:下划线颜色
5. outline-color:轮廓的颜色

### 直接样式方面

1. font-style:字体样式
2. border-style:边框样式
3. outline-style:轮廓的样式
4. text-decoration-style:下划线样式
5. text-decoration-thickness:下划线粗细
6. text-decoration-line:下划线装饰类型

## 组合示例

1. --w-color-primary
2. --w-color-success
3. --w-color-success-hover
4. --w-font-size-large
5. --w-font-size-middle
6. --w-font-size-small
7. --w-font-style

## 说明

大小方面的拼接`large`,`middle`,`small`三个
颜色方面走`primary`,`link`,`success`,`warning`,`error`,`disabled`拼接
状态方面`hover`,`active`,`focus`的拼接,跟随颜色走
基础颜色不拼接状态，基础大小方面的默认值走`middle`拼接
直接样式方面不进行其他拼接(或拼接组件名称)
