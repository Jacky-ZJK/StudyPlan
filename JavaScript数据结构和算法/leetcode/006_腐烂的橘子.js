/**
 * 在给定的网格中，每个单元格可以有以下三个值之一：

值 0 代表空单元格；
值 1 代表新鲜橘子；
值 2 代表腐烂的橘子。
每分钟，任何与腐烂的橘子（在 4 个正方向上）相邻的新鲜橘子都会腐烂。

返回直到单元格中没有新鲜橘子为止所必须经过的最小分钟数。如果不可能，返回 -1。

示例 1：

输入：[[2,1,1],[1,1,0],[0,1,1]]
输出：4
示例 2：

输入：[[2,1,1],[0,1,1],[1,0,1]]
输出：-1
解释：左下角的橘子（第 2 行， 第 0 列）永远不会腐烂，因为腐烂只会发生在 4 个正向上。
示例 3：

输入：[[0,2]]
输出：0
解释：因为 0 分钟时已经没有新鲜橘子了，所以答案就是 0 。

提示：
1 <= grid.length <= 10
1 <= grid[0].length <= 10
grid[i][j] 仅为 0、1 或 2
 */
var orangesRotting = function(grid) {
  let count = 0
  let M = grid.length
  let N = grid[0].length
  let queue = []
  for (let r = 0; r < M; r++) {
      for (let c = 0; c < N; c++) {
          if (grid[r][c] === 1) {
              count ++
          } else if (grid[r][c] === 2) {
              queue.push([r, c])                
          }
      }
  }
  console.log(count, queue);
  
  let round = 0
  while(count > 0 && queue.length !== 0) {
    round++
    let length = queue.length
    for (let i = 0; i < length; i++) {
        let [r, c] = queue.shift()
        if (r - 1 >= 0 && grid[r - 1][c] === 1) {
            grid[r - 1][c] = 2
            count --
            queue.push([r - 1, c])
        }
        if (r + 1 < M && grid[r + 1][c] === 1) {
            grid[r + 1][c] = 2
            count --
            queue.push([r + 1, c])
        }
        if (c - 1 >= 0 && grid[r][c - 1] === 1) {
            grid[r][c - 1] = 2
            count --
            queue.push([r, c - 1])
        }
        if (c + 1 < N && grid[r][c + 1] === 1) {
            grid[r][c + 1] = 2
            count --
            queue.push([r, c + 1])
        }
    }
  }
  console.log(count, round, queue);
  
  if (count === 0) {
    return round
  } else {
    return -1
  }
};

console.log(orangesRotting([[1,2]]));