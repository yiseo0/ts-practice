// 1-5. Type Alias 사용하기
// `type`은 특정 타입에 별칭을 붙이는 용도로 사용
// 객체, 배열, 어떤 타입이던 별칭을 지어줄 수 있음

interface Person {
   name: string;
   age?: number; //물음표는 설정을 해도 되고 안해도 되는 값이라는 것을 의미
}

// &는 intersection으로 두개 이상의 타입을 합침
type Developer = Person & {
   skills: string[]
}

const person: Person = {
   name: '김사랑',
}

const expert: Developer = {
   name: '김개발',
   skills: ['javascript, react']
}

// Person[]이라는 타입을 People이라는 별칭으로 사용 가능
type People = Person[]
const people: People = [person, expert]
console.log(people)

type Color = 'color' | 'red' | 'yellow';
const color2: Color = 'red';
