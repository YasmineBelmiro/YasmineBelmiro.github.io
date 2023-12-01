
// Use JavaScript para carregar o conteúdo do menu a partir do arquivo menu.html
const menuContainer = document.getElementById("menu-container");
const xhr = new XMLHttpRequest();
xhr.open("GET", "menu.html", true);

xhr.onload = function () {
    if (xhr.status === 200) {
        menuContainer.innerHTML = xhr.responseText;
    }
};

xhr.send();