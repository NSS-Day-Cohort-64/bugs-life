// import the terrarium data
import { getTerrariumsObjects, getCollectorsObjects } from "./database.js";

// declare a variable the invokes the function we imported
const terrariumArray = getTerrariumsObjects()
const collectors = getCollectorsObjects()

// define a function that will create the HTML sting of terrariums
export const TerrariumHTMLList = () => {
   // - Build an empty HTML string
    let htmlString = `<h2>Terrarium List</h2>
    <ul>`
    // iterate array of terrariums
    for (const terrarium of terrariumArray){
        // - add the terrarium to html string
            // display a list of all terrariums
            // display the mannufact, and theme

        // Iterate collectors
        for (const collector of collectors) {
            // If the foreign key equals collector primary key, we've found the object
            if (collector.id === terrarium.collectorId) {
                // Grab collector's name somehow
                htmlString += `<li>${terrarium.manufacturer} owned by ${collector.name}</li>`
            }

        }
    }
   // - close our html string
    htmlString += `</ul>`

    // - return html sting that has been modified
    return htmlString
}