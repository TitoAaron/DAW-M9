var items = [
    ["img/movil.jpg","movil nuevo ultima generación","$185.00"],
    ["img/portatil.jpg","Portatil alta calidad","$285.00"],
    ["img/auriculaess_bluetooth.jpg","Auriculares super chulos","$85.00"],
    ["img/fitness_watch.jpg","Reloj super chulo","$90.00",],
    ["img/sanwitchera.jpg","Sandwitchera alta calidad","$185.00"],
    ["img/plancha.jpg","Plancha muy caliente","$81.00"],
    ["img/mouse_gaming.jpg","Raton para jugar","$20.50"],
    ["img/tableta_grafica.jpg","Tableta para dibujar","$80.00"]
];

var items2 = [
    ["img/gameaccesories.jpg","Game Accesories"],
    ["img/multdev.jpg","Multimedia Devices"],
    ["img/computeraccesories.jpg","Computer accesories"]
    
    
];

//crear un div con una imagen, descripcion y su precio.


function cargarObjetos(){
    addObjetos1();
    addObjetos2();
    addObjetos3();
}

   


function addObjetos1(){
   
for(x = 0; x < items.length; x++){
    var escaparate = document.getElementsByClassName("escaparate")[0];
    var div = document.createElement("div");
    var divimg = document.createElement("div");
    var imagen = document.createElement("img"); 
    var descripcion = document.createElement("p");
    var precio = document.createElement("p");
    precio.className = "precio";
    div.className = "objeto";
    divimg.className = "objimg";
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

function addObjetos2(){
    for(x = 0; x <items2.length; x++){
    escaparate = document.getElementById("escaparate_pequeño");
    div = document.createElement("div");
    divimg = document.createElement("div");
    imagen = document.createElement("img"); 
    descripcion = document.createElement("p");
    boton = document.createElement("button");
    boton.innerText = "SHOP NOW";
    div.className = "objeto2";
    divimg.className = "objimg2";
    imagen.src = items2[x][0];
    descripcion.innerText = items2[x][1];
    divimg.appendChild(imagen);
    div.appendChild(divimg);
    div.appendChild(descripcion);
    div.appendChild(boton);
    escaparate.appendChild(div);
    }
}


function addObjetos3(){
    for(x = 0; x <= 3; x++){
        var escaparate = document.getElementsByClassName("escaparate")[1];
        var div = document.createElement("div");
        var divimg = document.createElement("div");
        var imagen = document.createElement("img"); 
        var descripcion = document.createElement("p");
        var precio = document.createElement("p");
        var tiempo = document.createElement("div");
        var boton = document.createElement("button");
        var tiempoHoras = document.createElement("p");
        var formatoHora = document.createElement("p");
        precio.className = "precio";
        tiempo.className = "timer";
        tiempoHoras.innerText = "365 7 23 52"
        formatoHora.innerText = "Days Hour Min Sec"
        boton.innerText = "ADD TO CART";
        div.className = "objeto";
        divimg.className = "objimg";
        boton.className = "add";
        imagen.src = items[x][0];
        descripcion.innerText = items[x][1];
        precio.innerText = items[x][2];
        tiempo.appendChild(tiempoHoras);
        tiempo.appendChild(formatoHora);
        divimg.appendChild(imagen);
        divimg.appendChild(tiempo);
        div.appendChild(divimg);
        div.appendChild(descripcion);
        div.appendChild(boton);
        div.appendChild(precio);
        escaparate.appendChild(div);
        }

    }
