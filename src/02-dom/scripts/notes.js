const functions = {

    addCard: (x) => {
        console.log("I am in add card");
        x.textContent = "I am in add card";
        y = 1;
        const div = document.createElement("div");
        div.setAttribute("class", "card");
        div.setAttribute("counter", y);
        div.appendChild("div");

    }
    
}
export default functions