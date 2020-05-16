const suma = (numeroUno, numeroDos) => {
  return numeroUno + numeroDos
}

const verificarSuma = (numeroUno, numeroDos, valorEsperado) => {
  const resultado = suma(numeroUno, numeroDos)

  if (resultado !== valorEsperado) {
    throw new Error(`${resultado} es diferente de ${valorEsperado}`)
  } else {
    console.log('Todo bien con la comparación de valores')
  }
}

verificarSuma(2,2,4)
