const dayOne = (data) => {
  const formattedData = data.split('\n\n').map((el) => el.split('\n'))

  const totalValues = formattedData.map((reindeer) => {
    reindeer = reindeer.filter(values => values !== '')
    return reindeer.reduce((total, current) => parseInt(total) + parseInt(current), 0)
  })

  return Math.max(...totalValues)
}

const dayOnePartTwo = (data) => {
  const formattedData = data.split('\n\n').map((el) => el.split('\n'))

  const totalValues = formattedData.map((reindeer) => {
    reindeer = reindeer.filter(values => values !== '')
    return reindeer.reduce((total, current) => parseInt(total) + parseInt(current), 0)
  })

  totalValues.sort((a,b) => b - a).splice(3, totalValues.length)
  return totalValues.reduce((total, current) => total + current, 0)
}

//// 2023
const dayOne23 = (data) => {
  const removedLetters = data.split('\n').map(row => row.replace(/[a-zA-Z]+/g, ''))
  const mapNumbers = removedLetters.map(row => row.length >= 2 ? parseInt(`${row[0]}${row[row.length - 1]}`) : parseInt(`${row[0]}${row[0]}`))
  return mapNumbers.reduce((total, next) => total + next, 0)
}
// split by row and remove letters
// get the first and last number 
// combine the first and last number

const dayOnePartTwo23 = (data) => {
  // hash table
  // loop over teh table and if a string number is found then replace with actual number
  const numberMap = {
    one: '1',
    two: '2'
  }
  const convertStringNumbers = data.split('\n').map((row) => {
    const temp = []
    for (const property in numberMap) {
      if (row.includes(property)) {
         temp.push(numberMap[property])
      }
      return temp
    }
  })
  return convertStringNumbers
  // const removedLetters = convertStringNumbers.map(row => row.replace(/[a-zA-Z]+/g, ''))
  // const mapNumbers = removedLetters.map(row => row.length >= 2 ? parseInt(`${row[0]}${row[row.length - 1]}`) : parseInt(`${row[0]}${row[0]}`))
  // return mapNumbers.reduce((total, next) => total + next, 0)
}


module.exports = {
  dayOne,
  dayOnePartTwo,
  dayOne23,
  dayOnePartTwo23
}