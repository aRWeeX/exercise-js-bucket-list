// 1. Create a <p> using the createElement method. When you have a reference to your new element, change its innerText to something that you would like to have on your bucket list, and then append it to the DOM with the appendChild method. Where does this element go? How can you get it do be added directly after the already existing <p>.
const pEl = document.createElement("p");
pEl.innerText = "Visit the Great Wall of China";

const queryEl = document.querySelector("section.list");
queryEl.appendChild(pEl);

/*
2. Create another <p> with an item you would like to have on you bucket list. This time add it to the DOM, right after your existing <p>-tags with the help of the insertAdjecentElement method. This method accepts a position argument. Which value should that argument have?

afterbegin
afterend
beforebegin
beforeend
Try them out!
*/
const pEl2 = document.createElement("p");
pEl2.innerText = "Go skydiving";
pEl.insertAdjacentElement("afterend", pEl2);

// 3. innerHTML is an interesting property that exists on HTML elements. With that property we can get and set the inner HTML of a HTML element very easy. Try to get (or do you already have it?) the inner HTML from the element that contains all the <p>-tags of your bucket list. Log that to the console.
console.log(queryEl);

/*
4. In order to set the innerHTML of an element we need to create a string that contains the HTML code that we want to add to the DOM. It can look something like this:

"<div>This is a div element as a string</div>";
Now create that string that contains a new item that you want to add to your bucket list.
*/
// queryEl.innerHTML = "<p>Learn a new language</p>";
// (This works though: queryEl.innerHTML += "<p>Learn a new language</p>";)

// 5. Set the innerHTML of the list with the new item you just created. What happens when you do that?
// #5: It replaces the content in innerHTML.

// 6. Comment out that previous line(s) of code and the three items that you had before you should exist again. How can you add that last item and still keep the three other ones? There is a method that is very similar to the insertAdjecentElement that will take your HTML string and add it to the list. Try to add your new item to the beginning of the list.
queryEl.insertAdjacentHTML("afterbegin", "<p>Learn a new language</p>");

// 7. Add three more items to the end of list, but try and do it with a loop instead. Less repetitive code.
const newItems = [
  "<p>Take a road trip across the USA</p>",
  "<p>See the Northern Lights</p>",
  "<p>Write a book</p>",
];

newItems.forEach((element) => {
  queryEl.insertAdjacentHTML("beforeend", element);
});

// 8. How many items do you have in your bucket list now? Log it to the console. Use the children property.
console.log(queryEl.children);

// 9. Change the content of the h2 at the to top of the HTML document do have your name instead of "Bucky's";
const ownName = document.querySelector("h2.owner");
ownName.innerText = "Antti's";

// 10. Replace the first item in your list with a new item. There are several ways to do this, but try the replaceChild method out.
const newItem = document.createTextNode("Swim with dolphins");
const element = queryEl.children[0];
element.replaceChild(newItem, element.childNodes[0]);

// 11. Now try replace an element in the middle of the list to a new one. Use the same method as before or get creative.
const newItem2 = document.createTextNode("Attend a major sports event");
const element2 = queryEl.children[3];
element2.replaceChild(newItem2, element2.childNodes[0]);

// 12. Remove the last element in the list. lastChildElement combine with the removeChild method might work.
const lastElCh = queryEl.lastElementChild;
queryEl.removeChild(lastElCh);
