import createHtmlElement from "./functions.js";

export default function travelBox(data) {
    let {imgCubeElementSrc, title, paragraph} = data
    const travelBoxElement = createHtmlElement("div", "travel-box")
    const imgCubeElement = createHtmlElement("img", "cube")
    const titleElement = createHtmlElement("div", "travel-box-title")
    titleElement.classList.add("title")
    const pElement = createHtmlElement("p")

    imgCubeElement.src = imgCubeElementSrc
    titleElement.innerHTML = title
    pElement.textContent = paragraph

    travelBoxElement.append(imgCubeElement, titleElement, pElement)
    return travelBoxElement
}