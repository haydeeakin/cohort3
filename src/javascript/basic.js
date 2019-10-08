console.log("Hello World from Basic!")

document.getElementById("pushbutton").addEventListener("click", function(){
    console.log("I'm in the button click event");
    var x = document.getElementById("userinput").Value;
    console.log(x)
  })

//   document.getElementById("pushbutton").addEventListener("click", function(){
//     var inputVal = document.getElementById("userInput").value;
//     console.log("inputVal")
// }