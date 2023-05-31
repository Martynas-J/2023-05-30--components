import button from "./button.js";
import createHtmlElement from "./functions.js";

export default function travelContent(data) {
    let { imgSrc, paragraph, buttonText, buttonLink, mot, amet } = data
    const travelContentElement = createHtmlElement("div", "travel-content")
    const travelImgElement = createHtmlElement("div", "travel-img")
    const imgElement = createHtmlElement("div", "ellipse-2")
    const motElement = createHtmlElement("div", "mot")
    const ametElement = createHtmlElement("div", "amet")

    const pElement = createHtmlElement("p")
    const buttonElement = button(buttonText, buttonLink)

    pElement.textContent = paragraph
    imgElement.src = imgSrc
    imgElement.alt = "ellipse"
    motElement.textContent = mot
    ametElement.textContent = amet

    travelImgElement.append(imgElement, motElement, ametElement)

    travelContentElement.append(travelImgElement, pElement, buttonElement)
    return travelContentElement
}