import useCounter from "../hooks/useCounter";

function Counter() {
   const { count, onIncrease, onDecrease, onIcreaseBy } = useCounter()

   return (
      <div>
         <h1>{count}</h1>
         <button onClick={onIncrease}>+1</button>
         <button onClick={onDecrease}>-1</button>
         <button onClick={() => onIcreaseBy(5)}>+5</button>
      </div>
   );
}

export default Counter;