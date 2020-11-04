/*AsyncParallelHook 实现原理*/
/*
class AsyncParallelHook {
  constructor (...args) {
    this.tasks = []
  }
  tapAsync (name, task) {
    this.tasks.push(task)
  }
  callAsync (...args) {
    let finalCallBack = args.pop()
    let index = 0
    let length = this.tasks.length
    function done () {
      index ++
      if (index === length) {
        finalCallBack()
      }
    }
    this.tasks.forEach(task => {
      task(...args, done)
    })
  }
}

let asyncHook = new AsyncParallelHook(['name'])
asyncHook.tapAsync('node', (name, cb) => {
  setTimeout(() => {
    console.log('node' ,name);
    cb()
  }, 1000)
})
asyncHook.tapAsync('node', (name, cb) => {
  setTimeout(() => {
    console.log('node' ,name);
    cb()
  }, 2000)
})
asyncHook.callAsync('jk', () => {
  console.log('end');
})
*/
/*
class AsyncParallelHook {
  constructor (args) {
    this.tasks = []
  }
  tapPromise (name, task) {
    this.tasks.push(task)
  }
  promise (...args) {
    let tasks = this.tasks.map(task => task(...args))
    return Promise.all(tasks)
  }
}

let asyncHook = new AsyncParallelHook(['name'])
asyncHook.tapPromise('node', (name) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('node', name);
      resolve()
    }, 1000)
  })
})
asyncHook.tapPromise('vue', (name) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('vue', name);
      resolve()
    }, 1000)
  })
})
asyncHook.promise('jacky').then(() => {
  console.log('end');
})
*/

class AsyncSeriesHook {
  constructor (args) {
    this.tasks = []
  }
  tapAsync (name, task) {
    this.tasks.push(task)
  }
  callAsync (...args) {
    let finalCallBack = args.pop()
    let index = 0
    let next = () => {
      if (index === this.tasks.length) return finalCallBack()
      this.tasks[index++](...args, next)
    }
    next()
  } 
}
let asyncHook = new AsyncSeriesHook(['name'])
asyncHook.tapAsync('node', function (name, cb) {
  setTimeout(() => {
    console.log('node', name);
    cb()
  }, 2000)
})
asyncHook.tapAsync('vue', function (name, cb) {
  setTimeout(() => {
    console.log('vue', name);
    cb()
  }, 1000)
})
asyncHook.callAsync('jacky', function () {
  console.log('end');
})
