import React from 'react';
import Counter from '../components/Counter';
import { useDispatch, useSelector } from 'react-redux';
import { decrease, increase, setDiff } from '../module/counter';

function CounterContainer() {
   // useselector는 리덕스 스토어의 상태를 조회하는 hook
   // state의 값은 store.getState()와 같음
   const { number, diff } = useSelector(state => ({
      number: state.counter.number,
      diff: state.counter.diff
   }),
      shallowEqual
   )

   // useDispatch는 리덕스 스토어의 dispatch 를 함수에서 사용 할 수 있게 해주는 Hook
   const dispatch = useDispatch()
   const onIncrease = () => dispatch(increase())
   const onDecrease = () => dispatch(decrease())
   const onSetDiff = diff => dispatch(setDiff(diff));

   return (
      <Counter
         number={number}
         diff={diff}
         onIncrease={onIncrease}
         onDecrease={onDecrease}
         onSetDiff={onSetDiff}
      />
   );
}

export default CounterContainer;