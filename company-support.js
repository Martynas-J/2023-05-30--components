import box from "./companyBox.js"
import { COMPANY_SUPPORT } from "./config.js"
import createHtmlElement from "./functions.js"

export default function companySupport() {
const companySupportElement = createHtmlElement("div", "company-support")
const companyBoxElement = box(COMPANY_SUPPORT.company)
const supportBoxElement = box(COMPANY_SUPPORT.support)
supportBoxElement.classList.add("box")

companySupportElement.append(companyBoxElement, supportBoxElement)
    return companySupportElement
}