class Queue {
  constructor(size) {
    this.size = size
    this.queue = new Array(size).fill(undefined)
    this.state = new Array(size).fill(0)
  }

  add(...args) {
    const state = this.state.slice()
    state.sort((a, b) => b - a)
    const rewrited = state.slice(this.size - args.length)
    const tmp = this.state.slice()
    const indexs = []
    for (let i = 0; i < this.size; i++) {
      if (rewrited.includes(tmp[i])) {
        indexs.push(i)
      }
    }
    for (let i = 0; i < this.size; i++) {
      if (indexs.includes(i)) {
        this.queue[i] = args[i]
        this.state[i] = 1
      } else {
        this.state[i] = (this.state[i] || 0) + 1
      }
    }
  }

  remove(...args) {
    const arr = this.queue.slice()
    for (let i = 0; i < this.size; i++) {
      if (args.includes(arr[i])) {
        this.state[i] = 0
        arr.splice(i, 1)
      }
    }
  }
}
// const queue = new Queue(7)
