window.addEventListener("load", sidenVises);


function sidenVises() {
    console.log("siden vises");
    document.querySelector("#menuknap").addEventListener("click", clickMenu);
}


function clickMenu() {
    console.log("clickMenu");
    document.querySelector("#menu").classList.toggle("hidden");

    if (document.querySelector("#menuknap").classList.contains("open")) {
        document.querySelector("#menuknap").classList = "closed";
    } else {
        document.querySelector("#menuknap").classList = "open";
    }
}

function myFunction(x) {
    if (x.matches) { // If media query matches
        document.querySelector("#menu").classList.remove("hidden");

        document.querySelector("#menu_background").classList.remove("menu_background");
    } //else {
    // document.body.style.backgroundColor = "pink";}
}

var x = window.matchMedia("(min-width: 900px)")
myFunction(x) // Call listener function at run time
x.addListener(myFunction) // Attach listener function on state changes

