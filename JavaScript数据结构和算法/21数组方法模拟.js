Array.prototype.reduce = function(callback, initialValue){
  let sum = initialValue || 0;
  if(!this.length){
    return;
  }
  for(let i = 0; i < this.length; i++){
    sum = callback(sum, this[i], i , this);
  }
  return sum;
}

const arr = [];
  // output: 9
const sum = arr.reduce((sum, item) => {
  sum += item;
  return sum;
});

console.log(sum);
