/**
 * http转https或//加http(s)前缀
 * @param val
 */
export default function httpSafe(val: string) {
    if (location.protocol.indexOf('https') >= 0) {
        return (val + '').replace(/^(http:)?\/\//, 'https://')
    }
    if (/^\/\//.test(val)) {
        return `${location.protocol}${val}`
    }
    return val
}
