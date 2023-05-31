import button from "./button.js"
import createHtmlElement from "./functions.js"

export default function messagesBox() {
    const messagesBoxElement = createHtmlElement("div", "messages")
    messagesBoxElement.classList.add("box")
    const messagesTitleElement = createHtmlElement("div", "messages-title")
    const textareaElement = createHtmlElement("textarea")
    const buttonElement = button("send message", "#") 

    textareaElement.placeholder = "Your email address"
    textareaElement.name = "as"
    textareaElement.rows = "4"

    messagesBoxElement.append(messagesTitleElement, textareaElement, buttonElement)
    return messagesBoxElement
}