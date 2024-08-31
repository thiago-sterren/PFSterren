const anchorAbrirModal = document.querySelector(".producto_boton");
const anchorCerrarModal = document.querySelector(".modal_boton");
const modal = document.querySelector(".modal");

anchorAbrirModal.addEventListener("click",()=>{
    modal.showModal();
})

anchorCerrarModal.addEventListener("click",()=>{
    modal.close();
})