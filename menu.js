import { HEADER_MENU_DATA } from "./config.js";
import createHtmlElement from "./functions.js"

export default function menu() {
    const menuElement = createHtmlElement("div", "menu")
    const ulElement = createHtmlElement("ul")
    const buttonElement = createHtmlElement("a", "button")
    HEADER_MENU_DATA.forEach(element => {
    const liElement = createHtmlElement("li")
    const menuLink = createHtmlElement("a", "", "#")
    
    menuLink.textContent = element  
    liElement.append(menuLink)
    ulElement.append(liElement)
});

    buttonElement.href = "#"
    buttonElement.textContent = "Register"

    menuElement.append(ulElement, buttonElement)
    return menuElement
}