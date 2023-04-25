import { BugHTMLList } from "./Bugs.js"
import { TerrariumHtmlList } from "./Terrariums.js"

const container = document.querySelector("#container")

// Compose ALL of the HTML and update the DOM
container.innerHTML = BugHTMLList() + TerrariumHtmlList()



