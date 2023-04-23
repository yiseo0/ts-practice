// 1-2. 함수 타입 선언

// 함수 타입 정의
function sum(x: number, y: number): number {
   return x + y
}
console.log(sum(1, 2))

// 함수 타입 정의 - 배열 내장 함수 사용하기
function sumArray(x: number[]): number {
   return x.reduce((acc, current) => acc += current)
}
const total = sumArray([1,2,3,4,5])
console.log()

// 함수 타입 정의 - 반환하지 않을 경우 타입 void로 설정
function returnNothing() : void {
   console.log('message')
}
returnNothing()