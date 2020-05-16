const suma = (numeroUno, numeroDos) => {
    return numeroUno + numeroDos
  }

test('Todo bien con la comparación de valores', ()=>{
    expect(suma(2,2)).toBe(4)
})