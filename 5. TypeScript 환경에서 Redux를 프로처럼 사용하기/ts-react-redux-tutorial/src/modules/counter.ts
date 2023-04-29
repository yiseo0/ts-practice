// 리덕스 모듈
// 액션 타입, 액션 생성 함수, 리듀서가 들어있다.

// 액션 타입
// as const 는 const assertions으로, 액션 타입을 문자열로 인식하지 않도록 한다.
const INCREASE = 'counter/INCREASE' as const;
const DECREASE = 'counter/DECREASE' as const;
const INCREASE_BY = 'counter/INCREASE_BY' as const;

// 액션 생성함수
export const increase = () => ({ type: INCREASE });
export const decrease = () => ({ type: DECREASE });
export const increaseBy = (diff: number) => ({
   type: INCREASE_BY,
   payload: diff
});

// 액션 타입 지정
type CounterAction =
   | ReturnType<typeof increase>
   | ReturnType<typeof decrease>
   | ReturnType<typeof increaseBy>

// 상태 타입 지정
type CoutnerState = {
   count: number
}

// 상태 초깃값
const initialState: CoutnerState = {
   count: 0
}

// 리듀서 작성
function counter(state: CoutnerState = initialState, action: CounterAction) {
   switch (action.type) {
      case INCREASE:
         return { count: state.count + 1 }
      case DECREASE:
         return { count: state.count - 1 }
      case INCREASE_BY:
         return { count: state.count + action.payload }
      default:
         return state
   }
}

export default counter