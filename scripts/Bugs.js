// Get the bug objects from the database module (import)
import { getBugObjects } from "./database.js";

// Invoke that ☝🏻 function we imported to get the array
const bugArray = getBugObjects()

// Define a function that will return the HTML representations of bugs
export const BugHTMLList = () => {

    // Build an empty HTML string
    let htmlString = `<h2>Bug List</h2>
        <ul>`

    // Iterate the array of bug objects
    for (const bug of bugArray) {
        // Reset value of HTML string to be the new string of the bug element we want
        htmlString += `<li>${bug.name} - ${bug.species}</li>`
    }

    // Make sure you put an closing list tag before returning
    htmlString += `</ul>`

    // return the giant HTML string of bugs
    return htmlString

}