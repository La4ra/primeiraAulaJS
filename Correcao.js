// Função de média + if/else (aritmético + função + if) 

function media(n1, n2) {
    return (n1 + n2) / 2
}

let n1 = 7
let n2 = 10

let resposta = media(n1, n2)

if (resposta >= 7) {
    console.log('Aprovado')
} else {
    console.log('Reprovado')
}

// Função de troco + verificação (aritmético + função + if +  comparador) 

function calcularTroco(pago, compra) {
    return pago - compra
}


const troco = calcularTroco(999, 10000)

if (troco >= 0) {
    console.log('Troco:', troco)
} else {
    console.log('Faltou grana, faltou:', troco)
}


// Função de desconto + condição (aritmético + função + if)
function precoComDesconto(preco, perc) {
    return preco - (preco * perc) / 100
}

const preco = 150
const perc = 15


if (perc > 0) {
    console.log('Preço final:', precoComDesconto(preco, perc))
} else {
    console.log('preço original:', preco)
}

// Conta com taxa de serviço + lógica (aritmético + lógico + if) 
function totalComTaxa(valor, taxa) {
    return valor + (valor * taxa) / 100
}

function valorPorPessoa(total, pessoas) {
    return total / pessoas
}


const valorDaConta = 150
const taxa = 10
const pessoas = 9

if (pessoas > 0 && taxa >= 0) {
    const total = totalComTaxa(valorDaConta, taxa)
    const porPessoa = valorPorPessoa(total, pessoas)

    console.log('Total com taxa:', total)
    console.log(`Valor para cada pessoa: ${porPessoa.toFixed(2)}`)
} else {
    console.log('Dados inválidos')
}

// Par ou ímpar em função (aritmético % + função + if)
function ehPar(n) {
    return n % 2 === 0
}

const n = 7

if (ehPar(n)) {
    console.log('PAR')
} else {
    console.log('impar')
}


// Divisível por 3 e 5 (aritmético % + lógico && + if)

function divisivel(n) {
    return n % 3 === 0 && n % 5 === 0 // PRECISA DIVIDIR POR 3 E POR 5
}

const x = 30

if (divisivel(x)) {
    console.log(`${x} é divisivel por 3 e 5`)
} else {
    console.log(`${x} Não é divisivel por 3 e 5`)
}
// Intervalo com && (comparadores + lógico + if)
function estaEntre(tempIntervalo, min, max) {
    return tempIntervalo >= min && tempIntervalo <= max //ELE QUER SABER SE O TEMPO DE INTERVÁLO SERÁ PERMITIDO 

}


const tempoIntervalo = 5
const limiteMin = 12
const limiteMax = 15

if (estaEntre(tempoIntervalo, limiteMin, limiteMax)) {
    console.log('ok, dentro do limite')
} else {
    console.log('Deu ruim')
}


// Pode dirigir (lógico && + if)

function podeDirigir(idade, temCarteira) {
    return idade >= 18 && temCarteira
    // v                 v  === v
}

const idade = 18
const temCarteira = true

if (podeDirigir(idade, temCarteira)) {
    console.log('pode dirigir')
} else {
    console.log('liga pra mamãe')
}


// Acesso ao evento (lógico || e && + if)
function podeEntrar(temIngresso, taNaLista, temDoc) {
    return (temIngresso || taNaLista) && temDoc
    //V                                 V === V
}

const temIngresso = true
const taNaLista = false
const temDoc = true

const respost = podeEntrar(temIngresso, taNaLista, temDoc)

if (respost) {
    console.log('Pode entrar')
} else {
    console.log('liga pra mamãe buscar na festa')
}


// Login com === e && (comparador estrito + lógico + if)

function loginOk(emailDigitado, senhaDigitada, emailCerto, senhaCerta) {
    return emailDigitado === emailCerto && senhaDigitada === senhaCerta // SE É T OU F
}

const emailDigitado = '123@gmail.com'
const emailCerto = '123@gmail.com'
const senhaDigitada = 1234
const senhaCerta = 123

if (loginOk(emailDigitado, senhaDigitada, emailCerto, senhaCerta)) {
    console.log('Logado')
} else {
    console.log('E-mail ou senha incorretos')
}



// Preço final: desconto e imposto (aritmético + função + if)
function precoFinal(preco, desc, imposto) {
    const comDesconto = preco - (preco * desc) / 100
    const comImposto = comDesconto + (comDesconto * imposto) / 100
    return comImposto
}
/////////////////////////////////////////////////////
const p = 100
const desc = 10
const imposto = 5

if (desc >= 0 && imposto >= 0) {
    console.log('preço final:', precoFinal(p, desc, imposto))
} else {
    console.log('Não há taxas')
}


// Converter tempo (aritmético + função + i


// Comparar dois cálculos (aritmético + comparador + if)


// XOR (OU exclusivo) em função + if (lógico + if)


// Condicional “se P então Q” (implicação) + if (lógico + if) 

function implica (p, q) {
return (!p) || q;
} 
let pp = true
let q = false
if (implica(pp,q)) {
    console.log (" P -> Q é verdadeiro")

}
else {
    console.log("P -> Q é falso")
}
