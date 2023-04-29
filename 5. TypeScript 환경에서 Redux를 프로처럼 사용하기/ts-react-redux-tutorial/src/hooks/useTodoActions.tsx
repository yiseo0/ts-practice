import { useDispatch } from "react-redux";
import { removeTodo, toggleTodo } from "../modules/todos";
import { useCallback } from "react";

function useTodoActions(id: number) {
   const dispatch = useDispatch()

   const onToggle = useCallback(() => { dispatch(toggleTodo(id)) }, [dispatch, id])
   const onDelete = useCallback(() => { dispatch(removeTodo(id)) }, [dispatch, id])

   return { onToggle, onDelete }
}

export default useTodoActions;