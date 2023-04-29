import { useDispatch } from "react-redux";
import { addTodo } from "../modules/todos";
import { useCallback } from "react";

export default function useAddTodos() {
   const dispatch = useDispatch()
   return useCallback((text: string) => dispatch(addTodo(text)), [dispatch])
}