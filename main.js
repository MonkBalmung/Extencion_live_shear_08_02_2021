let cadena = "Learn Git and GitHub without any code!";
console.log(cadena);

let resultado = cadena.startsWith("Learn");//Evalúa si la primera palabra de una cadena es el valor ingresado en el parámetro. 
console.log(resultado);

resultado = cadena.endsWith("code!");//Evalúa si la última palabra de una cadena es el valor ingresado en el parámetro.
console.log(resultado);

resultado = cadena.includes("GitHub");//Evalúa si la palabra del medio de una cadena es el valor ingresado en el parámetro.
console.log(resultado);

resultado = cadena.indexOf("u");//Muestra el índice en el que se encuentra por primera vez, de izquierda a derecha, el valor puesto en el parámetro.
console.log(resultado);

resultado = cadena.lastIndexOf("b"); //Muestra el índice en el que se encuentra por primera vez, de derecha a izquierda, el valor puesto en el parámetro.
console.log(resultado);

resultado = cadena.repeat(4);//Repite la cadena tantas veces como cantidad de veces se ponga en el parámetro
console.log(resultado);

resultado = cadena.split(" ",7);//Separa los elementos de la cadena y los coloca como valores independientes en un array.
console.log(resultado);
// console.log(cadena.length);
// console.log(cadena);

console.log(resultado.join(" "));//Split convierte en Array; join une los elementos de un array en una sola cadena

console.log(cadena.substring(0,4));//Según el rango de índices dados en los parámetros, extrae un elemento en concreto para mostrarlo en pantalla
console.log(cadena);//Como se ve, la cadena queda intacta

resultado = cadena.toUpperCase();//Coloca en mayusculas toda la cadena
console.log(resultado);

resultado = cadena.toLowerCase();//Coloca en minúsculas toda la cadena
console.log(resultado);

let serie_Enteros = 123456789;
console.log(serie_Enteros, typeof(serie_Enteros));
resultado = serie_Enteros.toString();
console.log(resultado, typeof(resultado));//Como se observa, serie_Enteros es una variable numerica, y con toString se convierte en string

