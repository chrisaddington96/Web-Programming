// Function to dynamically add a field to the form 
// after a choice has been made
function dynamicAdd(){
    // Get choice value
    var choice = document.getElementById("contact").value;

    // Get the new entry position and clear out old children
    var newEntry = document.getElementById("newEntry");
    while(newEntry.hasChildNodes()){
        newEntry.removeChild(newEntry.lastChild);
    }

    if(choice == 1){
        newEntry.appendChild(document.createTextNode("Email: "));
        var input = document.createElement("input");
        input.type = "text";
        input.id = "email";
        input.name = "email";
        newEntry.appendChild(input);
    }
    else if(choice == 2){
        newEntry.appendChild(document.createTextNode("Address: "));
        var input = document.createElement("input");
        input.type = "text";
        input.id = "address";
        input.name = "address";
        newEntry.appendChild(input);

        newEntry.appendChild(document.createTextNode("Country: "));
        var input2 = document.createElement("input");
        input2.type = "text";
        input2.id = "country";
        input2.name = "country";
        newEntry.appendChild(input2);


    }
    else if(choice == 3){

    }
}