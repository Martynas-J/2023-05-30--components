import button from "./button.js";
import createHtmlElement from "./functions.js";

export default function travelContent(data) {
    let { imgSrc, title, paragraph, buttonText, buttonLink, mot, amet } = data
    const travelContentElement = createHtmlElement("div", "travel-content")
    const travelImgElement = createHtmlElement("div", "travel-img")
    const imgElement = createHtmlElement("div", "ellipse-2")
    const motElement = createHtmlElement("div", "mot")
    const ametElement = createHtmlElement("div", "amet")

    const h1Element = createHtmlElement("h1")
    const pElement = createHtmlElement("p")
    const buttonElement = button(buttonText, buttonLink)

    h1Element.textContent = title
    pElement.textContent = paragraph
    imgElement.src = imgSrc
    imgElement.alt = "ellipse"
    motElement.textContent = mot
    ametElement.textContent = amet

    travelImgElement.append(imgElement, motElement, ametElement)

    travelContentElement.append(travelImgElement, h1Element, pElement, buttonElement)
    return travelContentElement
}