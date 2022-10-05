let carritoCompras = [];


document.addEventListener('DOMContentLoaded', () => {
        if(localStorage.getItem('carritoCompras')){
                carritoCompras = JSON.parse(localStorage.getItem('carritoCompras'));
                actualizarCarrito();
        }
});

const agregarAlCarrito = (productoId) => {
    const existe = carritoCompras.some(producto => producto.id === productoId);
            if(existe){
                    let producto = carritoCompras.map(producto => {
                            if(producto.id === productoId){
                                    producto.cantidad++;
                            }
                    })
            } else{
                    let item = stockProductos.find(producto => producto.id === productoId);
                    carritoCompras.push(item);
            }
    actualizarCarrito();   
};


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
    
};



const actualizarCarrito = () =>{
    
    const contenedor = document.getElementById("contenedorCarrito");
    contenedor.innerHTML = "";

    carritoCompras.forEach((producto) => {
            const div_carrito = document.createElement("div");
            div_carrito.className= ("compras");
            div_carrito.innerHTML = `<h5 class="estilo_modal"> ${producto.nombre} </h5>
                                    <p class="estilo_modal"> Peso en gramos: ${producto.peso_gr} </p>
                                    <p class="estilo_modal"> Cantidad: <span id="cantidad">${producto.cantidad}</span></p>
                                    <p class="estilo_modal"> Precio: ${producto.precio} </p>
                                    <button class="btn btn-outline-light btn-sm" onclick="eliminarDelCarrito(${producto.id})"> <img src="./multimedia/1485477104-basket_78591.ico"> </button>`
    
            contenedor.append(div_carrito);
            localStorage.setItem("carritoCompras", JSON.stringify(carritoCompras)); 
    }) 
    contador_carrito.innerText = carritoCompras.length;
    //precioProducto = document.getElementById("precioProducto");
    //precioProducto.innerHTML = carritoCompras.reduce((acumulador, item) => acumulador + item.precio, 0);
}




