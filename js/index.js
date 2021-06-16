function limpar(){
    document.getElementById('display').innerHTML = '';
}

function calcular(numero){
    var resultado = document.getElementById('display').innerHTML;
    document.getElementById('display').innerHTML += numero;
}

function result(){
    var resultado = document.getElementById('display').innerHTML;
    if(resultado){
        document.getElementById('display').innerHTML = eval(resultado);
    }else{
        limpar();
    }
}