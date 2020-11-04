/*SyncHook方法实现原理*/
class SyncHook {
  constructor (args) {
    this.tasks = []
  }
  tap (name, task) {
    this.tasks.push(task)
  }
  call (...args) {
    this.tasks.forEach(task => task(...args))
  }
}

/*SyncBailHook方法实现原理， 当函数返回undefine时继续往下执行*/
class SyncBailHook {
  constructor (args) {
    this.tasks = []
  }
  tap (name, task) {
    this.tasks.push(task)
  }
  call (...args) {
    let ret = null
    let index = 0
    let length = args.length
    do {
      ret = this.tasks[index](...args)
    }while(ret === undefined && index < length)
  }
}

/*SyncWaterFallHook 将返回值传给下一个执行函数*/
class SyncWaterFallHook {
  constructor (args) {
    this.tasks = []
  }
  tap (name, task) {
    this.tasks.push(task)
  }
  call (...args) {
    let [first, ...others] = this.tasks
    let ret = first(...args)
    others.reduce((a, b) => {
      return b(a)
    }, ret)
  }
}

/*SyncLoopHook, 在当返回值为undefined时结束执行 ，否则会一直执行*/
class SyncLoopHook {
  constructor (args) {
    this.tasks = []
  }
  tap (name, task) {
    this.tasks.push(task)
  }
  call (...args) {
    this.tasks.forEach(task => {
      let ret = null
      do {
        ret = task(...args)
      }while (ret!=undefined)
    })
  }
}

let hook = new SyncLoopHook(['name'])
let totle = 0
hook.tap('node', name => {
  console.log('node', name)
  return ++totle === 3 ? undefined : '继续学'
})
hook.tap('web', name => {
  console.log('web', name)
})
hook.call('jk')
