import {
   ActionType,
   createReducer,
   createAction
} from 'typesafe-actions';
// 리덕스 모듈
// 액션 타입, 액션 생성 함수, 리듀서가 들어있다.


// 액션 타입
// as const 는 const assertions으로, 액션 타입을 문자열로 인식하지 않도록 한다.
// const INCREASE = 'counter/INCREASE' as const;
// const DECREASE = 'counter/DECREASE' as const;
// const INCREASE_BY = 'counter/INCREASE_BY' as const;

// typesafe-actions 액션타입
// as const 지우기
const INCREASE = 'counter/INCREASE';
const DECREASE = 'counter/DECREASE';
const INCREASE_BY = 'counter/INCREASE_BY';

// 액션 생성함수
// export const increase = () => ({ type: INCREASE });
// export const decrease = () => ({ type: DECREASE });
// export const increaseBy = (diff: number) => ({
//    type: INCREASE_BY,
//    payload: diff
// });

// typesafe-actions 액션 생성함수
// 액션의 payload로 들어가는 값은 제네릭으로 정해줄 수 있음
export const increase = createAction(INCREASE)();
export const decrease = createAction(DECREASE)();
export const increaseBy = createAction(INCREASE_BY)<number>();

// 액션 타입 지정
// type CounterAction =
//    | ReturnType<typeof increase>
//    | ReturnType<typeof decrease>
//    | ReturnType<typeof increaseBy>

// typesafe-actions 액션 타입 지정
const actions = { increase, decrease, increaseBy }
type CounterAction = ActionType<typeof actions>

// 상태 타입 지정
type CoutnerState = {
   count: number
}

// 상태 초깃값
const initialState: CoutnerState = {
   count: 0
}

// 리듀서 작성
// function counter(state: CoutnerState = initialState, action: CounterAction) {
//    switch (action.type) {
//       case INCREASE:
//          return { count: state.count + 1 }
//       case DECREASE:
//          return { count: state.count - 1 }
//       case INCREASE_BY:
//          return { count: state.count + action.payload }
//       default:
//          return state
//    }
// }

// typesafe-actions 리듀서 작성
const counter = createReducer<CoutnerState, CounterAction>(initialState, {
   [INCREASE]: state => ({ count: state.count + 1 }),
   [DECREASE]: state => ({ count: state.count - 1 }),
   [INCREASE_BY]: (state, action) => ({ count: state.count + action.payload }),
})

export default counter