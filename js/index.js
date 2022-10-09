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
prod_disp.innerHTML = "<h3>Productos disponibles:</h3>";
div_disp.append(prod_disp);



const contenedorProductos = document.getElementById("contenedorProductos");


let data;
const traerDatos = async () => {
    const respuesta = await fetch("./data.json");
     data = await respuesta.json()

    data.forEach(producto => {
        const div_contenedor = document.createElement("div");
        contenedorProductos.className = "contenedor_productos";
        div_contenedor.className = "divs_productos";
        div_contenedor.innerHTML = `<div >
                                        <img src="${producto.img}" alt="">
                                        <div class="">
                                            <h2>${producto.nombre} </h2>
                                            <p>Peso en gramos: ${producto.peso_gr}</p>
                                            <p> Cantidad: ${producto.cantidad}</p>
                                            <p>Precio: ${producto.precio}</p>
                                            <button class="btn btn-light boton_producto" id= boton${producto.id}>Comprar<i class="fas fa-shopping-cart"></button>
                                        </div>
                                    </div>`;
        contenedorProductos.append(div_contenedor);
        
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

traerDatos();  



div_comprar = document.getElementById("formulario_nutricional");

nombre_prod.addEventListener("input", () => {
    if (nombre_prod.value.includes("avena")){
        let mensaje = document.createElement("p");
        mensaje.className = " info_nutricional"; 
        mensaje.innerHTML= "<h2> Estudios científicos han comprobado que comer cereales de grano entero como la avena, <br />puede tener efectos positivos en la salud. Esto se debe a que es fuente de fibra dietética, <br />proteína, vitaminas y minerales.</h2>";
        div_comprar.append(mensaje);
       

    }else if (nombre_prod.value.includes("almendra")){
        let mensaje = document.createElement("p");
        mensaje.className = " info_nutricional"; 
        mensaje.innerHTML= "<h2> Son ricas en fibras, proteínas, vitaminas B y E, grasas saludables, hierro, calcio, fósforo…<br /> Merendar almendras o tomarlas a media mañana puede ayudar a mantener unos niveles saludables de colesterol</h2>";
        div_comprar.append(mensaje);
    }
    else if (nombre_prod.value.includes("semilla")){
        let mensaje = document.createElement("p");
        mensaje.className = " info_nutricional"; 
        mensaje.innerHTML= "<h2>Aporta buena cantidad de vitamina E y vitaminas del complejo B <br />que ayuda al funcionamiento del sistema nervioso central</h2>";
        div_comprar.append(mensaje);
    }
    else if (nombre_prod.value.includes("nuez")){
        let mensaje = document.createElement("p");
        mensaje.className = " info_nutricional"; 
        mensaje.innerHTML= "<h2> Aporta numerosos minerales como potasio, que facilita el desarrollo muscular,<br /> zinc, que interviene en el sistema nervioso, magnesio y fósforo.<br /> Destaca por su contenido en vitaminas del grupo B, como la vitamina B1 o tiamina y la B6 o piridoxina,<br /> que favorecen el buen funcionamiento del cerebro y los músculos.</h2>";
        div_comprar.append(mensaje);
    }
});
































