// import the collector data
import { getCollectorsObjects } from "./database.js";

// declare a variable the invokes the function we imported
const collectorArray = getCollectorsObjects()

document.addEventListener("click", (clickEventObject) => {
    if (clickEventObject.target.dataset.hasOwnProperty("bug")) {
        window.alert(`The favorite bug of that collector is ${clickEventObject.target.dataset.bug}`)
    }
})

// define a function that will create the HTML sting of collectors
export const CollectorHTMLList = () => {

    let HTMLString = `<h2>Collector List</h2>
    <ul>`

    for (const collector of collectorArray){
        HTMLString += `<li data-bug="${collector.favoriteBug}">${collector.name}</li>`
    }

    HTMLString += `</ul>`

    return HTMLString
}