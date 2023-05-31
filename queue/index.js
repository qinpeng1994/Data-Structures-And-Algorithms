
// 栈结构
class Queue {
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

export default Stack