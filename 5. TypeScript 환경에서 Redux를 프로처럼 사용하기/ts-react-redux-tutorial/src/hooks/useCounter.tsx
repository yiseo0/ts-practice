// 커스텀 Hook

import { useSelector } from "react-redux"
import { RootState } from "../modules"
import { useDispatch } from "react-redux"
import { decrease, increase, increaseBy } from "../modules/counter"
import { useCallback } from "react"

export default function useCounter() {
   const count = useSelector((state: RootState) => state.counter.count)
   const dispatch = useDispatch()

   const onIncrease = useCallback(() => dispatch(increase()), [dispatch])
   const onDecrease = useCallback(() => dispatch(decrease()), [dispatch])
   const onIcreaseBy = useCallback((diff: number) => dispatch(increaseBy(diff)), [dispatch])

   return { count, onIncrease, onDecrease, onIcreaseBy }
}
