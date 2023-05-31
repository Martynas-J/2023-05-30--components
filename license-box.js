import { LICENSE_BOX } from "./config.js"
import createHtmlElement from "./functions.js"

export default function licenseBox() {
    let {title, paragraph, copyright, allRights, iconsSrc} = LICENSE_BOX
    const licenseBoxElement = createHtmlElement("div", "license")
    licenseBoxElement.classList.add("box")
    const titleImgElement = createHtmlElement("div", "title-img")
    const pElement = createHtmlElement("p")
    const copyrightElement = createHtmlElement("div", "au-ui")
    const allRightsElement = createHtmlElement("div", "au-ui")
    const ulElement = createHtmlElement("ul")

    Object.values(iconsSrc).forEach(element => {
        const liElement = createHtmlElement("li")
        const linkElement = createHtmlElement("a", "icon-wrap", "#")
        const imgElement = createHtmlElement("img")

        imgElement.src = element
        linkElement.append(imgElement)
        liElement.append(linkElement)
        ulElement.append(liElement)
});

    titleImgElement.innerHTML = title
    pElement.textContent = paragraph
    copyrightElement.textContent = copyright
    allRightsElement.textContent = allRights

    licenseBoxElement.append(titleImgElement, pElement, copyrightElement, allRightsElement, ulElement)

    return licenseBoxElement
}