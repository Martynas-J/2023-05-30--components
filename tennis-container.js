import createHtmlElement from "./functions.js";
import tennisContent from "./tennis-content.js";


export default function tennisContainer(data) {
    const containerElement = createHtmlElement("div", "container") 
    const sectionElement = createHtmlElement("section", data.sectionName) 
    const imgElement = createHtmlElement("div", "tenisas-img") 

    const tennisContentElement = tennisContent(data)
    sectionElement.append(tennisContentElement, imgElement)
    containerElement.append(sectionElement)

    return containerElement
}