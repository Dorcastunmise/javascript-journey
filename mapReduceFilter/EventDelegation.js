/* Event delegation prevents the need to attach/assign 
an event listener to each list item. Instead, it assigns the event listener to the parent..
while the list items are then clicked based 
*/

document.querySelector("products").addEventListener("click", (event) =>{
    console.log(event);

    if(event.target.tagName === 'LI') {
        window.location.href += "#" + event.target.id;
    }
})