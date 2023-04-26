// 3-1. useState 및 이벤트 관리

import React, { useState } from 'react';

function Counter() {
   // 제네릭을 사용하여 어떤 타입을 가지고 있는지 명시
   // const [count, setCount] = useState<number>(0)

   // 제네릭 생략 가능
   const [count, setCount] = useState(0);

   // 제네릭을 사용해야 하는 경우
   // 1. 상태가 옵셔널 할 때(null일 수도 있고 아닐 수도 있을 때)
   type Information = { name: string, description: string };
   const [info, setInformation] = useState<Information | null>(null);

   // 2. 상태의 타입이 까다로운 구조를 가진 객체이거나 배열일 때
   type Todo = { id: number, text: string, done: boolean };
   const [todo, setTodo] = useState<Todo[]>([])
   // 제네릭을 사용하지 않으면 as라는 Type Assertion
   // 값의 타입 정보를 덮어 쓸 수 있는 문법
   // 제네릭 대신 as 사용한 예제
   // const [todo, setTodo] = useState([] as Todo[])

   const onIncrease = () => setCount(count + 1)
   const onDecrease = () => setCount(count - 1)
   return (
      <div>
         <h1>{count}</h1>
         <div>
            <button onClick={onIncrease}>+1</button>
            <button onClick={onDecrease}>-1</button>
         </div>
      </div>
   );
}

export default Counter;