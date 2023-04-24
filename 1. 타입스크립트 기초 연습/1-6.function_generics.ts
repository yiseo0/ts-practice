// 1-6.Generics(제네릭) 사용하기(함수)
// 다양한 타입을 사용하면서도 타입 추론이 깨지지 않도록 하는 문법

// any 타입의 문제점 => 타입 추론이 깨짐
// 단순히 데이터 타입이 any라고 나옴
// function merge(a: any, b: any): any {
//    return {
//       ...a, ...b
//    }
// }

// 제네릭을 사용하면 타입 추론이 깨지지 않음
// 제네릭 예시 1
function merge<A, B>(a: A, b: B): A & B {
   return {
      ...a,
      ...b
   }
}
const result = merge({ name: '정이서' }, { age: 20 })

// 제네릭 예시 2
function wrap<T>(param: T) {
   return {
      param
   }
}
const wrapped = wrap(10)
