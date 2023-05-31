import createHtmlElement from "./functions.js"
import menu from "./menu.js"

export default function headerWrap() {
    const headerWrapElement = createHtmlElement("div", "header-wrap")
    const imgElement = createHtmlElement("div", "img")
    const logoImg= createHtmlElement("img")
    const menuElement = menu()
    const sandwichElement = createHtmlElement("div", "img")
    sandwichElement.classList.add("sandwich")
    const sandwichLink = createHtmlElement("a")
    const sandwichLinkImg = createHtmlElement("img")

    logoImg.src = "./picture/Group 2599.svg"
    sandwichLink.href = "#"
    sandwichLinkImg.src = "./picture/Icon.svg"


    sandwichLink.append(sandwichLinkImg)
    sandwichElement.append(sandwichLink)
    imgElement.append(logoImg)
    headerWrapElement.append(imgElement, menuElement, sandwichElement)

return headerWrapElement
}