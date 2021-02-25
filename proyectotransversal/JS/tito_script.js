var items = [
    ["img/movil.jpg","movil nuevo ultima generación","$185.00"],
    ["img/portatil.jpg","Portatil alta calidad","$285.00"],
    ["img/auriculaess_bluetooth.jpg","Auriculares super chulos","$85.00"],
    ["img/fitness_watch.jpg","Reloj super chulo","$90.00",],
    ["img/sanwitchera.jpg","Sandwitchera alta calidad","$185.00"],
    ["img/plancha.jpg","Plancha muy caliente","$81.00"],
    ["img/mouse_gaming.jpg","Raton para jugar","$20.50"],
    ["img/tableta_grafica.jpg","Tableta para dibujar","$80.00"]
]



//crear un div con una imagen, descripcion y su precio.
function addObjetos(){
for(x = 0; x < items.length; x++){
    var escaparate = document.getElementById("escaparate");
    var div = document.createElement("div");
    var divimg = document.createElement("div");
    var imagen = document.createElement("img"); 
    var descripcion = document.createElement("p");
    var precio = document.createElement("p");
    div.className = "objeto";
    divimg.className = "objimg"
    imagen.src = items[x][0];
    descripcion.innerText = items[x][1];
    precio.innerText = items[x][2];
    divimg.appendChild(imagen);
    div.appendChild(divimg);
    div.appendChild(descripcion);
    div.appendChild(precio);
    escaparate.appendChild(div);
    }
}
