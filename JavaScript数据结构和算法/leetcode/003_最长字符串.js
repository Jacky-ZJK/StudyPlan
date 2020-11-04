var lengthOfLongestSubstring = function(s) {
  if ( s == '' ) return 0
  let stack = []
  let maxl = 1
  for ( let item of s ) {
      let length = stack.length
      if ( !length ) {
          stack.push( item )
      } else {
          if ( stack.includes( item ) ) {
              stack.splice(0, (stack.indexOf( item ) + 1))
              stack.push( item )
          } else {
              stack.push( item )
          }
      } 
      maxl = Math.max( maxl, stack.length)
  } 
  return maxl
};


var lengthOfLongestSubstring = function(s) {
  let num = 0,res = 0;
  let m = '';
  for (n of s) {
    if (m.indexOf(n) == -1) {
      m += n;
      num++;
      res = res < num ? num: res;
    } else {
      m += n;
      m = m.slice(m.indexOf(n)+1);
      num = m.length;
    }
  }
  return res;
};

let res = lengthOfLongestSubstring( "abcabcbb" )
console.log(res);
