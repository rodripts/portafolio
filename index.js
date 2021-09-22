let boton = document.getElementById("menu-boton")
let menu = document.getElementById("menu")

boton.addEventListener("click", () => {
    if(menu.classList.contains("is-active")) {
        menu.classList.remove("is-active")
    } else {
        menu.classList.add("is-active")
    }
})