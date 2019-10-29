

const functions = {
    
    // Basic DOM
    theKids: () => {
        console.log(event.target.parentElement.children[2]);
    },
    newLi: () => {
        var node = document.createElement("LI");
        var textnode = document.createTextNode("This new item");
        node.appendChild(textnode);
        document.getElementById("list").appendChild(node);
        
    },
    
    // Working with cards
 
    cardObject: {
            count: 0,
            addCard: () => {
                functions.cardObject.count++;
                const newDiv = document.createElement("div");
                newDiv.setAttribute("class", "card");
                newDiv.setAttribute("id", functions.cardObject.count);
                let newDivText = document.createTextNode("Card" + functions.cardObject.count);
                let newDivAddButton = document.createElement("button");
                newDivAddButton.textContent = "Add Before";
                let newDivAfterButton = document.createElement("button");
                newDivAfterButton.textContent = "Add After";
                let newDivDeleteButton = document.createElement("button");
                newDivDeleteButton.textContent = "Delete";
                newDiv.appendChild(newDivText);
                newDiv.appendChild(newDivAddButton);
                newDiv.appendChild(newDivAfterButton);
                newDiv.appendChild(newDivDeleteButton);
                return newDiv;

            },
    },
    mainAdd: (main) => {
        main.appendChild(functions.cardObject.addCard());
    },
    
    addBefore: (main, card) => {
        main.insertBefore(functions.cardObject.addCard(), card);
    },

    addAfter: (main, card) => {
        main.insertBefore(functions.cardObject.addCard(), card.nextSibling);
    },

    deleteLast: (card) => {
        card.remove();
    }
};
// 
export default functions
