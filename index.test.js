const { dayOne, dayOnePartTwo, dayOne23, dayOnePartTwo23 } = require('./index')
const fs = require('fs')

describe('advent of code tests', () => {
  test('Day one return total calories sample input', () => {
    const data = fs.readFileSync('./inputs/day-one-sample.txt', 'utf8')
    const result = dayOne(data)
    expect(result).toBe(24000)
  })

  test('Day one return total calories real input', () => {
    const data = fs.readFileSync('./inputs/day-one.txt', 'utf8')
    const result = dayOne(data)
    expect(result).toBe(66306)
  })

  test('Day one sum of top three calorie counters sample input', () => {
    const data = fs.readFileSync('./inputs/day-one-sample.txt', 'utf8')
    const result = dayOnePartTwo(data)
    expect(result).toBe(45000)
  })

  test('Day one sum of top three calorie counters real input', () => {
    const data = fs.readFileSync('./inputs/day-one.txt', 'utf8')
    const result = dayOnePartTwo(data)
    expect(result).toBe(195292)
  })

  //// 2023
  test('2023 day one sample', () => {
    const data = fs.readFileSync('./inputs/2023/01-sample.txt', 'utf8')
    const result = dayOne23(data)
    expect(result).toBe(142)
  })

  test('2023 day one', () => {
    const data = fs.readFileSync('./inputs/2023/01.txt', 'utf8')
    const result = dayOne23(data)
    expect(result).toBe(55621)
  })

  test('2023 day one part two', () => {
    const data = fs.readFileSync('./inputs/2023/01b-sample.txt', 'utf8')
    const result = dayOnePartTwo23(data)
    expect(result).toBe(281)
  })

})