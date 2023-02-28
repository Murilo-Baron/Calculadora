function valores(num){ // chama os valores

    var insert = document.getElementById('input').innerHTML; 
    document.getElementById('input').innerHTML = insert + num; 

}
//função limpar
function limpar(){ 
    document.getElementById('input').innerHTML = " "; 
}

//resultado
function back(){  
    var resultado = document.getElementById('input').innerHTML;   
    document.getElementById('input').innerHTML = resultado.substring(0, resultado.length -1) 
}                                                                                      

//função de calculo 
function cal(){ 
    var resultado = document.getElementById('input').innerHTML;  
    
    if(resultado){ 
        document.getElementById('input').innerHTML = eval(resultado);  
    }
    else{
        document.getElementById('input').innerHTML = 'Não foi possível calcular';
    }                                                                  
}