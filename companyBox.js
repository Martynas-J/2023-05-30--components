
import createHtmlElement, { firstLetterUpperCase } from "./functions.js"

export default function box(data) {
    let { title, list } = data
    const companyBoxElement = createHtmlElement("div", title)
    companyBoxElement.classList.add("box")
    const companyTitleElement = createHtmlElement("div", `${title}-title`)
    const companyListElement = createHtmlElement("ul", `${title}-list`)

        companyTitleElement.textContent = firstLetterUpperCase(title)
        list.forEach(element => {
            const liElement = createHtmlElement("li")
            liElement.textContent = element
            companyListElement.append(liElement)
        });

    companyBoxElement.append(companyTitleElement, companyListElement)
    return companyBoxElement
}