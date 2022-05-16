
import fs from "fs"
import path from "path"
import { sizeFun, colorFun, statusArr, sizeArr, colorArr, directArr } from "./field/index.js"
import Texts from "./field/text.js"
import { createRemark } from "./remark.js"
import { createColorHex } from "./utils.js"

const transformationHump = (value) => {
  // eslint-disable-next-line no-useless-escape
  return value.replace(/^--w-/, "").replace(/\-(\w)/g, function (all, letter) {
    return letter.toUpperCase();
  });
}

// 标识
const pre = "--w"

const humpTypeArr = []

// 生成颜色部分的
const colorResult = {}
colorFun.forEach((fun) => {
  colorResult[fun] = []
  const funText = Texts[fun]
  colorArr.forEach((color) => {
    const colorText = Texts[color]
    const tip = `${colorText}-${funText}`
    const part = `${pre}-${color}-${fun}`
    colorResult[fun].push(part)
    humpTypeArr.push({ key: transformationHump(part), tip })

    statusArr.forEach((status) => {
      colorResult[fun].push(`${part}-${status}`)
      const statusText = Texts[status]
      humpTypeArr.push({ key: transformationHump(`${part}-${status}`), tip: `${tip}-${statusText}` })
    })
  })
})

// 生成大小部分
const sizeResult = {}
sizeFun.forEach((fun) => {
  sizeResult[fun] = []
  const funText = Texts[fun]
  sizeArr.forEach((size) => {
    const sizeText = Texts[size]
    const tip = `${sizeText}-${funText}`
    const part = `${pre}-${size}-${fun}`
    sizeResult[fun].push(part)
    humpTypeArr.push({ key: transformationHump(part), tip })

  })
})

// 只走`base`
const directResult = []
directArr.forEach((direct) => {
  const directText = Texts[direct]
  const tip = `${directText}-基础`
  const part = `${pre}-${direct}-base`
  directResult.push(part)
  humpTypeArr.push({ key: transformationHump(part), tip })
})

const isMd = process.env.MD

const createFile = (obj, pre, tx) => {
  const filename = "./" + pre + ".md"
  const title = "# " + tx
  let mdStr = `${title}\n`
  Object.entries(obj).forEach(([key, item]) => {
    const text = Texts[key]
    mdStr += `\n## ${key}(${text})\n\n`
    item.forEach((kes,) => {
      mdStr += `- [ ] ${kes}\n`
    })
    fs.writeFileSync(path.join(process.cwd(), `./cssVariable/${pre}-${key}.json5`), `//${text}-${tx}\n${JSON.stringify(item, null, 2)}`, { encoding: "utf-8", flag: "w+" })
  })
  if (isMd) {
    fs.writeFileSync(path.join(process.cwd(), filename), mdStr, { encoding: "utf-8", flag: "w+" })
  }
}
// 颜色部分
createFile(colorResult, "color", "颜色部分")
// 大小部分
createFile(sizeResult, "size", "大小部分")
// 只走`base`
fs.writeFileSync(path.join(process.cwd(), "./cssVariable/direct.json5"), `//只走·base·\n${JSON.stringify(directResult, null, 2)}`, { encoding: "utf-8", flag: "w+" })
if (isMd) {
  let mdStr = '# 只走`base`的css属性\n\n'
  directResult.forEach((kes,) => {
    mdStr += `- [ ] ${kes}\n`
  })
  fs.writeFileSync(path.join(process.cwd(), `./direct.md`), mdStr, { encoding: "utf-8", flag: "w+" })
}
// 生成 ts类型文件
let humpTypeStr = ``
humpTypeArr.forEach((item) => {
  humpTypeStr += `  /** ${item.tip} **/\n  ${item.key}?:string,\n`
})
fs.writeFileSync(
  path.join(process.cwd(), `./ThemeProps.d.ts`),
  `export interface ThemeProps{\n${humpTypeStr}}`,
  { encoding: "utf-8", flag: "w+" }
)

if (isMd) {
  const colorMd = fs.readFileSync(path.join(process.cwd(), "color.md"), { encoding: "utf-8" })
  const SizeMd = fs.readFileSync(path.join(process.cwd(), "size.md"), { encoding: "utf-8" })
  const directMd = fs.readFileSync(path.join(process.cwd(), "direct.md"), { encoding: "utf-8" })
  const READMEMd = fs.readFileSync(path.join(process.cwd(), "README.md"), { encoding: "utf-8" })
  const humpTypeStrMd = "# 主题变量-ts类型声明\n\n```ts\n" + `export interface ThemeProps{\n${humpTypeStr}}\n\n` + "```"
  const getAsyncAllHtml = () => {
    let htmlStr = ``
    const getHtml = (value, type) => {
      const result = createRemark(value)
      htmlStr += `const ${type}=` + `${JSON.stringify(result)};\n`
    }
    getHtml(colorMd, "color")
    getHtml(SizeMd, "size")
    getHtml(directMd, "direct")
    getHtml(humpTypeStrMd, "humpType")
    getHtml(READMEMd, "README")
    fs.writeFileSync(
      path.join(process.cwd(), `./build/varJsFieid.js`),
      htmlStr,
      { encoding: "utf-8", flag: "w+" }
    )
  }
  getAsyncAllHtml()
}
const colorSum = createColorHex()
fs.writeFileSync(path.join(process.cwd(), "./cssVariable/buttonColor.json5"), JSON.stringify(colorSum, null, 2), { encoding: "utf-8", flag: "w+" })


