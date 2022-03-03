
function insert(num){
                salvo = document.getElementById("display").innerHTML;
                document.getElementById("display").innerHTML =  salvo + num;
}

function clean(){
                document.getElementById("display").innerHTML = "";
}

function calcular(){
                 var resultado = document.getElementById("display").innerHTML
                if(resultado){
                                document.getElementById("display").innerHTML = eval(resultado);
                }

}