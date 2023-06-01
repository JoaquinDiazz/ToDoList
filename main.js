const form = document.querySelector("#form")
const input = document.querySelector("#input")
const tareasContainer = document.querySelector("#tareasContainer")
const parrafo = document.querySelector("#parrafo")

form.addEventListener("submit", (e) => {
    e.preventDefault()

    if (input.value != "") {

        if (tareasContainer.innerHTML != "") {
            parrafo.classList.add("disabled")
        } 

        let div = document.createElement("div")
        div.classList.add("tarea")
        div.innerHTML = `
                            <p class="p">${input.value}</p>
                            <i class="bi bi-trash3-fill trash"></i>
                            `
        tareasContainer.append(div)
        realizada()
        eliminarBtn()
        form.reset()

        
    } else {
        alert("holaaa jajjaj")
    }
})


function eliminarBtn() {
    const trash = document.querySelectorAll(".trash")
    
    trash.forEach( cadaUno => {

        cadaUno.addEventListener("click", (e) => { 
            let elemento = e.target.parentElement;
            elemento.remove()

            if (document.querySelectorAll(".tarea").length === 0) {
                parrafo.classList.remove("disabled");
              }
        })
    });
}

function realizada() {
    const p = document.querySelectorAll(".p")

    p.forEach(cadaUno => {
        cadaUno.addEventListener("click", (e) => {
            e.target.classList.toggle("realizada")
        })
    })

}