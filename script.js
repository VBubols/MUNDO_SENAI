let tensao, corrente, resistencia 

function calcular(){
    tensao = parseFloat(document.getElementById("tensao").value)
    corrente = parseFloat(document.getElementById("corrente").value)  
    resistencia = parseFloat(document.getElementById("resistencia").value)

    
    const tensaoNan = isNaN(tensao);
    const correnteNan = isNaN(corrente);
    const resistenciaNan = isNaN(resistencia);

    
    if(!tensaoNan && !correnteNan && !resistenciaNan){
        alert("Digite apenas dois valores realizar o cálculo!")
    //Calculo da corrente
    }else if(correnteNan && !tensaoNan && !resistenciaNan){
        document.getElementById("resultado").innerHTML = "Resultado: "
        corrente = tensao / resistencia
        definirValores(resistencia, tensao, corrente)
        document.getElementById("resultado").innerHTML += `Corrente = ${corrente.toFixed(3)} A (Amperes)`;

    //Calculo da tensao
    }else if(tensaoNan && !resistenciaNan && !correnteNan){
        document.getElementById("resultado").innerHTML = "Resultado: "
        tensao = resistencia * corrente
        definirValores(resistencia, tensao, corrente)
        document.getElementById("resultado").innerHTML += `Tensão = ${tensao.toFixed(3)} V (volts)`;
        
    //Calculo da resistencia
    }else if(resistenciaNan && !tensaoNan && !correnteNan){
        document.getElementById("resultado").innerHTML = "Resultado: "
        resistencia = tensao / corrente
        definirValores(resistencia, tensao, corrente)
        document.getElementById("resultado").innerHTML += `Resistência = ${resistencia.toFixed(3)} Ω (Ohms)`;

    }else{
        alert("ERRO! Digite ao menos dois valores para realizar o cálculo")
    }
}

function redefinir(){
    document.getElementById("resistencia").value = ""
    document.getElementById("tensao").value = ""
    document.getElementById("corrente").value = ""
    document.getElementById("resultado").innerHTML = "Resultado: "
}

function definirValores(resistencia, tensao, corrente){
    document.getElementById("resistencia").value = resistencia.toFixed(3)
    document.getElementById("tensao").value = tensao.toFixed(3)
    document.getElementById("corrente").value = corrente.toFixed(3)
}
