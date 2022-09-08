
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

//ARRAY QUE ALMACENA OBJETOS
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


//METODOS AVANZADOS ARRAYS

let busqueda = productos.find(producto => producto.nombre === "tostado");
console.log(busqueda);

let busqueda2 = productos.find(producto => producto.precio === "3000");
console.log(busqueda2);

let filtro = productos.filter(item => item.precio > 500);
console.log(filtro);

let filtro2 = productos.filter(item => item.precio < 840);
console.log(filtro2);

let existe = productos.some(producto => producto.nombre === "torta");
console.log(existe);

























