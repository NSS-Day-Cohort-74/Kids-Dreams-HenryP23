import { getChildren, getCelebrities } from "./database.js"

const kids = getChildren()
const celebrities = getCelebrities()

const findCelebrityMatch = (kidObject, celebrityArray) => {
    let celebrityDetail = {} 
    debugger
    for (const celebrity of celebrityArray) {
        if(celebrity.id === kidObject.id){
            celebrityDetail = celebrity
            
        }
    }

    return celebrityDetail
}
/*
2. In the **Pairings** module, why must the `findCelebrityMatch()` function be invoked inside the `for..of` loop that iterates the kids array?
   > Invoking the findCelebrityMatch in our kids for of loop, allows us to access data that is not part of our childern data and iterate it so that we can get each indvidual object. We pass a single kid object into our 
   findCelebrityMatch match functoin. We also pass in celbrites data so that we can itterate our data  and get a single object which allows us to compare each kids celebrityId with each celebrity id.
   Our return in findCelebrityMatch is a single celebrity object that matches our condition. We can now use this in our kids loop and access different properties so that we can add it to our string literal.
*/
export const Pairings = () => {
    let html = ""
    html = "<ul>"

    for (const kid of kids) {
        const kidsStar = findCelebrityMatch(kid, celebrities)
        html += `
            <li>
                ${kid.name} will be making memories with ${kidsStar.name}, a ${kidsStar.sport} star, by ${kid.wish}
            </li>
        `
    }

    html += "</ul>"

    return html
}

