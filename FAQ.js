var tabs = document.getElementsByClassName("collapsible");

var i;
console.log(tabs);

for (i=0; i<tabs.length; i++) {
    tabs[i].onclick = function() {
        this.classList.toggle("active");
        var content = this.nextElementSibling;

        if (content.style.display == "block") {
        content.style.display = "none";
        }

        else {
            content.style.display="block";
        }
}
}

/*A.onclick = function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;

    if (content.style.display == "block") {
       content.style.display = "none";
    }

    else {
        content.style.display="block";
    }
}*/