/*
//PRESENTACION
alert("Bienvenido a los cosa café, café de especialidad");
alert("Amamos muchisimo el café, tanto o mas que usted, pero hay que ser sinceros, nada en exeso es bueno...");
alert("Lo ayudaremos a calcular si esta dentro del rango saludable de tomar café");
alert(" Una taza de café tiene 100 mg de cafe");

let taza = parseInt(prompt("Ingrese cuantas tazas de café diario consume"));

//FUNCION CALCULAR CAFÉ
function calcular_cafe (taza){
 return taza * 100;
};

let cant_mg = calcular_cafe(taza);

if (cant_mg === 100){
    alert("Muy bien, una taza de café diario no afectará para nada su salud")
} else if (cant_mg === 200){
    alert("Dos tazas de café esta dentro de lo permitido como consumo ")
} else if (cant_mg === 300){
    alert("Tres tazas de café no causaran daños en su organismo, aunque este sera el limite permitido diario")
} else if (cant_mg === 400){
    alert("Esta al limite de lo permitidio diario, 4 tazas es lo máximo que un adulto debería consumir en un día.");
} else if (cant_mg === 500){
    alert("Esta exedido, debería al menos bajar una taza de café al día, 4 es lo máximo permitido.");
} else{
    alert("Si realmente valora su salud, le recomendamos que baje la cantidad de cafeína que ingiere, porque es perjudicial para su salud"); 
}

alert("Ahora que sabe cuanto café tomar, vamos a conocernos un poco mas")
alert("Le pediremos algunos datos personales")
let nombre = prompt("Ingrese su nombre");
let edad = prompt("Ingrese su edad");
let tipo_de_cafe = parseInt(prompt("Ingrese el tipo de café que mas le agrada: 1-Expreso 2-Americano 3-Cortado 4-Late 5-Flat white 6-Otros"));
let telefono = prompt("Ingrese su teléfono");


// OBJETOS
//constructor cliente
function Cliente (informacion){
    this.nombre = informacion.nombre;
    this.edad = informacion.edad;
    this.tipo_de_cafe = informacion.tipo_de_cafe;
    this.telefono = informacion.telefono;
    this.cant_mg = informacion.cant_mg; 
}

//CLIENTE 1 CON DATOS INGRESADOS POR PROMPT
const cliente_1 = new Cliente ({
    nombre: nombre,
    edad: edad,
    tipo_de_cafe: tipo_de_cafe,
    telefono: telefono,
    cant_mg: cant_mg
})

//CLIENTE 2 CON DATOS DEFINIDOS
const cliente_2 = new Cliente ({
    nombre: "Octavia",
    edad: 68,
    tipo_de_cafe: 2,
    telefono: 1154875922,
    cant_mg: 200
})

//CLIENTE 2 CON DATOS DEFINIDOS
const cliente_3 = new Cliente ({
    nombre: "Leopoldo",
    edad: 52,
    tipo_de_cafe: 4,
    telefono: 1152144400,
    cant_mg: 400
})

console.log("El teléfono de " + cliente_1.nombre + " es  " + cliente_1.telefono + ".");
console.log(cliente_1.nombre + " bebe " + cliente_1.cant_mg + " mg de cafe por dia.");
console.log(cliente_2.nombre + " bebe " + cliente_2.cant_mg + " mg de cafe por dia.");
console.log(cliente_3.nombre + " usted tiene " + cliente_3.edad + " años.");
console.log("El tipo de café favorito de " + cliente_3.nombre + " es el numero " + cliente_3.tipo_de_cafe);

 

//ARRAY SIMPLE

let tipos_cafe = ["cortado", "expreso", "americano ", "latte", "flat_white"];
let copia = tipos_cafe.splice(1,2);

console.log(copia);
console.log(tipos_cafe);

console.log(tipos_cafe.join("----"));
console.log(tipos_cafe.indexOf("cortado"));
*/
//ARRAY QUE ALMACENA OBJETOS
/*
const productos = [
    {id: 253, nombre: "cortado" , precio: "400"},
    {id: 124, nombre: "tostado", precio: "850"},
    {id: 254, nombre: "chocotorta", precio: "2500"},
    {id: 375, nombre: "yogurt" , precio: "580"},
    {id: 874, nombre: "factura" , precio: "150"}, 
    {id: 044, nombre: "torta" , precio: "3000"},
];

productos.push({id: 444, nombre: "latte", precio: "500"});
productos.unshift({id: 985, nombre: "masas_finas", precio: "800"});
console.log(productos.length);
console.log(productos);
*/

//METODOS AVANZADOS ARRAYS
/*
let busqueda = productos.find(item => item.nombre === "tostado");
console.log(busqueda);

let busqueda2 = productos.find(item => item.precio === "3000");
console.log(busqueda2);

let filtro = productos.filter(item => item.precio > 500);
console.log(filtro);

let filtro2 = productos.filter(item => item.precio < 840);
console.log(filtro2);

let existe = productos.some(item => item.nombre === "torta");
console.log(existe);


let costo_envio = productos.map(item=>{
    return{
        id: item.id,
        nombre: item.nombre,
        precio: item.precio + 70
    }
});

console.log(costo_envio);
*/

let div_b = document.getElementById("bienvenida");
let parrafo = document.createElement("p");
div_b.className = "bienvenida";
parrafo.innerHTML = "<h1>FRUTOS ATIMOV ALMACEN NATURAL</h1>";
div_b.append(parrafo);

let div_disp = document.getElementById("disponibles");
let prod_disp = document.createElement("p");
div_disp.className = "disponibles";
prod_disp.innerHTML = "<h3>Productos disponibles:</h3>";
div_disp.append(prod_disp);

const productos = [
    {id: 78, nombre: "avena", peso_gr: 500, precio: 300},
    {id: 24, nombre: "almendra", peso_gr: 500, precio: 1700},
    {id: 12, nombre: "semilla", peso_gr: 500, precio: 500},

];

let nuevo_prod = {id: 321, nombre: "nuez", peso_gr: 500, precio: 1200};
productos.push(nuevo_prod);


let contenedor = document.getElementById("contenedor");

for (const producto of productos){
    let div_contenedor = document.createElement("div");
    contenedor.className = "productos";
    div_contenedor.className = "divs_productos";
    div_contenedor.innerHTML = `<h3>Nombre: ${producto.nombre} </h3>
                     <h5>id: ${producto.id}</p>
                     <h6>Peso en gramos: ${producto.peso_gr}</h6>
                     <h6>Precio: ${producto.precio}</h6>`;

    contenedor.append(div_contenedor);
}


div_comprar = document.getElementById("comprar");

nombre_prod.addEventListener("input", () => {
    if (nombre_prod.value.includes("avena")){
        let mensaje = document.createElement("p");
        mensaje.className = " caracteristicas"; 
        mensaje.innerHTML= "<h2> Estudios científicos han comprobado que comer cereales de grano entero como la avena, <br />puede tener efectos positivos en la salud. Esto se debe a que es fuente de fibra dietética, <br />proteína, vitaminas y minerales.</h2>";
        div_comprar.append(mensaje);

    }else if (nombre_prod.value.includes("almendra")){
        let mensaje = document.createElement("p");
        mensaje.className = " caracteristicas"; 
        mensaje.innerHTML= "<h2> Son ricas en fibras, proteínas, vitaminas B y E, grasas saludables, hierro, calcio, fósforo…<br /> Merendar almendras o tomarlas a media mañana puede ayudar a mantener unos niveles saludables de colesterol</h2>";
        div_comprar.append(mensaje);
    }
    else if (nombre_prod.value.includes("semilla")){
        let mensaje = document.createElement("p");
        mensaje.className = " caracteristicas"; 
        mensaje.innerHTML= "<h2>Aporta buena cantidad de vitamina E y vitaminas del complejo B <br />que ayuda al funcionamiento del sistema nervioso central</h2>";
        div_comprar.append(mensaje);
    }
    else if (nombre_prod.value.includes("nuez")){
        let mensaje = document.createElement("p");
        mensaje.className = " caracteristicas"; 
        mensaje.innerHTML= "<h2> Aporta numerosos minerales como potasio, que facilita el desarrollo muscular,<br /> zinc, que interviene en el sistema nervioso, magnesio y fósforo.<br /> Destaca por su contenido en vitaminas del grupo B, como la vitamina B1 o tiamina y la B6 o piridoxina,<br /> que favorecen el buen funcionamiento del cerebro y los músculos.</h2>";
        div_comprar.append(mensaje);
    }
});
































