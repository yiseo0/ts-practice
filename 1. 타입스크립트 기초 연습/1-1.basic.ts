// 1-1. 기본 타입 선언
// number, string, boolean, number[], string[], undefined, null, 특정 string 값

// number
let num: number = 0
let count = 0
//count = '문자열'; //error

// string
const message: string = 'hello wolrd'

// boolean
const done: boolean = true

// array[number]
const numbers: number[] = [1, 2, 3]

// array[string]
const messages: string[] = ['hello', 'world']
//messages.push(1) //error

// undefined
let mightBeUndefined: string | undefined = undefined

// null
let nullableNumber: number | null = null

// 특정 string 값
let color: 'red' | 'orange' | 'yellow' = 'red'
color = 'orange'
//color = 'blue' // error
