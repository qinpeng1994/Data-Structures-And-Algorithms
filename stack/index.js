
// 栈结构
(function(){
  class Stack {
    constructor() {
        this.container = []
    }
    push(value) {
        this.container.push(value)
    }
    pop() {
        return this.container.pop()
    }
    size() {
        return this.container.length
    }
    isEmpty() {
        return this.container.length === 0
    }
    peak() {
        return this.container[length - 1]
    }
  }
  
  let sk = new Stack()
  console.log(sk,'sk')
})()