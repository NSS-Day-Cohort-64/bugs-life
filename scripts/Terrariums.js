// import the terrarium data
import { getTerrariumsObjects } from "./database.js";

// declare a variable the invokes the function we imported
const terrariumArray = getTerrariumsObjects()

// define a function that will create the HTML sting of terrariums
export const TerrariumHtmlList = () => {
   // - Build an empty HTML string
    let htmlString = `<h2>Terrarium List</h2>
    <ul>`
    // iterate array of terrariums 
    for (const terrarium of terrariumArray){
        // - add the terrarium to html string
            // display a list of all terrariums 
            // display the mannufact, and theme
        htmlString += `<li>${terrarium.manufacturer}</li>`
    }
   // - close our html string
    htmlString += `</ul>`

    // - return html sting that has been modified
    return htmlString
}