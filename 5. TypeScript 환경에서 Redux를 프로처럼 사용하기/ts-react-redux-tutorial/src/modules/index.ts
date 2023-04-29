// 루트 리듀서
import { combineReducers } from "redux";
import counter from "./counter";
import todos from "./todos";

// combineReducers 서브 리듀서 합치기 
const rootReducer = combineReducers({
   counter,
   todos
})

export default rootReducer;

// store에서 상태 조회 시 사용한다.
export type RootState = ReturnType<typeof rootReducer>