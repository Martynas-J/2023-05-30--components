import footer from "./footer.js"
import header from "./header.js"
import main from "./main.js"

const headerElement = header()
const mainElement = main()
const footerElement = footer()



document.body.prepend(headerElement, mainElement, footerElement)