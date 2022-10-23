const mailPago = document.getElementById("mailPago");
const botonEnviar = document.getElementById("botonEnviar");
const bntfinalizaCompra =document.getElementById("bntfinalizaCompra");
const contenedorEnvio = document.getElementById("contenedorEnvio");
botonEnviar.addEventListener('click', () => {
    if(mailPago.value == ""){
        Swal.fire({
            position: 'center',
            icon: 'error',
            title: 'Debe ingresar algun mail',
            showConfirmButton: false,
            timer: 2000
          })
        return;
    }
    if (mailPago.value.includes("@")){
        mailPago.value = "";
        Swal.fire({
            position: 'center',
            icon: 'success',
            title: `Recibira un mail para abonar el Pago. Muchas gracias por confiar en nosotros.`,
            showConfirmButton: false,
            timer: 3000
        })
            contenedorEnvio.className =  ("contenedorEnvioInvisible");
            vaciarCarrito();   
    }else{
        Swal.fire({
            position: 'center',
            icon: 'error',
            title: 'Su mail debe contener el simbolo @',
            showConfirmButton: false,
            timer: 2000
          })
    }  
})

bntfinalizaCompra.addEventListener('click', () => {
    
    if(carritoCompras.length == 0){
        Swal.fire({
            position: 'center',
            icon: 'error',
            title: 'Para finalizar la compra debe agregar al menos un producto al carrito.',
            showConfirmButton: false,
            timer: 2000
          })
    return;
    }
    contenedorEnvio.className = ("contenedorEnvio");
})

if(carritoCompras.length == 0){
    contenedorEnvio.className =  ("contenedorEnvioInvisible");
}