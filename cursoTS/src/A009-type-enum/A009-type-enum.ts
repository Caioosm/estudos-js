enum Cores {
  VERMELHO,
  AZUL,
  AMARELO,
}


function escolherCor(cor: Cores): void {
  console.log(Cores[cor])
}

escolherCor(Cores.AZUL)
