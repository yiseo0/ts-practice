import { createStore } from "redux";

/* 리덕스에서 관리 할 상태 정의 */
const initialState = {
   counter: 0,
   text: '',
   list: []
}

/* 액션 타입 정의 */
// 액션 타입은 주로 대문자로 작성한다.
const INCREASE = 'INCREASE';
const DECREASE = 'DECREASE';
const CHANGE_TEXT = 'CHANGE_TEXT';
const ADD_TO_LIST = 'ADD_TO_LIST';

/* 액션 생성함수 정의 */
// 액션 생성함수는 주로 camelCase 로 작성
// 화살표 함수로 작성하면 간단하므로 추천
const increase = () => {
   return {
      type: INCREASE // 액션 객체에는 type 값이 필수
   }
}

const decrease = () => {
   return {
      type: DECREASE // 액션 객체에는 type 값이 필수
   }
}

const changeText = text => {
   return {
      type: CHANGE_TEXT,
      text
   }
}

const addToList = item => {
   return {
      type: ADD_TO_LIST,
      item
   }
}

/* 리듀서 만들기 */
// 위 액션 생성함수들을 통해 만들어진 객체들을 참조하여 새로운 상태를 만드는 함수 = 리듀서
// 주의: 리듀서에서는 불변성을 꼭 지켜줘야함
function reducer(state = initialState, action) {
   // state의 초기값을 initialState로 지정
   switch (action.type) {
      case INCREASE:
         return {
            ...state,
            counter: state.counter + 1
         }
      case DECREASE:
         return {
            ...state,
            counter: state.counter - 1
         }
      case CHANGE_TEXT:
         return {
            ...state,
            text: action.text
         }
      case ADD_TO_LIST:
         return {
            ...state,
            list: state.list.concat(action.item)
         }
      default:
         return state
   }
}


// createStore는 스토어를 만들어주는 함수
// 리액트 프로젝트에서는 단 하나의 스토어를 생성
const store = createStore(reducer)

console.log(store.getState()) // 현재 store 안에 들어있는 상태를 조회

// 스토어안에 들어있는 상태가 바뀔 때 마다 호출되는 listener 함수
const listener = () => {
   const state = store.getState()
   console.log(state)
}

// 구독(subscribe)
// subscribe 함수 스토어의 내장함수
// subscribe 함수에 특정함수를 전달하면 액션이 디스패치 되었을 때마다 전달해준 함수가 호출됨
const unsubscibe = store.subscribe(listener)
// 구독을 해제하고 싶을 때는 unsubscribe() 를 호출

// 액션들 디스패치 해보기
store.dispatch(increase());
store.dispatch(decrease());
store.dispatch(changeText('안녕하세요'));
store.dispatch(addToList({ id: 1, text: '와우' }));
