export const inputStr = ref('sin(t+x)')

function replaceOperationExpr(expr: string) {
  const reg = /(\d+)([a-zA-Z]+)/g
  return expr.replace(reg, (_, p1, p2) => `${p1} * ${p2}`)
}
export function getMathFn(inputParam: string, expr: string) {
  const mathContext = `const {${Object.getOwnPropertyNames(Math).join(',')}} = Math`

  const mathFn = `() => {
    ${mathContext}

    return (${inputParam}) => ${replaceOperationExpr(expr)}
  }`

  // eslint-disable-next-line no-eval
  return eval(mathFn)()
}
