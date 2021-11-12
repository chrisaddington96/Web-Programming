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
    var newEntry2 = document.getElementById("newEntry2");
    while(newEntry2.hasChildNodes()){
        newEntry2.removeChild(newEntry.lastChild);
    }
    var newEntry3 = document.getElementById("newEntry3");
    while(newEntry3.hasChildNodes()){
        newEntry3.removeChild(newEntry.lastChild);
    }
    var newEntry4 = document.getElementById("newEntry4");
    while(newEntry4.hasChildNodes()){
        newEntry4.removeChild(newEntry.lastChild);
    }

    // If user chooses email, add in email entry
    if(choice == 1){
        newEntry.appendChild(document.createTextNode("Email: "));
        var input = document.createElement("input");
        input.type = "text";
        input.id = "email";
        input.name = "email";
        newEntry.appendChild(input);
    }
    // If user chooses mail, add entries for address, country, state, and city
    else if(choice == 2){
        // Add address
        newEntry.appendChild(document.createTextNode("Address: "));
        var input = document.createElement("input");
        input.type = "text";
        input.id = "address";
        input.name = "address";
        newEntry.appendChild(input);

        // Get div for second entry for country
        newEntry2 = document.getElementById("newEntry2");
        newEntry2.appendChild(document.createTextNode("Country: "));
        var input2 = document.createElement("input");
        input2.type = "text";
        input2.id = "country";
        input2.name = "country";
        newEntry2.appendChild(input2);

        // Get div for third entry for state(2 characters)
        newEntry3 = document.getElementById("newEntry3");
        newEntry3.appendChild(document.createTextNode("State: "));
        var input3 = document.createElement("input");
        input3.type = "text";
        input3.id = "state";
        input3.name = "state";
        input3.maxLength = "2";
        newEntry3.appendChild(input3);

        // Get div for fourth entry for zip code
        newEntry4 = document.getElementById("newEntry4");
        newEntry4.appendChild(document.createTextNode("Zip Code: "));
        var input4 = document.createElement("input");
        input4.type = "text";
        input4.id = "zipcode";
        input4.name = "zipcode";
        newEntry4.appendChild(input4);
    }
    else if(choice == 3){
        newEntry.appendChild(document.createTextNode("Good luck hiding from us"));
        var image = document.createElement("img");
        image.src = "images/sharky.gif";
        image.alt = "Scary shark";
        newEntry.appendChild(image);
    }
}