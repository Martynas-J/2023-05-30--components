import { SECTION_DATA} from "./config.js";
import createHtmlElement from "./functions.js";
import tennisContainer from "./tennis-container.js";
import travelContainer from "./travel-container.js";

export default function main() {
    const mainElement = createHtmlElement("main")

    const tennisContainerElement = tennisContainer(SECTION_DATA.tennis)
    const travelContainerElement = travelContainer(SECTION_DATA.travel)
    mainElement.append(tennisContainerElement, travelContainerElement)

    return mainElement
}