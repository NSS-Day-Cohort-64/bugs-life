import { BugHTMLList } from "./Bugs.js"
import { TerrariumHTMLList } from "./Terrariums.js"

const container = document.querySelector("#container")

// Compose ALL of the HTML and update the DOM
container.innerHTML = BugHTMLList() + TerrariumHTMLList()



