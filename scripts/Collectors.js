// import the collector data
import { getCollectorsObjects } from "./database.js";

// declare a variable the invokes the function we imported
const collectorArray = getCollectorsObjects()

// define a function that will create the HTML sting of collectors
export const CollectorHTMLList = () => {
   // - Build an empty HTML string
    let HTMLString = `<h2>Collector List</h2>
    <ul>`
    // iterate array of collectors
    for (const collector of collectorArray){
        // - add the collector to HTML string
            // display a list of all collectors
            // display the name
        HTMLString += `<li>${collector.name}</li>`
    }
   // - close our HTML string
    HTMLString += `</ul>`

    // - return HTML sting that has been modified
    return HTMLString
}