import createHtmlElement from "./functions.js"
import headerWrap from "./header-wrap.js"

export default function header() {
    const headerElement = createHtmlElement("header")
    const containerElement = createHtmlElement("div", "container")
    const headerWrapElement = headerWrap()

    containerElement.append(headerWrapElement)
    headerElement.append(containerElement)
return headerElement
}