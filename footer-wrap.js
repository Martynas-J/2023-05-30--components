import companySupport from "./company-support.js";
import createHtmlElement from "./functions.js";
import licenseBox from "./license-box.js";
import messagesBox from "./messages-box.js";

export default function footerWrap() {
const footerWrap = createHtmlElement("div", "footer-wrap")
const licenseBoxElement = licenseBox()
const messagesBoxElement = messagesBox()
const companySupportElement = companySupport()

footerWrap.append(licenseBoxElement, companySupportElement, messagesBoxElement)
return footerWrap
}