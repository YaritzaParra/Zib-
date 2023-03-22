export function pintarProductos(productos){


    //recorriendo el arreglo
productos.forEach(function(producto){

    //creando columnas para alojarlos productos
    let columna=document.createElement("div")
    columna.classList.add("col")
    
    //crear una tarjeta para almacenar la info del producto
    let tarjeta=document.createElement("div")
    tarjeta.classList.add("card", "h-100", "shadow")

    

    //crear una imagen
    let imagen=document.createElement("img")
    imagen.classList.add("img-fluid", "w-100")
    imagen.src=producto.fotos[0]
    
    //crear un titulo
    let nombre=document.createElement("h3")
    nombre.classList.add("text-center")
    nombre.textContent=producto.nombre
    
    //crear un precio
    let precio=document.createElement("h5")
    precio.classList.add("text-center","text-success","fw-bold")
    precio.textContent=producto.precio


    //crear una descripcion oculta
    let descripcion=document.createElement("p")
    descripcion.classList.add("text-center","fw-bold","d-none")
    descripcion.textContent=producto.descripcion

    let cantidad=document.createElement("input")
        cantidad.classList.add("d-none")
        cantidad.textContent=producto.cantidad


    //Detectando eventos
    tarjeta.addEventListener("mouseover",function(){
        imagen.src=producto.fotos[1]
    })
    tarjeta.addEventListener("mouseleave",function(){
        imagen.src=producto.fotos[0]
    })

    

    
    //padres e hijos
    tarjeta.appendChild(imagen)
    tarjeta.appendChild(nombre)
    tarjeta.appendChild(precio)
    tarjeta.appendChild(descripcion)
    tarjeta.appendChild(cantidad)
    columna.appendChild(tarjeta)
    fila.appendChild(columna)
    })
}