const contenedorProductos = document.getElementById("contenedorProductos");

// se crea el elemento parrafo con la presentacion de la empresa
let div_b = document.getElementById("bienvenida");
let parrafo = document.createElement("p");
div_b.className = "bienvenida";
parrafo.innerHTML = "<h1>FRUTOS ATIMOV ALMACEN NATURAL</h1>";
div_b.append(parrafo);

//parrafo nuevo
let div_disp = document.getElementById("texto_disponibles");
let prod_disp = document.createElement("p");
div_disp.className = "texto_disponibles";
prod_disp.innerHTML = "<h3> Sección productos disponibles:</h3>";
div_disp.append(prod_disp);


let data;
const traerDatos = async () => {
    const respuesta = await fetch("./data.json");
     data = await respuesta.json()

     //funcion que renderiza la seccion carrito de compras
    data.forEach(producto => {
        const div_contenedor = document.createElement("div");
        contenedorProductos.className = "contenedor_productos";
        div_contenedor.className = "divs_productos";
        div_contenedor.innerHTML = `<div >
                                        <img src="${producto.img}" alt="">
                                        <div >
                                            <h2>${producto.nombre} </h2>
                                            <p>Peso en gramos: ${producto.peso_gr}</p>
                                            <p> Cantidad: ${producto.cantidad}</p>
                                            <p>Precio: ${producto.precio}</p>
                                            <button class="btn btn-light boton_producto" id= boton${producto.id}>Agregar a carrito<i class="fas fa-shopping-cart"></button>
                                        </div>
                                    </div>`;
        contenedorProductos.append(div_contenedor);
        
        //boton que al hacer click llama a la funcion agregar al carrito
        const boton = document.getElementById(`boton${producto.id}`);
        boton.addEventListener('click', () => {
            agregarAlCarrito(producto.id);
            Swal.fire({
                position: 'center',
                icon: 'success',
                title: `Se ha agregado "${producto.nombre}" correctamente al carrito de compras`,
                showConfirmButton: false,
                timer: 1500
            })
        });
        
    });
} 
//ejecuto la funcion
traerDatos();  
