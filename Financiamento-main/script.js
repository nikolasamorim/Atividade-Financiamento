function calcular(){

    let mensal = Number(document.getElementById('rmensal').value)
    let vprod = Number(document.getElementById('vprod').value)
    let entrada = Number(document.getElementById('ventrada').value)
    let tjuros = Number(document.getElementById('txjuros').value)
    let prestacoes = Number(document.getElementById('nprestacoes').value)

    let juros = tjuros/100
    
    var res = document.getElementById("resultado")
         
    
    var financiamento  = vprod - entrada
    // pmt = valor mensal a ser financiado
    var pmt = (financiamento *(((1+juros)**prestacoes*juros)/ ((1+juros)**prestacoes-1))).toFixed(2)

     if(pmt <= (0.3*mensal)){
        res.innerHTML = `Cada parcela sai a ${pmt}$ por mês`
    }else{
        res.innerHTML = 'Valor acima dos 30% do seu salário'
    }
    
    
}