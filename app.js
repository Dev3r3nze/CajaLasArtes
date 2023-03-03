var arrVentas = [[],[],[],[],[]];
var arrVentasIndividuales = [[],[],[],[],[]];
var arrNums = [[],[],[],[],[]]
var ventasTotales = 0
var campeonatoText = "Campeonato 10:00"
var campeonato = 1;
var lastNum = 0

function Numerar(num){
    if(num!= Number){
        num = Number(num)
    }
    arrNums[campeonato-1].push(num)
    document.getElementById("numSelect").innerHTML = "<p>"+num+"</p>"
    lastNum = num
}

function Confirmar(){
    ventasTotales = 0
    arrVentasIndividuales[campeonato-1] = 0
    arrVentas[campeonato-1].push(arrNums[campeonato-1][arrNums[campeonato-1].length-1])
    CrearRegistro(arrNums[campeonato-1][arrNums[campeonato-1].length-1])
    ActualizarStats()
}
function Borrar(){
    ventasTotales = 0
    arrVentasIndividuales[campeonato-1] = 0
    arrVentas[campeonato-1].push(-arrNums[campeonato-1][arrNums[campeonato-1].length-1])
    CrearRegistro(-arrNums[campeonato-1][arrNums[campeonato-1].length-1])

    ActualizarStats()
}
function ActualizarStats(){
    for(var i = 0; i < arrVentas[campeonato-1].length;i++){
        arrVentasIndividuales[campeonato-1] += arrVentas[campeonato-1][i]

    }

    arrVentas.forEach(subArr => {
        subArr.forEach(valor => {
            ventasTotales += valor;
        });
    });
    
    console.log(ventasTotales);

    ActualizarSoloStats();
}
function ActualizarSoloStats(){
    document.getElementById("vendidoStat").innerHTML = "<p> Vendido: "+arrVentasIndividuales[campeonato-1]+" entradas </p>"
    document.getElementById("recaudadoStat").innerHTML = "<p> Recaudado: "+arrVentasIndividuales[campeonato-1]*5+" €</p>"
    document.getElementById("ventaTotalStat").innerHTML="<p>Total vendido: "+ventasTotales+" ("+ventasTotales*5+" €)</p>"

}

function CrearRegistro(num){
    if(num>0)numText = document.createTextNode("+"+num + " "+ campeonatoText)
    else(numText = document.createTextNode(num + " "+ campeonatoText))
    node = document.createElement("li")
    node.appendChild(numText)
    var parent = document.getElementById('registroUl');
    var newChild = node
    parent.insertBefore(newChild, parent.firstChild);

}

function CambioCampeonato(camp){
    campeonato = camp
    campeonatoText = document.getElementsByClassName("campeonatoText")[document.getElementsByClassName("campeonatoText").length - campeonato].textContent;
    document.getElementById("titleDiv").innerHTML="<p>"+campeonatoText+"</p>"

    arrNums[campeonato-1].push(lastNum)
    ActualizarSoloStats()
}