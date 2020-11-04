class Dep {
  constructor () {
    this.subs = []
  }

  addSub ( sub ) {
    this.subs.push( sub );
  }

  depend () {
    if ( Dep.target ) {
      this.addSub( Dep.target )
      Dep.target.deps.push( this )
    }
  }
  
  notify () {
    let deps = this.subs.slice();
    deps.forEach( watcher => {
      watcher.update()
    } )

  }
}

Dep.target = null
let targetStack = []

function pushTarget ( target ) {
  targetStack.push( Dep.target )
  Dep.target = target
}

function popTarget () {
  Dep.target = targetStack.shift()
}