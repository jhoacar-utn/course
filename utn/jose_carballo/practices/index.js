const productos = [
  {nombre:"anna",precio: 20},
  {nombre: "beth",precio: 30},
  {nombre:"chris",precio: 10},
  {nombre: "daniel",precio: 40},
  {nombre: "ethan",precio: 20}
]

productos.forEach( (elem) => {
 return elem.precio * 7
  
})