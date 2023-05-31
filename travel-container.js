import createHtmlElement from "./functions.js";
import travelBoxWrap from "./travel-box-wrap.js";
import travelContent from "./travelContent.js";


export default function travelContainer(data) {
    const containerElement = createHtmlElement("div", "container") 
    const sectionElement = createHtmlElement("section", data.sectionName)  

    const travelContentElement = travelContent(data)
    const travelBoxWrapElement = travelBoxWrap(data)
    containerElement.append(sectionElement)
    sectionElement.append(travelContentElement, travelBoxWrapElement)

    return containerElement
}