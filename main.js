//USER Experience
// 1. Add a click event listener to the `replaceAllButton (1 point)
// 2. On click but outside of a loop, assign the values of the two input textboxes (2 points)
// 3. Write a loop which loops over the `rowElements` array (2 points)
// 4. This criterion is linked to a Learning OutcomeInside this loop, 
// use the `getCellElements()` function (already provided in the starter code) 
// and assign the resulting array of cell elements to a variable. (1 point)
// 5. Write a nested loop which loops over the array of cell elements (3 points)
// 6. For each cell element, check if a cell contains the user-provided search string.
// Use the string method `includes()` (2 points)
// 7. If a cell does contain the user-provided search string, 
// use innerHTML and the string method `replace()` 
// to replace the search string with the replacement. (3 points)
// 8. In all your loops, avoid using low-meaning index variables like "i" and "j". (1 point)

// You should NOT change the HTML or CSS in this project (at least until you reach
// the bonus objectives). Focus on the JavaScript.

const findInput = document.querySelector(".find-input")
const replaceInput = document.querySelector(".replace-input")
const replaceAllButton = document.querySelector(".replace-all-button")

// The following variable holds your OUTER ARRAY of row elements.
// Later you will need an OUTER LOOP to loop over the individual elements within
// this array.
const rowElements = document.querySelectorAll(".row")

// When you call the function belwo, it will get and return an INNER ARRAY
// containing the cell elements for a given row.
// Call this function from WITHIN your row elements loop. Then you will, in turn,
// need to loop over the resulting cell elements. But where should this whole
// NESTED LOOP go? Think through the user's experience: when should WHAT happen? 
function getCellElements(currentRowElement) {
    return currentRowElement.querySelectorAll(".cell")
}


// YOUR CODE GOES HERE

// Event Listener

replaceAllButton.addEventListener("click", function () {
    console.log('replaceAllButton clicked')
    let findDataInput = findInput.value
    let replaceDataInput = replaceInput.value
    for (let index = 0; index < rowElements.length; index += 1) {
        let currentCellElement = getCellElements(rowElements[index])
        for (let innerIndex = 0; innerIndex < currentCellElement.length; innerIndex += 1)
            if (currentCellElement[innerIndex].innerHTML.includes(findDataInput)) {
                let newCurrentElement = currentCellElement[innerIndex].innerHTML.replace(findDataInput, replaceDataInput)
                currentCellElement[innerIndex].innerHTML = newCurrentElement
            }
    }

    findInput.value = ''
    replaceInput.value = ''

})


// One last thing: dedicate very careful attention to using variables and
// naming them accurately.
// And when you change the value you are assigning to a variable, don't
// forget to consider changing the name to reflect the change you made! It
// is very easy to get confused when you are working inside NESTED LOOPS.
// The best of us do. And unnecessary confusion during the process of 
// developing your code means wasted time.
//
// The time-cost of structuring and naming things well is FAR less than the
// time-cost of ignoring the quality and readability of your code.
//
// You can, of course, remove any comments in this starter project once
// you have read them, if you prefer.