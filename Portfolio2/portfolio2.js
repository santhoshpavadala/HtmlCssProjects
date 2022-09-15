var Tablinks = document.getElementsByClassName("tabLinks");
var Tabcontents = document.getElementsByClassName("tabContents");

function openTab (tabname) {
    for(tab-link of Tablinks) {
        tab-link.classList.remove("activeLink");
    }
    for(tab-content of Tabcontents) {
        tab-content.classList.remove("active-tab");
    }
}