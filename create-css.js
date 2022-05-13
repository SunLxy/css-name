
const fs = require("fs")
const path = require("path")

const Texts = { large: "大", default: "默认", small: "小", primary: "主", link: "链接", success: "成功", warning: "警告", error: "错误", disabled: "禁用", base: "基础" }

// 大小功能字段
const sizeFun = ["large", "default", "small"]

// 颜色功能字段
const colorFun = ["base", "primary", "link", "success", "warning", "error", "disabled"]

// 状态部分
const statusArr = ["hover", "active", "focus"]

// 大小属性字段
const sizeArr = ["font-size", "line-height", "margin", "margin-vertical",
  "margin-horizontal", "padding", "padding-vertical", "padding-horizontal",
  "border-width", "border-radius", "outline-width", "min-height", "min-width"]
// 颜色属性字段
const colorArr = ["color", "background-color", "border-color", "text-decoration-color", "outline-color"]

// 直接样式部分
const directArr = ["font-style", "border-style", , "outline-style", "text-decoration-style", "text-decoration-thickness", "text-decoration-line", "font-weight",]

// 标识
const pre = "--w"

// 生成颜色部分的
const colorResult = {}
colorFun.forEach((fun) => {
  colorResult[fun] = []
  colorArr.forEach((color) => {
    const part = `${pre}-${color}-${fun}`
    colorResult[fun].push(part)
    statusArr.forEach((status) => {
      colorResult[fun].push(`${part}-${status}`)
    })
  })
})

// 生成大小部分
const sizeResult = {}
sizeFun.forEach((fun) => {
  sizeResult[fun] = []
  sizeArr.forEach((size) => {
    const part = `${pre}-${size}-${fun}`
    sizeResult[fun].push(part)
  })
})

// 只走`base`
const directResult = []
directArr.forEach((direct) => {
  const part = `${pre}-${direct}-base`
  directResult.push(part)
})

const createFile = (obj, pre, tx) => {
  Object.entries(obj).forEach(([key, item]) => {
    const text = Texts[key]
    fs.writeFileSync(path.join(process.cwd(), `./cssVariable/${pre}-${key}.json5`), `//${text}-${tx}\n${JSON.stringify(item, null, 2)}`, { encoding: "utf-8", flag: "w+" })
  })
}
// 颜色部分
createFile(colorResult, "color", "颜色部分")
// 大小部分
createFile(sizeResult, "size", "大小部分")
// 只走`base`
fs.writeFileSync(path.join(process.cwd(), "./cssVariable/direct.json5"), `//只走·base·\n${JSON.stringify(directResult, null, 2)}`, { encoding: "utf-8", flag: "w+" })



