const fizzbuss = require('./fizzbuss');

describe('fizzbuzz',() =>{
    test('the argument should be a number',() =>{
        const expected = "Error The argument should be a number"
        const  result = fizzbuss('16')
        expect(expected).toBe(result)
    })
    test('should print 1 if recive 1',() =>{
        const expected = 1 
        const result = fizzbuss(1)
     expect(expected).toBe(result)
        })
    test('should print fizz if recive 3',() =>{
        const expected = 'fizz'
        const result = fizzbuss(3)
        expect(expected).toBe(result)
    })
    test('should print fizz if recive  a multiple of 3',() =>{
        const expected = 'fizz'
        const result = fizzbuss(6)
        expect(expected).toBe(result)
        })
        test('should print fizz if recive  5',() =>{
            const expected = 'buzz'
            const result = fizzbuss(5)
            expect(expected).toBe(result)
        })
        test('should print fizz if recive a multiply of 5',() =>{
            const expected = 'buzz'
            const result = fizzbuss(10)
            expect(expected).toBe(result)
        })
        test('should print fizzbuss if recive a multiply of 3 and 5',() =>{
            const expected = 'fizzbuss'
            const result = fizzbuss(15)
            expect(expected).toBe(result)
        })
})