import { getCelebrities } from "./database.js"

const celebrities = getCelebrities()
document.addEventListener(
    "click",
    (getClick) => {
        const clickTarget = getClick.target
        const name = clickTarget.dataset.name
        const sport = clickTarget.dataset.sport
        const type = clickTarget.dataset.type
        if(type === "celebrity"){
            window.alert(`${name} is a ${sport} star`)
        }
    }
)
export const Celebrities = () => {
    let html = "<ol>"

    for (const celebrity of celebrities) {
        html += `<li 
                    data-id="${celebrity.id}" 
                    data-type="celebrity"
                    data-sport="${celebrity.sport}"
                    data-name="${celebrity.name}">
                    ${celebrity.name}
                </li>`
    }

    html += "</ol>"
    return html
}

/*3. In the **CelebrityList** module, can you describe how the name of the sport that the celebrity plays can be displayed in the window alert text?
   > In our CelebrityList module we have a function called Celebrities. THis function is responsible for looping through our celebrities data and adding html data-attributes and our celebrities name. 
    In event listerner our first arugment is what our event is listening for. In this case it listens for a click. Our 2nd arugemnt is a function that is executed when the 1st arugment click is happens. Our function is getting our data attribute type, we compare that to what type we want to get. In this case we want to make sure we clicked on a celebrity

   */