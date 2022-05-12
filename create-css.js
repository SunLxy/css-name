const fs = require("fs")
const path = require("path")
// 大小功能字段
const sizeFun = ["large", "middle", "small"]

// 颜色功能字段
const colorFun = ["primary", "link", "success", "warning", "error", "disabled"]

// 状态部分
const statusArr = ["hover", "active", "focus"]

// 大小属性字段
const sizeArr = ["font-size", "line-height", "margin", "padding", "font-weight", "border-width", "border-radius", "outline-width"]

// 颜色属性字段
const colorArr = ["color", "background-color", "border-color", "text-decoration-color", "outline-color"]

// 直接样式部分
const directArr = ["font-style", "border-style", , "outline-style", "text-decoration-style", "text-decoration-thickness", "text-decoration-line"]

// 标识
const pre = "--w"

// 生成颜色部分的
const colorResult = []
colorArr.forEach((color) => {
  colorFun.forEach((fun) => {
    const part = `${pre}-${color}-${fun}`
    colorResult.push(part)
    statusArr.forEach((status) => {
      colorResult.push(`${part}-${status}`)
    })
  })
})

// 生成大小部分
const sizeResult = []
sizeArr.forEach((size) => {
  sizeFun.forEach((fun) => {
    const part = `${pre}-${size}-${fun}`
    sizeResult.push(part)
  })
})

// 生成直接样式方面的
const directResult = []
directArr.forEach((direct) => {
  const part = `${pre}-${direct}`
  directResult.push(part)
})
// 颜色部分
fs.writeFileSync(path.join(process.cwd(), "./color.json"), JSON.stringify(colorResult), { encoding: "utf-8", flag: "w+" })
// 大小部分
fs.writeFileSync(path.join(process.cwd(), "./size.json"), JSON.stringify(sizeResult), { encoding: "utf-8", flag: "w+" })
// 直接属性部分
fs.writeFileSync(path.join(process.cwd(), "./direct.json"), JSON.stringify(directResult), { encoding: "utf-8", flag: "w+" })



