import createHtmlElement from "./functions.js";
import travelBox from "./travel-box.js";

export default function travelBoxWrap(data) {
    const travelBoxWrapElement = createHtmlElement("div", "travel-box-wrap")
    data.travelBox.forEach(element => {
        const travelBoxElement = travelBox(element)  
        travelBoxWrapElement.append(travelBoxElement)
    });

    return travelBoxWrapElement
}