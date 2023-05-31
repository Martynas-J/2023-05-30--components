
export default function createHtmlElement(type, className, href) {
    let element = document.createElement(type)
    if (className) {
        element.classList.add(className)
    }
    if (type === "a") {
        element.href = href
    }
    return element
}
export function firstLetterUpperCase(str) {
    let firstLetter = str.at(0).toUpperCase()
    let restOfStr = str.slice(1)
    let output = firstLetter + restOfStr

    return output;
}