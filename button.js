import createHtmlElement from "./functions.js";

export default function button(text, link) {
    const buttonElement = createHtmlElement("a", "button", link)
    buttonElement.innerHTML = `${text} <img src="./picture/Vector.svg" alt="vector">`
    return buttonElement
}


