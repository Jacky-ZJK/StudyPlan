let { SyncHook, AsyncParallelHook } = require('tapable')

class Lesson {
  constructor () {
    this.hook = {
      arch: new SyncHook(['name'])
    }
  }
  tap () {
    this.hook.arch.tap('node', name => {
      console.log('node' ,name)
    })
    this.hook.arch.tap('web', name => {
      console.log('web' ,name)
    })
  }
  start () {
    this.hook.arch.call('jk')
  }
}

class Lesson1 {
  constructor () {
    this.hook = {
      arch: new AsyncParallelHook(['name'])
    }
  }
  tap () {
    this.hook.arch.tapAsync('node', (name, cb) => {
      setTimeout(() => {
        console.log('node', name);
        cb()
      }, 1000)
    })
    this.hook.arch.tapAsync('web', (name, cb) => {
      setTimeout(() => {
        console.log('web', name);
        cb()
      }, 1000)
    })
  }
  start () {
    this.hook.arch.callAsync('jk', () => {
      console.log('end');
    })
  }
}

let l = new Lesson1()
l.tap()
l.start()



function bindSwiperEvent (dom, leftCallback, rightCallback) {
  let start = 0, distance = 0, isMove = false
  dom.addEventListener('touchstart', function (e) {
    start = e.touches[0].clientX
  })
  dom.addEventListener('touchmove', function (e) {
    isMove = true
    distance = e.touches[0].clientX - start
  })
  dom.addEventListener('touchend', function (e) {
    if (isMove && Math.abs(distance) > 50) {
      if (distance < 0) {
        leftCallback && leftCallback.call(this)
      }else {
        rightCallback && rightCallback.call(this)
      }
    }
    isMove = false
    start = 0
    distance = 0
  })
}