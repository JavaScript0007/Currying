const add = (x) => {
  // Add your code below this line
  return (y) =>  {
    return (z) => {
       return x + y + z
    }
  }
  // Add your code above this line
}

console.log(add(10)(20)(30))

// Currying and Partial Function Application

const volume = (l) => {
  return (w, h) => {
    return l * w * h
  }
}

console.log(volume(70)(203, 142))

// also can be called in this way
// because hCy is just a declaration of anonimous function
// that returned by volume
// it is just (w, h) => {
//   return l * w * h
// }
// it works becouse l comes from cloasure

const hCy = volume(70)

console.log(hCy(203, 142))


// example 3

const multiply = (x) => {
  return (y) => {
    return (z) => {
      return  x * y * z 
    } 
  }
}

console.log(multiply(2)(3)(4))

const mult1 = multiply(2)
const mult2 = mult1(3)
const mult3 = mult2(4)

// save as console above console.log(multiply(2)(3)(4))
console.log(mult3)

