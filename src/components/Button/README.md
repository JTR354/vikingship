#

## Button

### BA

实现一个按钮

1. 不同类型的按钮：default primary danger link
2. 不同大小的按钮: default large small  
3. 不同状态的按钮: normal disabled
4. normal状态可以点击
5. disabled状态不能点击

### Tasking

- [x] 初始化
  - 样式: btn  
  - 内容: children
- [x] 类型
  - primary: button, btn-primary
  - danger: button, btn-danger
  - link: a, btn-link
- [x] 大小
  - default: btn
  - large: btn-lg
  - small: btn-sm
- [x] 状态
  - normal：没有disabled样式 和 没有disabled属性
  - disabled:
    - link类型：只有disabled样式
    - 非link类型：只有disabled属性
- [ ] 响应事件
  - normal 能够正常响应响应
  - disabled 不会响应
