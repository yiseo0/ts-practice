// 1-8.Generics(제네릭) 사용하기(Type Alias)

type Items<T> = {
   list: T[];
}

const items: Items<string> = {
   list: ['a', 'b', 'c']
}