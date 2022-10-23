let carritoCompras = [];
const textoPrecio = document.getElementById("textoPrecio")

//transorma el json
document.addEventListener('DOMContentLoaded', () => {
        if(localStorage.getItem('carritoCompras')){
                carritoCompras = JSON.parse(localStorage.getItem('carritoCompras'));
                actualizarCarrito();
        }
        
});

//funcion que hace visible la seccion carrito
function mostrarSeccionCarrito () {
        botonVaciar.className = ("botonVaciarVisible btn btn-light");
        textoPrecio.className = ("textoPrecioVisible"); 
}

//funcion que cuando el usuario clickea en "comprar" agrega el producto al carrito,
// o en caso que ya se encuentre agrega la cantidad
const agregarAlCarrito = (productoId) => {
        
        mostrarSeccionCarrito();

        const existe = carritoCompras.some(producto => producto.id === productoId);
            let producto;
                if(existe){
                        producto = carritoCompras.map(producto => {
                                if(producto.id === productoId){
                                        producto.cantidad++;
                                }
                        })
                } else{
                        const item = data.find(producto => producto.id === productoId);
                        carritoCompras.push(item);
                }

        actualizarCarrito();   
};      
    
//funcion que renderiza el carrito
const actualizarCarrito = () =>{

        const contenedor = document.getElementById("contenedorCarrito");
        contenedor.innerHTML = "";

        carritoCompras.forEach((producto) => {
                const div_carrito = document.createElement("div");
                div_carrito.className= ("listado_productos");
                div_carrito.innerHTML = `<h5 class="estilo_modal"> ${producto.nombre} </h5>
                                        <p class="estilo_modal"> Peso en gramos: ${producto.peso_gr} </p>
                                        <p class="estilo_modal"> Cantidad: <span id="cantidad">${producto.cantidad}</span></p>
                                        <p class="estilo_modal"> Precio unidad: ${producto.precio} </p>
                                        <button class="btn btn-outline-light btn-sm" onclick="eliminarDelCarrito(${producto.id})"> <img src="./multimedia/1485477104-basket_78591.ico"> </button>`
                contenedor.append(div_carrito);
                localStorage.setItem('carritoCompras', JSON.stringify(carritoCompras));
        }) 
       
        if (carritoCompras.length == 0){
                localStorage.clear()
        }

        //si el carrito de comprastiene algun producto dentro muestra la seccion carrito
        // sino lo hace invisible
        if(carritoCompras.length > 0){
        mostrarSeccionCarrito ();
        } else{
                botonVaciar.className = ("botonVaciarInvisible");
                textoPrecio.className = ("textoPrecioInvisible");
                botonEnviar.className = ("botonEnviarInvisible");
                
        }

        const contadorCarrito = document.getElementById("contadorCarrito");
        contadorCarrito.innerText = carritoCompras.length;

        let precioTotal = document.getElementById("precioTotal");
        precioTotal = document.getElementById("precioTotal");
        precioTotal.innerHTML = carritoCompras.reduce((acumulador, producto) => acumulador + producto.cantidad * producto.precio, 0);
                
        //arrojael total de los precios de los productos multiplicado por sus cantidades
        contadorCarrito.innerText = carritoCompras.length;
        precioTotal.innerText = carritoCompras.reduce(
          (acc, prod) => acc + prod.cantidad * prod.precio, 0);
          console.log(carritoCompras)
}

//funcion que al llamarla busca dentro del array carritoCompras el producto, y lo elimina con el splice
const eliminarDelCarrito = (productoId) => {
        const item = carritoCompras.find((producto) => producto.id === productoId);
        const indice = carritoCompras.indexOf(item);
        carritoCompras.splice(indice, 1);
        actualizarCarrito();
        Swal.fire({
                position: 'center',
                icon: 'info',
                title: 'Se ha eliminado del carrito correctamente',
                showConfirmButton: false,
                timer: 1000
                })
             // actualizarCarrito(); 
        };

//boton que llama a funcion vaciar carrito
const botonVaciar = document.getElementById("boton_vaciar") 
botonVaciar.addEventListener('click', () => {
        vaciarCarrito();
})
//funcion que vacia el carrio
const vaciarCarrito = () =>{
        carritoCompras = [];
        actualizarCarrito();
        botonVaciar.className = ("botonVaciarInvisible"); 
        textoPrecio.className = ("textoPrecioInvisible");
        botonEnviar.className = ("botonEnviarInvisible");
        contenedorEnvio.className =  ("contenedorEnvioInvisible"); 
}
 
if (carritoCompras.length == 0){
        botonVaciar.className = ("botonVaciarInvisible"); 
        textoPrecio.className = ("textoPrecioInvisible"); 
       
}