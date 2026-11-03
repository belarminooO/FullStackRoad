type Uuid = number | string | null //alias evita a repeticao da tipagem

function acessar(uuid: Uuid, nome: string) {
  console.log(`ID: ${uuid} - Bem vindo ${nome}`)
}

function logUsuario(uuid: Uuid){
  console.log(`Conta referente ao UUID${uuid} `)
}

acessar(123, "Belarmino")

acessar("55", "Sacate")

logUsuario("123")



//Exemplo2
type Moeda = "BRL" | "EUR" | "USD"

function comprarItem(moeda: Moeda){
  console.log(`Comprando com a moeda: ${moeda} `)
}

comprarItem("USD")
