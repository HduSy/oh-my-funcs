/**
 * @param text 输入字符串
 * @param maxWidth 单行显示字数
 * @param maxLine 行数
 */
export function multilines(text = '', maxWidth: number, maxLine: number) {
    let width = 0
    const result: string[] = []
    let currentText = ''
    let lines = 0
    for (let i = 0; i < text.length; i++) {
        const charCode = text.charCodeAt(i)
        const char = text.charAt(i)
        if (charCode < 255) {
            width += 0.65
        } else {
            width += 1
        }
        if (width >= maxWidth) {
            if (lines >= maxLine - 1) {
                currentText += '...'
                break
            } else {
                currentText += char
            }
            result.push(currentText)
            currentText = ''
            width = 0
            lines++
        } else {
            currentText += char
        }
    }
    if (currentText.length > 0) {
        result.push(currentText)
    }
    return result
}
/**
 * 判断是否包含韩文
 * @param text
 */
export function isKorean(text: string) {
    const reg = /([(\uAC00-\uD7AF)|(\u3130-\u318F)])+/gi
    return reg.test(text)
}
/**
 * 用户自定义输入检查
 * @param exp
 */
export function checkCustomExp(exp: string, count: number) {
    if (!/^[0-9a-zA-Z \-_\u4e00-\u9fa5]+$/.test(exp)) {
        return '只允许输入中文、英文字母和数字'
    }
    // 开始计算字数
    let wc = 0
    for (let i = 0; i < exp.length; i++) {
        if (exp.charCodeAt(i) > 256) {
            wc += 2
        } else {
            wc++
        }
    }
    if (wc > count) {
        return `最多输入${count}个字哦`
    }
    return exp
}

/**
 * 数字补齐位数
 * @param num
 * @param length
 * @param padStr
 */
export function leftPad(num: number, length: number, padStr = '0') {
    let numStr = num + ''

    if (numStr.length < length) {
        const prefixLength = length - numStr.length
        for (let i = 0; i < prefixLength; i++) {
            numStr = padStr + numStr
        }
    }
    return numStr
}
