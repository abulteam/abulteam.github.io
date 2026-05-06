function loadComponent(id, file, callback) {
    fetch(file)
        .then(res => res.text())
        .then(data => {
            document.getElementById(id).innerHTML = data;
            if (callback) callback();
        });
}

function setActiveNav() {
    const path = window.location.pathname;

    if (path.includes("about")) {
        document.getElementById("nav-about")?.classList.add("text-white", "font-bold");
    }
    else if (path.includes("members")) {
        document.getElementById("nav-members")?.classList.add("text-white", "font-bold");
    }
    else if (path.includes("events")) {
        document.getElementById("nav-events")?.classList.add("text-white", "font-bold");
    }
    else if (path.includes("news")) {
        document.getElementById("nav-news")?.classList.add("text-white", "font-bold");
    }
    else if (path.includes("gallery")) {
        document.getElementById("nav-gallery")?.classList.add("text-white", "font-bold");
    }
    else if (path.includes("contact")) {
        document.getElementById("nav-contact")?.classList.add("text-white", "font-bold");
    }
    else {
        document.getElementById("nav-home")?.classList.add("text-white", "font-bold");
    }


}

loadComponent("navbar", "/components/navbar.html", setActiveNav);
loadComponent("footer", "/components/footer.html");