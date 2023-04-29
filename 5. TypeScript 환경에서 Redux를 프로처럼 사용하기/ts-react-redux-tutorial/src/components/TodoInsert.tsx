import React, { useState } from 'react';
import useAddTodos from '../hooks/useAddTodos';

function TodoInsert() {
   const [value, setValue] = useState('')
   const addTodo = useAddTodos()
   const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setValue(e.target.value);
   }

   const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault()
      addTodo(value)
      setValue('')
   }

   return (
      <form onSubmit={onSubmit}>
         <input
            placeholder="할 일을 입력하세요."
            value={value}
            onChange={onChange}
         />
         <button type="submit">등록</button>
      </form>
   );
}

export default TodoInsert;