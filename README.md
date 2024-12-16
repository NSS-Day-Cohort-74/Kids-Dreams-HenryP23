# Events and Debugging Assessment

Time to assess how well you have learned to use the debugging tools in Chrome Dev Tools, and writing click event listeners. This application is to show kids with illnesses and the memories the would like to make. Celebrities sign up to help kids make memories.

> 🧨 Make sure you answer the vocabulary and understanding questions at the end of this document before notifying your coaches that you are done with the project

## Event Listeners to Create

1. When the kid name is clicked, it should display their wish.
1. When the celebrity name is clicked, it should display their sport.
1. The pairings list should should contain the pairing in the following format.
    ```html
    {child name} will be making memories with {celebrity name}, a {celebrity sport} star, by {child wish}
    ```

Below is an animation showing how the application should look when complete and how the event listeners should work.

<img src="./images/debugging-events-assessment.gif" width="700px">

## Setup

Your instruction team will provide a link for you to create your assessment repository. Once your repo is created, clone it to your machine.

1. Make sure you are in your `workspace` directory.
1. `git clone {github repo SSH string}`.
1. `cd` into the directory it creates.
1. `code .` to open the project code.
1. Use the `serve` command to start the web server.
1. Open the URL provided in Chrome.

Make sure your Developer Tools are open at all times while working on this project. Use the messages provided in the Console to determine what code needs to be fixed or implemented, and use breakpoints in the Sources tab to step through your code as you debug.

## Vocabulary and Understanding

Before you click the "Complete Assessment" button on the Learning Platform, add your answers below each question and make a commit.

1. When a child is clicked on in the browser, which module contains the code that will execute on that event happening? Can you explain the algorithm of that logic?
   > When the child text is clicked on the web page our event listener is executed. Since we have multiple event listeners they are all executed. In the event listener, our 2nd arugment is filtering what was clicked. 
   We are able to filter what was clicked by adding a data attriubte to our html. Then we get that data atribute back when we click the child text, which is what we use to check if what was clicked is child text. 
   We get that dataatribute back by acccessing an HTML elemnt called dataset. Then we compare the data atribute to what we want to filter. In this case Child is what we are filtering. 
2. In the **Pairings** module, why must the `findCelebrityMatch()` function be invoked inside the `for..of` loop that iterates the kids array?
   > Invoking the findCelebrityMatch in our kids for of loop, allows us to access data that is not part of our childern data and iterate it so that we can get each indvidual object. 
   We pass a single kid object into our findCelebrityMatch match functoin. We also pass in celbrites data so that we can itterate our data  and get a single object which allows us to compare each kids celebrityId with each celebrity id. 
   Our return in findCelebrityMatch is a single celebrity object that matches our condition. We can now use this in our kids loop and access different properties so that we can add it to our string literal.
3. In the **CelebrityList** module, can you describe how the name of the sport that the celebrity plays can be displayed in the window alert text?
   > In our CelebrityList module we have a function called Celebrities. This function is responsible for looping through our celebrities data and adding html data-attributes and our celebrities name. 
   In the event listerner our first arugment is what our event is listening for. In this case it listens for a click. Our 2nd arugemnt is a function that is executed when the 1st arugment happens. 
   Our function is getting our data attribute type, we then compare it to the text we want to get. In this case we want to make sure we clicked on a celebrity. Once that condition is met we use a method alert() to display the name and sport of our celebrity
4. Can you describe, in detail, the algorithm that is in the `main` module?
   > Main ties all of our modules together to display the html returned from our module functions. It is displaying the data that these functions return. We use a method called query selector to acess an html element.
   We are then using a propertie of javascript called innerHtml. This allows us to change the text in our html. 