let carritoCompras = [];


document.addEventListener('DOMContentLoaded', () => {
        if(localStorage.getItem('carritoCompras')){
                carritoCompras = JSON.parse(localStorage.getItem('carritoCompras'));
                actualizarCarrito();
        }
});

const agregarAlCarrito = (productoId) => {
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
                localStorage.setItem("carritoCompras", JSON.stringify(carritoCompras)); 
        }) 
       
       
        const contadorCarrito = document.getElementById("contadorCarrito");
        contadorCarrito.innerText = carritoCompras.length;

        let precioTotal = document.getElementById("precioTotal");
        precioTotal = document.getElementById("precioTotal");
        precioTotal.innerHTML = carritoCompras.reduce((acumulador, producto) => acumulador + producto.cantidad * producto.precio, 0);
                
        contadorCarrito.innerText = carritoCompras.length;
        precioTotal.innerText = carritoCompras.reduce(
          (acc, prod) => acc + prod.cantidad * prod.precio,
          0
        );
}

    
const eliminarDelCarrito = (productoId) => {
        const item = carritoCompras.find(producto => producto.id === productoId);
        indice = carritoCompras.indexOf(item);
        carritoCompras.splice(indice, 1);
        actualizarCarrito();
        Swal.fire({
                position: 'center',
                icon: 'info',
                title: 'Se ha eliminado del carrito correctamente',
                showConfirmButton: false,
                timer: 1000
                })
                actualizarCarrito();
        };

const botonVaciar = document.getElementById("boton_vaciar")   
botonVaciar.addEventListener('click', () => {
    carritoCompras.length = 0
    Swal.fire({
        title: 'Esta seguro que desea vaciar el carrito de compras?',
        text: "Perdera todos los productos que inserto en el",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Si, vaciar'
      })
    actualizarCarrito();
})

if (carritoCompras.length == 0){
        botonVaciar.className = ("vaciar_visible");
        
}else{
        botonVaciar.className = ("boton_vaciar");  
}