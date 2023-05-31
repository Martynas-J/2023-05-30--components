
import footerWrap from "./footer-wrap.js"
import createHtmlElement from "./functions.js"

export default function container() {
const containerElement = createHtmlElement("div", "container")
const footerWrapElement = footerWrap()


containerElement.append(footerWrapElement)
    return containerElement
}