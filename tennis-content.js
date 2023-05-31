import button from "./button.js";
import createHtmlElement from "./functions.js";

export default function tennisContent(data) {
    let {imgSrc, title, paragraph, buttonText, buttonLink} = data
    const tennisContentElement = createHtmlElement("div", "tenisas-content")
    const ellipseImgElement = createHtmlElement("img",  "ellipse")
    const h1Element = createHtmlElement("h1")
    const pElement = createHtmlElement("p")
    const buttonElement = button(buttonText, buttonLink)

    ellipseImgElement.src = imgSrc
    h1Element.textContent = title
    pElement.textContent = paragraph

    tennisContentElement.append(ellipseImgElement, h1Element, pElement, buttonElement)
    return tennisContentElement
}