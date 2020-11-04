function spawn (genF) {
  return new Promise((resolve, reject) => {
    const gen = genF()
    function step (nextF) {
      let next
      try {
        next = nextF()
      } catch (e) {
        return reject(e)
      }
      if (next.done) {
        return resolve(next.value)
      }
      Promise.resolve(next.value).then(value => {
        step(() => gen.next(value))
      }, e => {
        step(() => gen.throw(e))
      })
    }
    step(() => gen.next(undefined))   
  })
}

function fn(genF) {
  return spawn(genF)
}

fn(function* () {
  yield 1
  yield 2
}).then(v => {
  console.log(v);
})