// Function to change the theme
function changeTheme(givenTheme){
    if(givenTheme =='dark'){
        document.documentElement.style.setProperty("--background", "#161b22");
        document.documentElement.style.setProperty("--brdr", "#30363d");
        document.documentElement.style.setProperty("--txt", "#ffffff");
        document.documentElement.style.setProperty("--background2", "#0d1117");
    }
    else if(givenTheme == 'light'){
        document.documentElement.style.setProperty("--background", "#ffffff");
        document.documentElement.style.setProperty("--brdr", "#30363d");
        document.documentElement.style.setProperty("--txt", "#4b0082");   
        document.documentElement.style.setProperty("--background2", "#fffaf0");
    }
    else if(givenTheme == 'red'){
        document.documentElement.style.setProperty("--background", "#ffdead");
        document.documentElement.style.setProperty("--brdr", "#30363d");
        document.documentElement.style.setProperty("--txt", "#161b22");
        document.documentElement.style.setProperty("--background2", "#ff7f50");
        document.documentElement.style.setProperty("--bartxt", "#161b22");
    }
    else if(givenTheme == 'blue'){
        document.documentElement.style.setProperty("--background", "#f0fff0");
        document.documentElement.style.setProperty("--brdr", "#30363d");
        document.documentElement.style.setProperty("--txt", "#161b22");
        document.documentElement.style.setProperty("--background2", "#6495ed");
    }
    else{
        alert(givenTheme + " is not an applicable color");
    }
}
