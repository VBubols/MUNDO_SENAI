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
        corrente = tensao / resistencia
        definirValores(resistencia, tensao, corrente)
        document.getElementById("resultado").innerHTML += `Corrente = ${corrente} A (Amperes)`;

    //Calculo da tensao
    }else if(tensaoNan && !resistenciaNan && !correnteNan){
        tensao = resistencia * corrente
        definirValores(resistencia, tensao, corrente)
        document.getElementById("resultado").innerHTML += `Tensão = ${tensao} V (volts)`;
        
    //Calculo da resistencia
    }else if(resistenciaNan && !tensaoNan && !correnteNan){
        resistencia = tensao / corrente
        definirValores(resistencia, tensao, corrente)
        document.getElementById("resultado").innerHTML += `Resistência = ${resistencia} Ω (Ohms)`;

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
    document.getElementById("resistencia").value = resistencia
    document.getElementById("tensao").value = tensao
    document.getElementById("corrente").value = corrente
}