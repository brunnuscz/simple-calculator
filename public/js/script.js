// FUNÇÃO QUE INSERI VALOR
function insert(valor_01){
    var valor_02 = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = valor_02 + valor_01;
}

// FUNÇÃO QUE APAGA TUDO DIGITADO
function clean(){
    document.getElementById('resultado').innerHTML = "";
}

// FUNÇÃO QUE APAGA O ULTIMO ELEMENTO DIGITADO
function back(){
    var resultado = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = resultado.substring(0, resultado.length -1);
}

// FUNÇÃO QUE DÁ O RESULTADO FINAL
function calcular(){
    var resultado = document.getElementById('resultado').innerHTML;
    // SE TIVER ALGUMA OPERAÇÃO
    if(resultado){
        document.getElementById('resultado').innerHTML = eval(resultado) // O MÉTODO eval COMPUTA TODAS AS OPERAÇÕES E DÁ O RESULTADO
    }
    // SE NÃO TIVER NADA DIGITADO
    else{
        document.getElementById('resultado').innerHTML = "null value"
    }
}