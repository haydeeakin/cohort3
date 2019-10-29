
import functions from './functions.js';

// Basic DOM //
basic.addEventListener("click", () => {
    console.log(event.target);
});

show.addEventListener("click", functions.theKids);
add.addEventListener("click", functions.newLi);

// Working with Cards //
maincard.addEventListener("click", () => {
    switch(event.target.textContent) {
        case "Add Card":
            functions.mainAdd(maincard);
            break;
        case "Add Before":
            functions.addBefore(maincard, event.target.parentElement);
            break;
        case "Add After":
            functions.addAfter(maincard, event.target.parentElement);
            break;
        case "Delete":
            functions.deleteLast(event.target.parentElement);
            break;
    }

});

