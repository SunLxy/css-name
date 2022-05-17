import Color from "color"

const transformColor = (value) => {
  const colors = {}

  colors.default = value
  colors.fade74 = Color(value).fade(0.74).hex()

  colors.darken10 = Color(value).darken(0.1).hex()
  colors.darken12 = Color(value).darken(0.12).hex()
  colors.darken20 = Color(value).darken(0.2).hex()
  colors.darken32 = Color(value).darken(0.32).hex()

  colors.lighten10 = Color(value).lighten(0.1).hex()
  colors.lighten20 = Color(value).lighten(0.2).hex()
  colors.lighten24 = Color(value).lighten(0.24).hex()
  colors.lighten32 = Color(value).lighten(0.32).hex()
  colors.lighten42 = Color(value).lighten(0.42).hex()

  return colors
}

export const createColorHex = () => {
  const sum = {}
  sum.primary = transformColor("#008ef0")
  sum.success = transformColor("#28a745")
  sum.warning = transformColor("#ffc107")
  sum.danger = transformColor("#dc3545")
  sum.light = transformColor("#f8f9fa")
  sum.lightBasic = transformColor("#9199a7")
  sum.lightDisabled = transformColor("#393e48")

  sum.dark = transformColor("#393e48")
  sum.link = transformColor("#008ef0")
  sum.primary = transformColor("#008ef0")
  return sum
}



const createS = (type) => {
  const jsons = {}
  jsons[`backgroundColor${type}`] = ""
  jsons[`backgroundColor${type}Hover`] = ""
  jsons[`boxShadowColor${type}Focus`] = ""
  jsons[`backgroundColor${type}Active`] = ""
  jsons[`backgroundColor${type}Disabled`] = ""
  jsons[`boxShadowColor${type}Basic`] = ""
  jsons[`backgroundColor${type}BasicHover`] = ""
  jsons[`color${type}BasicDisabled`] = ""
  jsons[`backgroundColor${type}BasicActive`] = ""
  return jsons
}

export const getTypes = () => {
  const type = ["Primary", "Success", 'Warning', 'Danger', 'Light', 'Dark', 'Link']
  let result = {}
  type.forEach((key) => {
    result = {
      ...result,
      ...createS(key)
    }
  })
  return result
}
