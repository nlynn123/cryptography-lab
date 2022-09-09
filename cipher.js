const decodeString = (code) => {
  let decipher = +code[0]
  let solution = ''

  for (let i = 1; i < code.length; i++){
    let stringValue = code[i].charCodeAt() + decipher
    solution += String.fromCharCode(stringValue)
  }
  console.log(solution)
}

decodeString('2ilovecryptography')