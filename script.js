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
