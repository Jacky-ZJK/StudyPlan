class Watcher {
  constructor ( vm, expOrFn ) {
    this.vm = vm
    this.getter = expOrFn

    this.deps = []
    this.depID = {}

    this.get()
  }

  get () {
    pushTarget( this )

    this.getter.call( this.vm, this.vm)

    popTarget()
  }

  update () {
    this.run()
  }

  run () {
    this.get()
  }
}