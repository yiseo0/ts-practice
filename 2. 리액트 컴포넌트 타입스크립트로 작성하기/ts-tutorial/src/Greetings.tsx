import React from 'react';

// 컴포넌트 type 지정
type GreetingsProps = {
   name: string;
   mark: string;
   optional?: string; // 생략할 수 있는 props
   onClick: (name: string) => void; // 함수타입의 props
}

function Greetings({ name, mark, optional, onClick }: GreetingsProps) {
   const handleClick = () => onClick(name);

   return (
      <div>
         Hello, {name} {mark}
         {optional && <p>{optional}</p>}
         <button onClick={handleClick}>Click Me</button>
      </div>
   )
}

// defaultProps를 사용하여 props 기본값 지정
Greetings.defaultProps = {
   mark: '!'
}

export default Greetings;