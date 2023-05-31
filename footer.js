import container from "./container.js"
import createHtmlElement from "./functions.js"

export default function footer() {
const footerElement = createHtmlElement("footer")
const containerElement = container()

footerElement.append(containerElement)
    return footerElement
}