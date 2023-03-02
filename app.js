var arrVentas = []
var arrNums = []
var ventasTotales = 0


function Numerar(num){
    if(num!= Number){
        num = Number(num)
    }
    arrNums.push(num)
    document.getElementById("numSelect").innerHTML = "<p>"+num+"</p>"
}

function Confirmar(){
    ventasTotales = 0
    arrVentas.push(arrNums[arrNums.length-1])
    CrearRegistro(arrNums[arrNums.length-1])

    ActualizarStats()
}
function Borrar(){
    ventasTotales = 0
    arrVentas.push(-arrNums[arrNums.length-1])
    CrearRegistro(-arrNums[arrNums.length-1])

    ActualizarStats()
}
function ActualizarStats(){
    for(var i = 0; i < arrVentas.length;i++){
        ventasTotales += arrVentas[i]
    }

    document.getElementById("vendidoStat").innerHTML = "<p> Vendido: "+ventasTotales+" entradas </p>"
    document.getElementById("recaudadoStat").innerHTML = "<p> Recaudado: "+ventasTotales*5+" €</p>"
}

function CrearRegistro(num){
    if(num>0)numText = document.createTextNode("+"+num)
    else(numText = document.createTextNode(num))
    node = document.createElement("li")
    node.appendChild(numText)
    var parent = document.getElementById('registroUl');
    var newChild = node
    parent.insertBefore(newChild, parent.firstChild);

}