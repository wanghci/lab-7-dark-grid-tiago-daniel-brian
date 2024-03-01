let main = document.getElementById("main");
let def = document.getElementById("def");
let light = document.getElementById("light");
let dark = document.getElementById("dark");

def.addEventListener("click", () => {
    main.classList.remove("dark");
    main.classList.remove("light");
})

light.addEventListener("click", () => {
    main.classList.add("light");
    main.classList.remove("dark");
})

dark.addEventListener("click", () => {
    main.classList.add("dark");
    main.classList.remove("light");
})