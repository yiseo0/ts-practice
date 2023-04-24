// 1-8.Generics(제네릭) 사용하기(class)
class Queue<T> {
   list: T[] = []
   // constructor 내부에서 초기화하지 않은 이유는 타입스크립트에서 초기화가 가능하기 때문

   get length() {
      return this.list.length
   }
   enqueue(item: T) {
      this.list.push(item)
   }
   dequeue() {
      return this.list.shift()
   }
}

const queue = new Queue<number>();
queue.enqueue(0);
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.enqueue(4);
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(Queue.length) // getter 함수이므로 ()를 붙이지 않고, 속성처럼 호출