function myFunction() {
    var x = document.getElementById("myTopnav");
    var icon = document.getElementById("navIcon");
    
    if (!x.classList.contains("responsive")) {
        x.classList.add("responsive");
        icon.classList.remove("fa-bars");
        icon.classList.add("fa-xmark");
    } else {
        x.classList.remove("responsive");
        icon.classList.remove("fa-xmark");
        icon.classList.add("fa-bars");
    }
}

document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("searchForm").addEventListener("submit", function(e) {
        let searchValue = document.getElementById("searchInput").value;
        if (!searchValue.trim()) {
            e.preventDefault();
        }
    });
});